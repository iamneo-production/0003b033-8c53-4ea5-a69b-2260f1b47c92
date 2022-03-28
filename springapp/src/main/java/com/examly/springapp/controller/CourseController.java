package com.examly.springapp.controllers;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "https://8081-ecffeaecaaceddbefefcfadeceafbaedad.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
public class CourseController {

    private final CourseRepository courseRepo;
    private final ObjectMapper objectMapper;

    @Autowired
    public CourseController(CourseRepository courseRepo, ObjectMapper objectMapper) {
        this.courseRepo = courseRepo;
        this.objectMapper = objectMapper;
    }

    @RequestMapping(
            path = {"/addCourse"},
            method = {RequestMethod.POST},
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String addCourse(@RequestBody String request){
        CourseModel course = null;
        try {
            course = objectMapper.readValue(request, CourseModel.class);
            course = courseRepo.save(course);
            return objectMapper.writeValueAsString(course);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping(
            path = {"/viewCourse"},
            method = {RequestMethod.GET},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String viewCourse(){
        try {
            List<CourseModel> courses = courseRepo.findAll();
            return objectMapper.writeValueAsString(courses);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "[]";
    }

    @RequestMapping(
            path = {"/viewCourse/{id}"},
            method = {RequestMethod.GET},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String viewCourseByID(@PathVariable int id){
        try {
            Optional<CourseModel> course = courseRepo.findById(id);
            if(course.isPresent()) {
                return objectMapper.writeValueAsString(course.get());
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping(
            path = {"/editCourse/{id}"},
            method = {RequestMethod.PUT},
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String editCourse(@PathVariable int id, @RequestBody String request) {
        CourseModel course = null;
        try {
            course = objectMapper.readValue(request, CourseModel.class);
            Optional<CourseModel> courseOptional = courseRepo.findById(id);
            if(courseOptional.isPresent()) {
                CourseModel course1 = courseOptional.get();
                course1.setDescription(course.getDescription() != null ? course.getDescription() : course1.getDescription());
                course1.setEnrolled(course.getEnrolled() != 0 ? course.getEnrolled() : course1.getEnrolled());
                course1.setTiming(course.getTiming() != null ? course.getTiming() : course1.getTiming());
                course1.setName(course.getName() != null ? course.getName() : course1.getName());
                course1.setDuration(course.getDuration() != 0 ? course.getDuration() : course1.getDuration());
                course1 = courseRepo.saveAndFlush(course1);
                return objectMapper.writeValueAsString(course1);
            }else{
                return "Course not present in the DB!";
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping(
            path = {"/deleteCourse/{id}"},
            method = {RequestMethod.DELETE}
    )
    public String DeleteCourse(@PathVariable int id) throws JsonProcessingException {
        Optional<CourseModel> courseOptional = courseRepo.findById(id);
        if(courseOptional.isPresent()){
            CourseModel course = courseOptional.get();
            courseRepo.delete(course);
            return objectMapper.writeValueAsString(course);
        }
        return null;
    }
}
