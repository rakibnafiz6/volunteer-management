import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyVolunteerRequest from './MyVolunteerRequest';
import useAxiosSecure from '../hook/useAxiosSecure';
import { FaBars } from 'react-icons/fa';
import { RiLayoutGrid2Fill } from 'react-icons/ri';
import MyVolunteerCard from '../components/MyVolunteerCard/MyVolunteerCard';

const ManageMyVolunteer = () => {
    const [myPost, setMyPost] = useState([]);
    const { user } = useAuth();
    const axios = useAxiosSecure();
    const [layout, setLayout] = useState('card');
    
    useEffect(() => {

            axios.get(`/manage-my-post/${user?.email}`)
            .then(res => {
                setMyPost(res.data);
            })

    }, [user?.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/volunteers/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                            const remainingPost = myPost.filter(post => post._id !== id);
                            setMyPost(remainingPost);

                        }
                    })

            }
        });
    }



    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-6'>My volunteer need posts</h2>
            <h4 className='flex items-center justify-end mb-6 font-bold'>Change Layout: <FaBars onClick={()=>setLayout('table')} className='ml-5 mr-5' /> <RiLayoutGrid2Fill onClick={()=>setLayout('card')} /></h4>
            {myPost.length === 0 ? <p className='text-center text-2xl font-semibold'>You haven't added any volunteer need posts yet. Start by creating a new post!</p> :
              <div>
              {
                layout === 'table'?  <div className="overflow-x-auto">
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
                            myPost.map((post, idx) => <tr key={post._id} className='hover'>
                                <th>{idx + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.category}</td>
                                <td>
                                    <Link to={`/update/${post._id}`}><button className='btn mr-2'>Update</button></Link>
                                    <button onClick={() => handleDelete(post._id)} className='btn'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> : <MyVolunteerCard myPost={myPost} handleDelete={handleDelete}></MyVolunteerCard>
               }
              </div>
            }
            <section className='mt-24'>
                <MyVolunteerRequest></MyVolunteerRequest>
            </section>
        </div>
    );
};

export default ManageMyVolunteer;