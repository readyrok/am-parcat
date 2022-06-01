package com.firstchoicereact.amparcat.repository;

import com.firstchoicereact.amparcat.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {
    Optional<AppUser> findAppUserByEmail(String email);
    Optional<AppUser> findAppUserByUserName(String userName);
}
