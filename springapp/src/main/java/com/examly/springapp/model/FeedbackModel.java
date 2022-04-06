package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback_model")
public class FeedbackModel {
    @Id
    private String email;
    private String comments;
    private String rating;

 
    public FeedbackModel() {
    }
    public FeedbackModel(String email, String comments, String rating) {
        super();
        this.email = email;
        this.comments = comments;
        this.rating = rating;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
     
}
