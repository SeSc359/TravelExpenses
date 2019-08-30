package com.travelexpanses.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.travelexpanses.entities.Item;
import com.travelexpanses.entities.TravelExpense;

@Service
public class TrexService {

//	@Autowired
//	TravelExpense trex;

	public double totalCosts(TravelExpense trex) {
		List<Item> itemList = trex.getItemList();
		double totalCosts = 0.0;
		for (Item item : itemList) {
			totalCosts += item.getAmount();
		}
		return totalCosts;
	}
	

}
