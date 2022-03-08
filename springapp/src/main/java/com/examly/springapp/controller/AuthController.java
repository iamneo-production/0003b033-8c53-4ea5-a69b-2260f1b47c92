package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.examly.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;

@CrossOrigin(origins = "https://8081-feedeaaecceeccaeddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RestController
@RequestMapping("/user")
public class AuthController {

	@Autowired
	private UserRepository urepo;
	
	@PostMapping("/signup")
	public String saveUser(@RequestBody UserModel user) {
		urepo.save(user);
		return "\"User added\"";
		
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
