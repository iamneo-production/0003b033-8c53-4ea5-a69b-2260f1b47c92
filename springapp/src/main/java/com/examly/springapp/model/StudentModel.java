package com.examly.springapp.model;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="student_model")
public class StudentModel {
	@Id
	@Column(name="id")
	private int studentID;
	@Column(name="student_name")
	private String studentName;
	@Column(name="student_dob")
	private Date studentDOB;
	@Column(name="address")
	private String address;
	@Column(name="mobile")
	private String mobile;
	@Column(name="age")
	private int age;
	
	 @OneToOne(mappedBy = "sm")
	 private AdmissionModel adm;
	
	
	public StudentModel(int studentID, String studentName, Date studentDOB, String address, String mobile, int age) {
		super();
		this.studentID = studentID;
		this.studentName = studentName;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.age = age;
	}
	
	public StudentModel() {
		
	}

	public int getStudentID() {
		return studentID;
	}
	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public Date getStudentDOB() {
		return studentDOB;
	}
	public void setStudentDOB(Date studentDOB) {
		this.studentDOB = studentDOB;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	

}