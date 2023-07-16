import axios from 'axios'


const useAxiosSecures = () => {
    const axioxSucuser = axios.create({
        baseURL:'https://ruet-gest-house-server.vercel.app'
    })
    return {axioxSucuser}
}

export default useAxiosSecures

//