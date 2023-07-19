import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import { denyBooking } from '../../allApi/denyBookingById'
import useAxiosSecures from '../../Utlites/useAxiosSecures'
import { useQuery } from '@tanstack/react-query'
import { aproveBooking } from '../../allApi/aprovedBookingById'
const ManageBooking = () => {

    const { axioxSucuser } = useAxiosSecures()
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['allBooking'],
        queryFn: async () => {
            const res = await axioxSucuser(`allusersBooking`)
            return res.data
        }
    })
    const handleDeny = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, deny it!'
        }).then((result) => {
            if (result.isConfirmed) {
                denyBooking(id).then(res => {

                    if (res.deletedCount > 0) {
                        Swal.fire(
                            'Denyed!',
                            'Your file has been Denyed.',
                            'success'
                        )
                        refetch()
                    }
                })

            }
        })
    }
    const handleAprove = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approved it!'
        }).then((result) => {
         const updateBooking = {
                status:'aprove'
            }
            if (result.isConfirmed) {
                aproveBooking(id,updateBooking).then(res=>{
                    if(res.modifiedCount>0){
                        Swal.fire(
                            'Approved!',
                            'Your file has been Approved.',
                            'success'
                        )
                        refetch()
                    }
                })

            }
        })
       
    }
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>User Designation</th>
                        <th>User Department</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Total Guest</th>
                        <th>Total Price</th>
                        <th>Is Payment</th>
                        <th>Booking Status</th>
                        <th>Aprove</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img className='border-[1px] rounded-full' src="" alt="User" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{booking?.name}</div>
                                        <div className="text-sm opacity-50">{booking?.userEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{booking?.designation}</td>
                            <td>{booking?.department}</td>
                            <td>{booking?.from}</td>
                            <td>{booking?.to}</td>
                            <td>{booking?.gestQuantity}</td>
                            <td>{booking?.totalPrice}</td>
                            <td>{booking?.isPayment ? 'Payment Confirm' : 'Not Pay'}</td>
                            <td>{booking?.status}</td>
                            <td><button onClick={() => handleAprove(booking?._id)} className='btn btn-sm'>Aprove</button></td>
                            <td><button onClick={() => handleDeny(booking?._id)} className='btn btn-sm'>Deny</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ManageBooking