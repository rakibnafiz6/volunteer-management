import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import VolunteerNeed from '../components/VolunteerNeed/VolunteerNeed';
import UpComingEvents from '../components/UpComingEvents/UpComingEvents';
import Testimonial from '../components/Testimonial/Testimonial';
import Blog from '../components/Blog/Blog';

const Home = () => {
    useEffect(()=>{
        document.title="Volunteer Management|Home"
    })
    return (
        <div>
        <Banner></Banner>
        <section className='mt-20'>
            <VolunteerNeed></VolunteerNeed>
        </section>
        <section className='mt-20'>
            <UpComingEvents></UpComingEvents>
        </section>
        <section className='mt-20'>
            <Testimonial></Testimonial>
        </section>
        <section className='mt-20'>
            <Blog></Blog>
        </section>
        </div>
    );
};

export default Home;