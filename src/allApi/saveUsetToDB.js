export const saveUserToDB = async(userInfo,role="user")=>{
   const saveUser = {
        name:userInfo.englishName,
        email:userInfo.email,
        role:role,
        designation:userInfo.designation,
        phoneNumber:userInfo.phoneNumber,
        department:userInfo.department,
        emploee:userInfo.emploee

    }
    const  res = await fetch(`http://localhost:5000/users/${userInfo.email}`,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(saveUser)
    })
    const data = await res.json()
    return data
}

