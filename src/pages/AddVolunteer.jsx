import React, { useState } from 'react';
import useAuth from '../hook/useAuth';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hook/useAxiosSecure';
import { useEffect } from 'react';


const AddVolunteer = () => {
    
    const axios = useAxiosSecure();
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    useEffect(()=>{
        document.title="Add-volunteer"
    })

    const handleAddVolunteer = (e)=>{
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteer = form.volunteer.value;
        const deadline = form.deadline.value;
        const organizer_name = form.name.value;
        const organizer_email = form.email.value;

        const volunteerData ={
            thumbnail,title,description,
            category,location,volunteer,deadline,
            organizer_name,organizer_email
        }
    
        axios.post(`/volunteers`, volunteerData)   
        .then(res =>{
            
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: "Successfully stored in db volunteer data",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }




    return (
        <div>
            <h2 className='text-center text-2xl font-bold mb-4'>Add Volunteer</h2>
            <form onSubmit={handleAddVolunteer} className="card-body lg:w-6/12 mx-auto bg-slate-300">
                {/* Thumbnail */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="url" name='thumbnail' placeholder="thumbnail" className="input input-bordered lg:w-[450px]" required />
                </div>
                {/* Post Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" name='title' placeholder="post-title" className="input input-bordered lg:w-[450px]" required />
                </div>
                {/* Description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="description " className="input input-bordered lg:w-[450px]" required />
                </div>
               <div className='flex flex-col lg:flex-row gap-2'>
                 {/* Category  */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' defaultValue='Selected Category' className="select select-bordered lg:w-[225px]">
                        <option disabled>Selected Category</option>
                        <option>healthcare</option>
                        <option>education</option>
                        <option>social service</option>
                        <option>animal welfare</option>
                    </select>
                </div>
                {/* Location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="location" className="input input-bordered lg:w-[225px]" required />
                </div>
               </div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    {/* No. of volunteers needed */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">No.of volunteers Needed </span>
                    </label>
                    <input type="number" name='volunteer' placeholder="no.of volunteers" className="input input-bordered lg:w-[225px]" required />
                </div>
                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <DatePicker className='input input-bordered w-72 md:w-full lg:w-[225px]' required
                    selected={startDate} name='deadline'
                    onChange={(date)=> setStartDate(date)}
                    >
                    </DatePicker>
                </div>
                </div>
                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Email</span>
                    </label>
                    <input readOnly type="email" defaultValue={user?.email} name='email' placeholder="Organizer-email" className="input input-bordered lg:w-[450px]" required />
                </div>
                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Name</span>
                    </label>
                    <input readOnly type="text" defaultValue={user?.displayName} name='name' placeholder="Organizer-name" className="input input-bordered lg:w-[450px]" required />
                </div>

                {/* add post btn */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary lg:w-[450px]">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;