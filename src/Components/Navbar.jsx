import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

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
    <div className='h-[5em] flex flex-row items-center justify-center md:justify-between mx-auto max-w-[1120px]'>
        
        <div className='text-[2em] font-bold'>Portfolio</div>

          <div className='md:flex gap-x-6 lg:gap-x-8 text-[17px]  items-center hidden'>
          <div className=' cursor-pointer' onClick={() => scrollToElement('home')}>Home</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('about')}>About</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('skills')}>Skills</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('qualification')}>Qualifications</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('projects')}>Projects</div>
          <div className=' cursor-pointer' onClick={() => scrollToElement('contact')}>Contact Me</div>
          </div>

       
      
    </div>
  )
}

export default Navbar
