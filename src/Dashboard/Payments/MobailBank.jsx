import React from 'react'

const MobailBank = ({metod}) => {
    return (
        <>
            <div className='space-y-4'>
                <div>
                <label className='text-md font-semibold' htmlFor="cardHolderName">Plz Provide Your <span className='text-purple-400 uppercase'>{metod}</span> Number</label>
                <input className='w-full p-2 outline-none border-[1px] rounded-md mt-2' type="number" name="name" id="cardHolderName" placeholder={`Enter Your ${metod} Phone Number`} />
                </div>
                <div>
                    <label className='text-md font-semibold' htmlFor="Security Code">Enter Your Security Code</label>
                    <input className='w-full p-2 outline-none border-[1px] rounded-md mt-2' type="number" name="name" id="cardHolderName" placeholder={`Enter Your ${metod} Security Code`} />
                </div>
            </div>
        </>
    )
}

export default MobailBank