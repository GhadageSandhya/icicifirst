import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'emp',
    initialState:{
        emp:[]
    },
    reducers:{
        empAdded(state,action){
            // console.log(action.payload)
            state.emp.push(action.payload)
        },
        empDelete(state,action){
            const {id}=action.payload;
            // console.log(id)
            const existEmp=state.emp.find((empId)=>empId.id===id)
            if(existEmp){
                state.emp=state.emp.filter((empId)=>empId.id!==id)
            }
        },
        empEdit(state,action){
            console.log(action.payload)
            const {id,name,email}=action.payload;
            const existEmp=state.emp.find((empId)=>empId.id===id)
            if(existEmp){
                existEmp.name=name;
                existEmp.email=email
            }

        }
    }
})
export const {empAdded,empDelete,empEdit}=userSlice.actions
export default userSlice.reducer