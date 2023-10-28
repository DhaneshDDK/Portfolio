import {FaJava} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandTypescript} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import {PiBracketsCurly} from 'react-icons/pi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {SiExpress} from 'react-icons/si'
import {SiMongoose} from 'react-icons/si'
import {FaTools} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {TbBrandVscode} from 'react-icons/tb'
import {SiPostman} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {MdOutlineEngineering} from 'react-icons/md'
import {LuSchool} from 'react-icons/lu'
import {BiBusSchool} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {SiMongodb} from 'react-icons/si'

import studynotion from './assets/studynotion.mp4'
import portfolio from './assets/portfolio.png'
import blujAero from './assets/blujAero.png'
import ecomzy from './assets/ecomzy.png'
import ecomzyfullstack from './assets/ecomzy_fullstack.png'
import weather from './assets/weather.png'
import github from './assets/github.png'
import passwordGenerator from './assets/passwordGenerator.png'
import TicTacToe from './assets/TicTacToe.png'
import gif from './assets/gif.png'
import chair from './assets/chair.png'
import razorpay from './assets/razorpay.png'
import discord from './assets/discord.png'
import blogs from './assets/blogs.png'

export const languages = [
    {
        image : <SiCplusplus size={30} color='#00ffff'/>,
        name : "C++"
    },
    {
        image : <DiJavascript1 size={30}  color='#00ffff'/>,
        name : "JavaScript"
    },
    {
        image : <TbBrandTypescript size={30} color='#00ffff'/>,
        name : "TypeScript"
    },
    {
        image : <FaJava size={30} color='#00ffff'/>,
        name : "Java"
    },
    {
        image : <FaPython size={30} color='#00ffff'/>,
        name : "Python"
    },
]

export const languageTitle = [
   {
     image : <BsCodeSlash size={50} color='#00ffff'/>,
     title  : "Languages",
     desc : "Languages that I have picked up over the years" 
   }
]



export const Frameworks = [
    {
        image : <BiLogoReact size={30} color='#00ffff'/>,
        name : "React"
    },
    {
        image : <BiLogoNodejs size={30}  color='#00ffff'/>,
        name : "Node js"
    },
    {
        image : <BiLogoTailwindCss size={30} color='#00ffff'/>,
        name : "Tailwind CSS"
    },
    {
        image : <SiExpress size={30} color='#00ffff'/>,
        name : "Express js"
    },
    {
        image : <SiMongoose size={30} color='#00ffff'/>,
        name : "Mongoose"
    },
]

export const FrameworksTitle = [
   {
     image : <PiBracketsCurly size={50} color='#00ffff'/>,
     title  : "Libraries & Frameworks",
     desc : "Libraries and Frameworks that I prefer to work with" 
   }
]


export const tools = [
    {
        image : <BsGithub size={30} color='#00ffff'/>,
        name : "Github"
    },
    {
        image : <TbBrandVscode size={30}  color='#00ffff'/>,
        name : "Visual Studio"
    },
    {
        image : <SiPostman size={30} color='#00ffff'/>,
        name : "Postman"
    },
    {
        image : <DiGit size={30} color='#00ffff'/>,
        name : "Git"
    },
    {
        image : <SiMongodb size={30} color='#00ffff'/>,
        name : "MongoDB Compass"
    },
 
]

export const ToolsTitle = [
   {
     image : <FaTools size={50} color='#00ffff'/>,
     title  : "Tolls",
     desc : "Tools that I know and use on a daily basis" 
   }
]

export const education = [
    {
        degree : "B.Tech",
        college : "IIT Tirupati - Mechanical Engineering",
        image : <MdOutlineEngineering size={30} color='#00ffff'/>,
        date : "2020 - present",
    },
    {
        degree : "Senior Secondary School ",
        college : "Abhyas Junior college, Proddatur",
        image : <LuSchool size={30} color='#00ffff'/>,
        date : "2018-2020"
        
    },
    {
        degree : "Secondary School",
        college : "Sri Sreevani Vidyalayam High School, Proddatur",
        image : <BiBusSchool size={30} color='#00ffff'/>,
        date : "2008-2018"
    },
];

