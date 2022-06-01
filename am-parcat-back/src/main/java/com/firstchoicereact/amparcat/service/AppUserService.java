package com.firstchoicereact.amparcat.service;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppUserService {
    private final AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    public void addUser(AppUser user){
        Optional<AppUser> appUserByEmail = appUserRepository.findAppUserByEmail(user.getEmail());
        if(appUserByEmail.isPresent()){
            throw new IllegalStateException("Email already taken!");
        }
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


}
