package com.travelexpanses.mail;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class MailObject {

	@Email
	@NotNull
	@Size(min = 1, message = "Please, set an email address to send the message to it")
	private String to;
	private String subject;
	private String text;
}
