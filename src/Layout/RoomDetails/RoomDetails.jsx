import React, { useEffect, useState } from 'react'
import PrivetRoute from '../../PrivetRoute/PrivetRoute'
import BookingForm from '../../components/BookingForm/BookingForm'

const RoomDetails = () => {
    const [roomDetails, setRoomDetails] = useState({})
    const singleRoom = roomDetails[0]
    const { image, gest, availableSet, price, rating, host, description, title, bathroom } = singleRoom || {}
    
    useEffect(() => {
        fetch('gestRoom.json').then(res => res.json()).then(data => setRoomDetails(data))
    }, [])

    return (
        <div className='container mx-auto my-12'>
            <div className='flex gap-3'>
                <img className='w-1/2 max-h-[53vh]' src={image} alt="" />
                <div className='w-1/2 grid grid-cols-2 grid-rows-2 gap-4'>
                    <img className='w-full' src={image} alt="" />
                    <img className='w-full' src={image} alt="" />
                    <img className='w-full' src={image} alt="" />
                    <img className='w-full' src={image} alt="" />
                </div>
            </div>
            <div className='w-full flex gap-4 mt-10'>
                <div className='w-1/2 space-y-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-xl font-semibold'>{title}</h1>
                            <div className='flex flex-row gap-4'>
                                <span>{gest} guests</span>
                                <span>{bathroom} bathroom</span>
                                <span>{availableSet} available seat</span>
                                <span>{price} per day/person</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src={host?.hostImage} alt="" />
                            <div>
                                <h1>{host?.hostName}</h1>
                                <p>{host?.hostEmail}</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-neutral-600'>{description}</p>
                </div>
                <div className='w-1/2'>
                    <BookingForm room={singleRoom}/>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails