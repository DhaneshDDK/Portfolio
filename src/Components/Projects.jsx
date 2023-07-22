import React from 'react'
import Slider from './Slider'
import { useState } from 'react'
import MiniProjects from './SubComponents/MiniProjects'
import { miniProjects, projects } from '../data';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='mx-auto max-w-[1120px] my-16'>
      
        <div className='text-center text-[30px]'>Projects</div>
        <div className='mx-auto bg-[#00ffff] h-1 w-[8em]'></div>
        <div className='text-center my-2 text-gray-400'>Most recent work</div>

         <Slider projects={projects}/>


       <div className='my-16'>
              <div className='cursor-pointer my-6 p-4 w-fit rounded-lg  mx-auto bg-gradient-to-r from-[#000] via-[#00ffff] to-[#000] 
                shadow-[-5px_5px_40px_rgba(0,_255,_255,_1)]
             ' onClick={()=>setIsOpen(true)}>Show mini Projects</div>
       </div>
       
       { isOpen && <MiniProjects setIsOpen={setIsOpen} projects={miniProjects}/> }
    </div>
  )
}

export default Projects
