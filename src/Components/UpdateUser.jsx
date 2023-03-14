import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate ,useLocation} from 'react-router-dom';
import { userUpdate } from './userSlice';
function UpdateUser() {
 

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {pathname}=useLocation();
  console.log(pathname)

  const userId=parseInt(pathname.replace('/edituser/',''))
  console.log(userId)

  const user=useSelector((state)=>state.users.users.find((data)=>data.id===userId))
  console.log(user)

  const [name,setName]=useState(user.name)
  const [email,setEmail]=useState(user.email)
  const handelUpdate=()=>{
     dispatch(userUpdate({id:userId,name,email}))
     navigate('/')
  }
  return (
    <div>
      UpdateUser
      <form onSubmit={handelUpdate}>
        <label>Name</label>
        <input type="text"   value={name} onChange={(e)=>{setName(e.target.value)}}/>

        <label>Email</label>
        <input type="email"   value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <button type='submit'>Submit</button>
      </form>
      
      </div>
  )
}

export default UpdateUser