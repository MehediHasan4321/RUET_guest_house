export const aproveBooking = async (id,info)=>{
    
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/userBooking/${id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)
    })
    const data = await res.json()
    return data
}