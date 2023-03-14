import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {empAdded} from '../Components3/userSlice';
function NewEmp() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const empId=useSelector(state=>state.emp.emp.length)
  console.log(empId)

  const dispatch=useDispatch();
const navigate=useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(empAdded({
        id:empId+1,name,email
      }))
      navigate('/')
  }
  return (
    <div>
      <div className='container mt-5 w-25'>
      <h4>Add User</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button><br/>
        
      </form>
    </div>
    </div>
  )
}

export default NewEmp