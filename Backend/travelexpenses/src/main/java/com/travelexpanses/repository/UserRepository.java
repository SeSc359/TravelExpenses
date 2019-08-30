package com.travelexpanses.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
