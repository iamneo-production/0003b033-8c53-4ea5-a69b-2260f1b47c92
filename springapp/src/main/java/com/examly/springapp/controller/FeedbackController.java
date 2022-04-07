package com.examly.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.FeedbackModel;
import com.examly.springapp.repository.FeedbackRepository;

//@CrossOrigin(origins = "https://8081-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@CrossOrigin(origins = "https://8081-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RestController
@RequestMapping("/user")
public class FeedbackController {

	@Autowired
	private FeedbackRepository frepo;
	
	@PostMapping("/addFeedback")
	public String addStudent(@RequestBody FeedbackModel feedback) {
		frepo.save(feedback);
		return "\"Feedback added\"";
		
	}
	@GetMapping("/viewFeedback")
	public List<FeedbackModel> viewFeedback() {
		return frepo.findAll();	
	}
	
	// @PutMapping("/editStudent/{id}")
	// public String editStudent(@PathVariable int id,@RequestBody StudentModel Student )
	// {
	// 	StudentModel student=arepo.findById(id).orElseThrow(
	// 			()-> new ResourceNotFoundException("No Student with id"+id));
	// 	student.setStudentName(Student.getStudentName());
	// 	student.setStudentDOB(Student.getStudentDOB());
	// 	student.setAddress(Student.getAddress());
	// 	student.setMobile(Student.getMobile());
	// 	student.setAge(Student.getAge());
	// 	arepo.save(student);
	// 	return "\"Student details edited\"";
		
	// }
	// @GetMapping("/viewStudent/{id}")
	// public StudentModel getStudentById(@PathVariable int id)
	// {
	// 	StudentModel student=arepo.findById(id).orElseThrow(
	// 		()-> new ResourceNotFoundException("No Employee with id"+id));
	// 	return student;
	// 	}
	
	// @DeleteMapping("/deleteStudent/{id}")
	// @ResponseBody
	// public String deleteStudent(@PathVariable int id){
	// 	StudentModel student = arepo.findById(id)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
	// 	arepo.delete(student);
	// 	return "\"Student details deleted\"";
	// }
	
}
