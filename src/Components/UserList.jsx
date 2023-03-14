import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {userDeleted} from './userSlice'
function UserList() {
    const users= useSelector(state => state.users.users)
    console.log(users)

    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        // console.log(id)
        dispatch(userDeleted({id}))
    }
    return (
        <div>
            UserList
            
            <Link to={'/adduser'}>
                <button>Add User</button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((data,index)=>{
                    return <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                        <Link to={`/edituser/${data.id}`}>
                        <button>Update</button> 
                        </Link>
                        <button onClick={()=>handleDelete(data.id)}>Delete</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList