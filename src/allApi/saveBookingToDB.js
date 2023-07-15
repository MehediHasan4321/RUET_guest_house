export const saveBooking = async (bookingInfo)=>{
    const res = await fetch(`http://localhost:5000/usersBooking`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(bookingInfo)
    })
    const data = await res.json()
    return data
}