package com.firstchoicereact.amparcat.data;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.Role;
import com.firstchoicereact.amparcat.repository.AppUserRepository;
import com.firstchoicereact.amparcat.service.AppUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AppUserConfig {
    @Bean
    CommandLineRunner commandLineRunner(AppUserService appUserService){
        return args -> {
            appUserService.saveRole(new Role(null, "ROLE_USER"));
            appUserService.saveRole(new Role(null, "ROLE_ADMIN"));

            AppUser sebastian = new AppUser(
                    "Sebastian",
                    "sebastian@gmail.com",
                    "pass1234"
            );
            AppUser luca = new AppUser(
                    "Luca",
                    "luca@gmail.com",
                    "pass1234"
            );

            appUserService.addUser(sebastian);
            appUserService.addUser(luca);

            appUserService.addRoleToUser("Sebastian", "ROLE_USER");
            appUserService.addRoleToUser("Sebastian", "ROLE_ADMIN");
            appUserService.addRoleToUser("Luca", "ROLE_USER");
        };
    }
}
