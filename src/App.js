import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Qualification from './Components/Qualification';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import SideNav from './Components/SubComponents/SideNav';
import { useState } from 'react';
import BottomNav from './Components/SubComponents/BottomNav';
import { useRef } from 'react'
import NavigationMob from './Components/SubComponents/NavigationMob';
import { useEffect } from 'react';

function App() {

    const [height, setHeight] = useState(0);
    window.addEventListener('scroll', ()=>  setHeight(document.documentElement.scrollTop))

    const [isOpen, setIsOpen] = useState(false);
    const [sectionHeight, setSectionHeight] = useState(0);
    const menuRef = useRef(null);

    useEffect(() => {
        setSectionHeight(isOpen ? menuRef.current.scrollHeight : 0)   
      }, [isOpen,setIsOpen])


  return (
    <div className='w-[100%] h-[100%] relative text-white font-Tektur'>
     <div className='fixed w-[100%] mx-auto backdrop-blur-md z-10'> <Navbar/> </div>
     <div className='fixed bottom-0 py-4 px-10 w-[100%] mx-auto backdrop-blur-md z-10 md:hidden'> <BottomNav setIsOpen={setIsOpen}/> </div>
     <div
      style={{ height: sectionHeight,}} ref={menuRef} 
      className='fixed bottom-0 w-[100%] mx-auto z-20 md:hidden overflow-hidden transition-[height] duration-[0.35s] ease-[ease]'
      > <NavigationMob setIsOpen={setIsOpen}/> </div>
    <div className=" bg-[#002828] min-h-screen w-[100%] px-10 overflow-x-hidden">
        <div  id='home' className='w-[100%] h-[5em]'></div>
         <div> <Home/> </div>
         <div id='about'> <AboutMe/> </div>
         <div id='skills'> <Skills /> </div>
         <div id='qualification'> <Qualification/> </div>
         <div id='projects'> <Projects/> </div>
         <div id='contact'> <ContactForm/> </div>
         <div className='w-[100%] h-1 bg-gradient-to-r from-[#00ffff] via-[#000] to-[#00ffff] rounded-full
          shadow-[-25px_25px_100px_rgba(0,_255,_255,_1)]
         '></div>
         <div> <Footer/> </div>
    </div>
     { height>=500 && <div className={`fixed bottom-[10vh] right-10 `} onClick={()=> window.scrollTo({top:(0,0), behavior:"smooth"})}> <SideNav/> </div>}
    </div>
  );
}

export default App;
