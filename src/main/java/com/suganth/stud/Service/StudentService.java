package com.suganth.stud.Service;


import com.suganth.stud.model.Student;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public interface StudentService {
    public Student savestudent(Student student);
    public List<Student> getAllStudents();
    public String delete(int id);

    Student get(Integer id);

    public Student updateUser( Student student);

}
