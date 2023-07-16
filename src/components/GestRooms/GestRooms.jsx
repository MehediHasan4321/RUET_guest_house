import React, { useEffect, useState } from 'react'
import RoomCard from '../RoomCard/RoomCard'

const GestRooms = () => {
    const [rooms,setRooms] = useState([])
    useEffect(()=>{
        fetch('https://ruet-gest-house-server.vercel.app/allRooms').then(res=>res.json()).then(data=>setRooms(data))
    },[])

    return (
        <div className='container mx-auto my-12 flex gap-10 flex-wrap'>
            {
                rooms?.map(room=><RoomCard key={room._id} room={room}/>)
            }
        </div>
    )
}

export default GestRooms