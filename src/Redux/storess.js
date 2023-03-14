import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Components2/userSlice';
import empReducer from '../Components3/userSlice';
export default configureStore({
    reducer:{
        users:userReducer,
        emp:empReducer
    }
})
