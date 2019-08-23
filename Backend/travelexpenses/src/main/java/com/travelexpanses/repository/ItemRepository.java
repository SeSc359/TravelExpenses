package com.travelexpanses.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.Item;

public interface ItemRepository extends CrudRepository<Item, Long> {

}
