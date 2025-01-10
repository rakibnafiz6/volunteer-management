import 'animate.css';

const UpComingEvents = () => {
    return (
        <div>
            <section className="upcoming-events">
                <h2 className='text-2xl font-bold text-center'>Upcoming Events</h2>
                <ul className='flex flex-col lg:flex-row mt-7 gap-5'>
                    <li className='bg-yellow-500 p-5 rounded-md animate__animated animate__backInLeft'>
                        <h3 className='text-xl font-bold'>Tree Plantation Drive</h3>
                       <div className='flex gap-2 items-center'>
                       <div>
                        <p className='font-semibold text-[#de2045]'>Date:</p>
                        <p className='text-[#de2045] font-semibold'>Location:</p>
                        </div>
                        <div>
                        <p>January 15, 2024</p>
                        <p>Central Park, Main City</p>
                        </div>
                       </div>
                        
                        <p>Join us to make the city greener. Volunteers will be planting 500 trees across the park.</p>
                    </li>
                    <li className='bg-pink-500 p-5 rounded-md animate__animated animate__backInUp'>
                        <h3 className='text-xl font-bold'>Blood Donation Camp</h3>
                        <div className='flex gap-2 items-center'>
                       <div>
                        <p className='font-semibold text-[#2d49bd]'>Date:</p>
                        <p className='font-semibold text-[#2d49bd]'>Location:</p>
                        </div>
                        <div>
                        <p>February 20, 2024</p>
                        <p>Community Health Center</p>
                        </div>
                       </div>
                        <p>Help save lives by donating blood. Free health check-ups will also be provided for donors.</p>
                    </li>
                    <li className='bg-teal-300 p-5 rounded-md animate__animated animate__backInRight'>
                        <h3 className='text-xl font-bold'>Beach Cleanup Campaign</h3>
                          <div className='flex gap-2 items-center'>
                       <div>
                        <p className='font-semibold text-purple-600'>Date:</p>
                        <p className='font-semibold text-purple-600'>Location:</p>
                        </div>
                        <div>
                        <p>March 10, 2024</p>
                        <p>Sunshine Beach</p>
                        </div>
                       </div>
                        <p className=''>Let's clean our beaches together! All necessary tools and refreshments will be provided.</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default UpComingEvents;