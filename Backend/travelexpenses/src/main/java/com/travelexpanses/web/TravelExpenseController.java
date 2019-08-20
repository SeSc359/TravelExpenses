package com.travelexpanses.web;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.repository.TravelExpenseRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/travelexpense")
@RestController
public class TravelExpenseController {

	@Autowired
	TravelExpenseRepository trexRepo;

	@GetMapping("index")
	public Iterable<TravelExpense> index() {
		return trexRepo.findAll();
	}

	@GetMapping("index/{id}")
	public ResponseEntity<TravelExpense> showExpenseById(@PathVariable Long id) {
		Optional<TravelExpense> pickedExpense = trexRepo.findById(id);
		if (pickedExpense.isPresent()) {
			return ResponseEntity.of(pickedExpense);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/save")
	public TravelExpense insertNewTravelExpense(@RequestBody @Valid TravelExpense trex) {
		trex.setId(null);
		return trexRepo.save(trex);
	}
}
