import { createBrowserRouter } from 'react-router-dom'
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
import ManageRooms from '../Dashboard/ManageRooms/ManageRooms'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome'
const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/regeister',
                element: <Regeister />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/roomDetails/:id",
                element: <PrivetRoute><RoomDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://ruet-gest-house-server.vercel.app/allRooms/${params.id}`)
            },
            {
                path: '/myBooking/:email',
                element: <PrivetRoute><MyBooking /></PrivetRoute>
                
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path:'/dashboard',
                element:<DashboardHome/>
            },
            {
                path: '/dashboard/addroom',
                element: <PrivetRoute><AddRoom /></PrivetRoute>
            },
            {
                path: '/dashboard/manageUsers',
                element: <PrivetRoute><ManageUser /></PrivetRoute>,
                loader: () => fetch('https://ruet-gest-house-server.vercel.app/users')
            },
            {
                path: '/dashboard/manageBooking',
                element: <PrivetRoute><ManageBooking /></PrivetRoute>,
                loader: () => fetch('https://ruet-gest-house-server.vercel.app/allusersBooking')
            },
            {
                path: '/dashboard/manageRooms',
                element: <PrivetRoute><ManageRooms /></PrivetRoute>,
                loader: () => fetch('https://ruet-gest-house-server.vercel.app/allRooms')
            }
        ]
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
])

export default routers