package com.firstchoicereact.amparcat.service;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.Role;
import com.firstchoicereact.amparcat.repository.AppUserRepo;
import com.firstchoicereact.amparcat.repository.RoleRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppUserService implements UserDetailsService {
    private final AppUserRepo appUserRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;

    public AppUser saveUser(AppUser appUser){
        log.info("Saving new user to database");
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return appUserRepo.save(appUser);
    }

    public Role saveRole(Role role){
        log.info("Saving new role to database");
        return roleRepo.save(role);
    }

    public void addRoleToUser(String username, String roleName){
        log.info("Adding role to user");
        //TODO Validations on userName
        AppUser appUser = appUserRepo.findByUsername(username);
        Role role = roleRepo.findByName(roleName);
        appUser.getRoles().add(role);
    }

    public AppUser getUser(String userName){
        log.info("Fetching user");
        return appUserRepo.findByUsername(userName);
    }

    public List<AppUser> getUsers(){
        log.info("Fetching all users");
        return appUserRepo.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = appUserRepo.findByUsername(username);

        if(user == null) {
            log.error("User not found in database");
            throw new UsernameNotFoundException("User not found in database");
        } else {
            log.info("User found in database");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });

        return new User(user.getUsername(), user.getPassword(), authorities);
    }
}
