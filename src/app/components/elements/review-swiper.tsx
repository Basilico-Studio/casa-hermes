"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "./review-card";
import { Autoplay } from "swiper/modules";

const ReviewSwiper = () => {
  return (
    <div className="sm:w-300 md:w-500 lg:w-700">
      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <ReviewCard guestName="Federica, IT" rating={4} text={"ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Vera, IT"
            rating={5}
            text={"ao semo annati io e mi cugino anacapito stavamo da pura ce stava pure er bidet, che poi alla fine basta che te siedi sulla doccia ma vabbe"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Liline, BE"
            rating={5}
            text={
              "ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard guestName="Ines, PT" rating={4} text={"ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio"} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Anke, DE"
            rating={5}
            text={
              "ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio ci siamo trovati bene ma il proprietario si è presentato e ci ha sputato in un occhio"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
