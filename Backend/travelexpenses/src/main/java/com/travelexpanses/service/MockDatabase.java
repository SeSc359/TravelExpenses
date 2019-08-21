package com.travelexpanses.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.repository.TravelExpenseRepository;

public class MockDatabase {

	@Autowired
	TravelExpenseRepository trexRepo;

	public void createExpenses() {
		TravelExpense berlin = new TravelExpense(67889, "Januar", 2019, 100.89, true);
		TravelExpense muenchen = new TravelExpense(67889, "Februar", 2019, 55.89, true);
		TravelExpense hamburg = new TravelExpense(67889, "März", 2019, 55.89, true);
		TravelExpense amsterdam = new TravelExpense(67889, "April", 2019, 123.89, true);
		TravelExpense tokio = new TravelExpense(67889, "Mai", 2019, 1500.89, true);
		TravelExpense wien = new TravelExpense(67889, "Juni", 2019, 200.89, false);
		TravelExpense darmstadt = new TravelExpense(67889, "Juli", 2019, 23.89, false);
		trexRepo.save(berlin);
		trexRepo.save(muenchen);
		trexRepo.save(hamburg);
		trexRepo.save(amsterdam);
		trexRepo.save(tokio);
		trexRepo.save(wien);
		trexRepo.save(darmstadt);
	}

}
