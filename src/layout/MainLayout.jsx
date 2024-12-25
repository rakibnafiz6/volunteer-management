import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto py-5'>
            <Navbar></Navbar>
            </nav>
            <section className='w-11/12 mx-auto px-4'>
            <Outlet></Outlet>
            </section>
            <footer className='mt-24 w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;