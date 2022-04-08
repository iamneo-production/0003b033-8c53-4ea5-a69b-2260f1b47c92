package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.FeedbackModel;
@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackModel, String>{

}

