import React from 'react'
import Brand from '../../authProvider/Logo/Logo'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
    return (
        <div className=' w-full h-20 bg-[#032447] text-white'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <Brand/>
                <div className='flex gap-4 items-center h-full'>
                    <Link to={'/dashboard/manageBooking'}>Manage Bookings</Link>
                    <Link to={'/dashboard/manageUsers'}>Manage Users</Link>
                    <Link to={'/dashboard/manageRooms'}>Manage Rooms</Link>
                    <Link to={'/dashboard/addroom'}>Add Rooms</Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav