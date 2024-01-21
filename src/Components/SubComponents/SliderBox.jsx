import React from 'react'

const SliderBox = ({project}) => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-10'>

            <div className='min-w-[200px] max-w-[600px] min-h-[150px] h-fit border border-[#00ffff] rounded-md overflow-hidden'>
                  { project.asset }
             </div>
          
         
          <div className='flex flex-col justify-center max-w-[400px]'>
             <div className="title" data-swiper-parallax="-300"> {project.title} </div>
             <div className="subtitle" data-swiper-parallax="-200">  {project.subTitle}  </div>
             <div className="text my-2" data-swiper-parallax="-100">  {project.desc}      </div>

             <a href={project.link} className='
              cursor-pointer my-6 p-4 w-fit rounded-lg bg-gradient-to-r mx-auto from-[#00ffff] via-[#000] to-[#00ffff] 
                shadow-[-5px_5px_40px_rgba(0,_255,_255,_1)]
             '> Visit website </a>       

          </div>

            
          <div>
        
          </div>
      
    </div>
  )
}

export default SliderBox
