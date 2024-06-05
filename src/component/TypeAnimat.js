import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const TypeAnimat= () => {
  return (
    <div>
        <TypeAnimation className=' text-xl text-[#BCBAc4] '
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I am an Full Stack Developer',
    1000,
    'I am an Backend Developer',
    1000,
    'I am an UI/UX Designer',
    1000,
    'I am an Coder',
    1000,
  ]}
  speed={50}
 
  repeat={Infinity}
/>
    </div>
  )
}
