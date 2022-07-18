import React, { useState } from 'react';
import './AddStudent.css'
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from "../../Features/Students"


const AddStudent = () => {
    const studentList = useSelector((state) => state.students.value)

    const dispatch = useDispatch()
    const [idn, setIdn] = useState()
    const [name, setName] = useState("")
    const [cls, setCls] = useState("")

    return (
        <div className='addStudent'>
            <h1>Add <span className='clr'>Student</span></h1>
            <div className='input'>
                <label htmlFor="id">IDNo.</label>
                <input type="text" id="id" placeholder='Enter Id'
                    onChange={(e) => { setIdn(e.target.value) }} />
            </div>
            <div className='input'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Enter Name'
                    onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='input'>
                <label htmlFor="class">Class</label>
                <input type="text" id="class" placeholder='Enter Class'
                    onChange={(e) => { setCls(e.target.value) }} />
            </div>
            <button className='add btn' onClick={() => {
                dispatch(addStudent({
                    id: studentList[studentList.length - 1].id + 1,
                    idn,
                    name,
                    cls
                }))
            }}>Add Student</button>
        </div>
    );
};

export default AddStudent;