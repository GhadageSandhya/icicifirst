import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Components1/userSlice';
export default configureStore({
    reducer:{
        users:userReducer,
    }
})