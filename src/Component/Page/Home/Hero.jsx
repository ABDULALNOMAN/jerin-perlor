import React, { useContext } from 'react';
import heroImg from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import { callContext } from '../../Contexting/Contexting';

const Hero = () => {
    const {user} = useContext(callContext)
    console.log(user)
    return (
        <div className="bg-white">
            <div className="flex items-center justify-around flex-row-reverse min-h-screen w-11/12 mx-auto">
               <div className='w-full hidden lg:flex justify-center'>
                  <img src={heroImg} className="rounded-lg w-8/12 shadow-2xl " />
               </div>
               <div className='w-full'>
                  <h1 className="text-6xl  font-bold leading-tight">BEAUTY SALON <br/> FOR EVERY WOMEN</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn-style">Get an Appointment</button>
               </div>
            </div>
        </div>
    );
};

export default Hero;