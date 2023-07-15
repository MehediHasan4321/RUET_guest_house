import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ManageRooms = () => {
    const rooms = useLoaderData()
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Room</th>
                        <th>Host</th>
                        <th>Guest Quantity</th>
                        <th>Price</th>
                        <th>Update Room</th>
                        <th>Delete Room</th>
                    </tr>
                </thead>
                <tbody>
                {
                    rooms.map((room,index)=><tr>
                    <th>{index +1}</th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={room?.mainImage} alt="Room" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{room?.title}</div>
                                <div className="text-sm opacity-50">{room?.isActive? 'Active':"Not Active"}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {room?.hostName}
                        <br />
                        <span className="badge badge-ghost badge-sm">{room?.hostEmail}</span>
                    </td>
                    <td>{room?.guest}</td>
                    <td>{room?.price}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">Update</button>
                    </th>
                    <th>
                        <button className="btn btn-ghost btn-xs">Delete</button>
                    </th>
                </tr>)
                }
                    
                </tbody>


            </table>
        </div>
    )
}

export default ManageRooms