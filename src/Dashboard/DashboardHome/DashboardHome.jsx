import DashboardCard from '../../components/Booking/DashboardCard'
import useAxiosSecures from '../../Utlites/useAxiosSecures'
import { useQuery } from '@tanstack/react-query'
import AdminProfile from '../AdminProfile/AdminProfile'

const DashboardHome = () => {

    const {axioxSucuser} = useAxiosSecures()
    const {data:totalBookin=[]} = useQuery({
        queryKey:['totalBookin'],
        queryFn:async()=>{
            const res = await axioxSucuser('/allusersBooking')
            return res.data
        }
    })
    const {data:totalUser=[]} = useQuery({
        queryKey:['totalUser'],
        queryFn:async()=>{
            const res = await axioxSucuser('/users')
            return res.data
        }
    })

    const {data:totalRooms=[]} = useQuery({
        queryKey:['totalRooms'],
        queryFn:async()=>{
            const res = await axioxSucuser('/allRooms')
            return res.data
        }
    })
    
    const {data:paindingBooking=[]} = useQuery({
        queryKey:['paindingBooking'],
        queryFn:async()=>{
            const res = await axioxSucuser(`/allusersBooking?status=${'painding'}`)
            return res.data
        }
    })
    const {data:aproveBooking=[]} = useQuery({
        queryKey:['aproveBooking'],
        queryFn:async()=>{
            const res = await axioxSucuser(`/allusersBooking?status=${'aprove'}`)
            return res.data
        }
    })
    const {data:totalAdmin=[]} = useQuery({
        queryKey:['totalAdmin'],
        queryFn:async()=>{
            const res = await axioxSucuser(`/users?role=admin`)
            return res.data
        }
    })
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center'>Admin Dashboard Home</h1>
            <div className='w-full grid grid-cols-4 gap-3 my-12 space-y-5'>
                <DashboardCard title={'Total Booking'} number={totalBookin.length}/>
                <DashboardCard title={'Total User'} number={totalUser.length}/>
                <DashboardCard title={'Total Rooms'} number={totalRooms.length}/>
                <DashboardCard title={'Painding Booking'} number={paindingBooking.length}/>
                <DashboardCard title={'Aprove Booking'} number={aproveBooking.length} />
                {/* <DashboardCard title={'Active Rooms'} number={8}/>
                <DashboardCard title={'Deactive Rooms'} number={2}/> */}
                <DashboardCard title={'Total Admin'} number={totalAdmin.length}/>
            </div>
            <AdminProfile/>
        </div>
    )
}

export default DashboardHome