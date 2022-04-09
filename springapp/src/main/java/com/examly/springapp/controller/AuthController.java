package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.model.LoginModel;

@CrossOrigin(origins = "https://8081-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RestController
@RequestMapping("/user")
public class AuthController {

	@Autowired
	private UserRepository urepo;
	
	@PostMapping("/signup")
	public ResponseEntity<String> saveUser(@RequestBody UserModel user) {
		UserModel user1=urepo.findByEmail(user.getEmail());
		if(user1!=null)
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Already Exist");
		
		}
		else
		{
		urepo.save(user);
		return ResponseEntity.ok("User added");
		}
		  
		
	}
	@PostMapping("/login")
	public boolean isUserPresent(@RequestBody LoginModel data)
	{
		UserModel user=urepo.findByEmailAndPassword(data.getEmail(),data.getPassword());
		if(user==null)
			return false;
		else
			return true;
		
	}
}
