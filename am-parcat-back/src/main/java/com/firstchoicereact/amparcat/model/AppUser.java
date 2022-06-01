package com.firstchoicereact.amparcat.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class AppUser {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String userName;
    private String email;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();

    public AppUser(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}
