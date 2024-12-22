import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <NavLink to='/' className='mr-2 btn btn-sm'><li>Home</li></NavLink>
        <NavLink className='mr-2 btn btn-sm'><li>All volunteer posts</li></NavLink>
        
            <details className="dropdown">
                <summary className=" btn btn-sm">My Profile</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <NavLink className='btn btn-sm mb-2'><li>Add Volunteer need Post</li></NavLink>
                    <NavLink className='btn btn-sm'><li>Manage My Posts</li></NavLink>
                </ul>
            </details>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                <Link to='/' className="btn btn-ghost text-xl">Volunteer Management</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn">Login</Link>
                <Link to='/register' className="btn">Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;