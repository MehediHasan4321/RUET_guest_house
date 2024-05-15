import { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import { addRooms } from '../../allApi/AddRooms'
import Swal from 'sweetalert2'

const AddRoom = () => {
    const {user} = useContext(AuthContext)
    const handleAddRoom = e=>{
        e.preventDefault()
        const room = e.target;
        const title= room.roomName.value;
        const mainImage = room.mainImage.value
        const subImage1 = room.subImage1.value
        const subImage2 = room.subImage2.value
        const subImage3 = room.subImage3.value;
        const subImage4 = room.subImage4.value;
        const bathroom = room.bathroom.value;
        const guest = room.guest.value;
        const price =  room.price.value;
        const description = room.description.value;

        const roomInfo = {title,mainImage,subImage:[subImage1,subImage2,subImage3,subImage4],bathroom,guest,price,description,hostName:user?.displayName,hostEmail:user?.email,hostImage:user?.photoURL}
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to add this room",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want it!'
          }).then((result) => {
            if (result.isConfirmed) {
                addRooms(roomInfo).then(res=>{
                    if(res.insertedId){
                        room.reset()
                        Swal.fire(
                            'Added!',
                            'Your file has been Added.',
                            'success'
                          )  
                    }
                })
              
            }
          })
        
    }
    return (
        <div className='container mx-auto my-10 flex justify-center items-center h-[80vh]'>
            <form onSubmit={handleAddRoom} className='space-y-3 w-full bg-[#138496] p-10'>
                <div className='flex gap-3'>
                    <input type="text" name="roomName" required className='w-full p-2  outline-none' placeholder='Enter Your Room Name' id="" />
                    <input type="url" name="mainImage" required className='w-full p-2  outline-none' id="" placeholder='Provide Room Main Image URL' />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="url" name="subImage1" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                    <input type="url" name="subImage2" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                </div>
                <div className="flex gap-3 w-full">
                    <input type="url" name="subImage3" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                    <input type="url" name="subImage4" required className='w-1/2 p-2  outline-none' id="" placeholder='Provide Room Sub Image URL' />
                </div>
                <div className='flex gap-3 w-full'>
                    <input type="number" name="bathroom" required className='w-1/3 p-2  outline-none' id="" placeholder='Bathroom Quantity' />
                    <input type="number" name="guest" required className='w-1/3 p-2  outline-none' id="" placeholder='Total Guest Quantity' />
                    <input type="number" name="price" required className='w-1/3 p-2  outline-none' id="" placeholder='Room Price Pay Day' />
                </div>
                <div>
                    <textarea name="description" required id="" className='w-full h-32 p-2  outline-none' placeholder='Enter Room Description'></textarea>
                </div>
                <div>
                    <input type="submit" value="Add Room" className='w-full bg-red-200 hover:bg-purple-400 py-2' />
                </div>
            </form>
        </div>
    )
}

export default AddRoom