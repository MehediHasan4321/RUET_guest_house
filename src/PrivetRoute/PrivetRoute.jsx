import React, { useContext } from 'react'
import { AuthContext } from '../authProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading/>
    } 
     if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
}

export default PrivetRoute