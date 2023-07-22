import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import SliderBox from './SubComponents/SliderBox';


const Slider = ({projects}) => {

  return (
    <div>
          <Swiper
        style={{
          '--swiper-navigation-color': '#00ffff',
          '--swiper-pagination-color': '#00ffff',
          '--swiper-pagination-bullet-inactive-color' : '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={window.innerWidth >= 1024 ? true : false}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
           
          {
             projects.map((project, idx) => (
                <SwiperSlide key={idx}> <SliderBox project={project}/> </SwiperSlide>
             ))
          }
        
      </Swiper>
    </div>
  )
}

export default Slider
