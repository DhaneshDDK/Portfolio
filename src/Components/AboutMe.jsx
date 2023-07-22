import React from 'react'
import resume from '../assets/Main.pdf'
import {BsFiletypePdf} from 'react-icons/bs'

const AboutMe = () => {
  return (
    <div className='mx-auto max-w-[1120px] mb-16'>
        
        <div className='text-center text-[30px]'>About Me</div>
        <div className='mx-auto bg-[#00ffff] h-1 w-[6em]'></div>

          <div className='my-8'>Hi 👋 I'm Dhanesh a 21-year-old undergraduate at IIT Tirupati persuing a degree in Mechanical Engineering. I'm passionate about website development, UI/UX designs, and software development. Full stack web development fascinates me as it bridges the gap between design and functionality. I enjoy the challenge of problem-solving and continuously learning new technologies. With dedication and enthusiasm, I'm determined to make a meaningful impact in the digital world.</div>

          <a href={resume} download className=' cursor-pointer text-center mx-auto w-fit my-6 px-4 py-3 flex items-center gap-2 bg-[#00ffff] text-black rounded-lg shadow-[0px_0px_80px_#00ffff]'>
          <div>Download resume </div>
          <BsFiletypePdf color='black'/>
          </a>
           
      
    </div>
  )
}

export default AboutMe
