import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import CreditCard from "./CreditCard"
import MobailBank from "./MobailBank"


const Payments = () => {
    const [paymentMethod, setPaymentMetod] = useState('bkash')
    const [paymentSystem, setPaymentSystem] = useState('mobilbanking')
    const mobailBanking = [
        {
            _id: "001",
            "name": "bkash",
            "image": "https://www.logo.wine/a/logo/BKash/BKash-bKash2-Logo.wine.svg",
            "method": "mobilbanking"
        },
        {
            "_id": "002",
            "name": "nagad",
            "image": "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png",
            "method": "mobilbanking"
        },
        {
            "_id": "003",
            "name": "rocket",
            "image": "https://ibtbd.net/wp-content/uploads/2017/08/rocket.jpg",
            "method": "mobilbanking"
        },
        {
            "_id": "004",
            "name": "upay",
            "image": "https://api.upaybd.com/media/dynamic_image/Website_Footer.png",
            "method": "mobilbanking"
        },
        {
            "_id": "005",
            "name": "Credit Card",
            "image": "https://cdn-icons-png.flaticon.com/512/7510/7510522.png",
            "method": "card"
        }
    ]
    const roomInfo = useLoaderData()
    const handleOnChange = (method, system) => {
        setPaymentMetod(method)
        setPaymentSystem(system)
    }
    return (
        <div className='container mx-auto my-10'>
            <div className='w-full h-[80vh] flex'>
                <img className=' object-cover' src="https://cdni.iconscout.com/illustration/premium/thumb/fund-raising-7210628-5854798.png?f=webp" alt="payment Image" />
                <div className='w-1/2'>
                    <h1 className='text-2xl font-semibold my-5'>Payment Details</h1>
                    <div className='flex justify-between gap-3 my-10'>
                        {
                            mobailBanking.map(item => <label key={item?._id} htmlFor={item?.name} className="w-32 h-20 cursor-pointer flex items-center">
                                <input onChange={() => handleOnChange(item?.name, item?.method)} checked={paymentMethod === item?.name} type="checkbox" name={item?.name} id={item?.name} />
                                <img className='w-full h-full' src={item.image} alt="banking Image" />
                            </label>
                            )
                        }
                    </div>

                    {paymentSystem === 'mobilbanking' ? <MobailBank metod={paymentMethod} /> : <CreditCard />}


                    <div className="space-y-3 mt-10">
                        <div className="flex justify-between items-center">
                            <span>Totol Price : </span>
                            <span>{roomInfo?.totalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Discound : </span>
                            <span>00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Payable Price : </span>
                            <span>{roomInfo?.totalPrice}</span>
                        </div>
                        <hr className="border-[1px] my-4" />
                        <button className='w-full btn btn-sm'>Pay {roomInfo?.totalPrice}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments