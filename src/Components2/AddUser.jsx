import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { userAdded } from './userSlice';
import { useNavigate } from 'react-router-dom';
function AddUser() {

  const userId=useSelector(state=>state.users.users.length)
  // console.log(userId)

  const dispatch=useDispatch();
  const navigate=useNavigate(); 

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(userAdded({
      id:userId+1,name,email
    }))
    navigate('/')

  }
  return (
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
        {/* {name.charAt(0).toUpperCase()+name.slice(1)} */}
        {name.toUpperCase()}
      </form>
    </div>
  )
}

export default AddUser