import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import Swal from 'sweetalert2';

const MyVolunteerRequest = () => {
    const { user } = useAuth();
    const [myRequest, setMyRequest] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/my-request/${user?.email}`)
            .then(res => {
                setMyRequest(res.data);
            })
    }, [user?.email])


    const handleStatus = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will Cancelled your volunteer request.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/my-request/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Cancelled!",
                                text: "Your volunteer request has been removed.",
                                icon: "success"
                            });
                            const remainingStatus = myRequest.filter(request => request._id !== id);
                            setMyRequest(remainingStatus);

                        }
                    })

            }
        });
    }


    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-6'>My Volunteer Request Post</h2>
            {myRequest.length === 0 ? <p className='text-center text-2xl font-semibold'>You have not made any volunteer requests yet.</p> :
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myRequest.map((request, idx) => <tr key={idx} className='hover'>
                                    <th>{idx + 1}</th>
                                    <td>{request.title}</td>
                                    <td>{request.category}</td>
                                    <td>
                                        <div className="badge badge-secondary badge-outline">{request.status}</div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleStatus(request._id)} className='btn'>Cancel</button>
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

export default MyVolunteerRequest;