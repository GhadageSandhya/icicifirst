import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
        userAdded(state,action){
            console.log(action.payload)
            state.users.push(action.payload)
        },

        userDeleted(state,action){
            const {id}=action.payload
            console.log(id)
            const existUser=state.users.find((user)=>user.id===id)
            if(existUser){
                state.users=state.users.filter((users)=>users.id!==id)
            }
        },

        userUpdate(state,action){
            console.log(action.payload)
            const {id,name,email}=action.payload;
            const existUser=state.users.find((user)=>user.id===id)
            console.log(existUser.name)
            if(existUser){
                existUser.name=name;
                existUser.email=email
            }
        }
    }
})
export const {userAdded,userDeleted,userUpdate}=userSlice.actions
export default userSlice.reducer;