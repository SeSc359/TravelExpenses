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

import lombok.Data;

@Data 
@Table (name = "trexItem")
@Entity 
public class TrexItem {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private LocalDate date;

	@Column
	private String description;
	
	@Column
	private Double amount;

	@ManyToOne()
	@JoinColumn(name = "trexItem_Id")
	@JsonManagedReference
	private TravelExpense travelexpense;

//	@ManyToMany
//	@JoinTable(name = "trexItem_to_tag", joinColumns = @JoinColumn(name = "trexItem_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
//	@JsonManagedReference
//	private List<Tag> tags;

}
