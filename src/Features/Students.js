/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { StudentsData } from '../StudentsData'



export const studentSlice = createSlice({
    name: "students",
    initialState: { value: StudentsData },
    reducers: {
        addStudent: (state, action) => {
            state.value.push(action.payload)
        },
        delStudent: (state, action) => {
            state.value = state.value.filter((student) => student.id !== action.payload.id)
        },
        updateStudent: (state, action) => {
            state.value.map(student => {
                if (student.id === action.payload.id) {
                    student.idn = action.payload.idn
                    student.name = action.payload.name
                    student.cls = action.payload.cls
                }
            })

        }
    }
});

export const { addStudent, delStudent, updateStudent } = studentSlice.actions

export default studentSlice.reducer