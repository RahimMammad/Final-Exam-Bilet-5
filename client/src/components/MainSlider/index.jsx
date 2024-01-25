import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss"

const MainSlider = () => {
  return (
   <Swiper className="mySwiper">
       <SwiperSlide>
          <div className='slider-main'>
               <div className="slider-main-container">
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
                    <div className="slider-text">
                         <i>60% Discount</i>
                         <h1>Winter Collection</h1>
                         <i><p>Best Cloth Collection By 2020</p></i>
                         <button>Shop now</button>
                    </div>
               </div>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div className='slider-main'>
               <div className="slider-main-container">
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
                    <div className="slider-text">
                         <i>60% Discount</i>
                         <h1>Winter Collection</h1>
                         <i><p>Best Cloth Collection By 2020</p></i>
                         <button>Shop now</button>
                    </div>
               </div>
          </div>
       </SwiperSlide>
   </Swiper>
  )
}

export default MainSlider
