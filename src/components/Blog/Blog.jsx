import React from 'react';

const Blog = () => {
    return (
        <>
            <h2 className='font-bold text-center text-3xl mb-7'>Blogs</h2>
        <div className='bg-gray-800 text-white p-10 rounded-sm'>
           <p> Welcome to our blog – your source of inspiration, tips, and stories about volunteering and community impact. Explore a wide range of articles that can motivate you to take action and make a difference. Stay updated with the latest trends, success stories, and insights from the world of volunteerism!</p>

            <h4 className='font-bold mt-4 mb-3'>Featured Blogs</h4>
            <h5 className='font-semibold'>📌 The Power of Volunteering</h5>
           <p className='mb-4'> Discover how volunteering not only changes the lives of those in need but also transforms the volunteers themselves. Read heartwarming stories and learn about the ripple effects of small acts of kindness.</p>

            <h5 className='font-semibold'>📌 How to Start Your Volunteering Journey</h5>
           <p className='mb-4'> Are you new to volunteering? This guide provides practical tips on how to begin your journey and find opportunities that align with your skills and passion.</p>

            <h5 className='font-semibold'>📌 Building Stronger Communities Through Volunteerism</h5>
            <p className='mb-4'>Learn how collective efforts and local initiatives can address pressing social issues and foster stronger, more inclusive communities.</p>

            <h4 className='font-bold'>Volunteer Spotlight</h4>
            <p className='mb-4'>Celebrate the achievements of our outstanding volunteers! Each month, we feature inspiring stories of individuals who have gone above and beyond to make a difference.</p>

            <h4 className='font-bold'>Resources for Organizers</h4>
            <p className='mb-4'>If you're managing volunteer projects, this section is for you! Explore articles on effective volunteer recruitment, project planning, and how to create impactful initiatives.</p>

            <h4 className='font-bold'>Join the Conversation</h4>
            <p>Do you have a story to share or tips for fellow volunteers? We’d love to hear from you! Submit your blog post ideas, and you might get featured on our platform.</p>


        </div>
        </>
    );
};

export default Blog;