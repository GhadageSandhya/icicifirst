import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {userAdded} from './userSlice';
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const users=useSelector((state)=>state.users.users.length)
    // console.log(users)

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
       
        // alert(`Name: ${name} Email: ${email}`)
        dispatch(userAdded({
            id:users+1,name,email
        }));
        navigate('/')
        e.preventDefault();
    }
  return (
    <div className="App">
    <div>AddUser</div>

    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <label>Email</label>
        <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <button>Submit</button>
    </form>
    </div>
  )
}

export default AddUser