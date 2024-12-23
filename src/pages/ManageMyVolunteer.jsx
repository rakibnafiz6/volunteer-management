import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { Link } from 'react-router-dom';

const ManageMyVolunteer = () => {
    const [myPost, setMyPost] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/manage-my-post/${user?.email}`)
            .then(res => {
                setMyPost(res.data);
            })

    }, [user?.email])


    return (
        <div>
            <h2>my volunteer page</h2>
        {myPost.length === 0 ? <p>You haven't added any volunteer need posts yet. Start by creating a new post!</p> : 
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPost.map((post, idx)=><tr key={post._id} className='hover'>
                                <th>{idx + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.category}</td>
                                <td>
                                    <Link><button className='btn mr-2'>Update</button></Link>
                                    <button className='btn'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        }
            
        </div>
    );
};

export default ManageMyVolunteer;