import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Brand = () => {
    return (
        <div className='flex gap-2'>
            <Link to='/'> <img src={logo} alt="logo" /> </Link>
            <div>
                <h1>RUET</h1>
            </div>
        </div>
    )
}

export default Brand