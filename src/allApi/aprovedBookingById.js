export const aproveBooking = async (id)=>{
    const updateBooking = {
        status:'aprove'
    }
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/userBooking/${id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(updateBooking)
    })
    const data = await res.json()
    return data
}