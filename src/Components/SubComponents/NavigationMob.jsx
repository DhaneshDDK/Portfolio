import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {CgNotes} from 'react-icons/cg'
import {PiGraduationCap} from 'react-icons/pi'
import {SiCodeproject} from 'react-icons/si'
import {LuContact} from 'react-icons/lu'
import {ImCancelCircle} from 'react-icons/im'

const NavigationMob = ({setIsOpen}) => {

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
        setIsOpen(false);
      };

      

  return (
    <div className='bg-[#002828] border-[#00ffff] border-l-2 border-r-2 border-t-2 py-10 rounded-t-2xl px-10 h-[16em] relative'>
       <div className='absolute right-3 top-3' onClick={()=>{setIsOpen(false)}}> <ImCancelCircle size={25} color='#00ffff'/> </div>
         <div className='grid grid-cols-3 grid-rows-2 gap-2 h-full w-full place-items-center'>
     
                <div onClick={()=>{scrollToElement('home')}}  className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                 <AiOutlineHome size={30} color='#00ffff'/> <div>Home</div> 
                </div>
                  
                   <div onClick={()=>{scrollToElement('about')}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                    <CgProfile size={30} color='#00ffff'/> <div>About</div>
                     </div>

                   <div onClick={()=>{scrollToElement('skills')}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                    <CgNotes size={30} color='#00ffff'/> <div>Skills</div> 
                    </div>

                    <div onClick={()=>{scrollToElement('qualification')}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                    <PiGraduationCap size={30} color='#00ffff'/> <div className=''>Qualifications</div> 
                    </div> 
                   <div onClick={()=>{scrollToElement('projects')}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                    <SiCodeproject size={30} color='#00ffff'/> <div>Projects</div> 
                    </div> 
                   <div onClick={()=>{scrollToElement('contact')}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
                    <LuContact size={30} color='#00ffff'/> <div>Contact Me</div>
                     </div> 
         </div>
    </div>
  )
}

export default NavigationMob
