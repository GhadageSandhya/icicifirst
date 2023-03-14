import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import {empDelete} from './userSlice';
function EmpLists() {
  const emp=useSelector(state=>state.emp.emp)
  console.log(emp);

  const dispatch=useDispatch();
  const handleDelete=(id)=>{
    dispatch(empDelete({id}))
  }
  return (
    <div>
        <Link to={'/empadd'}>
        <button className='btn btn-secondary'>Add Emp</button>
        </Link>
    {emp.length>0 &&
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map((data,index)=>{
                      return <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                          <Link to={`/editemp/${data.id}`}>
                          <button className='btn btn-success'>Edit</button>
                          </Link>
                          <button className='btn btn-danger' onClick={()=>handleDelete(data.id)}>Delete</button>
                        </td>
                      </tr>
                    })}
                </tbody>
                
            </table>
          }
    </div>
  )
}

export default EmpLists