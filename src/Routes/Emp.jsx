import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import EditEmp from '../Components3/EditEmp'
import EmpLists from '../Components3/EmpLists'
import NewEmp from '../Components3/NewEmp'
function Emp() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<EmpLists/>}></Route>
                <Route path='/empadd' element={<NewEmp/>}></Route>
                <Route path='/editemp/:id' element={<EditEmp/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Emp