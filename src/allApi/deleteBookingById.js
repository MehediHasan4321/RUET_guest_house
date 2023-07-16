
export const DeleteBooking =async (id) => {
   const res = await fetch(`https://ruet-gest-house-server.vercel.app/myBooking/${id}`,{
      method:'DELETE'
   })
   const data = await res.json()
   return data
}

