package com.firstchoicereact.amparcat.controller;

import com.firstchoicereact.amparcat.model.Subscriber;
import com.firstchoicereact.amparcat.service.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/subscriber")
public class SubscriberController {
    private final SubscriberService subscriberService;

    @Autowired
    public SubscriberController(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }

    @GetMapping
    public List<Subscriber> getSubscribers(){
        return subscriberService.getSubscribers();
    }

    @PostMapping
    public void registerSubscriber(@RequestBody Subscriber subscriber){
        subscriberService.addSubscriber(subscriber);
    }

    @DeleteMapping(path = "{subscriberId}")
    public void deleteSubscriber(@PathVariable("subscriberId") Long subscriberId){
        subscriberService.deleteSubscriber(subscriberId);
    }

    @PutMapping(path = "{subscriberId}")
    public void updateSubscriber(
            @PathVariable("subscriberId") Long subscriberId,
            @RequestParam(required = false) String userName,
            @RequestParam(required = false) String email){
        subscriberService.updateSubscriber(subscriberId, userName, email);
    }
}
