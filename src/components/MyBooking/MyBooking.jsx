import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const MyBooking = () => {
    const bookingInfo = useLoaderData()

    const handelCancelbooking = id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'cancelled!',
                'Your file has been cancelled.',
                'success'
              )
            }
          })
    }

    if(bookingInfo<1){
        return <h1 className='text-3xl font-semibold text-neutral-700 text-center mt-10 min-h-screen'>You Have Not Booking Yet. Please Booking First</h1>
    }else{
        return (
            <div className="overflow-x-auto min-h-screen">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-md'>
                            <th>Serial</th>
                            <th>User Name</th>
                            <th>User Distination</th>
                            <th>User Department</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Total Guest</th>
                            <th>Total Price</th>
                            <th>Host Email</th>
                            <th>Cancel Booking</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingInfo.map((info)=><tr key={info._id}>
                                <th>{bookingInfo.length}</th>
                                <td>{info?.name}</td>
                                <td>Not Found</td>
                                <td>{info?.department}</td>
                                <td>{info?.from}</td>
                                <td>{info?.to}</td>
                                <td>{info?.gestQuantity}</td>
                                <td>{info?.totalPrice}</td>
                                <td>{info?.hostEmail}</td>
                                <td><button onClick={()=>handelCancelbooking(info._id)} className='btn btn-sm'>cancel</button></td>
                                <td><button className='btn btn-sm'>Pay</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default MyBooking