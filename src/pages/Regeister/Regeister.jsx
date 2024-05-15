import { BsFillPersonFill, BsFillTelephoneFill, BsFillLockFill } from 'react-icons/bs'
import { getAuth, updateProfile } from "firebase/auth";
import { AiFillMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import app from '../../firebase/firebase_config';
import { saveUserToDB } from '../../allApi/saveUsetToDB';
const Regeister = () => {
    const randomNumber = Math.round(Math.random()*10000)
    const {createUserWithEmailPass} = useContext(AuthContext)
    const navigate = useNavigate()
    const auth = getAuth(app)
    const handleRegeister = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.englishName.value
        const emploee = form.employee.value;
        const department = form.department.value;
        const designation = form.designation.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        //const confirmPassword = form.confirmPassword.value
        const email = form.email.value;
       // const varificationNumber = form.varificationNumber.value;
        const regeisterInfo = {name,emploee,department,designation,phoneNumber,email}
        console.log(regeisterInfo)
        createUserWithEmailPass(email,password).then(()=>{
            updateProfile(auth.currentUser,{displayName:name}).then(()=>{
                saveUserToDB(regeisterInfo).then((res)=>{
                    if(res.upsertedId || res.modifiedCount>0){
                        navigate('/')
                    }
                })
                
            }).catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
   
    return (
        <div className='w-full h-[90vh] flex justify-center items-center' style={{ backgroundImage: 'url(https://bdesheba.com/wp-content/uploads/2023/03/RUET.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <form onSubmit={handleRegeister} className='container mx-auto bg-[#138496] border-[1px] border-white p-4'>
                <h1 className='text-4xl font-semibold'>Regeister as a Teacher/Staf</h1>
                <hr className='border-[1px] border-[#032447] my-3' />
                <div className='w-full flex gap-6'>
                    <div className='w-1/2 space-y-4'>
                        <div className='w-full flex items-center border-[1px] border-white '>
                            <label className='text-xl px-2 text-white'><BsFillPersonFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="text" name="englishName"  placeholder='Enter Your Name (English)' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white text-black'>
                            <label className='text-xl px-2 text-white'><BsFillPersonFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="text" name="employee" id="employee" placeholder='Select Employee Type' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white text-black'>
                            <label className='text-xl px-2 text-white'><BsFillPersonFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="text" name="department"  placeholder='Select Your Department' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white text-black'>
                            <label className='text-xl px-2 text-white'><BsFillPersonFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="text" name="designation"  placeholder='Where are you come from?' />
                        </div>
            
                    </div>
                    <div className='w-1/2 space-y-4'>
                        <div className='w-full flex items-center border-[1px] border-white text-black'>
                            <label className='text-xl px-2 text-white'><BsFillTelephoneFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="number" name="phoneNumber"  placeholder='Enter Your Phone Number' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white'>
                            <label className='text-xl px-2 text-white'><AiFillMail /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="email" name="email"  placeholder='Enter Your Email' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white '>
                            <label className='text-xl px-2 text-white'><BsFillLockFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="password" name="password" id="password" placeholder='Password' />
                        </div>
                        <div className='w-full flex items-center border-[1px] border-white '>
                            <label className='text-xl px-2 text-white'><BsFillLockFill /></label>
                            <input className='w-full px-2 py-1 outline-none' required  type="password" name="confirmPassword"  placeholder='Confirm Password' />
                        </div>
                        <div className='flex'>
                            <span className='bg-[#2B7D05] py-2 px-4 '></span>
                            <div className=' flex flex-col w-48'>
                                <input type="text" disabled className='pl-2' id="" value={randomNumber} />
                                <input type="text" name="varificationNumber" required  className='pl-2 outline-none' id="" placeholder='Enter The Number' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full flex justify-between items-center my-8'>
                    <h4 className='text-md font-semibold'>Already have an Account? <Link to={'/login'} className='text-white cursor-pointer'>Login</Link></h4>
                    <input type="submit"  className='bg-white px-8 py-2 text-black cursor-pointer rounded-md disabled:bg-neutral-200' value="Regeister" />
                </div>
            </form>
        </div>
    )
}

export default Regeister