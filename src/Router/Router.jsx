import {createBrowserRouter} from 'react-router-dom'
import Home from '../Layout/Home/Home'
import Login from '../pages/login/Login'
import Regeister from '../pages/Regeister/Regeister'
import PrivetRoute from '../PrivetRoute/PrivetRoute'
import LandingPage from '../Layout/LoadingPage/LandingPage'
import RoomDetails from '../Layout/RoomDetails/RoomDetails'
import Dashboard from '../Dashboard/Dashboard'
import MyBooking from '../components/MyBooking/MyBooking'
import AddRoom from '../Dashboard/AddRoom/AddRoom'
import ManageUser from '../Dashboard/ManageUser/ManageUser'
import ManageBooking from '../Dashboard/ManageBooking/ManageBooking'
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
             path:"/roomDetails/:id",
             element:<PrivetRoute><RoomDetails/></PrivetRoute>,
             loader:({params})=>fetch(`http://localhost:5000/allRooms/${params.id}`)
            },
            {
                path:'/myBooking/:email',
                element:<MyBooking/>,
                loader:({params})=>fetch(`http://localhost:5000/mybooking/${params.email}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard/addroom',
                element:<AddRoom/>
            },
            {
                path:'/dashboard/manageUsers',
                element:<ManageUser/>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/dashboard/manageBooking',
                element:<ManageBooking/>,
                loader:()=>fetch('http://localhost:5000/allusersBooking')
            }
        ]
        }
])

export default routers