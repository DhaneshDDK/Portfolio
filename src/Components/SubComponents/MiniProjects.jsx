import React from 'react'
import {MdCancel} from 'react-icons/md'
import Slider from '../Slider'

const MiniProjects = ({setIsOpen, projects}) => {
  return (
    <div className='fixed inset-0 z-10 backdrop-blur-md flex items-center justify-center'>
        <div className='absolute right-10 top-10 cursor-pointer' onClick={()=>{setIsOpen(false)}}>  
        <MdCancel size={30} color='#00ffff'/> </div>
         
         <div className='w-[95%] lg:w-[80vw] max-h-[70vh] bg-[#002828] border-2 border-[#00ffff] rounded-lg overflow-auto'>
           <div className='p-10'> <Slider projects={projects}/></div>
         </div>

    </div>
  )
}

export default MiniProjects
