export const saveBooking = async (bookingInfo)=>{
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/usersBooking`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(bookingInfo)
    })
    const data = await res.json()
    return data
}