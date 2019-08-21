package com.travelexpanses.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "attachment")
@Entity
public class Attachment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String fileName;

	@Column
	private String filePath;

//	@Lob
//	@Column(name = "file", columnDefinition = "BLOB")
//	public byte[] file;

	@ManyToOne()
	@JoinColumn(name = "travelexpense_Id")
//	@JsonManagedReference
	private TravelExpense travelexpense;
}
