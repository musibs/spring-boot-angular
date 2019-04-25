package com.codefountain.demo.model;

public class Donor {

	private long donorId;
	private String firstName;
	private String lastName;
	private String mobileNumber;
	private String bloodGroup;
	
	public long getDonorId() {
		return donorId;
	}
	public void setDonorId(long donorId) {
		this.donorId = donorId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
}
