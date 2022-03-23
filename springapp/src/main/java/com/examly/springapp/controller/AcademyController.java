package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.examly.springappApplication.exception.ResourceNotFoundException;
import com.examly.springappApplication.model.Academy;
import com.examly.springappApplication.repository.AcademyRepository;

@RestController
@CrossOrigin(origins = "https://8081-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RequestMapping("/admin/")
public class AcademyController {

		@Autowired
		private AcademyRepository academyRepository;
		
		//get all academies
		@GetMapping("/academies")
		public List<Academy> getAllAcademy()
		{
			return academyRepository.findAll();
		}
		
		//add academy or register academy
		@PostMapping("/addinstitute")
		public Academy createAcademy(@RequestBody Academy academy) {
			return academyRepository.save(academy);
		}
		
		//get academy by id
		@GetMapping("/editinstitute/{id}")
		public ResponseEntity<Academy> getAcademyById(@PathVariable Long id){
			
			Academy academy = academyRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Academy not exist with id : " + id));
			return ResponseEntity.ok(academy);
		}
		
		//edit academy data
		@PutMapping("/editinstitute/{id}")
		public ResponseEntity<Academy> editAcademy(@PathVariable Long id ,@RequestBody Academy editInstitute){
			Academy academy = academyRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Academy not exist with id : " + id));
			
					academy.setAcademyName(editInstitute.getAcademyName());
					academy.setContactNumber(editInstitute.getContactNumber());
					academy.setImageUrl(editInstitute.getImageUrl());
					academy.setEmailId(editInstitute.getEmailId());
					academy.setAcademyLocation(editInstitute.getAcademyLocation());
					academy.setAcademyDescription(editInstitute.getAcademyDescription());
					
					Academy editAcademy = academyRepository.save(academy);
					return ResponseEntity.ok(editAcademy);
			}
		
		// delete Academy
		@DeleteMapping("/deleteinstitute/{id}")
		public ResponseEntity<Map<String , Boolean>> deleteAcademy(@PathVariable Long id)
		{
			
			Academy academy = academyRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Academy not exist with id : " + id));
			academyRepository.delete(academy);
			Map<String , Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}

