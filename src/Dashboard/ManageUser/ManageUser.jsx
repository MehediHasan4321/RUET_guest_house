import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ManageUser = () => {
    const users = useLoaderData()
    const roles = ['admin',"user"]
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Distination</th>
                        <th>Department</th>
                        <th>role</th>
                        <th>Update Role</th>
                        <th>Delete User</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=> <tr key={user._id}>
                        <th>{index +1}</th>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.designation}</td>
                        <td>{user?.department}</td>
                        <td>{user?.role}</td>
                        <td><select>
                            {
                                roles.map((role,index)=><option key={index}>{role}</option>)
                            }
                            </select></td>
                        <td><button className='btn btn-sm'>Delete User</button></td>
                    </tr>)
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default ManageUser