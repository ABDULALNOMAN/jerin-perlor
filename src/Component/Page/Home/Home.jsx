import React from 'react';
import Card from './Card';
import Hero from './Hero';
import Information from './Information';
import Profetionaly from './Profetionaly';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Card></Card>
            <Profetionaly></Profetionaly>
            <Testimonial></Testimonial>
            <Information></Information>
        </div>
    );
};

export default Home;