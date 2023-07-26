export const updateRoom = async (id, updateInfo) => {
    const res = await fetch(`https://ruet-gest-house-server.vercel.app/updateRoom/${id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updateInfo)
    })
    const data = await res.json()
    return data
}