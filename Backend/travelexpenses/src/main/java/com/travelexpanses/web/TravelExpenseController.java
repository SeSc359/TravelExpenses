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
import com.travelexpanses.mail.TravelExpensesMailServiceImpl;
import com.travelexpanses.repository.AttachmentRepository;
import com.travelexpanses.repository.ItemRepository;
import com.travelexpanses.repository.TravelExpenseRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/expenses")
@RestController
public class TravelExpenseController {

	@Autowired
	TravelExpenseRepository trexRepo;

	@Autowired
	AttachmentRepository attachmentRepo;

	@Autowired
	ItemRepository itemRepo;

	@Autowired
	TravelExpensesMailServiceImpl mailService;

	@GetMapping()
	public Iterable<TravelExpense> index() {
		return trexRepo.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<TravelExpense> showExpenseById(@PathVariable Long id) {
		Optional<TravelExpense> pickedExpense = trexRepo.findById(id);
		if (pickedExpense.isPresent()) {
			return ResponseEntity.of(pickedExpense);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/create")
	public TravelExpense insertNewTravelExpense(@RequestBody @Valid TravelExpense trex) {
		trex.setId(null);
		return trexRepo.save(trex);
	}


	@PutMapping("/{expenseId}/status")
	public ResponseEntity<?> updateTravelExpenseStatus(@PathVariable long expenseId,
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


//	@PostMapping("/send/{id}")
//	public void sendMailWithAttachment(@PathVariable long id) {
//
//		if (trexRepo.existsById(id)) {
//			TravelExpense trEx = trexRepo.findById(id).get();
//			mailService.sendMessageWithAttachment("hajoklueten@gmail.com", trEx);
//		}
//	}

}
