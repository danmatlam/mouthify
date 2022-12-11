"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IContenido } from "../../store/schema";
import "swiper/css";
import HomeCard from "./HomeCard";

export type Props = {
  data: IContenido[];
};

const HomeCards: React.FC<Props> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={2.3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
       padding:'.9em',
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <HomeCard contenido={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCards;
