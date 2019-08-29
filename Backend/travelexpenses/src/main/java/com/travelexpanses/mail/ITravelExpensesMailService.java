package com.travelexpanses.mail;

import org.springframework.mail.SimpleMailMessage;

import com.travelexpanses.entities.TravelExpense;

public interface ITravelExpensesMailService {

	public void sendSimpleMessage(String to, String subject, String text);

	public void sendSimpleMessageUsingTemplate(String to, String subject, SimpleMailMessage template,
			String[] templateArgs);

	public void sendMessageWithAttachment(String to, TravelExpense travelexpense);
}
