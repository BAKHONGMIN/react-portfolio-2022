import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import styled from 'styled-components';

SwiperCore.use([Navigation, Pagination, Autoplay])	// 추가

function MainPage() {
  return(
    <div>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}	// 추가
      >
    <Swiperwrap>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiperwrap>
      </Swiper>
    </div>
  )
}

export default MainPage;

const Swiperwrap  = styled.div`
    width:100%;
    height:100%;
`