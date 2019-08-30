package com.travelexpanses.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.Item;

public interface ItemRepository extends CrudRepository<Item, Long> {

	public List<Item> findByTravelExpenseId(Long id);

}
