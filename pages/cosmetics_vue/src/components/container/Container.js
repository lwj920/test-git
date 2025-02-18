import React from 'react'
import './container.css'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// img
import banner1 from'../images/banner1.png'
import banner2 from'../images/banner2.png'
import banner3 from'../images/banner3.png'


function Container() {
  return (
    <div className='Container'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000}}
        className='Swiper'
      >
        <SwiperSlide className='SwiperSlide'><img src={banner1} alt=''/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img src={banner2} alt=''/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img src={banner3} alt=''/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Container
