export const addRooms = async(room)=>{
    const res = await fetch('http://localhost:5000/addRooms',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(room)
    })
    const data = await res.json()
    return data
}