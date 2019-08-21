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

import com.travelexpanses.entities.Attachment;
import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.mail.TravelExpensesMailServiceImpl;
import com.travelexpanses.repository.AttachmentRepository;
import com.travelexpanses.repository.TravelExpenseRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/travelexpense")
@RestController
public class TravelExpenseController {

	@Autowired
	TravelExpenseRepository trexRepo;

	@Autowired
	AttachmentRepository attachmentRepo;

	@Autowired
	TravelExpensesMailServiceImpl mailService;

	@GetMapping("/connection")
	public String connectionStatus() {
		return "Connection Ok.";
	}

	@GetMapping("/index")
	public Iterable<TravelExpense> index() {
		return trexRepo.findAll();
	}

	@GetMapping("/index/{id}")
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

// TODO transmit TrEx-Id for attachments
	@PostMapping("/attachment")
	public Attachment insertAttachments(@RequestBody Attachment attachment) {
		attachment.setId(null);
//		attachment.setFile(Base64.getDecoder().decode(attachment.dataString));
		return attachmentRepo.save(attachment);
	}

	@GetMapping("/send/{id}")
	public void sendMailWithAttachment(@PathVariable long id) {

		if (trexRepo.existsById(id)) {
			TravelExpense trEx = trexRepo.findById(id).get();
			mailService.sendMessageWithAttachment("hajoklueten@gmail.com", trEx);
		}
	}

}
