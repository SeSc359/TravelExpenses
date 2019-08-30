package com.travelexpanses.entities;

import java.time.LocalDate;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
public class InsertAttachmentDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String filename;

	private String format;

	private LocalDate timestamp;

	public String dataString;

}
