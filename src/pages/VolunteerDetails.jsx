import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdCategory, MdEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import BeAVolunteer from '../components/Modal/BeAVolunteer';
import useAxiosSecure from '../hook/useAxiosSecure';

const VolunteerDetails = () => {
    const [volunteers, setVolunteers] = useState([]);
    const { title, description, category, deadline, thumbnail, location, 
        organizer_name,
        volunteer, organizer_email } = volunteers;

    const { id } = useParams();
    const axios = useAxiosSecure();

    useEffect(() => {
        document.title="Volunteer-details"
            axios.get(`/volunteer-details/${id}`)
            .then(res => {
                setVolunteers(res.data);
            })
    }, [id])

    return (
        <div className='flex flex-col md:flex-row mt-20'>
            {/* title */}
            <div className='flex-1 bg-teal-600 p-7 rounded-sm'>
                <div className='flex flex-wrap gap-2 items-center'>
                    <MdCategory /><p>{category}</p>
                    <FaMapMarkerAlt /><p>{location}</p>
                    <FaCalendarAlt /><p>{deadline}</p>
                    <p>No.of volunteers: {volunteer}</p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold mt-4">{title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
            
                    <BeAVolunteer id={id}></BeAVolunteer>
                </div>
            </div>
            {/* image */}
            <div className='w-96 h-[400px] bg-sky-500 grid justify-center p-10 rounded-sm'>
                <div className="avatar">
                    <div className="rounded-full w-48 h-48">
                        <img src={thumbnail} className='' />
                    </div>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-2xl'>{organizer_name}</p>
                    <p className='text-gray-500 mt-3 flex items-center gap-2'><MdEmail />{organizer_email}</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagramSquare />
                    <FaLinkedinIn />
                </div>
            </div>


        </div>
    );
};

export default VolunteerDetails;