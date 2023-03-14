import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
        userAdded(state,actions){
            // console.log(state)
            // console.log(actions.payload)
            state.users.push(actions.payload)
        },

        userDeleted(state,action){
            const {id}=action.payload;
            console.log(id)
            const existingID=state.users.find((userId)=>userId.id===id)
            if(existingID){
                state.users=state.users.filter((userId)=>userId.id!==id)
            }
        },
        userUpdated(state,action){
                console.log(action.payload)
                const {id , name , email}=action.payload
                const existUser=state.users.find((data)=>data.id===id)
                if(existUser){
                    // console.log(existUser.name)
                    existUser.name=name;
                    existUser.email=email;
                }
        }
    }
})
export const {userAdded, userDeleted, userUpdated}=userSlice.actions
export default userSlice.reducer
