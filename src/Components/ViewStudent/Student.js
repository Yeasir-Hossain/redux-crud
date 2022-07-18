import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delStudent, updateStudent } from "../../Features/Students"
import './Student.css'

const Student = ({ student }) => {
    const { id, idn, name, cls } = student
    const dispatch = useDispatch()
    const [update, setUpdate] = useState(false)
    let [nidn, setNidn] = useState("")
    let [nname, setNname] = useState("")
    let [ncls, setNcls] = useState("")

    const handleUpdatebtn = () => {
        if (!update)
            setUpdate(true)
        else
            setUpdate(false)
    }
    const handleUpdatestdnt = () => {
        if (nidn === "") {
            nidn = idn;
        }
        if (nname === "") {
            nname = name;
        }
        if (ncls === "") {
            ncls = cls;
        }
        dispatch(updateStudent({
            id,
            idn: nidn,
            name: nname,
            cls: ncls
        }))
    }

    return (
        <div className='student'>
            <h2>ID: {idn}</h2>
            <h3>Name:{name}</h3>
            <h3>Class:{cls}</h3>
            <button className='update btn' onClick={handleUpdatebtn}>Update</button>
            <button className='del btn' onClick={() => { dispatch(delStudent({ id })) }}>Delete</button>
            {
                update && <div className='addStudent'>
                    <h1>Update <span className='clr'>Student</span></h1>
                    <div className='input'>
                        <label htmlFor="id">IDNo.</label>
                        <input type="text" id="id" placeholder='Enter Id'
                            onChange={(e) => { setNidn(e.target.value) }} />
                    </div>
                    <div className='input'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder='Enter Name'
                            onChange={(e) => { setNname(e.target.value) }} />
                    </div>
                    <div className='input'>
                        <label htmlFor="class">Class</label>
                        <input type="text" id="class" placeholder='Enter Class'
                            onChange={(e) => { setNcls(e.target.value) }} />
                    </div>
                    <button className='update btn' onClick={handleUpdatestdnt}>Update Info</button>
                </div>
            }
        </div>
    );
};

export default Student;