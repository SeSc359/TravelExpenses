package com.travelexpanses.mail;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.travelexpanses.entities.Attachment;
import com.travelexpanses.entities.Item;
import com.travelexpanses.entities.TravelExpense;

@Service
public class TravelExpensesMailServiceImpl implements ITravelExpensesMailService {
	
//	@Autowired 
//	private TravelExpenseRepository travelExpenseRepo;
	
	@Autowired
	public JavaMailSender emailSender;
	
	@Override
	public void sendSimpleMessage(String to, String subject, String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(subject);
		message.setText(text);
		message.setFrom("hajoklueten@gmail.com");
		emailSender.send(message);
	}
	
	@Override
	public void sendSimpleMessageUsingTemplate(String to, String subject, SimpleMailMessage template,
			String[] templateArgs) {
		// TODO Auto-generated method stub

	}
	
	@Override
	public void sendMessageWithAttachment(String to, TravelExpense travelExpense) {
		
		MimeMessage message = emailSender.createMimeMessage();

		// build separate function returning MimeMessage
		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message, true);
			
			String subject = "Neue Reisekostenrechnung";
			String text = travelExpense.getUser().getName().toString() + " hat neue Reisekostenrechung über Betrag "
					+ travelExpense.getCosts() + " hinzugefügt.";
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(text);
			message.setFrom(travelExpense.getUser().getEmail()); // Generalize Input of User Mail-Address

			List<Item> itemList = travelExpense.getItemList();
			for (Item item : itemList) {

				List<Attachment> attachmentList = item.getAttachmentList();
				for (Attachment attachment : attachmentList) {

					byte[] attachmentData = attachment.getFile();
					ByteArrayDataSource data = new ByteArrayDataSource(attachmentData, attachment.getFileType());
					// TODO insert generated attachment title

					helper.addAttachment(attachment.getFileName(), data);
				}
			}
			emailSender.send(message);

		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
