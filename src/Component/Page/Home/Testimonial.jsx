import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Testimonial.css"
import testimonial from "../../../Json/Testimonial.json"
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
    return (
        <div className='my-20 '>
          <h2 className='text-4xl text-center font-bold mb-12'>Testimonial</h2>
          <div className='max-h-60 w-11/12 m-auto'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,

                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <div>{testimonial.map((data)=>(
                  <SwiperSlide>
                    <TestimonialItem key={data?.index} data={data}></TestimonialItem>
                  </SwiperSlide>
                ))}</div>
              </Swiper>
          </div>
        </div>
    );
};

export default Testimonial;