import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Brand = () => {
    return (
        <Link to={'/'} className='flex gap-2'>
             <img src={logo} alt="logo" />
            <div>
                <h1>RUET</h1>
            </div>
        </Link>
    )
}

export default Brand