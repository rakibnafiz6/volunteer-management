import React from 'react';

const Testimonial = () => {
    return (
        <div className=''>
            <section className="testimonials">
                <h2 className='text-center text-2xl font-bold mb-7'>What Our Volunteers Say</h2>
                <div className="testimonials-container bg-gradient-to-r from-[#2d49bd] to-[#de2045] text-white p-10 rounded-sm">
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"Volunteering at the tree plantation drive was such a rewarding experience. Seeing the trees grow gives me immense satisfaction."</p>
                        <h4 className='text-xl font-medium'>- John Doe</h4>
                    </div>
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"Participating in the blood donation camp made me realize how small efforts can save lives. The process was seamless and well-organized."</p>
                        <h4 className='text-xl font-medium'>- Jane Smith</h4>
                    </div>
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"The beach cleanup campaign was not only impactful but also a great way to meet like-minded individuals passionate about the environment."</p>
                        <h4 className='text-xl font-medium'>- Emma Johnson</h4>
                    </div>
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"I joined the literacy program as a tutor and helping kids learn to read has been one of the most fulfilling experiences of my life."</p>
                        <h4 className='text-xl font-medium'>- Michael Brown</h4>
                    </div>
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"The community health camp was eye-opening. It was amazing to contribute to such an initiative that benefits so many underprivileged people."</p>
                        <h4 className='text-xl font-medium'>- Sarah Lee</h4>
                    </div>
                    <div className="testimonial mb-3">
                        <p className='text-base font-light'>"Organizing the food drive helped me understand the importance of teamwork and the impact of small contributions in fighting hunger."</p>
                        <h4 className='text-xl font-medium'>- David Wilson</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;