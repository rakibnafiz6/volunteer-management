import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h2>volunteer need now section</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                volunteerNow.map(volunteer=><div key={volunteer._id} className="card bg-base-100 shadow-xl">
                    <figure className=''>
                        <img
                            className='w-80 h-60'
                            src={volunteer.thumbnail}
                            alt="volunteer" />
                    </figure>
                    <p className='ml-5 text-[#091854]'>Deadline: <span className='text-red-500'>{volunteer.deadline}</span></p>
                    <div className="pl-5 mt-4 space-y-2">
                        <h2 className="card-title text-[#091854]">{volunteer.title}</h2>
                        <p className='text-gray-400'>{volunteer.category}</p>
                        <div className="card-actions pb-5">
                           <Link to={`/volunteerDetails/${volunteer._id}`}>
                           <button class="btn btn-outline text-[#274dcf] rounded-full hover:bg-[#274dcf] mt-4">View Details</button>
                           </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
       <div className='flex justify-center mt-10'>
       <Link to='/allVolunteer'><button className='btn bg-neutral text-white w-72 md:w-[450px]'>See All</button></Link>
       </div>
        </div>
    );
};

export default VolunteerNeed;