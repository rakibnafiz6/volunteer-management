import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import useAuth from '../../hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const BeAVolunteer = ({ id }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [volunteerData, setVolunteerData] = useState({});
    const { _id, thumbnail, title, description, category, location, deadline,
        volunteer, organizer_email, organizer_name } = volunteerData;
//  console.log(_id);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`)
            .then(res => {
                setVolunteerData(res.data);
            })
    }, [id])

    const handleBeAVolunteer = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteer = form.volunteer.value;
        const deadline = form.deadline.value;
        const organizer_name = form.organizerName.value;
        const organizer_email = form.organizerEmail.value;
        const volunteerEmail = form.volunteerEmail.value;
        const volunteerName = form.volunteerName.value;
        const suggestion = form.suggestion.value;
        const status = "requested";

        const volunteerData = {
            thumbnail, title, description,
            category, location, volunteer, deadline,
            organizer_name, organizer_email, volunteerEmail,
            volunteerName, suggestion, status, id
        }
        // console.log(volunteerData);
        axios.post(`${import.meta.env.VITE_API_URL}/request`, volunteerData)
            .then(res => {
                // console.log(res.data);
                document.getElementById('my_modal_5').close();
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Successfully stored db in your request",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/myVolunteer');
                }
            })
    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045]" onClick={() => document.getElementById('my_modal_5').showModal()}>Be a Volunteer</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                    <form onSubmit={handleBeAVolunteer} className="card-body bg-slate-300">
                        {/* Thumbnail */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="url" name='thumbnail'
                                readOnly
                                defaultValue={thumbnail}
                                placeholder="thumbnail" className="input 
                            input-bordered" required />
                        </div>
                        {/* Post Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Title</span>
                            </label>
                            <input type="text" name='title'
                                readOnly
                                defaultValue={title}
                                placeholder="post-title" className="input input-bordered" required />
                        </div>
                        {/* Description  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description"
                                readOnly defaultValue={description}
                                placeholder="description" className="input input-bordered" required
                                id=""></textarea>
                        </div>
                        <div className='flex gap-2'>
                            {/* Category  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select name='category' value={category}
                                    readOnly
                                    className="select select-bordered">
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
                                <input type="text" name='location'
                                    readOnly
                                    defaultValue={location}
                                    placeholder="location" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            {/* No. of volunteers needed */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">No.of volunteers Needed </span>
                                </label>
                                <input type="number" name='volunteer'
                                    readOnly
                                    defaultValue={volunteer}
                                    placeholder="no.of volunteers" className="input input-bordered w-48" required />
                            </div>
                            {/* Deadline */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <DatePicker className='input input-bordered w-48' required
                                    selected={startDate} name='deadline'
                                    onChange={(date) => setStartDate(date)}
                                    value={deadline}
                                    readOnly
                                >
                                </DatePicker>
                            </div>
                        </div>
                        {/* Organizer Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Organizer Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={organizer_email} name='organizerEmail'
                                placeholder="Organizer-email" className="input input-bordered" required />
                        </div>
                        {/* Organizer Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Organizer Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={organizer_name} name='organizerName' placeholder="Organizer-name" className="input input-bordered" required />
                        </div>
                        {/* volunteer Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Volunteer Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={user?.email} name='volunteerEmail'
                                placeholder="Volunteer-email" className="input input-bordered" required />
                        </div>
                        {/* volunteer Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Volunteer Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={user?.displayName} name='volunteerName' placeholder="Volunteer-name" className="input input-bordered" required />
                        </div>
                        {/* Suggestion  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Suggestion</span>
                            </label>
                            <textarea name="suggestion"
                                placeholder="suggestion" className="input input-bordered" required
                                id=""></textarea>
                        </div>

                        {/* add post btn */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Request</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BeAVolunteer;