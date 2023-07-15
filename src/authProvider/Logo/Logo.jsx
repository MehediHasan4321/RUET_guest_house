import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Brand = () => {
    return (
        <div>
            <Link to='/'> <img src={logo} alt="logo" /> </Link>
        </div>
    )
}

export default Brand