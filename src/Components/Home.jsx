import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {PiGithubLogoFill} from 'react-icons/pi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
import {SiCodechef} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import img from '../assets/avatar.png'
import Tilt from 'react-parallax-tilt';

const Home = () => {

  
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
    <div className='lg:h-[calc(100vh-5em)] flex flex-col-reverse my-10 lg:my-0 md:flex-row items-center justify-between max-w-[1120px] mx-auto gap-5 relative'>
     
     <div className='flex flex-col gap-y-2 md:w-[55%]'>
     
     <div className='text-[20px]'>Hai! It's me</div>
     <div className='text-[30px] font-bold'>Dhanesh Kumar</div>

     <div className='text-[20px]'> I am a
     <TypeAnimation
        sequence={[
            ' Full Stack Web Developer', 1000,
            ' Coder', 1000,
            ' Mechanical Engineer',1000
        ]}
        repeat={Infinity}
        className='text-[#00ffff] '
     />
    </div> 

    <div>I'm a full stack web developer specialized in mern stack. I am a passionate coder and my expertise is to create 
    beautiful UI designs with robust backend functionality. I am committed to delivering high-quality, user-centric solutions
     and many more...</div>

     <div className='my-6 flex items-center gap-x-4'>
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

     
     <div className='my-6 bg-[#00ffff] w-fit px-4 py-3 hover:scale-95 cursor-pointer transition-all duration-150 ease-linear
      rounded-lg text-black shadow-[0px_0px_80px_#00ffff]' onClick={() => scrollToElement('about')}>More About me</div>

     </div>
     <Tilt>
     <div className=' cursor-pointer w-fit aspect-square rounded-full p-2 bg-gradient-to-r from-[#00ffff] via-[#000] to-[#00ffff] 
      shadow-[-10px_10px_80px_rgba(0,_255,_255,_1)]'> 
       <img className=' aspect-square rounded-full'
     src={img} alt=""  width={400}/>
     </div>
     </Tilt>

    </div>
  )
}

export default Home
