import React from 'react';
import { useSelector } from 'react-redux';
import Student from './Student';
import './ViewStudent.css'


const ViewStudent = () => {
    const studentList = useSelector((state)=> state.students.value)
    return (
        <div className='viewstudent'>
            {studentList.map(student=><Student
            key={student.id}
            student={student}
            >
            </Student>)}
        </div>
    );
};

export default ViewStudent;