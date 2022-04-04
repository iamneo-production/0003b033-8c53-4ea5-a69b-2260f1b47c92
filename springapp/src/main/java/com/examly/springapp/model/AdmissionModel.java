package com.examly.springapp.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
public class AdmissionModel {
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "studentId", referencedColumnName = "id")
 StudentModel sm;
 @Id
 @Column(name = "id")
 private int admissionId;
 private int courseId;
 private int instituteId;
 public StudentModel getSm() {
	return sm;
}
public void setSm(StudentModel sm) {
	this.sm = sm;
}
public int getAdmissionId() {
	return admissionId;
}
public void setAdmissionId(int admissionId) {
	this.admissionId = admissionId;
}
public int getCourseId() {
	return courseId;
}
public AdmissionModel() {
}
public AdmissionModel(StudentModel sm, int admissionId, int courseId, int instituteId) {
	super();
	this.sm = sm;
	this.admissionId = admissionId;
	this.courseId = courseId;
	this.instituteId = instituteId;
}
public void setCourseId(int courseId) {
	this.courseId = courseId;
}
public int getInstituteId() {
	return instituteId;
}
public void setInstituteId(int instituteId) {
	this.instituteId = instituteId;
}

 
}
