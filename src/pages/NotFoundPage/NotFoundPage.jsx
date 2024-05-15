
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    <div className='container mx-auto flex justify-center items-center bg-red-300'>
        <div className='w-full h-screen'>
            <img className='w-full h-full' src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/Error-404-on-Opera.webp" alt="404 page images" />
            <div className='text-center'>
                <Link to={'/'} className='bg-red-400 px-6 py-2 rounded'>Back to Home</Link>
            </div>
        </div>
    </div>
}

export default NotFoundPage