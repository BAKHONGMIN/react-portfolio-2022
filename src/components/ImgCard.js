/* eslint-disable*/
import React, {useState} from 'react';
import "../Imgcard.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';
import star from '../img/star.svg';

SwiperCore.use([Pagination]);

const Imgcard = () => {
  const ThemeMode = useTheme();
  let [site,sitech] = useState(['', '', '', '','']); 
  let [proposal,proposalch] = useState(['', '', '', '','']);
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }
  const [isOpena, setMenua] = useState(false);  
  const toggleMenua = () => {
        setMenua(isOpena => !isOpena); 
  }
  const [isOpenb, setMenub] = useState(false);  
  const toggleMenub = () => {
        setMenub(isOpenb => !isOpenb); 
  }
  const [isOpenc, setMenuc] = useState(false);  
  const toggleMenuc = () => {
        setMenuc(isOpenc => !isOpenc); 
  }
  const [isOpend, setMenud] = useState(false);  
  const toggleMenud = () => {
        setMenud(isOpend => !isOpend); 
  }
  
  
    return (
      
      <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          initialSlide={1}
          centeredSlides={true}
          scrollbar={{ draggable: true, dragSize: 24 }}
        >
          <SwiperSlide>
            <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item" style={{ background: "url(img/ex.png)" }}><button onClick={()=>toggleMenu()}><img className={isOpen ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>2021.05.28 | 예제</span>
              </div>
              <div className="quickbutton">
              <button><a href={site[0]}>사이트</a></button>
              <button><a href={proposal[0]}>기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item" style={{ background: "url(img/ex.png)" }}><button onClick={()=>toggleMenua()}><img className={isOpena ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>2021.05.28 | 예제</span>
              </div>
              <div className="quickbutton">
              <button><a href={site[0]}>사이트</a></button>
              <button><a href={proposal[0]}>기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item" style={{ background: "url(img/ex.png)" }}><button onClick={()=>toggleMenub()}><img className={isOpenb ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>2021.05.28 | 예제</span>
              </div>
              <div className="quickbutton">
              <button><a href={site[0]}>사이트</a></button>
              <button><a href={proposal[0]}>기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item" style={{ background: "url(img/ex.png)" }}><button onClick={()=>toggleMenuc()}><img className={isOpenc ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>2021.05.28 | 예제</span>
              </div>
              <div className="quickbutton">
              <button><a href={site[0]}>사이트</a></button>
              <button><a href={proposal[0]}>기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
      <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item" style={{ background: "url(img/ex.png)" }}><button onClick={()=>toggleMenud()}><img className={isOpend ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>2021.05.28 | 예제</span>
              </div>
              <div className="quickbutton">
              <button><a href={site[0]}>사이트</a></button>
              <button><a href={proposal[0]}>기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
    );
  
}

export default Imgcard;


const Border = styled.div`
  
  & .main-slide{
    border:  2px solid;
    border-color:${({ theme }) => theme.borderColor};
  }
  & h2{
    margin-bottom:10px;
  }
`