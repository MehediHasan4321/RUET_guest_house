import {createBrowserRouter} from 'react-router-dom'
import Home from '../Layout/Home/Home'
import Login from '../pages/login/Login'
import Regeister from '../pages/Regeister/Regeister'
import PrivetRoute from '../PrivetRoute/PrivetRoute'
import UserDashboard from '../Dashboard/UserDashboard/UserDashboard'
import LandingPage from '../Layout/LoadingPage/LandingPage'
import RoomDetails from '../Layout/RoomDetails/RoomDetails'
const  routers= createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/',
                element:<LandingPage/>
            },
            {
                path:'/regeister',
                element:<Regeister/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
             path:"/roomDetails",
             element:<PrivetRoute><RoomDetails/></PrivetRoute>
            }
        ]
    },
    {
        path:'/userDashboard',
        element:<UserDashboard/>
    }
])

export default routers