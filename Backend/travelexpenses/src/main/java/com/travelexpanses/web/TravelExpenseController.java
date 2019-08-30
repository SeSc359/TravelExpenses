package com.travelexpanses.web;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.entities.UpdateStatusDto;
import com.travelexpanses.entities.User;
import com.travelexpanses.mail.TravelExpensesMailServiceImpl;
import com.travelexpanses.repository.AttachmentRepository;
import com.travelexpanses.repository.ItemRepository;
import com.travelexpanses.repository.TravelExpenseRepository;
import com.travelexpanses.repository.UserRepository;
import com.travelexpanses.service.TrexService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping()
@RestController
public class TravelExpenseController {

	@Autowired
	TravelExpenseRepository trexRepo;

	@Autowired
	AttachmentRepository attachmentRepo;

	@Autowired
	ItemRepository itemRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	TrexService trexService;

	@Autowired
	TravelExpensesMailServiceImpl mailService;

	@GetMapping("/expenses")
	public Iterable<TravelExpense> index() {
		Iterable<TravelExpense> expenseListWithCosts = trexRepo.findAll();
		for (TravelExpense element : expenseListWithCosts) {
			element.setCosts(trexService.totalCosts(element));
		}
		return expenseListWithCosts;
	}

	@GetMapping("/expenses/{expenseId}/costs")
	public Double getTotalCosts(@PathVariable Long expenseId) {
		TravelExpense trex = trexRepo.findById(expenseId).get();
		return trexService.totalCosts(trex);
	}

	@GetMapping("/expenses/{id}")
	public ResponseEntity<TravelExpense> showExpenseById(@PathVariable Long id) {
		Optional<TravelExpense> pickedExpense = trexRepo.findById(id);
		if (pickedExpense.isPresent()) {
			return ResponseEntity.of(pickedExpense);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/user/{userId}/expenses")
	public TravelExpense insertNewTravelExpense(@RequestBody @Valid TravelExpense trex, @PathVariable Long userId) {
		trex.setId(null);
		Optional<User> user = userRepo.findById(userId);
		if (user.isPresent()) {
			trex.setUser(user.get());
		}
		return trexRepo.save(trex);
	}


	@PutMapping("/{expenseId}/status")
	public ResponseEntity<?> updateTravelExpenseStatus(@PathVariable Long expenseId,
			@RequestBody UpdateStatusDto updateStatusDto) {
		Optional<TravelExpense> expenseOptional = trexRepo.findById(expenseId);
		if (expenseOptional.isPresent()) {
			TravelExpense expense = expenseOptional.get();
			expense.setStatus(updateStatusDto.isStatus());
			trexRepo.save(expense);
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}


	@PostMapping("/send/{id}")
	public void sendMailWithAttachment(@PathVariable long id) {
		if (trexRepo.existsById(id)) {
			TravelExpense trEx = trexRepo.findById(id).get();
			mailService.sendMessageWithAttachment(trEx.getUser().getEmail(), trEx);
		}
	}
}
