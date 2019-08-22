package com.travelexpanses.mail;

import java.io.File;
import java.sql.Date;
import java.time.LocalDate;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

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
			String text = travelExpense.getStaffNumber().toString() + " hat neue Reisekostenrechung über Betrag "
					+ travelExpense.getCosts() + " hinzugefügt.";
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(text);
			helper.setSentDate(Date.valueOf(LocalDate.now()));
			message.setFrom("hajoklueten@gmail.com"); // Generalize Input of User Mail-Address

//			List<Attachment> attachmentList = travelExpense.getAttachments();
//			for (Attachment attachment : attachmentList) {
//				FileSystemResource file = new FileSystemResource(new File(attachment.getFilepath()));

//				byte[] attachmentData = attachment.getFile();
//				ByteArrayDataSource data = new ByteArrayDataSource(attachmentData, "image/jpeg");
				// TODO insert generated attachment title

//				helper.addAttachment(attachment.getFilename(), file);
//			}
			FileSystemResource file = new FileSystemResource(
					new File("C:/Users/YGAdmin/Desktop/MailAttachments/nope.jpg"));
			helper.addAttachment("yes.jpg", file);

			emailSender.send(message);

		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}

}