export const work = [
    {
        degree : "Frontend React Js intern",
        college : "BluJ Aerospace",
        image : <MdWorkOutline size={30} color='#00ffff'/>,
        date : "May 2023 - July 2023"
    },
    {
        degree : "Genetic Algorithm-Based Estimation of Propeller Forces in VTOL Aircraft - intern",
        college : "BluJ Aerospace",
        image : <MdWorkOutline size={30} color='#00ffff'/>,
        date : "May 2023 - July 2023"
    },
  
]

export const projects = [
 
  {
    asset : <img src={ecomzyfullstack} alt="" />,
    title : "Shooping Website",
    subTitle : "",
    desc : "This is a shopping website made using React Js, Node Js, Express Js, MongoDB and Tailwind CSS with clean UI.",
    link : `https://shoppy-kappa.vercel.app/`,
  },

  
      
      {
        asset :  <video autoPlay loop muted>
        <source src={studynotion} type='video/mp4' />
        </video>,
        title : "StudyNotion",
        subTitle : "EdTech platform",
        desc : "This is a EdTech platform website built using React Js, Tailwind CSS, Express JS, Mongoose and MongoDB.",
        link : `https://frontend-4tzg2nlgm-dhaneshddk.vercel.app/`,
      },


      
      {
        asset : <img src={blujAero} alt="" />,
        title : "BlujAero",
        subTitle : "",
        desc : "This is a content-driven website for an aerospace startup in Telangana. It is built using React Js and Tailwind CSS.",
        link : `https://blujaero.com/`,
      },
      

      {
        asset : <img src={portfolio} alt="" />,
        title : "Portfolio Website",
        subTitle : "",
        desc : "My personal portfolio website made using React Js and Tailwind CSS with clean UI.",
        link : `https://frontend-4tzg2nlgm-dhaneshddk.vercel.app/`,
      },
    

]
export const miniProjects = [
    
      {
        asset : <img src={ecomzy} alt="" />,
        title : "Shopping Website",
        subTitle : "",
        desc : "This is a shopping website made using shopping api, React JS and tailwind CSS",
        link : `https://dhanesh-shoppingsite.netlify.app/`,
      },
      {
        asset : <img src={weather} alt="" />,
        title : "Weather App",
        subTitle : "",
        desc : "This is a weather application built using wather api, HTML, Tailwind CSS and JavaScript",
        link : `https://weatherapp-dhanesh.netlify.app/`,
      },
      {
        asset : <img src={blogs} alt="" />,
        title : "Blogs website",
        subTitle : "",
        desc : "This is a blog website built using blogs api, React and Tailwind CSS",
        link : `https://dhaneshblogs.netlify.app/`,
      },
      {
        asset : <img src={github} alt="" />,
        title : "Dev Devtective",
        subTitle : "",
        desc : "This is a detective application which retrieves github user information using github api and is built using HTML, Tailwind CSS and JavaScript",
        link : `https://gituser-dhanesh.netlify.app/`,
      },
      {
        asset : <img src={passwordGenerator} alt="" />,
        title : "Password Generator",
        subTitle : "",
        desc : "This is a password generation application built using HTML, Tailwind CSS and JavaScript",
        link : `https://dhanesh-passwordgenerator.netlify.app/`,
      },
      {
        asset : <img src={TicTacToe} alt="" />,
        title : "TicTac game",
        subTitle : "",
        desc : "This is tic tac game built using HTML, Tailwind CSS and JavaScript",
        link : `https://tictactoe-dhanesh.netlify.app/`,
      },
      {
        asset : <img src={gif} alt="" />,
        title : "Gif generator",
        subTitle : "",
        desc : "This is gif generator built using gif api, React and Tailwind CSS",
        link : `https://bucolic-gnome-094419.netlify.app/`,
      },
      {
        asset : <img src={chair} alt="" />,
        title : "Chair auction",
        subTitle : "",
        desc : "This is a static auction webpage built using HTML and CSS",
        link : `https://modern-chair-auction.netlify.app/#`,
      },
      {
        asset : <img src={razorpay} alt="" />,
        title : "Razorpay clone",
        subTitle : "",
        desc : "This is a frontend clone of Razorpay website home page built using HTML and Tailwind CSS",
        link : `https://velvety-cucurucho-f77ff7.netlify.app/`,
      },
    
      {
        asset : <img src={discord} alt="" />,
        title : "Discord clone",
        subTitle : "",
        desc : "This is a frontend clone of Discord website home page built using HTML and Tailwind CSS",
        link : `https://discorddhanesh.netlify.app/`,
      },
    
      
]