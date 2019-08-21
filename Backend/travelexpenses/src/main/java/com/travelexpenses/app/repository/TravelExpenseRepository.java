package com.travelexpenses.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpenses.app.entities.TravelExpense;

public interface TravelExpenseRepository extends CrudRepository<TravelExpense, Long> {

}
