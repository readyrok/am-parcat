package com.firstchoicereact.amparcat.data;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AppUserConfig {
    @Bean
    CommandLineRunner commandLineRunner(AppUserRepository subscriberRepository){
        return args -> {
            AppUser sebastian = new AppUser(
                    "Sebastian",
                    "sebastian@gmail.com"
            );
            AppUser luca = new AppUser(
                    "Luca",
                    "luca@gmail.com"
            );
            subscriberRepository.saveAll(List.of(sebastian, luca));
        };
    }
}
