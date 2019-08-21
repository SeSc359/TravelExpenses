package com.travelexpanses.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.TrexItem;

public interface TrexItemRepository extends CrudRepository<TrexItem, Long> {

}
