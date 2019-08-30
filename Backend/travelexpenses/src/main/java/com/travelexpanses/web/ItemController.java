package com.travelexpanses.web;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.travelexpanses.entities.Attachment;
import com.travelexpanses.entities.Item;
import com.travelexpanses.entities.TravelExpense;
import com.travelexpanses.repository.AttachmentRepository;
import com.travelexpanses.repository.ItemRepository;
import com.travelexpanses.repository.TravelExpenseRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ItemController {

	@Autowired
	TravelExpenseRepository travelExpenseRepo;

	@Autowired
	AttachmentRepository attachmentRepo;

	@Autowired
	ItemRepository itemRepo;

	@GetMapping("/items")
	public Iterable<Item> getAllItems() {
		return itemRepo.findAll();
	}

	@GetMapping("/items/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable long id) {
		Optional<Item> item = itemRepo.findById(id);
		return ResponseEntity.of(item);
	}

	@PostMapping("/expenses/{expenseId}/items")
	public Item createItem(@RequestBody @Valid Item item, @PathVariable long expenseId) {
		item.setId(null);
		Optional<TravelExpense> expense = travelExpenseRepo.findById(expenseId);
		if (expense.isPresent()) {
			item.setTravelExpense(expense.get());
		}
		return itemRepo.save(item);
	}

	@GetMapping("/expenses/{expenseId}/items")
	public List<Item> findByTravelExpenseId(@PathVariable Long expenseId) {
		return itemRepo.findByTravelExpenseId(expenseId);
	}

	@PostMapping("items/{id}/attachment")
	public ResponseEntity<?> insertAttachment(@PathVariable long id, @RequestParam("file") MultipartFile file) {

		Optional<Item> itemById = itemRepo.findById(id);
		if (itemById.isPresent()) {
			Attachment attachment = new Attachment();
			attachment.setId(null);
			attachment.setFileType(file.getContentType());
			attachment.setFileName(file.getOriginalFilename());

			try {
				attachment.setFile(file.getBytes());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			attachment.setItem(itemById.get());
			return ResponseEntity.ok(attachmentRepo.save(attachment));

		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("items/{itemId}/attachment/{id}")
	public ResponseEntity<?> getAttachmentFile(@PathVariable int id, @PathVariable long itemId) {

		Optional<Item> itemById = itemRepo.findById(itemId);
		Item item = itemById.get();
		Attachment attachment = item.getAttachmentList().get(id - 1);
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(attachment.getFileType()))
				.body(attachment.getFile());
	}
}
