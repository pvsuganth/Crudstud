package com.suganth.stud.Service;

import com.suganth.stud.model.Student;
import com.suganth.stud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService  {
    @Autowired
    private StudentRepository studentRepository;


    public Student savestudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student get(Integer id){
        return studentRepository.findById(id).get();
    }


    public Student updateUser(@RequestBody Student student) {
        Student oldUser = null;
        Optional<Student> optionalUser = studentRepository.findById(student.getId());
        if (optionalUser.isPresent()) {
            oldUser = optionalUser.get();
            oldUser.setName(student.getName());
            oldUser.setAddress(student.getAddress());
            return studentRepository.save(oldUser);

        }
        else
        {
            return new Student();

        }



}
    public String delete(int id){
        studentRepository.deleteById(id);
        return "User got deleted";
    }

}
