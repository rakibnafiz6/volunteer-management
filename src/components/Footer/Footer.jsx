import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className=''>
                <div className="flex">
                    <h2 className='text-4xl font-bold bg-gray-300 ml-5 pt-16 p-8'>Volunteer <br /> Management</h2>
                    <form className="flex gap-6 bg-blue-400 pr-16">
                        <div className='flex flex-col p-8 mt-6'>
                        <label className='text-white mb-2'>Enter your email address:</label>
                        <input type="email" placeholder="Your email"
                        className='input input-bordered'
                          />
                        </div>
                        <div className="flex flex-col bg-blue-400">
                            <h3 className='text-white text-2xl font-bold mt-3 mb-3'>What are your interests?</h3>
                           <div className='flex flex-col pb-4 space-y-3 font-black'>
                           <label><input type="checkbox" /> Volunteer Opportunities</label>
                            <label><input type="checkbox" /> Social Impact News</label>
                            <label><input type="checkbox" /> Community Events</label>
                            <label><input type="checkbox" /> Partner Updates</label>
                           </div>
                        </div>
                        <button className='btn mt-20 text-blue-400'>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-700 text-white w-[1040px] ml-5">
                <div className="flex justify-between mx-5 pt-4">
                    <a href="#about">About Us</a>
                    <a href="#work">Volunteer Stories</a>
                    <a href="#resources">Volunteer Resources</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#faq">FAQs</a>
                    <a href="#guidelines">Volunteer Guidelines</a>
                </div>
                <div className="flex justify-center gap-6 mt-4 mb-2">
                    <a href="#"><img src="https://i.ibb.co.com/wsW4Djn/img-icons8.png" alt="twitter" className='w-10' /></a>
                    <a href="#"><img src="https://i.ibb.co.com/kD2j5GN/img-icons8.png" alt="facebook" className='w-10' /></a>
                    <a href="#"><img src="https://i.ibb.co.com/d6mQBv5/img-icons8.png" alt="instagram" className='w-10' /></a>
                    <a href="#"><img src="https://i.ibb.co.com/NrF3JCx/img-icons8.png" alt="linkedin" className='w-10' /></a>
                </div>
                <div className="text-center">
                    <a href="#terms">Terms of Service | </a>
                    <a href="#privacy">Privacy Policy | </a>
                    <a href="#sitemap">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;