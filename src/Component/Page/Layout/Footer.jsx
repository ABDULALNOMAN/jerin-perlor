import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram,AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';
import {GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
      <footer className=" bg-primaryColor">
        <div className='w-11/12 mx-auto grid grid-cols-4 py-20 text-white'>
            <div className='flex items-start justify-start'>
                <div className='flex items-center gap-3'>
                    <GoLocation className='text-3xl'></GoLocation>
                    <p className=''>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </div>
            </div> 
            <div className='flex flex-col gap-1 '>
              <span className="footer-title">Company</span> 
              <a className="link link-hover">About</a> 
              <a className="link link-hover">Project</a> 
              <a className="link link-hover">Our Team</a> 
              <a className="link link-hover">Terms Conditions</a>
              <a className="link link-hover">Submit Listing</a>
            </div> 
            <div className='flex flex-col gap-1'>
              <span className="footer-title">Quick Links</span> 
              <a className="link link-hover">Quick Links</a> 
              <a className="link link-hover">Rentals</a> 
              <a className="link link-hover">Sales</a> 
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Our blog</a>
            </div> 
            <div className='flex flex-col gap-1'>
              <span className="footer-title">About us</span> 
              <p className=''>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Purus commodo ipsum
            duis laoreet maecenas. Feugiat </p>
              <div className='flex gap-3 lg:flex-row flex-col'>
                <a href=""><BsFacebook className='text-white'></BsFacebook></a>
                <a href=""><AiFillInstagram className='text-white'></AiFillInstagram></a>
                <a href=""><AiFillLinkedin className='text-white'></AiFillLinkedin></a>
                <a href="https://www.youtube.com/" target={'_blank'}><AiFillYoutube className='text-white'></AiFillYoutube></a>
              </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;