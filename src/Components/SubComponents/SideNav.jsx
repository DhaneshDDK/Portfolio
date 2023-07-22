import React from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'

const SideNav = () => {
  return (
    <div className='p-5 w-10 h-10 rounded-full border-[#00ffff] border
    shadow-[-10px_10px_80px_rgba(0,_255,_255,_1)] flex items-center justify-center cursor-pointer'>
      <div>
        <BiUpArrowAlt size={30} color='#00ffff' />
             </div>
     </div>
  )
}

export default SideNav
