import React from 'react';

const UpComingEvents = () => {
    return (
        <div>
            <section className="upcoming-events">
                <h2 className='text-2xl font-bold text-center'>Upcoming Events</h2>
                <ul className='flex mt-4 gap-5'>
                    <li className='bg-yellow-500 p-5 rounded-md'>
                        <h3 className='text-xl font-bold'>Tree Plantation Drive</h3>
                        <p><span className=' font-medium'>Date: </span> January 15, 2024</p>
                        <p><span className=' font-medium'>Location: </span> Central Park, Main City</p>
                        <p>Join us to make the city greener. Volunteers will be planting 500 trees across the park.</p>
                    </li>
                    <li className='bg-pink-500 p-5 rounded-md'>
                        <h3 className='text-xl font-bold'>Blood Donation Camp</h3>
                        <p><span className=' font-medium'>Date: </span> February 20, 2024</p>
                        <p><span className=' font-medium'>Location: </span> Community Health Center</p>
                        <p>Help save lives by donating blood. Free health check-ups will also be provided for donors.</p>
                    </li>
                    <li className='bg-teal-300 p-5 rounded-md'>
                        <h3 className='text-xl font-bold'>Beach Cleanup Campaign</h3>
                        <p className=''><span className=' font-medium'>Date: </span> March 10, 2024</p>
                        <p><span className=' font-medium'>Location: </span> Sunshine Beach</p>
                        <p className=''>Let's clean our beaches together! All necessary tools and refreshments will be provided.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default UpComingEvents;