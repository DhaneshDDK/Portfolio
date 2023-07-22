import React from 'react'
import {PiSquaresFourBold} from 'react-icons/pi'

const BottomNav = ({setIsOpen}) => {
  return (
    <div className='flex items-center justify-between'>
       <div className='text-xl'>Dhanesh</div>
       <div onClick={()=>{setIsOpen(true)}}> <PiSquaresFourBold size={30} color='#00ffff'/> </div>
    </div>
  )
}

export default BottomNav
