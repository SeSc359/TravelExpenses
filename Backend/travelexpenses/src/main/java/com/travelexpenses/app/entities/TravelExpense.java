package com.travelexpenses.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "travelExpenses")
@Entity
public class TravelExpense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "staffNumber")
	private Long staffNumber;

//	@Column(name = "destination")
//	private String destination;

	@Column(name = "month")
	private String month;

	@Column(name = "year")
	private Long year;

//	@Column(name = "distance")
//	private double distance;

	@Column(name = "costs")
	private double costs;

	@OneToMany(mappedBy = "travelexpense", fetch = FetchType.LAZY)
//	@JsonBackReference
	private List<Attachment> attachments;

//	@ManyToMany
//	@JoinTable(name = "travelexpense_to_tag", joinColumns = @JoinColumn(name = "travelexpense_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
//	@JsonManagedReference
//	private List<Tag> tags;

}
