package com.suganth.stud.controller;

import com.suganth.stud.Service.StudentService;
import com.suganth.stud.Service.StudentServiceImpl;
import com.suganth.stud.model.Student;
import com.suganth.stud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

@Autowired
    private StudentService studentService;
    private StudentServiceImpl stud;

@PostMapping("/add")
    public String add(@RequestBody Student student){
    studentService.savestudent(student);
    return "New student is added";
}
@GetMapping("/getAll")
   public List<Student>getAllStudents(){
    return studentService.getAllStudents();
}
@GetMapping("/{id}")
    public ResponseEntity<Student>get(@PathVariable Integer id){
    try{
        Student student= studentService.get(id);
        return new ResponseEntity<Student>(student, HttpStatus.OK);

    }catch (NoSuchElementException e){
        return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);

    }
}

@PutMapping("/{id}")
public ResponseEntity<Student>update(@RequestBody Student student , @PathVariable Integer id){
    try{
        Student exisstudent= studentService.get(id);
        studentService.savestudent(student);
        return new ResponseEntity<>(HttpStatus.OK);

    }catch (NoSuchElementException e){
        return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);

    }


}
    @PutMapping("/updateuser")
    public String updateUser(@RequestBody Student student)
    {
        studentService.updateUser(student);
        return "User got Updated";
    }

@DeleteMapping("/{id}")
    public String delete(@PathVariable int id){

    studentService.delete(id);
    return "Deleted stud id"+id ;
}
}
