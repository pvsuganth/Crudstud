import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Student() {
    const paperstyle = { padding: '50px,20px', width: 500, margin: '20px auto' }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [students, setStudents] = useState([])
   
    const handleclick = (e) => {
        e.preventDefault()
        const Student = { name, address }
        console.log(Student)
        fetch("http://localhost:9090/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Student)
        }

        ).then(() => {

            console.log("student is added")
        })
    }


    const deleteFun=(id)=>{
        // const rem=Employee.filter((emp)=>emp.id!=id)
        // setEmployee(rem)
        fetch("http://localhost:9090/student/"+id,{
            method:"DELETE",headers:{"Content-Type":"application/json"}
        })
        .then(res=>res.text())
        .then(res=>console.log(res))


   } 

    // deleteStudent(id){
    //     Student.deleteStudent(id).then( res => {
    //         this.setState({students: this.state.student.filter(students => students.id !== id)});
    //     });
    // }

    // const update=(e)=>{
    //     e.preventDefault()
    //     const Student={name,address}
    //     console.log(Student)
    //     fetch("http://localhost:9090/student/id",{
    //     method:"PUT",
    //     headers:{"Content-Type":"application.json"},
    //     body:JSON.stringify(Student)
    // }

    // ).then(()=>{                

    //     console.log("student is added")})
    // }

// const editItem=()=>{

// }






    useEffect(() => {
        fetch("http://localhost:9090/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])


    return (
        <Container>
            <Paper elevation={3} style={paperstyle}>
                <h1 style={{ color: "blue" }}>
                    <u>ADD STUDENT</u>
                </h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="outlined" color="error" onClick={handleclick}>
                        Save
                    </Button>

                </Box>
            </Paper>
            <h1>Students</h1>

            <Paper elevation={3} style={paperstyle}>

                {students.map(student => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                        Id:{student.id}<br />
                        Name:{student.name}<br />
                        Address:{student.address}<br />

                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{ margin: "10px" }} onClick={()=>deleteFun(student.id)}  >
                            Delete
                        </Button>
                        {/* <Button variant="contained" endIcon={<SendIcon />}>
                            Update
                        </Button> */}

                    </Paper>
                ))
                }

            </Paper>



        </Container>
    );
}
