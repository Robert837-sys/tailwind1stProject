import React from 'react'
import footerLogo from "../assets/assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants/index.js";
import { copyrightSign } from '../assets/assets/icons/index.js';



const Footer = () => {
  return (
    <footer className='max-container '>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} alt="footerLogo" width={150} height={46}/></a>
          <p className='mt-6 text-base font-montserrat text-white-400 sm:max-w-sm'>Get the shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon)=>(
              <div className='flex justify-center items-center w-full height-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>{section.links.map((link)=>(
                <li className='mt-3 text-white-400 font-montserrat text-base font-medium leading-normal hover:text-white-500 transition duration-300 ease-in-out cursor-pointer'key={link.name}>
                  <a >{link.name}</a>
                </li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center '>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer '>
            <img src={copyrightSign} alt="copy right sign" width={20} height={20} className='rounded-full m-0'/>
            <p className='font-montserrat cursor-pointer'>Copyright. All rights reserved. 2023. </p>
          </div>
          <p>Terms and conditions</p>
      </div>
    </footer>
  )
}

export default Footer
