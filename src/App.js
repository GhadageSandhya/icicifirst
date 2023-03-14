import logo from './logo.svg';
import './App.css';

import EmpLists from './Components3/EmpLists';
import NewEmp from './Components3/NewEmp';
import EditEmp from './Components3/EditEmp';
import User from './Routes/User';
import Emp from './Routes/Emp';
import { useState } from 'react';
// import UserLists from './Components1/UserLists';
// import AddUser from './Components1/AddUser';
// import UpdateUser from './Components1/UpdateUser';
// import UserList from './Components/UserList';
// import AddUser from './Components/AddUser';
// import UpdateUser from './Components/UpdateUser';

function App() {
  const [flag, setFlag]=useState(true)
  return (
    <div>
      {/* <Router>
       <Routes>
          <Route exact path='/' element={<UserList/>}/> 
          <Route exact path='/adduser' element={<AddUser/>}/> 
          <Route exact path='/edituser/:id' element={<UpdateUser/>}/> 
       </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path='/' element={<UserLists/>}></Route>
          <Route path='/adduser' element={<AddUser/>}></Route>
          <Route path='/updateuser/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </Router> */}
      {/* {flag ? <User/> :<Emp/>} */}
      <User/>
      <Emp/>
      
    </div>
  );
}


export default App;
