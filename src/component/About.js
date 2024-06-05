// import React from 'react'
// import image from '../data/image/last.png'

// export const About = () => {
//   return (
//     <div className='flex flex-col justify-center items-center   w-full'>
        
//         <p className=' text-4xl font-semibold'>About Me</p>
//         <p className='text-sm text-[#BCBAB4] pb-16'>My Introduction</p>

//         <div className=' h-[344px]'>
//            <div >
//               <img src={image} className='w-[344px] h-[344px]'/>
//            </div>
//            <div>

//            </div>


//         </div>
       
//     </div>
//   )
// }


import React from 'react';
import image from '../data/image/last.png';
import './About.css';
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import resume from '../data/Resume/Resume.pdf'


export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full mb-8'>
      <p className='text-4xl font-semibold'>About Me</p>
      <p className='text-sm text-[#BCBAB4] pb-16'>My Introduction</p>
      
      <div className='h-[344px] flex gap-20'>
        <div className='flex-shrink-0 '>
          <img src={image} className='about-image' alt='About Me'/>
        </div>
        <div className='flex-grow w-[344px] h-[216px] '>
          {/* Add any additional content here */}
          <p className=' text-base  text-[#BCBAB4]  mb-6 '>
          Hey there,👋 I'm Harsh a 20-year-old CSE undergrad who is passionate about Software Development, UI/UX
            Design and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻 with
            3+ years of professional and freelance experience. I share my learnings through speaking engagements and
            write-ups. ✍🏻
          </p>

          <a href={resume} download="Harsh_Resume.pdf" className='no-underline'>
            <button className='w-[130px] h-[62.5px] bg-[#635fc7] flex gap-4 items-center justify-center rounded-md'>
              <p className='text-base bg-[#635fc7]'>Resume</p>
              <HiOutlineDocumentArrowDown className='w-[20px] h-[20px] bg-[#635fc7]' />
            </button>
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

