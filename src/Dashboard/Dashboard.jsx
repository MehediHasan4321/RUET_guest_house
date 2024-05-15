import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import DashboardNav from './DashboardNav/DashboardNav'

const Dashboard = () => {
    return (
        <>
        <DashboardNav/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Dashboard