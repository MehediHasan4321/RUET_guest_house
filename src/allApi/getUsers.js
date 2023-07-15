export const getUser = async (email)=>{
    const res = await fetch(`http://localhost:5000/users?email=${email}`)
    const data = await res.json()
    return data
}