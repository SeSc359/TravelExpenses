package com.travelexpanses.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Table(name = "travelExpenses")
@Entity
public class TravelExpense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "user")
	private Long user;

	@Column(name = "start")
	private String start;

	@Column(name = "destination")
	private String destination;

	@Column(name = "date")
	private LocalDate date;

	@Column(name = "distance")
	private double distance;

	@Column(name = "costs")
	private double costs;

	@Column(name = "vehicle")
	private String vehicle;

	@OneToMany(mappedBy = "travelexpense", fetch = FetchType.LAZY)
	@JsonBackReference
	private List<Attachment> attachments;

	@ManyToMany
	@JoinTable(name = "travelexpense_to_tag", joinColumns = @JoinColumn(name = "travelexpense_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
	@JsonManagedReference

	private List<Tag> tags;

}
