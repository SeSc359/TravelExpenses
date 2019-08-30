package com.travelexpanses.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.TravelExpense;

public interface TravelExpenseRepository extends CrudRepository<TravelExpense, Long> {

}
