import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // axios.get(`${import.meta.env.VITE_API_URL}/volunteers?search=${search}`)
        axios.get(`${import.meta.env.VITE_API_URL}/volunteers?search=${search}`)
            .then(res => {
                setVolunteers(res.data);
            })
    }, [search])

    return (
        <div>
            <form className='flex justify-center'>
                <label className="w-96 input input-bordered flex items-center gap-2">
                    <input type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                     className="grow" placeholder="Search by Post Title" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </form>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    volunteers.map(volunteer =><div key={volunteer._id} className="card bg-base-100 shadow-xl">
                        <figure className=''>
                            <img
                                className='w-80 h-60'
                                src={volunteer.thumbnail}
                                alt="volunteer" />
                        </figure>
                        <p className='ml-5 text-[#091854]'>Deadline: <span className='text-red-500'>{volunteer.deadline}</span></p>
                        <div className="pl-5 mt-4 space-y-2">
                            <h2 className="card-title text-[#091854]">{volunteer.title}</h2>
                            <p className='text-gray-400'>{volunteer.description}</p>
                            <div className="card-actions pb-5">
                                <Link to={`/volunteerDetails/${volunteer._id}`}>
                                <button class="btn btn-outline text-[#274dcf] rounded-full hover:bg-[#274dcf] mt-4">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllVolunteer;