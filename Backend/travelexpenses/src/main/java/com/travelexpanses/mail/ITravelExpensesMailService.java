package com.travelexpanses.mail;

import org.springframework.mail.SimpleMailMessage;

public interface ITravelExpensesMailService {

	public void sendSimpleMessage(String to, String subject, String text);

	public void sendSimpleMessageUsingTemplate(String to, String subject, SimpleMailMessage template,
			String[] templateArgs);

//	public void sendMessageWithAttachment(String to, TravelExpense travelexpense);
}
