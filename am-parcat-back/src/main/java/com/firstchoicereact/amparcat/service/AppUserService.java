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
        Optional<AppUser> subscriberByEmail = appUserRepository.findSubscriberByEmail(user.getEmail());
        if(subscriberByEmail.isPresent()){
            throw new IllegalStateException("Email already taken!");
        }
        appUserRepository.save(user);
    }

    public void deleteUser(Long subscriberId){
        boolean exists = appUserRepository.existsById(subscriberId);
        if(!exists){
            throw new IllegalStateException("User with id " + subscriberId + "does not exist!");
        }
        appUserRepository.deleteById(subscriberId);
    }

    public void updateUser(Long userId, String name, String email){
        AppUser appUser = appUserRepository.findById(userId).orElseThrow(() -> new IllegalStateException("User with id " + userId + "does not exist!"));

        if(name != null && name.length()>0 && !Objects.equals(appUser.getUserName(), name)){
            appUser.setUserName(name);
        }

        if(email != null && email.length()>0 && !Objects.equals(appUser.getEmail(), email)){
            Optional<AppUser> subscriberOptional = appUserRepository.findSubscriberByEmail(email);

            if(subscriberOptional.isPresent()){
                throw new IllegalStateException("Email already taken!");
            }

            appUser.setEmail(email);
        }
    }


}
