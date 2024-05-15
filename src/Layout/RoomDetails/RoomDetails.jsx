import BookingForm from '../../components/BookingForm/BookingForm'
import { useLoaderData } from 'react-router-dom'

const RoomDetails = () => {
    const singleRoom = useLoaderData()
    const { mainImage, guest, availableSet, price, hostName,hostEmail, description, title, bathroom,hostImage,subImage } = singleRoom || {}

    return (
        <div className='container mx-auto my-12'>
            <div className='flex gap-3 rounded-xl overflow-hidden'>
                <img className='w-1/2 h-[60vh] border-[1px] object-cover ' src={mainImage} alt="Main Image" />
                <div className='w-1/2 h-[60vh] grid grid-cols-2  grid-rows-2 gap-4'>
                    {
                        subImage.map((image,index)=><img className='w-full h-full border-[1px]' key={index} src={image} alt='sub Image'/>)
                    }
                </div>
            </div>
            <div className='w-full flex gap-4 mt-10'>
                <div className='w-1/2 space-y-3'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-xl font-semibold'>{title}</h1>
                            <div className='flex flex-row gap-4'>
                                <span>{guest} Guest</span>
                                <span>{bathroom} bathroom</span>
                                <span>{availableSet} available seat</span>
                                <span>{price} per day</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2'>
                            <img className='w-12 h-12 rounded-full border-[1px]' src={hostImage?hostImage:'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg'} alt="host" />
                            <div>
                                <h1>{hostName}</h1>
                                <p>{hostEmail}</p>
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