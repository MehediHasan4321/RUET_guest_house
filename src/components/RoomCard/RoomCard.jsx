import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
    const { image, gest, bathroom, availableSet, host, price, title } = room || {}

    return (
        <div className='w-[320px] h-[400px] bg-neutral-100 relative'>
            <img className='w-full h-[200px]' src={image} alt="room image" />
            <div className='p-2 space-y-3'>
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className='absolute bottom-12 right-0 left-0 w-full px-4 space-y-3'>
                    <div className='flex justify-between items-center font-semibold'>
                        <h1>Total Seat : {gest}</h1>
                        <h1>available Seat : {availableSet}</h1>
                    </div>
                    <div className=' flex justify-between items-center font-semibold'>
                        <h1>Price: {price}</h1>
                        <h1>Rating: 3 star</h1>
                    </div>
                </div>
            </div>
            <Link to={'/roomDetails'}><button className='bg-[#032447] text-white font-semibold w-full py-2 absolute bottom-0 hover:bg-purple-400'>Book Now</button></Link>

        </div>
    )
}

export default RoomCard