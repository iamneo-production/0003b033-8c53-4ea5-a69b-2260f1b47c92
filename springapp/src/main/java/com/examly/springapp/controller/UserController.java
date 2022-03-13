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
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.AdmissionModel;
import com.example.demo.repository.AdmissionRepo;

@CrossOrigin(origins = "https://8081-feedeaaecceeccaeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private AdmissionRepository arepo;
	
	@PostMapping("/addAdmission")
	public String addAdmission(@RequestBody AdmissionModel adm) {
		arepo.save(adm);
		return "\" Admission added\"";
		
	}
	@GetMapping("/viewAdmission")
	public List<AdmissionModel> viewAdmission() {
		return arepo.findAll();	
	}
	
	@PutMapping("/editAdmission/{id}")
	public ResponseEntity<String> editAdmission(@PathVariable int id,@RequestBody AdmissionModel Admission )
	{
		AdmissionModel admission=arepo.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("No Admission with id"+id));
		admission.setCourseId(Admission.getCourseId());
		admission.setInstituteId(Admission.getInstituteId());
		admission.setSm(Admission.getSm());
	    arepo.save(admission);
		return ResponseEntity.ok("Admission details edited");
	}
	
	@DeleteMapping("/deleteAdmission/{id}")
	@ResponseBody
	public String deleteAdmission(@PathVariable int id){
		AdmissionModel adm = arepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admission not exist with id :" + id));
		
		arepo.delete(adm);
		return "\"Admission details deleted\"";
	}
	
}