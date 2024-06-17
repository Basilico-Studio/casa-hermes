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
            guestName="Martina"
            rating={5}
            text={
              "Abbiamo alloggiato con mio marito e il cane presso la casa vacanze. Siamo stati benissimo, abbiamo staccato dal caos della città e ci siamo presi un meritatissimo relax. Il parcheggio interno è stato fondamentale."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Stefano"
            rating={5}
            text={
              "Siamo venuti in gruppo, per un totale di sei persone. Avevamo la piscina, il wi-fi, un’intera casa tutta per noi! I barbecue all’esterno si sono sprecati con quel camino tattico all’entrata. La carne in Toscana costa il giusto e gioca un’altra campionato come gusto! Questa casa è perfetta per venire in gruppo!"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Ilaria"
            rating={5}
            text={
              "I proprietari sono due persone squisite e disponibili, sempre pronti ad assisterti se ne hai bisogno! La casa sembra uscita da una favola ed è stata un punto perfetto per farci un giro nella maremma toscana ma anche nel viterbese. Ho alloggiato qui con una mia amica, siamo venute a preparare gli esami nel relax più totale."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            guestName="Matteo"
            rating={4}
            text={
              "Ho alloggiato qui con la mia famiglia. Volevo portare mia moglie e la piccolina in un posto sano e rilassante, senza però avere problemi di connessione o altro. Questa casa ha accontentato tutti superando anche le aspettative. Da qui abbiamo raggiunto facilmente le terme di Saturnia e visto tantissime cose fantastiche come il borgo di Pitigliano o il lago di Bolsena, il più grande lago vulcanio più grande d’Europa."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
