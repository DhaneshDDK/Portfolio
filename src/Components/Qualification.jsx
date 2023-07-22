import React from 'react'
import {LuGraduationCap} from 'react-icons/lu'
import {MdWorkOutline} from 'react-icons/md'
import { useState } from 'react'
import TimeLine from './SubComponents/TimeLine'
import { education, work } from '../data'

const Qualification = () => {
    const [ tab, setTab ] = useState(1);


  return (
    <div className='mb-16 max-w-[1120px] mx-auto'>
         <div className='text-center text-[30px]'>Qualifications</div>
        <div className='mx-auto bg-[#00ffff] h-1 w-[8em]'></div>
        <div className='text-center my-2 text-gray-400'>My Educational Qualification & Work Experience</div>

         <div className='flex items-center justify-between max-w-[350px] mx-auto mt-16'>
            <div className='flex gap-5 items-center cursor-pointer' onClick={()=> setTab(1)}>
            <LuGraduationCap size={40}  color='#00ffff'/>
            <div className={`text-[24px] ${tab===1?" text-white":" text-gray-500"}`}>Education</div>
            </div>

            <div className='flex gap-5 items-center cursor-pointer' onClick={()=> setTab(2)}>
            <MdWorkOutline size={30}  color='#00ffff'/>
            <div className={`text-[24px] ${tab===2?" text-white":" text-gray-500"}`}>Work</div>
            </div>
         </div>

        <div className='my-10'><TimeLine data = {(tab===1)? education : work }/></div> 



    </div>
  )
}

export default Qualification
