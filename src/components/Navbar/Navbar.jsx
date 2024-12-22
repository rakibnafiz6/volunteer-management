import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { signOutUser, user } = useAuth();
    const navigate = useNavigate();

    const links = <>
        <NavLink to='/' className='mr-2 btn btn-sm'><li>Home</li></NavLink>
        <NavLink to='/allVolunteer' className='mr-2 btn btn-sm'><li>All volunteer posts</li></NavLink>

        <details className="dropdown">
            <summary className=" btn btn-sm">My Profile</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <NavLink to='/addVolunteer' className='btn btn-sm mb-2'><li>Add Volunteer need Post</li></NavLink>
                <NavLink to='/myVolunteer' className='btn btn-sm'><li>Manage My Posts</li></NavLink>
            </ul>
        </details>
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('user logout successfully');
                navigate('/login');
            })
            .catch(error => console.log(error.message))
    }

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
                {user ? <> <div className='tooltip flex' data-tip={user?.displayName}>
                    <img className='tooltip w-10 h-10 rounded-full mr-2' src={user?.photoURL} alt="" />
                    </div> <button onClick={handleLogOut} className='btn'>Logout</button></>: 
                    <Link to='/login' className="btn">Login</Link>}


            </div>
            {/* <div className="tooltip" data-tip="hello">
                <button className="btn">Hover me</button>
            </div> */}
        </div>
    );
};

export default Navbar;