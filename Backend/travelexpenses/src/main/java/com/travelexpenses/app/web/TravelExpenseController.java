package com.travelexpenses.app.web;

import java.util.Base64;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelexpenses.app.entities.Attachment;
import com.travelexpenses.app.entities.InsertAttachmentDto;
import com.travelexpenses.app.entities.TravelExpense;
import com.travelexpenses.app.mail.TravelExpensesMailServiceImpl;
import com.travelexpenses.app.repository.AttachmentRepository;
import com.travelexpenses.app.repository.TravelExpenseRepository;

@RequestMapping(path = "/travelexpenses")
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

	@PostMapping("/save/trex")
	public TravelExpense insertNewTravelExpense(@Valid @RequestBody TravelExpense trex) {
		trex.setId(null);
		return trexRepo.save(trex);
	}

// TODO transmit TrEx-Id for attachments
	@PostMapping("/save/attachment")
	public Attachment insertAttachments(@RequestBody InsertAttachmentDto attachmentDto) {
		Attachment attachment = new Attachment();
		attachment.setId(null);
		attachment.setFile(Base64.getDecoder().decode(attachmentDto.dataString));
		attachment.setFilename(attachmentDto.getFilename());

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
