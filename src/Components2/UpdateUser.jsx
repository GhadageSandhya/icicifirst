import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userUpdated } from './userSlice';
function UpdateUser() {

  const {pathname}=useLocation()
  // console.log(pathname)

  const userId=parseInt(pathname.replace('/edituser/',''))
  // console.log(userId)

  const users=useSelector(state=>state.users.users.find((user)=>user.id===userId))
  // console.log(users)

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [name,setName]=useState(users.name);
  const [email,setEmail]=useState(users.email);

  const handleUpdate=(e)=>{
      
      dispatch(userUpdated({id:userId,name,email}))
      navigate('/')
      e.preventDefault();
  }

  return (
    <div className='container mt-5 w-25'>
      <h4>Add User</h4>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default UpdateUser