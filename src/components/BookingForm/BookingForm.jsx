import React, { useContext, useState } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'

const BookingForm = ({ room }) => {
    const [quantity, setQuandtity] = useState(1)
    const {user} = useContext(AuthContext)
    const handelBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const userEmail = user?.email;
        const department= form.department.value
        const emplyee = form.emplyee.value;
        const from = form.from.value;
        const to= form.to.value;
        const gestQuantity = form.gestQuantity.value;
        const totalPrice = parseFloat(form.totalPrice.value);
        const hostEmail = room?.host?.hostEmail
        const booking = {name,userEmail,department,emplyee,from,to,gestQuantity,totalPrice,hostEmail}
        console.log(booking)
    }
 
    return (
        <form onSubmit={handelBooking} className='w-full space-y-3'>
            <div className='flex gap-3'>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' value={user?.displayName} className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
                <input type="email" name="email" required id="email" placeholder='Enter Your Email' value={user?.email} className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
            </div>
            <div className='flex gap-3'>
                <input type="text" name="department" id="department" placeholder='Enter Your department' value={'CSE'} className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
                <input type="text" name="emplyee" id="email" placeholder='Enter Your emplyee' value={"MERN Stack Web Developer"} className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
            </div>
            <div className='flex gap-3'>
                <input type="date" required name="from" id="from" className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
                <input type="date" required name="to" id="to" className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />

            </div>
            <div className='flex gap-3'>
                <input onChange={() => setQuandtity(gestQuantity.value)} type="number" required defaultValue={1} name="gestQuantity" id="gestQuantity" className='w-1/2 py-2 bg-red-100 pl-2 outline-none placeholder:text-black' />
                <input type="text" name="totalPrice" id="totolPrice" value={room?.price * quantity} className='w-1/2 py-2 bg-red-100 pl-2 outline-none' />
            </div>
            <div>
                <input className='w-full py-2 bg-red-200 cursor-pointer font-semibold hover:bg-purple-200' type="submit" value="Reserve The Room" />
            </div>
        </form>
    )
}

export default BookingForm