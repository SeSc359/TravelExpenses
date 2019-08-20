package com.travelexpanses.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

//@NoArgsConstructor
@Data
@Table(name = "travelExpenses")
@Entity
public class TravelExpense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "staffNumber")
	private Integer staffNumber;

//	@Column(name = "destination")
//	private String destination;

	@Column(name = "month")
	private String month;

	@Column(name = "year")
	private Integer year;

//	@Column(name = "distance")
//	private double distance;

	@Column(name = "costs")
	private double costs;

	@Column(name = "status")
	private boolean status; // false = inProgress, true = Done.

//	@OneToMany(mappedBy = "travelexpense", fetch = FetchType.LAZY)
//	@JsonBackReference
//	private List<Attachment> attachments;

//	@ManyToMany
//	@JoinTable(name = "travelexpense_to_tag", joinColumns = @JoinColumn(name = "travelexpense_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
//	@JsonManagedReference
//	private List<Tag> tags;

	// Constructor
	public TravelExpense(Integer staffNumber, String month, Integer year, double costs, boolean status) {
		super();
		this.staffNumber = staffNumber;
		this.month = month;
		this.year = year;
		this.costs = costs;
		this.status = status;
	}

}
