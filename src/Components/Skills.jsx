import React from 'react'
import SkillComponent from './SubComponents/SkillComponent'
import { languages } from '../data'
import { languageTitle } from '../data'
import { Frameworks } from '../data'
import { FrameworksTitle } from '../data'
import { ToolsTitle } from '../data'
import { tools } from '../data'

const Skills = () => {
  return (
    <div className='mx-auto max-w-[1120px] mb-16 mt-[6em]'>
         
          <div className='text-center text-[30px]'>Skills</div>
          <div className='mx-auto bg-[#00ffff] h-1 w-[6em]'></div>
        <div className='text-center my-2 text-gray-400'> My Technical Skills</div>
       
       <div className='my-16 flex flex-wrap items-start gap-y-16 gap-5 justify-center xl:justify-between relative'> 
         <div className='w-[500px] '><SkillComponent languages={languages} languageTitle={languageTitle}/> </div> 
         <div className='w-[500px] '><SkillComponent languages={Frameworks} languageTitle={FrameworksTitle}/> </div> 
         <div className='w-[500px] '><SkillComponent languages={tools} languageTitle={ToolsTitle}/> </div> 
       </div> 
    </div>
  )
}

export default Skills
