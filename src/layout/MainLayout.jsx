import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto py-4'>
            <Navbar></Navbar>
            </nav>
            <section className='w-11/12 mx-auto px-4'>
            <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;