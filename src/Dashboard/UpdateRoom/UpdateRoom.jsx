import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateRoom = () => {
    const roomInfo= useLoaderData()
    const {bathroom,description,title,subImage,mainImage,guest    } = roomInfo ||{}
    const handleUpdateRoom = e=>{


    }

    return (
        <div style={{backgroundImage:`linear-gradient(80deg,#ffafbd,#ffc3a0)`}}>
            <div className='container mx-auto h-[88vh] flex items-center'>
            <form onSubmit={handleUpdateRoom} className='space-y-3 w-full bg-[#138496] p-10'>
                <div className='flex gap-3'>
                    <input type="text" name="roomName" required className='w-full p-2  outline-none' placeholder='Enter Your Room Name' id="" />
                    <input type="url" name="mainImage" required className='w-full p-2  outline-none' id="" placeholder='Provide Room Main Image URL' />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="url" name="subImage1" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                    <input type="url" name="subImage2" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="url" name="subImage3" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                    <input type="url" name="subImage4" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                </div>
                <div className='flex gap-3 w-full'>
                    <input type="number" name="bathroom" required className='w-1/3 p-2  outline-none' id="" placeholder='Bathroom Quantity' />
                    <input type="number" name="guest" required className='w-1/3 p-2  outline-none' id="" placeholder='Total Guest Quantity' />
                    <input type="number" name="price" required className='w-1/3 p-2  outline-none' id="" placeholder='Room Price Pay Day' />
                </div>
                <div>
                    <textarea name="description" required id="" className='w-full h-32 p-2  outline-none' placeholder='Enter Room Description'></textarea>
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