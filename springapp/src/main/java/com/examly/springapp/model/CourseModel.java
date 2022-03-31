package com.examly.springapp.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course_model")
public class CourseModel {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String description;
    private int duration;
    private String timing;
    private int enrolled;

    public CourseModel() {
    }

    public CourseModel(int id, String name, String description, int duration, String timing, int enrolled) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.timing = timing;
        this.enrolled = enrolled;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getTiming() {
        return timing;
    }

    public void setTiming(String timing) {
        this.timing = timing;
    }

    public int getEnrolled() {
        return enrolled;
    }

    public void setEnrolled(int enrolled) {
        this.enrolled = enrolled;
    }
}
