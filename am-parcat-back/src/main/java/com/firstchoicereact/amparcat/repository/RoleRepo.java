package com.firstchoicereact.amparcat.repository;

import com.firstchoicereact.amparcat.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
