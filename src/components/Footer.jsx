import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='w-full mt-24  text-purple-300  py-2 px-2' style={{ 
            backgroundImage: 'linear-gradient(45deg, black, #10001d)',
          }}>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-purple-600 py-8 px-4'>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Travel</li>
                        <li className='py-1'>Booking</li>
                        <li className='py-1'>Flights</li>
                        <li className='py-1'>Cruises</li>
                        <li className='py-1'>Ground</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Tours</li>
                        <li className='py-1'>Refunds</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Company</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercare pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 py-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                    <p className='py-4'>
                        The Latest deals, articles and resources sent to your inbox weekly.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2  mr-4 rounded-md mb-4 placeholder:text-purple-950   text-purple-950 font-semibold' type='email' placeholder='Enter email..' />
                        <button className='p-2 mb-4 rounded-md  text-purple-950 font-semibold  '>Subscribe</button>
                    </form>
                </div>
            </div>
          
            <div className='flex flex-col max-w-[1400px] px-10 py-4 mx-auto justify-between sm:flex-row text-center text-purple-300 '>
                <p className='py-4 text-purple-300 '>2022 Experiences, LLC. All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl text-purple-300 '>
                    <a href="https://www.instagram.com/the_uip/ " target='_blank'>
                        <i class="fa-brands fa-instagram instagram text-purple-300  hover:text-slate-50 duration-150 hover:shadow-lg"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-wasif-malik-79205a1bb/" target='_blank'>
                        <i class="fab fa-linkedin linkedin text-purple-300 hover:text-slate-50 duration-150 hover:shadow-lg"></i>
                    </a>
                    <a href="https://twitter.com/WASIFMA55007901" target='_blank'>
                        <i class="fa-brands fa-twitter twitter text-purple-300  hover:text-slate-50 duration-150 hover:shadow-lg"></i>
                        </a>
                    <a href="https://github.com/WOSMO-UIP" target='_blank'>
                        <i class="fa-brands fa-github github text-purple-300  hover:text-slate-50 duration-150 hover:shadow-lg"></i>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Footer;