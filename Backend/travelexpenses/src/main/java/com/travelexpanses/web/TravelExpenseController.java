package com.travelexpanses.web;

import java.io.IOException;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.travelexpanses.entities.Attachment;
import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.entities.TrexItem;
import com.travelexpanses.mail.TravelExpensesMailServiceImpl;
import com.travelexpanses.repository.AttachmentRepository;
import com.travelexpanses.repository.TravelExpenseRepository;
import com.travelexpanses.repository.TrexItemRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/travelexpense")
@RestController
public class TravelExpenseController {

	@Autowired
	TravelExpenseRepository trexRepo;

	@Autowired
	AttachmentRepository attachmentRepo;

	@Autowired
	TrexItemRepository itemRepo;

	@Autowired
	TravelExpensesMailServiceImpl mailService;

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

	@PostMapping("/saveExpense")
	public TravelExpense insertNewTravelExpense(@RequestBody @Valid TravelExpense trex) {
		trex.setId(null);
		return trexRepo.save(trex);
	}

	@PostMapping("/saveItem")
	public TrexItem createTrexItem(@RequestBody @Valid TrexItem item) {
		item.setId(null);
		return itemRepo.save(item);
	}

//// TODO transmit TrEx-Id for attachments
//	@PostMapping("/attachment")
//	public Attachment insertAttachments(@RequestBody Attachment attachment) {
//		attachment.setId(null);
////		attachment.setFile(Base64.getDecoder().decode(attachment.dataString));
//		return attachmentRepo.save(attachment);
//	}

	@PostMapping("/attachment")
	public Attachment insertAttachments(@RequestBody Attachment attachment) {
		attachment.setId(null);
		return attachmentRepo.save(attachment);

	}

	@PutMapping("/attachment/{id}/file")
	public ResponseEntity<Attachment> updateFile(@PathVariable long id, @RequestParam("file") MultipartFile file) {
		if (attachmentRepo.existsById(id)) {
			Attachment attachmentById = attachmentRepo.findById(id).get();
			attachmentById.setFileType(file.getContentType());
			attachmentById.setFileName(file.getOriginalFilename());
			try {
				attachmentById.setFile(file.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			}
			attachmentRepo.save(attachmentById);
			return ResponseEntity.ok().build();

		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("/attachment/{id}/file")
	public ResponseEntity<?> getAttachmentFile(@PathVariable long id) {
		Optional<Attachment> attachmentById = attachmentRepo.findById(id);
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(attachmentById.get().getFileType()))
				.body(attachmentById.get().getFile());

	}

	@PostMapping("/send/{id}")
	public void sendMailWithAttachment(@PathVariable long id) {

		if (trexRepo.existsById(id)) {
			TravelExpense trEx = trexRepo.findById(id).get();
			mailService.sendMessageWithAttachment("hajoklueten@gmail.com", trEx);
		}
	}

}
