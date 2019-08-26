package com.travelexpanses.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	private Integer staffNumber;

	@Column(name = "month")
	private String month;

	@Column(name = "year")
	private Integer year;

	@Column(name = "costs")
	private double costs;

	@Column(name = "status")
	private boolean status; // false = inProgress, true = Done.


	@OneToMany(cascade = CascadeType.ALL, mappedBy = "travelExpense", fetch = FetchType.EAGER)
	@JsonBackReference
	private List<Item> trexItemList;

	// Constructor
	public TravelExpense() {
	}

	public TravelExpense(Integer staffNumber, String month, Integer year, double costs, boolean status) {
		super();
		this.staffNumber = staffNumber;
		this.month = month;
		this.year = year;
		this.costs = costs;
		this.status = status;
	}

}
