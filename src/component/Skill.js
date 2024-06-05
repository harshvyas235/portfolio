import React, { useState } from 'react'
import { MdOnDeviceTraining, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiBracketsCurlyBold } from "react-icons/pi";
export const Skill = () => {

    const [show1,setshow]= useState(false)
    const [show2,setshow2]= useState(false)

    const changehandle=()=>{
        setshow(!show1)
    }
  return (
    <div className='flex flex-col  items-center w-full mb-8 '>
           <p className='text-4xl font-semibold'>Skill</p>
      <p className='text-sm text-[#BCBAB4] pb-16'>My Technical Skills</p>


      <div className='flex gap-6 justify-center '>
             <div  className=' flex  max-w-[372px] items-center gap-[-15px] '>
                <div className='flex gap-0'> <MdOutlineKeyboardArrowLeft className='w-[32px] text-[#6e57e0] h-[32px] '/> 
                <MdOutlineKeyboardArrowRight className='w-[32px] text-[#6e57e0] h-[32px]'/></div>
                <div>
                <p>Languages</p>
                <p className='text-[#BCBAB4] text-sm'>Languages that I have picked up over the years</p>
                
                </div>
                <div >
                {
                    show2?<IoIosArrowUp className='text-[#6e57e0] w-[32px] h-[32px]'/>:<IoIosArrowDown className='text-[#6e57e0] w-[32px] h-[32px]'/>
                }
                </div>
                

             </div>
             
             <div className='flex flex-col'>
             <div  className=' flex  max-w-[372px] items-center gap-[-15px] '>
                <div className='flex '> 
                <PiBracketsCurlyBold className='w-[32px] text-[#6e57e0] h-[32px] mr-2 '/> 

                </div>
                <div>
                <p>Libraries & Frameworks</p>
                <p className='text-[#BCBAB4] text-sm'>Libraries and Frameworks that I prefer to work with</p>
                
                </div>
                <div >
                {
                    show1?<IoIosArrowUp className='text-[#6e57e0] w-[32px] h-[32px]' onClick={changehandle}/>:<IoIosArrowDown className='text-[#6e57e0] w-[32px] h-[32px]' onClick={changehandle}/>
                }
               
                </div>
                

             </div>

             <div>
                {
                    show1&&(<div className=' w-[300px] h-[300px]'>

                    </div>
                    )
                }
             </div>

             </div>
             

             
           
      </div>




    </div>
  )
}
