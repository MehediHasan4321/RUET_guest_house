export const deleteRoom = async id=>{
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/deleteRoom/${id}`,{
        method:'DELETE'
    })
    const data = await res.json()
    return data
}