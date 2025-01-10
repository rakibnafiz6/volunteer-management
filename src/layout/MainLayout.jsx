import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <nav className='py-5 sticky top-0 z-50 backdrop-blur-xl'>
            <Navbar></Navbar>
            </nav>
            <section className='md:w-11/12 mx-auto'>
            <Outlet></Outlet>
            </section>
            <footer className='mt-24'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;