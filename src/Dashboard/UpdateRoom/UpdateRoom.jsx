import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateRoom } from '../../allApi/updateRoomById'

const UpdateRoom = () => {
    const roomInfo = useLoaderData()
    const navigate = useNavigate()
   
    const handleUpdateRoom = e => {
        e.preventDefault()
        const form = e.target;
        const name= form.roomName.value;
        const mainImage = form.mainImage.value;
        const subImage1 = form.subImage1.value;
        const subImage2 = form.subImage2.value;
        const subImage3 = form.subImage3.value;
        const subImage4 = form.subImage4.value;
        const subImage = [subImage1,subImage2,subImage3,subImage4]
        const bathroom = form.bathroom.value;
        const guest = form.guest.value;
        const price = form.price.value
        const description = form.description.value
        const room = {name,mainImage,subImage,bathroom,guest,price,description}
        
        updateRoom(roomInfo._id,room).then(res=>{
            if(res.modifiedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your room has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/manageRooms')
            }
        })
    }
    const { bathroom, description, title, subImage, mainImage, guest,price } = roomInfo || {}

    return (
        <div style={{ backgroundImage: `linear-gradient(80deg,#ffafbd,#ffc3a0)` }}>
            <div className='container mx-auto h-[88vh] flex items-center'>
                <form onSubmit={handleUpdateRoom} className='space-y-3 w-full bg-[#138496] p-10'>
                    <div className='flex gap-3'>
                        <div className='w-full'>
                            <label htmlFor="roomName" className='text-white'>Update Your Room Name</label>
                            <input type="text" defaultValue={title} name="roomName" id="roomName" required className='w-full p-2  outline-none' placeholder='Enter Your Room Name' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="mainImage" className='text-white'>Update Your Room Main Image</label>
                            <input type="url" name="mainImage" defaultValue={mainImage} required className='w-full p-2  outline-none' id="mainImage" placeholder='Provide Room Main Image URL' />
                        </div>
                    </div>
                    <div className="flex gap-3 w-full">
                        <div className='w-full'>
                            <label htmlFor="subImage1" className='text-white'>Update Your Room Sub Image</label>
                            <input type="url" name="subImage1" defaultValue={subImage[0]} required className='w-full p-2  outline-none' id="subImage1" placeholder='Provide Room Main Image URL' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="subImage2" className='text-white'>Update Your Room Sub Image</label>
                            <input type="url" name="subImage2" defaultValue={subImage[1]} required className='w-full p-2  outline-none' id="subImage2" placeholder='Provide Room Main Image URL' />
                        </div>
                    </div>
                    <div className="flex gap-3 w-full">
                        <div className='w-full'>
                            <label htmlFor="subImage3" className='text-white'>Update Your Room Sub Image</label>
                            <input type="url" name="subImage3" defaultValue={subImage[2]} required className='w-full p-2  outline-none' id="subImage3" placeholder='Provide Room Main Image URL' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="subImage4" className='text-white'>Update Your Room Sub Image</label>
                            <input type="url" name="subImage4" defaultValue={subImage[3]} required className='w-full p-2  outline-none' id="subImage4" placeholder='Provide Room Main Image URL' />
                        </div>
                    </div>
                    <div className='flex gap-3 w-full'>
                        <input type="number" name="bathroom" defaultValue={bathroom} required className='w-1/3 p-2  outline-none' id="bathroom" placeholder='Bathroom Quantity' />
                        <input type="number" name="guest" defaultValue={guest} required className='w-1/3 p-2  outline-none' id="guest" placeholder='Total Guest Quantity' />
                        <input type="number" name="price" defaultValue={price} required className='w-1/3 p-2  outline-none' id="price" placeholder='Room Price Pay Day' />
                    </div>
                    <div>
                        <textarea name="description" defaultValue={description} required id="description" className='w-full h-32 p-2  outline-none' placeholder='Enter Room Description'></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Update Room" className='w-full bg-red-200 hover:bg-purple-400 py-2' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateRoom