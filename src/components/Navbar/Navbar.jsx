import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../authProvider/AuthProvider'
import Brand from '../../authProvider/Logo/Logo'
const Navbar = () => {
    const {user,logOut,userRole} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className=' w-full h-20 bg-[#032447] text-white'>
            <div className="container mx-auto flex justify-between items-center h-full">
            <Brand/>
            <div className='flex gap-6 items-center h-full'>
                <Link to={'/'}>Home</Link>
                {userRole === 'user' && <Link to={`/myBooking/${user?.email}`}>My booking</Link>}
                {userRole === 'admin' && <Link to={`/dashboard`}>Dashboard</Link>}
                {user? <button onClick={handleLogOut} className='bg-white text-[#032447] px-4 py-1'>Log out</button>: <Link to={'/login'}>Login</Link>}
            </div>
            </div>
        </div>
    )
}

export default Navbar