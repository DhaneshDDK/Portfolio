import React from 'react'
import {PiGithubLogoFill} from 'react-icons/pi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
import {SiCodechef} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'

const Footer = () => {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if(id==='home') window.scrollTo({ top: (0,0), behavior:'smooth' });
    if (element) {
      var headerOffset = 90;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset; 
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
    }
  };

  return (
    <div className='mx-auto max-w-[1120px] my-5 gap-5 lg:mt-16 min-h-[12em] flex flex-col items-center justify-between'>
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-[5em] gap-5'>
          <div>
            <div className='text-3xl'>Dhanesh Kumar</div>
            <div className='text-xl'>Full stack developer</div>
          </div>

          <div className=' flex items-center gap-10'>
          <div className=' cursor-pointer' onClick={() => scrollToElement('about')}>About</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('skills')}>Skills</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('projects')}>Projects</div>
          </div>
          
          <div className='flex items-center gap-x-4'>
        <a href={`https://github.com/DhaneshDDK`} className='p-[2px] bg-[#00ffff] hover:bg-gray-500 transition-all duration-150 ease-linear  hover:scale-95
         w-fit aspect-square rounded-full flex items-center justify-center'>
        <PiGithubLogoFill size={30} color='#00ffff' className='bg-[#002828] aspect-square rounded-full p-1'/>
        </a>
        <a href={`https://www.linkedin.com/in/dhanesh-kumar-dande-3248841b9/`} className='p-[2px] bg-[#00ffff] hover:bg-gray-500 transition-all duration-150 ease-linear  hover:scale-95
         w-fit aspect-square rounded-full flex items-center justify-center'>
        <BiLogoLinkedin size={30} color='#00ffff' className='bg-[#002828] aspect-square rounded-full p-1'/>
        </a>
        <a href="mailto:dandedhanesh899@gmail.com" className='p-[2px] bg-[#00ffff] hover:bg-gray-500 transition-all duration-150 ease-linear  hover:scale-95
         w-fit aspect-square rounded-full flex items-center justify-center'>
        <BiLogoGmail size={30} color='#00ffff' className='bg-[#002828] aspect-square rounded-full p-1'/>
        </a>

        <a href={`https://auth.geeksforgeeks.org/user/me20bj7wz/practice`} className='p-[2px] bg-[#00ffff] hover:bg-gray-500 transition-all duration-150 ease-linear  hover:scale-95
         w-fit aspect-square rounded-full flex items-center justify-center'>
        <SiGeeksforgeeks size={30} color='#00ffff' className='bg-[#002828] aspect-square rounded-full p-1'/>
        </a>


        <a href={`https://www.codechef.com/users/dhaneshkumar`} className='p-[2px] bg-[#00ffff] hover:bg-gray-500 transition-all duration-150 ease-linear  hover:scale-95
         w-fit aspect-square rounded-full flex items-center justify-center'>
        <SiCodechef size={30} color='#00ffff' className='bg-[#002828] aspect-square rounded-full p-1'/>
        </a>

     </div>

    </div>
    <div className='text-[16px] text-gray-400 text-center '> © Dhanesh Kumar. All rights reserved  </div>

    </div>
  )
}

export default Footer
