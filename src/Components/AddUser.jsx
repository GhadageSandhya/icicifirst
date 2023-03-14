import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {userAdded} from './userSlice';
import { useNavigate } from 'react-router-dom';
function AddUser() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')

  const userID=useSelector((state)=>state.users.users.length)
  console.log(userID)

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handelSubmit=(e)=>{
      e.preventDefault();
      // alert(`Name: ${name} Email: ${email}`)
      dispatch(userAdded({
        id:userID+1,name,email
      }))
      navigate('/')

  }
  return (
    <div>
      AddUser
      <form onSubmit={handelSubmit}>
        <label>Name</label>
        <input type="text"   value={name} onChange={(e)=>{setName(e.target.value)}}/>

        <label>Email</label>
        <input type="email"   value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <button type='submit'>Submit</button>
      </form>
      
      </div>
  )
}

export default AddUser