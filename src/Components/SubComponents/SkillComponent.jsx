import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import { useState } from 'react'
import { useRef, useEffect } from 'react'

const SkillComponent = ({languages, languageTitle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sectionHeight, setSectionHeight] = useState(0);
    const content = useRef(null);

    useEffect(() => {
        setSectionHeight(isOpen ? content.current.scrollHeight : 0)   
      }, [isOpen])

  return (
    <div className=''>
       {
         languageTitle.map((language,idx) => (
             <div key={idx} className='flex items-start justify-between mb-10 gap-3 '>
               <div className='pt-2'>{ language.image }</div> 
              <div className='flex flex-col items-center justify-start gap-0'>
                <div className='text-[25px] font'>{language.title}</div>
                <div className='text-[15px]'>{language.desc}</div>
                </div>
              <div className='pt-2'><IoIosArrowDropdown size={30} color='#00ffff' className={` cursor-pointer ${isOpen ? "rotate-180":"rotate-0"}
                transition-all duration-150 ease-linear`} onClick={()=> setIsOpen(!isOpen)}/> 
                </div> 
             </div>
         ) )
       }
     
       <div className={`overflow-hidden transition-[height] duration-[0.35s] ease-[ease]`} style={{ height: sectionHeight,}} ref={content}  > {
        languages.map((language,idx)=>(
            <div key={idx} className='flex flex-col gap-2 relative mb-4'>
            <div className='flex items-end justify-between'>
             {language.image}
            <div className='text-[16px]'>{language.name}</div>
            </div>
           <div className='h-2 rounded-md w-[100%] bg-[#00ffff]'></div>
            </div>
        ))
       }
       </div> 
    </div>
  )
}

export default SkillComponent
