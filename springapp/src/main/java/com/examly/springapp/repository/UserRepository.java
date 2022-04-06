package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserModel;
@Repository
public interface UserRepository extends JpaRepository<UserModel, String>{

	@Query("FROM UserModel WHERE email = ?1 and password=?2")
	public UserModel findByEmailAndPassword(String email,String password);
	@Query("FROM UserModel WHERE email = ?1")
	public UserModel findByEmail(String email);

}
