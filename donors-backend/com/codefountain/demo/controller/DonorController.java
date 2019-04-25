package com.codefountain.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codefountain.demo.model.Donor;

@RestController
@CrossOrigin("http://localhost:4200")
public class DonorController {
	
	@GetMapping("/donors")
	public List<Donor> getDonors() {
		return getDonorList();
	}
	
	
	private List<Donor> getDonorList(){
		List<Donor> donors = new ArrayList<>();
		
		Donor donor1 = new Donor();
		donor1.setDonorId(1);
		donor1.setFirstName("Somnath");
		donor1.setLastName("Musib");
		donor1.setMobileNumber("9876543210");
		donor1.setBloodGroup("A+");
		
		Donor donor2 = new Donor();
		donor2.setDonorId(1);
		donor2.setFirstName("Anjan");
		donor2.setLastName("Dutta");
		donor2.setMobileNumber("7776543210");
		donor2.setBloodGroup("O+");
		
		donors.add(donor1);
		donors.add(donor2);
		
		return donors;
	}

}
