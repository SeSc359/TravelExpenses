package com.travelexpanses.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Table(name = "attachment")
@Entity
public class Attachment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String fileName;

	@Column
	private String fileType;

	@Lob
	@Column(name = "file", columnDefinition = "MEDIUMBLOB")
	@JsonIgnore
	private byte[] file;

	public Attachment() {

	}

	public Attachment(String fileName, String fileType, byte[] file) {
		super();
		this.fileName = fileName;
		this.fileType = fileType;
		this.file = file;
	}

	@ManyToOne()
	@JoinColumn(name = "item_Id")
	private Item item;
}
