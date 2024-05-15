

const CreditCard = () => {
    return (
        <>
            <h1 className="text-md font-semibold my-2">Or, checkout using a credit Card</h1>
            <div className='border-[1px] rounded-xl p-8 space-y-3'>
                <div>
                    <label className='text-md font-semibold' htmlFor="cardHolderName">Cardholder Name</label>
                    <input className='w-full py-2 outline-none border-[1px] rounded-md mt-2' type="text" name="name" id="cardHolderName" />
                </div>
                <div className='flex gap-3'>
                    <div>
                        <label className='text-md font-semibold' htmlFor="cardNumber">Card Number</label>
                        <input className='w-full p-2  outline-none border-[1px] rounded-md mt-2' type="text" name="cardNumber" id="cardNumber" placeholder='4444 4444 4444 4444' />
                    </div>
                    <div>
                        <label className='text-md font-semibold' htmlFor="expiration">Expiration</label>
                        <input className=' p-2  outline-none border-[1px] rounded-md mt-2' type="text" name="expiration" id="expiration" placeholder='MM/YY' />
                    </div>
                    <div>
                        <label className='text-md font-semibold' htmlFor="cvc">CVC</label>
                        <input className='p-2  outline-none border-[1px] rounded-md mt-2' type="text" name="cvc" id="cvc" placeholder='123' />
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold' htmlFor="zip">Your Zip Code</label>
                        <input className='w-48 p-2  outline-none border-[1px] rounded-md mt-2' type="text" name="zip" id="zip" placeholder='Your ZIP Code' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreditCard