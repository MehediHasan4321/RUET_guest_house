import { useQuery } from "@tanstack/react-query"
import useAxiosSecures from "../Utlites/useAxiosSecures"

const GetUserByEmail = (email) => {
    const {axioxSucuser} = useAxiosSecures()
    const {data,refetch} = useQuery({
        queryKey:["users"],
        queryFn:async()=>{
           const res = await axioxSucuser(`users/${email}`)
            return res.data
        }
    })
    return {data,refetch}
}

export default GetUserByEmail