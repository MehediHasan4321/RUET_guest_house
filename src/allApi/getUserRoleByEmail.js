export const getUserRole = async(email)=>{
    const res = await fetch(`http://localhost:5000/userRole/${email}`)
    const data = await res.json()
    return data
}