package com.travelexpanses.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/expenses")
public class MailController {

	@Autowired
	TravelExpensesMailServiceImpl mailService;

	@Autowired
	SimpleMailMessage template;

	@PostMapping("/send")
	public void sendSimpleExpensesMail() {
		mailService.sendSimpleMessage("hajoklueten@gmail.com", "test", "hello world");
	}

	// TODO replace test-recipient with required recipient.
//	@PostMapping("/send/attachment")
//	public void sendMailWithAttachment(@RequestBody TravelExpense trex) {
//		List<String> filepaths = new ArrayList<String>();
//		String subject = "Neue Reisekostenrechnung";
//		String text = trex.getStaffNumber().toString() + " hat neue Reisekostenrechung über Betrag " + trex.getCosts()
//				+ " hinzugefügt.";
//		mailService.sendMessageWithAttachment("hajoklueten@gmail.com", subject, text, filepaths);
//
//	}

}
