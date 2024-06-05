// import React, { useState } from 'react'
// import { BsBrightnessHigh } from "react-icons/bs";
// import {data} from "../data/navlinkData"
// export const Navbar = () => {


      
//     const [navdata,setdata]= useState(data)
//     const changehandle = (valu) => {
//         const updatedData = data.map((item) => ({
//           ...item,
//           value: item.name === valu,
//         }));
//         setdata(updatedData);
//       };

    
//   return (
//     <div className='  h-[72px] flex justify-center items-center m-auto' >
     
//      <div className=' w-[968px] flex justify-between  ml-[138.8px] mr-[138.8px]'>
//         <div>
//             Harsh
//         </div>
//         <div className='flex gap-[2rem] items-center text-sm pl-40'>
        
//            {
//                data.map((data)=>(
//                 <div className={` ${data.value===true? " text-[#3F66DD]":" text-white"}`  }  onClick={()=>changehandle(data.name)}>
//                     {data.name}
//                 </div>
//                ))
//            }
//             <div>
//             <BsBrightnessHigh/>
//             </div>
//         </div>
        
//     </div>
       
//     </div>
 
//   )
// }



import React, { useState } from 'react';
import { BsBrightnessHigh } from "react-icons/bs";
import { data as navlinkData } from "../data/navlinkData";
import { Hero } from './Hero';
import { About } from './About';
import { Skill } from './Skill';

export const Navbar = () => {
  const [data, setData] = useState(navlinkData);

  const changehandle = (valu) => {
    const updatedData = data.map((item) => ({
      ...item,
      value: item.name === valu,
    }));
    setData(updatedData);
  };

  return (

    <div className=' flex flex-col w-[full] justify-center items-center  '>
       <div className='h-[72px] flex justify-center items-center m-auto fixed top-0 z-20'>
      <div className='w-[968px] flex justify-between ml-[138.8px] mr-[138.8px]'>
        <div>
          Harsh
        </div>
        <div className='flex gap-[2rem] items-center text-sm pl-40'>
          {data.map((item) => (
            <div
              key={item.name}
              className={item.value ? "text-[#3F66DD]" : "text-white"}
              onClick={() => changehandle(item.name)}
            >
              {item.name}
            </div>
          ))}
          <div>
            <BsBrightnessHigh />
          </div>
        </div>
      </div>
       </div>
     
     
     <div className=' w-[968px]  pt-[5.2rem] flex items-center'>
     <Hero />
     </div>

     <div className=' w-[968px]  pt-24 flex items-center'>
     <About/>

     </div>

     <div className=' w-[968px]  pt-24 flex items-center'>
     <Skill/>

     </div>

      

    </div>
    

  );
};
