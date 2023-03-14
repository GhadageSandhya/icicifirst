import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { empEdit } from './userSlice';
function EditEmp() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
const {pathname}=useLocation();
console.log(pathname)

const empId=parseInt(pathname.replace('/editemp/',''))
console.log(empId)

const empData=useSelector(state=>state.emp.emp.find((empid)=>empid.id===empId))
console.log(empData)

  const [name, setName]=useState(empData.name)
  const [email, setEmail]=useState(empData.email)

  const handleEdit=(e)=>{
    dispatch(empEdit({id:empId,name,email}))
    navigate('/')
    e.preventDefault();
  }
  return (
    <div className='container mt-5 w-25'>
    <h4>Add User</h4>
    <form onSubmit={handleEdit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Update</button><br/>
      
    </form>
  </div>
  )
}

export default EditEmp