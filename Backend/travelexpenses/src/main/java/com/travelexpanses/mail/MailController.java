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

}
