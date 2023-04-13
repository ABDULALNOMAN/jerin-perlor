import React from 'react';
import ProfetionalyImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Profetionaly = () => {
    return (
        <div className="bg-base-200">
            <div className="flex justify-around flex-row  h-[80vh] w-11/12 mx-auto py-24">
               <div className='h-full w-full'>
                  <img src={ProfetionalyImg} alt='img' className="rounded-lg shadow-2xl h-full" />
               </div>
               <div className='w-full flex flex-col justify-between'>
                  <div>
                     <h2 className="text-5xl font-bold">Let us handle your screen Professionally.</h2>
                     <p className="pt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                  </div>
                  <div className='flex justify-start gap-6'>
                     <div>
                        <h2 className="text-5xl font-bold">500+</h2>
                        <p>Happy Customer</p>
                     </div>
                     <div>
                        <h2 className="text-5xl font-bold">16+</h2>
                        <p>Total Service</p>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default Profetionaly;