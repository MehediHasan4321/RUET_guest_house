import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ManageBooking = () => {
    const bookings = useLoaderData()
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking,index)=><tr key={booking._id}>
                        <th>{index}</th>
                        <td>{booking?.name}</td>
                        <td>{booking?.userEmail}</td>
                        <td></td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default ManageBooking