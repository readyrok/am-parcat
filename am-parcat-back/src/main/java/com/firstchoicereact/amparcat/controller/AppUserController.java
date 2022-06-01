package com.firstchoicereact.amparcat.controller;

import com.firstchoicereact.amparcat.model.AppUser;
import com.firstchoicereact.amparcat.model.Role;
import com.firstchoicereact.amparcat.service.AppUserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/appuser")
public class AppUserController {
    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping(path = "/all")
    public List<AppUser> getUsers(){
        return appUserService.getUsers();
    }

    @PostMapping(path = "/register")
    public void registerUser(@RequestBody AppUser appUser){
        appUserService.addUser(appUser);
    }

    @PostMapping(path = "/save-role")
    public void saveRole(@RequestBody Role role) {
        appUserService.saveRole(role);
    }

    @PostMapping(path = "/save-role-to-user")
    public void saveRoleToUser(@RequestBody RoleToUserForm form) {
        appUserService.addRoleToUser(form.getAppUserName(), form.getRoleName());
    }

    @DeleteMapping(path = "{appUserId}")
    public void deleteUser(@PathVariable("appUserId") String subscriberId){
        appUserService.deleteUser(subscriberId);
    }

    @PutMapping(path = "{appUserId}")
    public void updateUser(
            @PathVariable("appUserId") String appUserId,
            @RequestParam(required = false) String userName,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String password){
        appUserService.updateUser(appUserId, userName, email, password);
    }
}

@Data
class RoleToUserForm {
    private String appUserName;
    private String roleName;
}
