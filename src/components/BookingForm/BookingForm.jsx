import { useContext, useState } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import { saveBooking } from '../../allApi/saveBookingToDB'
import Swal from 'sweetalert2'
import GetUserByEmail from '../../allApi/GetUserByEmail'
const BookingForm = ({ room }) => {
    const [quantity, setQuandtity] = useState(1)
    const { user, userRole } = useContext(AuthContext)
    const { data: userInfo = [], refetch } = GetUserByEmail(user?.email)

    const handelBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const userEmail = user?.email;
        const department = form.department.value
        const emplyee = form.emplyee.value;
        const from = form.from.value;
        const to = form.to.value;
        const gestQuantity = form.gestQuantity.value;
        const totalPrice = parseFloat(form.totalPrice.value);
        const hostEmail = room?.hostEmail;
        const status = 'painding'
        const booking = { name, userEmail, department, emplyee, from, to, gestQuantity, totalPrice, hostEmail, status, designation: userInfo?.designation, isPayment: false,roomId:room?._id }
        saveBooking(booking)
            .then((res) => {
                if (res.insertedId) {
                    form.reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your booking has been saved, Plz Pay for confirmation',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err.message)
            })
            .finally()

    }

    return (
        <form onSubmit={handelBooking} className='w-full space-y-3'>
            <div className='flex gap-3 w-full'>
                <div className='flex flex-col w-1/2'>
                    <p htmlFor="name">Your Name</p>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' defaultValue={userInfo?.name} className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" required id="email" placeholder='Enter Your Email' defaultValue={userInfo?.email} className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="department">Your department</label>
                    <input type="text" name="department" id="department" placeholder='Enter Your department' defaultValue={userInfo?.department} className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="emplyee">Your Emplyee Status</label>
                    <input type="text" name="emplyee" id="emplyee" placeholder='Enter Your emplyee' defaultValue={userInfo?.emploee} className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
            </div>
            <div className='flex gap-3'>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="from">From</label>
                    <input type="date" required name="from" id="from" className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="to">To</label>
                    <input type="date" required name="to" id="to" className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>

            </div>
            <div className='flex gap-3'>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="gestQuantity">Your Total Guest</label>
                    <input onChange={() => setQuandtity(gestQuantity.value)} type="number" required defaultValue={1} name="gestQuantity" id="gestQuantity" className='w-full py-2 bg-red-100 pl-2 outline-none placeholder:text-black' />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="totolPrice">Total Payable price</label>
                    <input type="text" name="totalPrice" id="totolPrice" value={room?.price * quantity} className='w-full py-2 bg-red-100 pl-2 outline-none' />
                </div>
            </div>
            <div>
                <input className='w-full py-2 bg-red-200 cursor-pointer font-semibold hover:bg-purple-200 disabled:bg-neutral-600' type="submit" disabled={userRole === 'admin'} value="Reserve The Room" />
            </div>
        </form>
    )
}

export default BookingForm