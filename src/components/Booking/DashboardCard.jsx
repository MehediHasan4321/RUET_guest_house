import React from 'react'

const DashboardCard = ({title,number}) => {
    return (
        <div className='w-60 h-32 shadow-lg hover:shadow-2xl flex justify-center items-center'>
            <div className='text-center space-y-3'>
            <h1 className='text-xl font-serif'>{title}</h1>
            <h1 className='text-4xl font-semibold'>{number}</h1>
            </div>
        </div>
    )
}

export default DashboardCard