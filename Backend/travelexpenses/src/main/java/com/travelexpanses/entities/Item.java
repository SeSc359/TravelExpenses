package com.travelexpanses.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Table(name = "item")
@Entity
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private LocalDate date;

	@Column
	private String description;

	@Column
	private Double amount;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "item", fetch = FetchType.EAGER)
	@JsonBackReference
	private List<Attachment> attachmentList;

	@ManyToOne()
	@JoinColumn(name = "travelExpense_Id")
	private TravelExpense travelExpense;

	@ManyToMany
	@JoinTable(name = "item_to_tag", joinColumns = @JoinColumn(name = "item_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
	private List<Tag> tagList;

}
