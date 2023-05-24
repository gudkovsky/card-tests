import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react"; // Swiper — компонент-обёртка слайдера, в него и будем вкладывать слайды
// SwiperSlide — компонент-обёртка для слайда, каждый слайд нужно оборачивать в этот компонент

import "swiper/swiper.scss"; // стили для слайдера

import SwiperCore, { Navigation } from "swiper"; // SwiperCore — это ядро слайдера. С его помощью к слайдеру можно подключать различные модули, например, Navigation
// для навигации

import { StyledSlider, Image, StyledButton, SlyderWrapper } from "./styled";

export default function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SlyderWrapper>
      <StyledButton left title="back" ref={navigationPrevRef}>
        &lt;
      </StyledButton>
      <StyledButton right title="forward" ref={navigationNextRef}>
        &gt;
      </StyledButton>
      <StyledSlider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt={`изображение ${image}`}
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </SlyderWrapper>
  );
}
