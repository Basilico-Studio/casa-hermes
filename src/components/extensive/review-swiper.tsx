"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "@/components/extensive/review-card";

const ReviewSwiper = () => {
  return (
    <div className="sm:w-300 md:w-500 lg:w-700">
      <Swiper
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <ReviewCard
            guestName="Federica, IT"
            rating={5}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni commodi nostrum, distinctio porro dolores pariatur ducimus suscipit a debitis"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Vera, IT"
            rating={5}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni commodi nostrum, distinctio porro dolores pariatur ducimus suscipit a debitis"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Liline, BE"
            rating={5}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni commodi nostrum, distinctio porro dolores pariatur ducimus suscipit a debitis"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Ines, PT"
            rating={4}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni commodi nostrum, distinctio porro dolores pariatur ducimus suscipit a debitis"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Anke, DE"
            rating={5}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni commodi nostrum, distinctio porro dolores pariatur ducimus suscipit a debitis"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
