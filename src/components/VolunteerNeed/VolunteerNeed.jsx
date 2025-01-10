import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
const VolunteerNeed = () => {
    const [volunteerNow, setVolunteerNow] = useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/volunteer-need`)
        .then(res =>{
            setVolunteerNow(res.data);
        })
    },[])

    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Volunteer Need Now Section</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
            {
                volunteerNow.map(volunteer=><div key={volunteer._id} className="card w-64 h-[370px] bg-lime-200 border-2 border-teal-400 animate__animated animate__bounceIn">
                    <figure className='p-3'>
                        <img
                            className='rounded-lg h-40'
                            src={volunteer.thumbnail}
                            alt="volunteer" />
                    </figure>
                    
                    <div className="pl-5 max-h-full flex-grow" >
                    <p className=''>Deadline: <span className='text-red-500'>{volunteer.deadline}</span></p>
                        <h2 className="text-cyan-400 h-8 mb-3 font-bold">{volunteer.title}</h2>
                        <p className='text-gray-400'>{`${volunteer.description.slice(0, 50)}`}</p>
                        <div className="card-actions pb-2">
                           <Link to={`/volunteerDetails/${volunteer._id}`}>
                           <button class="btn btn-outline text-[#274dcf] rounded-full hover:bg-gradient-to-r from-[#de2045] to-[#2d49bd] mt-4">See More</button>
                           
                           </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
       <div className='flex justify-center mt-10'>
       <Link to='/allVolunteer'><button className='btn text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045] w-72 md:w-[450px]'>See All</button></Link>
       </div>
        </div>
    );
};

export default VolunteerNeed;