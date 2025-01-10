import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Theme from '../Theme/Theme';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { signOutUser, user } = useAuth();
    const navigate = useNavigate();

    const links = <>
    <NavLink to='/' className='mb-1 lg:mr-2 btn btn-sm'><li>Home</li></NavLink>
    <NavLink to='/about' className='mb-1 lg:mr-2 btn btn-sm'><li>About Us</li></NavLink>
    {user && <><NavLink to='/allVolunteer' className='mb-1 lg:mr-2 btn btn-sm'><li>All volunteer posts</li></NavLink>
        <NavLink to='/addVolunteer' className='mb-1 lg:mr-2 btn btn-sm'><li>Add Volunteer need Post</li></NavLink>
        <NavLink to='/myVolunteer' className='mb-1 btn btn-sm'><li>Manage My Posts</li></NavLink></>}
        
        
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                // console.log('user logout successfully');
                navigate('/login');
            })
            .catch(error =>{
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            })
    }

    return (
        <div className="navbar bg-black backdrop-blur-xl">
            <div className="navbar-start">
                <div className="dropdown mr-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-cyan-400 text-xl w-10 md:w-72">Volunteer Management</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-6">
                {user ? <> <div className='tooltip flex' data-tip={user?.displayName}>
                    <img className='tooltip w-10 h-10 rounded-full mr-2' src={user?.photoURL} alt="" />
                    </div> <button onClick={handleLogOut} className='btn mr-2 text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045]'>Logout</button></>: 
                   <> <Link to='/login' className="btn mr-2 text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045]">Login</Link>
                   <Link to='/register' className="btn mr-2 text-white bg-gradient-to-r from-[#2d49bd] to-[#de2045]">Register</Link>
                   </>}
                    <Theme></Theme>

            </div>
           
        </div>
    );
};

export default Navbar;