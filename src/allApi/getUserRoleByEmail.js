export const getUserRole = async(email)=>{
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/userRole/${email}`)
    const data = await res.json()
    return data
}