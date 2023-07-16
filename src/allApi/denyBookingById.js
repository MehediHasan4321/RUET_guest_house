export const denyBooking = async id=>{
    const res = await  fetch(`https://ruet-gest-house-server.vercel.app/denyBooking/${id}`,{
        method:'DELETE'
    })
    const data = await  res.json()
    return data
}