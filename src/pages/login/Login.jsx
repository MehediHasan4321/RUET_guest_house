import { Link, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { useContext, useState } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'

const Login = () => {
    const {loginWithEmailPass} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [error,setError] = useState('')
    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailPass(email,password).then(()=>{
            form.reset()
            navigate(from,{replace:true})
        }).catch(err=>{
            setError(err.message)
        })
        
    }
    return (
        <>
            <div className='w-full h-[90vh] flex justify-center items-center text-white' style={{ backgroundImage: 'url(https://bdesheba.com/wp-content/uploads/2023/03/RUET.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className=' w-2/6 h-auto py-10 bg-[#032447] opacity-90'>
                    <h1 className='text-4xl font-semibold text-white text-center mt-4'>Sign In</h1>
                    <form onSubmit={handleLogin} className='p-4 space-y-4'>
                        <input className=' w-full p-2 bg-white text-black' required type="email" name="email" id="" placeholder='Enter Your Email' />
                        <input className=' w-full p-2 bg-white text-black' required type="password" name="password" id="" placeholder='Enter Your passowrd' />
                        <div className='flex justify-between items-center'>
                            <label htmlFor="remember" className='text-md'><input className='w-6 h-6' type="checkbox" name="remember" id="remember" /> Remember Me?</label>
                            <input className='bg-[#093363] text-white px-4 py-2' type="submit" value="Login" />
                        </div>
                        {error && <p className='text-sm text-red-600'>{error}</p>}
                        <Link className='pt-4' to="/regeister">Don't have an Account? Sign In</Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login