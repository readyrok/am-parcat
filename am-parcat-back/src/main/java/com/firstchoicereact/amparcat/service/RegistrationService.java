package com.firstchoicereact.amparcat.service;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.RegistrationRequest;
import com.firstchoicereact.amparcat.utils.EmailValidator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserService appUserService;
    private final EmailValidator emailValidator;

    public String register(RegistrationRequest request){
        boolean isEmailValid = emailValidator.test(request.getUsername());

        if(!isEmailValid) {
            throw new IllegalStateException("Email is not valid!");
        }

        appUserService.saveUser(
                new AppUser(null,
                        request.getName(),
                        request.getUsername(),
                        request.getPassword(),
                        new ArrayList<>()
                )
        );

        appUserService.addRoleToUser(request.getUsername(), "ROLE_USER");

        return "it works";
    }
}
