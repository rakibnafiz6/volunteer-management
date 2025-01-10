import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-rose-600 p-10 rounded-sm'>
            <h2 className='text-3xl font-bold text-center mb-7 mt-5'>About Us</h2>
            <p className='mb-5 font-bold'>Welcome to our Volunteer Management Platform – your gateway to creating meaningful connections and making a positive impact on society.</p>

            <p className='mb-5'>We believe that every small effort counts, and through this platform, we aim to bring together passionate individuals and organizations to collaborate for the greater good. Whether you’re looking to contribute your time and skills or seeking volunteers to support your initiatives, we’re here to simplify the process and amplify the impact.</p>

            <h4 className='text-xl font-semibold'>Our mission is to:</h4>

            <ul className='pl-8 list-disc'>
                <li className=''>Empower communities by providing a streamlined system to manage volunteer opportunities.</li>
                <li>Connect volunteers with organizations or individuals in need, fostering collaboration and trust.</li>
                <li>Promote social responsibility by making it easier for everyone to give back to their community.</li>
            </ul>

            <h4 className='text-xl font-semibold mt-5'>Through an intuitive interface and user-friendly features, our platform ensures:</h4>

            <ul className='pl-8 list-disc'>
                <li>Easy creation and management of volunteer needs.</li>
                <li> Secure, efficient, and transparent communication between users.</li>
                <li> An inclusive environment that encourages participation from all walks of life.</li>
            </ul>
            <p className='mt-5 font-bold'>We are committed to enhancing the culture of volunteering by providing a platform that inspires and engages individuals to make a difference. Let’s join hands and shape a brighter future together!
            </p>

        </div>
    );
};

export default AboutUs;