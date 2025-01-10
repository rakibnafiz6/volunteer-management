import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=''>
            <div className=''>
                <div className="flex flex-col lg:flex-row">
                    <h2 className='text-4xl font-bold bg-gray-300 pt-16 p-8'>Volunteer <br /> Management</h2>
                    <form className="flex flex-col lg:flex-row gap-6 bg-blue-400 pr-16 w-[1260px]">
                        <div className='flex flex-col p-8 mt-6'>
                        <label className='text-white mb-2'>Enter your email address:</label>
                        <input type="email" placeholder="Your email"
                        className='input input-bordered'
                          />
                        </div>
                        <div className="flex flex-col bg-blue-400 pl-4 lg:pl-0">
                            <h3 className='text-white text-2xl font-bold mt-3 mb-3'>What are your interests?</h3>
                           <div className='flex flex-col pb-4 space-y-3 font-black'>
                           <label><input type="checkbox" /> Volunteer Opportunities</label>
                            <label><input type="checkbox" /> Social Impact News</label>
                            <label><input type="checkbox" /> Community Events</label>
                            <label><input type="checkbox" /> Partner Updates</label>
                           </div>
                        </div>
                       <div className='mt-11 ml-4'>
                       <img src="https://i.ibb.co.com/djFmSDQ/455177887-n.jpg"
                        className='w-32 h-32 rounded-full'
                        alt="" />
                       </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-700 text-white">
                <div className="flex justify-center gap-6 mb-2 pt-2">
                    
                    <Link to='https://www.facebook.com/nafiz.al.rakib/'><img src="https://i.ibb.co.com/kD2j5GN/img-icons8.png" alt="facebook" className='w-10' /></Link>
                    <Link to='https://www.linkedin.com/in/nafiz-al-rakib/'><img src="https://i.ibb.co.com/NrF3JCx/img-icons8.png" alt="linkedin" className='w-10' /></Link>
                    <Link to='https://github.com/rakibnafiz6'><img src="https://i.ibb.co.com/JF7qHps/img-icons8.png" alt="github" className='w-10' /></Link>
                </div>
                <div className="text-center">
                    <a>Terms of Service | </a>
                    <a>Privacy Policy | </a>
                    <a >Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;