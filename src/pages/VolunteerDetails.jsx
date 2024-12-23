import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdCategory, MdEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const VolunteerDetails = () => {
    const [volunteers, setVolunteers] = useState([]);
    const { title, description, category, deadline, thumbnail, location, name,
        volunteer, email } = volunteers;

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/volunteer-details/${id}`)
            .then(res => {
                setVolunteers(res.data);
            })
    }, [id])

    return (
        <div className='flex mt-20'>
            {/* title */}
           <div className='flex-1'>
           <div className='flex gap-2 items-center'>
                <MdCategory /><p>{category}</p>
                <FaMapMarkerAlt /><p>{location}</p>
                <FaCalendarAlt /><p>{deadline}</p>
                <p>No.of volunteers: {volunteer}</p>
            </div>
            <div>
                <h1 className="text-5xl font-bold mt-4">{title}</h1>
                <p className="py-6 text-gray-500">
                    {/* {description} */}
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.
                </p>
                <button className="btn text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045]">Be a Volunteer</button>
            </div>
           </div>
            {/* image */}
            <div className='w-72 h-[400px] bg-[#f9f4f4] grid justify-center p-10'>
            <div className="avatar">
                        <div className="rounded-full w-48 h-48">
                            <img src={thumbnail} className=''/>
                        </div>
              </div>
              <div className='text-center'>
              <p className='font-bold text-2xl'>{name}</p>
              <p className='text-gray-500 mt-3 flex items-center gap-2'><MdEmail />{email}</p>
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