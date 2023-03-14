import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userDeleted } from './userSlice';
function UserLists() {
    const users=useSelector(state=>state.users.users)
    // console.log(users)

    const disptch=useDispatch()

    const handleDelete=(id)=>{
        disptch(userDeleted({id}))
    }
    return (
        <div>
            <Link to='/adduser'>
                <button className='btn btn-primary'>Add User</button>
            </Link>
            {users.length> 0 &&
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
                    {
                      users.map((value,index)=>{
                        return <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>
                                <Link to={`/edituser/${value.id}`}>
                                <button className='btn btn-success'>Update</button>
                                </Link> {' '}
                                <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
                
            </table>}
        </div>
    )
}

export default UserLists