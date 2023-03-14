import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
import {userUpdate} from './userSlice';
function UpdateUser() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const {pathname}=useLocation();
    console.log(pathname)

    const userId=parseInt(pathname.replace('/updateuser/',''));
    console.log(userId)

    const user=useSelector((state)=>state.users.users.find((data)=>data.id===userId))
    console.log(user)

    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    
    const handleUpdate=(e)=>{
        dispatch(userUpdate({id:userId,name,email}))
        navigate('/')
        e.preventDefault();
    }
  return (
    <div className="App">
     <div>UpdateUser</div>

     <form onSubmit={handleUpdate}>
        <label>Name</label>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <label>Name</label>
        <input type="text" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <button>Update</button>
     </form>
    </div>
  )
}

export default UpdateUser