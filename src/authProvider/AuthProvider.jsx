import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import app from '../firebase/firebase_config'
import {  createContext, useEffect, useState } from 'react'
import { getUserRole } from '../allApi/getUserRoleByEmail'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [userRole,setUserRole] = useState('')
    const createUserWithEmailPass = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmailPass = (email,passowrd)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passowrd)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[auth])

    useEffect(()=>{
        getUserRole(user?.email).then(data=>setUserRole(data.role))
    },[user])
  
    const userInfo = {
        user,
        createUserWithEmailPass,
        loginWithEmailPass,
        loading,
        logOut,
        userRole
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider