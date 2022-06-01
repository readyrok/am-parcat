package com.firstchoicereact.amparcat.service;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.Role;
import com.firstchoicereact.amparcat.repository.AppUserRepository;
import com.firstchoicereact.amparcat.repository.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
@Slf4j
public class AppUserService implements UserDetailsService {
    private final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    public void addUser(AppUser user){
        Optional<AppUser> appUserByEmail = appUserRepository.findAppUserByEmail(user.getEmail());

        if(appUserByEmail.isPresent()){
            throw new IllegalStateException("Email already taken!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        appUserRepository.save(user);
    }

    public void deleteUser(String appUserId){
        boolean exists = appUserRepository.existsById(appUserId);

        if(!exists){
            throw new IllegalStateException("User with id " + appUserId + "does not exist!");
        }

        appUserRepository.deleteById(appUserId);
    }

    public void updateUser(String appUserId, String name, String email, String password){
        AppUser appUser = appUserRepository.findById(appUserId).orElseThrow(() -> new IllegalStateException("User with id " + appUserId + "does not exist!"));

        if(name != null && name.length()>0 && !Objects.equals(appUser.getUserName(), name)){
            appUser.setUserName(name);
        }

        if(email != null && email.length()>0 && !Objects.equals(appUser.getEmail(), email)){
            Optional<AppUser> subscriberOptional = appUserRepository.findAppUserByEmail(email);

            if(subscriberOptional.isPresent()){
                throw new IllegalStateException("Email already taken!");
            }

            appUser.setEmail(email);
        }

        if(password != null && password.length()>0 && !Objects.equals(appUser.getPassword(), password)){
            appUser.setPassword(password);
        }
    }

    public void saveRole(Role role) {
        roleRepository.save(role);
    }

    public void addRoleToUser(String userName, String roleName) {
        AppUser user = appUserRepository.findAppUserByUserName(userName);
        Role role = roleRepository.findRoleByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public UserDetails loadUserByUsername(String appUserName) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByUserName(appUserName);

        if(appUser == null) {
            throw new UsernameNotFoundException("User not found in database!");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        appUser.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });

        return new User(appUser.getUserName(), appUser.getPassword(), authorities);
    }
}
