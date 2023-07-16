import React, { useContext } from 'react'
import { AuthContext } from '../authProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-3xl font-semibold text-center mt-10'>Loading....</h1>
    } 
     if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
}

export default PrivetRoute