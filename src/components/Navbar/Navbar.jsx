import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../authProvider/AuthProvider'
import Logo from '../../assets/logo.png'
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className=' w-full h-20 bg-[#032447] text-white'>
            <div className="container mx-auto flex justify-between items-center h-full">
            <Link to='/'> <img src={Logo} alt="logo" /> </Link>
            <div className='flex gap-6 items-center h-full'>
                <Link to={'/'}>Home</Link>
                {user? <Link>Dashboard</Link> : <Link to={'/login'}>Login</Link>}
                {user && <button onClick={handleLogOut} className='bg-white text-[#032447] px-4 py-1'>Log out</button>}
            </div>
            </div>
        </div>
    )
}

export default Navbar