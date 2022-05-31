package com.firstchoicereact.amparcat.controller;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/appuser")
public class AppUserController {
    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public List<AppUser> getUsers(){
        return appUserService.getUsers();
    }

    @PostMapping
    public void registerUser(@RequestBody AppUser subscriber){
        appUserService.addUser(subscriber);
    }

    @DeleteMapping(path = "{subscriberId}")
    public void deleteUser(@PathVariable("subscriberId") Long subscriberId){
        appUserService.deleteUser(subscriberId);
    }

    @PutMapping(path = "{subscriberId}")
    public void updateUser(
            @PathVariable("subscriberId") Long subscriberId,
            @RequestParam(required = false) String userName,
            @RequestParam(required = false) String email){
        appUserService.updateUser(subscriberId, userName, email);
    }
}
