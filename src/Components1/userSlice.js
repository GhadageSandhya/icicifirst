import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
        //here all methods 
        userAdded(state,action){
            // console.log(action.payload)
            state.users.push(action.payload)
        },

        userDelete(state,action){
            const {id}=action.payload;
            // console.log(id)
           const existingUser=state.users.find((data)=>data.id===id)
        //    console.log(existingUser)
        if(existingUser){
            state.users=state.users.filter((userid)=>userid.id!==id)
        }
        },

        userUpdate(state,action){
            console.log(action.payload)
            const {id,name,email}=action.payload
            const existingUser=state.users.find((user)=>user.id===id)
            if(existingUser){
                existingUser.name=name;
                existingUser.email=email
            }

        }
    }
})
export const{userAdded,userDelete,userUpdate}=userSlice.actions;
export default userSlice.reducer