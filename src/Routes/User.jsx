import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import AddUser from '../Components2/AddUser'
import UpdateUser from '../Components2/UpdateUser'
import UserLists from '../Components2/UserLists'
function User() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<UserLists/>}></Route>
                <Route path='/adduser' element={<AddUser/>}></Route>
                <Route path='/edituser/:id' element={<UpdateUser/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default User