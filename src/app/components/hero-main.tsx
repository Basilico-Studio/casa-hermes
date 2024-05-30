"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "./elements/button";

const HeroMain = () => {
  return (
    <div>
      <Swiper className="z-10 relative" modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} slidesPerView={1} autoplay={true} loop={true}>
        <SwiperSlide>
          <div className="bg-[url('/images/dark-mountain-03.jpeg')] bg-cover bg-center h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/dark-mountain-03.jpeg')] bg-cover bg-center h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/dark-mountain-03.jpeg')] bg-cover bg-center h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/dark-mountain-03.jpeg')] bg-cover bg-center h-[500px]"></div>
        </SwiperSlide>
        <div className="z-20 absolute top-1/3 w-full flex flex-col items-center gap-16">
          <h1 className="text-3xl font-semibold text-white px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore.</h1>
          <Button className="bg-teal-900 text-white text-md">prenota</Button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroMain;
