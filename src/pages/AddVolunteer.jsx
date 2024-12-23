import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVolunteer = () => {
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    

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
        const name = form.name.value;
        const email = form.email.value;

        const volunteerData ={
            thumbnail,title,description,
            category,location,volunteer,deadline,
            name,email
        }
        axios.post(`${import.meta.env.VITE_API_URL}/volunteers`, volunteerData)
        .then(res =>{
            console.log(res.data);
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
            <form onSubmit={handleAddVolunteer} className="card-body w-6/12 mx-auto bg-slate-300">
                {/* Thumbnail */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="url" name='thumbnail' placeholder="thumbnail" className="input input-bordered w-[450px]" required />
                </div>
                {/* Post Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" name='title' placeholder="post-title" className="input input-bordered w-[450px]" required />
                </div>
                {/* Description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="description " className="input input-bordered w-[450px]" required />
                </div>
               <div className='flex gap-2'>
                 {/* Category  */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' defaultValue='Selected Category' className="select select-bordered w-[225px]">
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
                    <input type="text" name='location' placeholder="location" className="input input-bordered w-[225px]" required />
                </div>
               </div>
                <div className='flex gap-2'>
                    {/* No. of volunteers needed */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">No.of volunteers Needed </span>
                    </label>
                    <input type="number" name='volunteer' placeholder="no.of volunteers" className="input input-bordered w-[225px]" required />
                </div>
                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <DatePicker className='input input-bordered w-[225px]' required
                    selected={startDate} name='deadline'
                    onChange={(date)=> setStartDate(date)}
                    >
                    </DatePicker>
                </div>
                </div>
                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input readOnly type="email" defaultValue={user?.email} name='email' placeholder="user-email" className="input input-bordered w-[450px]" required />
                </div>
                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input readOnly type="text" defaultValue={user?.displayName} name='name' placeholder="user-name" className="input input-bordered w-[450px]" required />
                </div>

                {/* add post btn */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-[450px]">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;