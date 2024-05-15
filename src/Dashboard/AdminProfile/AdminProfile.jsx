import  { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import GetUserByEmail from '../../allApi/GetUserByEmail'


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const { data } = GetUserByEmail(user?.email)
    // const handlaSubmit = e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const image = form.image;
    //     console.log(image)
    // }
    return (
        <div className='container mx-auto my-10'>
            <div className='flex gap-4'>
                <div className=' relative'>
                    <img className='w-96 h-96 rounded-lg ' src={data?.image ? data?.image : 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg'} alt="Profile Pic" />
                    <span className='text-sm bg-purple-400 text-white rounded-md px-2 absolute top-2  right-2'>{data?.role}</span>
                </div>
                <div className=' space-y-3 ml-5'>
                    <h1 className='text-3xl font-semibold'>Name: {data?.name}</h1>
                    <h1 className='text-xl font-semibold'>Email: {data?.email}</h1>
                    <h1 className='text-xl font-semibold'>Department: {data?.department}</h1>
                    <h1 className='text-xl font-semibold'>Phone: {data?.phoneNumber}</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminProfile
//