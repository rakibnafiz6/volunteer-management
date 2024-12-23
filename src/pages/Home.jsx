import React from 'react';
import Banner from '../components/Banner/Banner';
import VolunteerNeed from '../components/VolunteerNeed/VolunteerNeed';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <section>
            <VolunteerNeed></VolunteerNeed>
        </section>
        </div>
    );
};

export default Home;