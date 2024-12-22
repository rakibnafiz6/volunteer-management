import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col mt-48 items-center'>
            <h2 className='text-xl font-bold'>Page Not Found</h2>
            <p>Status: 404</p>
            <Link to='/'><button className='btn bg-neutral text-white'>Go Back</button></Link>
        </div>
    );
};

export default Error;