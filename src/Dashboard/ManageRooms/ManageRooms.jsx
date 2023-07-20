import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteRoom } from '../../allApi/deleteRoomById'
import useAxiosSecures from '../../Utlites/useAxiosSecures'
import { useQuery } from '@tanstack/react-query'
const ManageRooms = () => {
    const { axioxSucuser } = useAxiosSecures()
    const { data: rooms = [], refetch } = useQuery({
        queryKey: ['deleteRoom'],
        queryFn: async () => {
            const res = await axioxSucuser(`/allRooms`)
            return res.data
        }
    })
    const handlDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRoom(id).then(res => {

                    if (res.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch()
                    }
                })

            }
        })
    }
    return (
        <>
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
                            rooms.map((room, index) => <tr key={room._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={room?.mainImage} alt="Room" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{room?.title}</div>
                                            <div className="text-sm opacity-50">{room?.isActive ? 'Active' : "Not Active"}</div>
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
                                    <Link to={`/dashboard/updateRoom/${room?._id}`} className="btn btn-ghost btn-xs">Update</Link>
                                </th>
                                <th>
                                    <button onClick={() => handlDelete(room._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </>
    )
}

export default ManageRooms
