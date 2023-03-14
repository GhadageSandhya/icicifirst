import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Components/userSlice';
export default configureStore({
    reducer:{
        users:userReducer,
    }
})