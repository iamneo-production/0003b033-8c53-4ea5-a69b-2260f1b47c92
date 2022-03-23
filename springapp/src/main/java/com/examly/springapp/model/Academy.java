package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "academies")
public class Academy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "academy_name")
	private String academyName;
	
	@Column(name = "contact_number")
	private String contactNumber;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "academy_location")
	private String academyLocation;
	
	@Column(name = "academy_description")
	private String academyDescription;
	
	public Academy()
	{
		
	}
	
	public Academy( String academyName, String contactNumber,String imageUrl, String emailId, String academyLocation, String academyDescription) {
		super();
		this.academyName = academyName;
		this.contactNumber = contactNumber;
		this.imageUrl = imageUrl;
		this.emailId = emailId;
		this.academyLocation = academyLocation;
		this.academyDescription = academyDescription;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAcademyName() {
		return academyName;
	}

	public void setAcademyName(String academyName) {
		this.academyName = academyName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getAcademyLocation() {
		return academyLocation;
	}

	public void setAcademyLocation(String academyLocation) {
		this.academyLocation = academyLocation;
	}

	public String getAcademyDescription() {
		return academyDescription;
	}

	public void setAcademyDescription(String academyDescription) {
		this.academyDescription = academyDescription;
	}
	
}

