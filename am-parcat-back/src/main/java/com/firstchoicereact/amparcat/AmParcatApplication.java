package com.firstchoicereact.amparcat;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.Role;
import com.firstchoicereact.amparcat.service.AppUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class AmParcatApplication {

    public static void main(String[] args) {
        SpringApplication.run(AmParcatApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(AppUserService appUserService){
        return args -> {
            appUserService.saveRole(new Role(null, "ROLE_USER"));
            appUserService.saveRole(new Role(null, "ROLE_ADMIN"));

            appUserService.saveUser(new AppUser(null, "sebastian", "sebastian@gmail.com", "pass1234", new ArrayList<>()));
            appUserService.saveUser(new AppUser(null, "luca", "luca@gmail.com", "pass1234", new ArrayList<>()));

            appUserService.addRoleToUser("sebastian@gmail.com", "ROLE_ADMIN");
            appUserService.addRoleToUser("sebastian@gmail.com", "ROLE_USER");
            appUserService.addRoleToUser("luca@gmail.com", "ROLE_USER");
        };
    }
}
