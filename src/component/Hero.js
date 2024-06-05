// import React from 'react'
// import image from "../data/image/avtar.png"
// export const Hero = () => {
//   return (
//     <div className='mt-3'>
//         <img src={image} width={500} />
//     </div>
//   )
// }

import React from 'react';
import Tilt from 'react-parallax-tilt';
import image from '../data/image/avtar.png'; // Make sure the path is correct
import  bob from '../data/image/blob (2).svg'
import "./Hero.css"
import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
// import { TypeAnimation } from 'react-type-animation';
import { FiGithub } from "react-icons/fi";
import { TypeAnimat } from './TypeAnimat';
import { TbBrandLeetcode } from "react-icons/tb";
import { PiMouseSimpleBold } from "react-icons/pi";
import { FaArrowDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className='flex gap-10  pt-20 justify-center items-center pb-8 '>
      
          <div className='flex flex-col gap-8 w-14 text-[#6E57E0] text-xl mb-20'>
          <GrLinkedinOption/>
          <IoLogoInstagram/>
          <FiGithub/>
          <TbBrandLeetcode/>
             
          </div>

          <div className='flex flex-col gap-20' >
                  <div className='flex gap-20'>
                  <div className='flex flex-col w-[342px] h-[251px] ml-10'>
            <p className=' font-semibold text-5xl text-[#F2F1F3] font-sans h-[72px]'>Hi, I'm Harsh</p>
           <p className='mb-[12px]'><TypeAnimat /></p> 
            <p className=' text-base text-[#BCBAc4] mb-[32px]'>
              Building Software to solve real life problems
            </p>
            <button className='w-[146px] h-[56px] bg-[#6E57E0] flex items-center justify-center rounded-lg'>Contact Me</button>

                  </div>
                  <Tilt>
        <div className='bg-[#6E57E0] rounded-full ml-5'>
          <img src={image} width={268} height={170} className='bg-[#6E57E0] rounded-full' alt="Avatar" />
        </div>
                 </Tilt>
                  </div>
                  
                  <button className='flex gap-1  items-center ml-12'>
                    <PiMouseSimpleBold className=' w-[32px] h-[32px] text-[#6E57E0]'/>
                    <div>Scroll Down</div>
                    <FaArrowDown className='text-[#6E57E0]'/>


                  </button>

          </div>

          
        
        
        

      
         
       
   

    </div>
  );
};

