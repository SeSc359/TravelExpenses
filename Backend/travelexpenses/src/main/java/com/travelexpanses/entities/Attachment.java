package com.travelexpanses.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Table(name = "attachment")
@Entity
public class Attachment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String filename;

	@Column
	private String format;

	@Column
	private LocalDate timestamp;

	@ManyToOne()
	@JoinColumn(name = "attachment_Id")
	@JsonManagedReference
	private TravelExpense travelexpense;
}
