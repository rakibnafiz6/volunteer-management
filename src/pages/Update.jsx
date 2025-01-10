import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import useAuth from '../hook/useAuth';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hook/useAxiosSecure';

const Update = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const axios = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const volunteerData = useLoaderData();
    const { _id, thumbnail, title, description, category, location, volunteer, deadline } = volunteerData;

    useEffect(()=>{
        document.title="Update-volunteer"
    })

    const handleUpdateVolunteer = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteer = form.volunteer.value;
        const deadline = form.deadline.value;

        const updateData = {
            thumbnail, title, description,
            category, location, volunteer, deadline,
        }

            axios.put(`/updatePost/${_id}`, updateData)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Successfully update volunteer data",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/myVolunteer');
                }
            })
    }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold mb-4'>Update Volunteer</h2>
            <form onSubmit={handleUpdateVolunteer} className="card-body lg:w-6/12 mx-auto bg-cyan-400">
                {/* Thumbnail */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="url" defaultValue={thumbnail} name='thumbnail' placeholder="thumbnail" className="input input-bordered md:w-[450px]" required />
                </div>
                {/* Post Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" defaultValue={title} name='title' placeholder="post-title" className="input input-bordered md:w-[450px]" required />
                </div>
                {/* Description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' placeholder='description'
                    defaultValue={description}
                     className='input input-bordered md:w-[450px]' required
                    ></textarea>
                </div>
                <div className='flex flex-col md:flex-row gap-2'>
                    {/* Category  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' defaultValue={category} className="select select-bordered md:w-[225px]">
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
                        <input type="text" defaultValue={location} name='location' placeholder="location" className="input input-bordered md:w-[225px]" required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2'>
                    {/* No. of volunteers needed */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">No.of volunteers Needed </span>
                        </label>
                        <input type="number" defaultValue={volunteer} name='volunteer' placeholder="no.of volunteers" className="input input-bordered md:w-[225px]" required />
                    </div>
                    {/* Deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <DatePicker className='input input-bordered w-full md:w-[225px]' required
                            selected={startDate} name='deadline'
                            onChange={(date) => setStartDate(date)}

                        >
                        </DatePicker>
                    </div>
                </div>
                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input readOnly type="email" defaultValue={user?.email} name='email' placeholder="user-email" className="input input-bordered md:w-[450px]" required />
                </div>
                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input readOnly type="text" defaultValue={user?.displayName} name='name' placeholder="user-name" className="input input-bordered md:w-[450px]" required />
                </div>

                {/* update post btn */}
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-[#2d49bd] to-[#de2045] text-white md:w-[450px]">Update Post</button>
                </div>
            </form>
        </div>
    );
};

export default Update;