package com.firstchoicereact.amparcat.service;

import com.firstchoicereact.amparcat.model.Subscriber;
import com.firstchoicereact.amparcat.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class SubscriberService {
    private final SubscriberRepository subscriberRepository;

    @Autowired
    public SubscriberService(SubscriberRepository subscriberRepository) {
        this.subscriberRepository = subscriberRepository;
    }

    public List<Subscriber> getSubscribers() {
        return subscriberRepository.findAll();
    }

    public void addSubscriber(Subscriber subscriber){
        Optional<Subscriber> subscriberByEmail = subscriberRepository.findSubscriberByEmail(subscriber.getEmail());
        if(subscriberByEmail.isPresent()){
            throw new IllegalStateException("Email already taken!");
        }
        subscriberRepository.save(subscriber);
    }

    public void deleteSubscriber(Long subscriberId){
        boolean exists = subscriberRepository.existsById(subscriberId);
        if(!exists){
            throw new IllegalStateException("User with id " + subscriberId + "does not exist!");
        }
        subscriberRepository.deleteById(subscriberId);
    }

    public void updateSubscriber(Long subscriberId, String name, String email){
        Subscriber subscriber = subscriberRepository.findById(subscriberId).orElseThrow(() -> new IllegalStateException("User with id " + subscriberId + "does not exist!"));

        if(name != null && name.length()>0 && !Objects.equals(subscriber.getUserName(), name)){
            subscriber.setUserName(name);
        }

        if(email != null && email.length()>0 && !Objects.equals(subscriber.getEmail(), email)){
            Optional<Subscriber> subscriberOptional = subscriberRepository.findSubscriberByEmail(email);

            if(subscriberOptional.isPresent()){
                throw new IllegalStateException("Email already taken!");
            }

            subscriber.setEmail(email);
        }
    }


}
