package com.firstchoicereact.amparcat.data;

import com.firstchoicereact.amparcat.model.Subscriber;
import com.firstchoicereact.amparcat.repository.SubscriberRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SubscriberConfig {
    @Bean
    CommandLineRunner commandLineRunner(SubscriberRepository subscriberRepository){
        return args -> {
            Subscriber sebastian = new Subscriber(
                    "Sebastian",
                    "sebastian@gmail.com"
            );
            Subscriber luca = new Subscriber(
                    "Luca",
                    "luca@gmail.com"
            );
            subscriberRepository.saveAll(List.of(sebastian, luca));
        };
    }
}
