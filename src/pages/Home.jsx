import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import VolunteerNeed from '../components/VolunteerNeed/VolunteerNeed';
import UpComingEvents from '../components/UpComingEvents/UpComingEvents';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    useEffect(()=>{
        document.title="Home"
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
        </div>
    );
};

export default Home;