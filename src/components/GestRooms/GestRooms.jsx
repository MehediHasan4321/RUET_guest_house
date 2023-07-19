import React, { useEffect, useState } from 'react'
import RoomCard from '../RoomCard/RoomCard'
import Loading from '../Loading/Loading'

const GestRooms = () => {
    const [rooms, setRooms] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://ruet-gest-house-server.vercel.app/allRooms').then(res => res.json()).then(data => setRooms(data)).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loading />
    } else {
        return (
            <div className='container mx-auto my-12 flex gap-10 flex-wrap'>
                {
                    rooms?.map(room => <RoomCard key={room._id} room={room} />)
                }
            </div>
        )
    }
}

export default GestRooms