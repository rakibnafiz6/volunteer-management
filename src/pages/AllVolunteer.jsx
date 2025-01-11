import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    // console.log(sort);

    useEffect(() => {
        document.title="All-volunteer"
        axios.get(`${import.meta.env.VITE_API_URL}/volunteers?search=${search}&sort=${sort}`)
            .then(res => {
                setVolunteers(res.data);
            })
    }, [search,sort])


    return (
        <div className=''>
            <div className='flex justify-center'>
            <form className='flex justify-center'>
                <label className="md:w-96 input input-bordered flex items-center gap-2">
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
            
            <div>
            <button onClick={()=>setSort('deadline')} className='btn bg-gradient-to-r from-[#2d49bd] to-[#de2045] text-white ml-2'>Sort by: Deadline</button>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4 rounded-md'>
                {
                    volunteers.map(volunteer =><div key={volunteer._id}
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/St10mzt/cardimage.jpg)"
                        }} 
                    className="card shadow-xl">
                       
                        <div className="pl-5 mt-4 flex flex-col items-end space-y-2 pr-4">
                            <h2 className="font-bold h-10 mb-1 w-44 text-end text-orange-400">{volunteer.title}</h2>
                          <div className='flex items-center gap-2'>
                          <div>
                           <p className='text-gray-400'>Category: </p>
                           <p className='text-gray-400'>Deadline: </p>
                           </div>
                           <div>
                           <p className="badge badge-accent badge-outline">{volunteer.category}</p>
                           <p className='text-red-500'>{volunteer.deadline}</p>
                           </div>
                          </div>
                            <div className="card-actions justify-end pb-5">
                                <Link to={`/volunteerDetails/${volunteer._id}`}>
                                <button class="btn btn-outline text-accent rounded-full hover:bg-accent mt-4">View Details</button>
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