package com.firstchoicereact.amparcat.repository;

import com.firstchoicereact.amparcat.model.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
    Optional<Subscriber> findSubscriberByEmail(String email);
}
