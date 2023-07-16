export const addRooms = async(room)=>{
    const res = await fetch('https://ruet-gest-house-server.vercel.app/addRooms',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(room)
    })
    const data = await res.json()
    return data
}