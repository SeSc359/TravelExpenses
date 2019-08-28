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

	@PostMapping("expenses/{expenseId}/items")
	public Item createItem(@RequestBody @Valid Item item, @PathVariable long expenseId) {
		item.setId(null);
		Optional<TravelExpense> expense = travelExpenseRepo.findById(expenseId);
		if (expense.isPresent()) {
			item.setTravelExpense(expense.get());
		}
		return itemRepo.save(item);
	}

//	@PostMapping("/items")
//	public Item createItemTest(@RequestBody Item item) {
//		item.setId(null);
//		return itemRepo.save(item);
//	}

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

//	@PostMapping("items/{id}/attachment")
//	public Attachment insertAttachments(@PathVariable long id, @RequestBody Attachment attachment) {
//		attachment.setId(null);
//		// TODO set item-id by pathvariable
//		Optional<Item> item = itemRepo.findById(id);
//		if (item.isPresent()) {
//			attachment.setItem(item.get());
//		}
//		return attachmentRepo.save(attachment);
//	}

//	@PutMapping("items/{itemId}/attachment/{id}")
//	public ResponseEntity<Attachment> updateFile(@PathVariable long id, @RequestParam("file") MultipartFile file) {
//		if (attachmentRepo.existsById(id)) {
//			Attachment attachmentById = attachmentRepo.findById(id).get();
//			attachmentById.setFileType(file.getContentType());
//			attachmentById.setFileName(file.getOriginalFilename());
//			try {
//				attachmentById.setFile(file.getBytes());
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//			attachmentRepo.save(attachmentById);
//			return ResponseEntity.ok().build();
//
//		}
//		return ResponseEntity.notFound().build();
//	}

	@GetMapping("items/{itemId}/attachment/{id}")
	public ResponseEntity<?> getAttachmentFile(@PathVariable int id, @PathVariable long itemId) {
//		Optional<Attachment> attachmentById = attachmentRepo.findById(id);
//		return ResponseEntity.ok().contentType(MediaType.parseMediaType(attachmentById.get().getFileType()))
//				.body(attachmentById.get().getFile());
		Optional<Item> itemById = itemRepo.findById(itemId);
		Item item = itemById.get();
		Attachment attachment = item.getAttachmentList().get(id - 1);
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(attachment.getFileType()))
				.body(attachment.getFile());
	}
}
