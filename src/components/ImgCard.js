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
  let [site,sitech] = useState(['https://ghdals2655.cafe24.com/bootstrap5/simmons/', 'https://ghdals2162.cafe24.com/', 'https://ghdals2655.cafe24.com/HBAF/', 'https://ghdals2162.cafe24.com/diptqyue-event1/','https://ghdals2162.cafe24.com/diptqyue-event2/']); 
  let [process,processch] = useState(['https://ghdals2655.cafe24.com/simmons_process/', 'https://ghdals2655.cafe24.com/diptyque_process/', 'https://ghdals2655.cafe24.com/hbaf_process/', '','']);
  let [nbox,nboxer] = useState(['http://naver.me/5qgZ3ABx', '', '', '','']);
  let [manual,manualch] = useState(['http://naver.me/5IlWLYLc', 'http://naver.me/Gaz5wjUA', 'http://naver.me/xgGnzhQH', '','']);

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
              <div className="main-slide-item simmons"><button onClick={()=>toggleMenu()}><img className={isOpen ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>SIMMONS</h2>
                <span>Bootstrap5 + Gnuboard</span><br/><br/>
                <span>2021.05.28</span>
              </div>
              <div className="quickbutton">
              <button className='button0'><a href={site[0]} target="_blank">사이트</a></button>
              <button className='button0'><a href={process[0]} target="_blank">프로세스</a></button><br/>
              <button className='button0'><a href={nbox[0]} target="_blank">기획서</a></button>
              <button className='button0'><a href={manual[0]} target="_blank">매뉴얼</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item diptqyue"><button onClick={()=>toggleMenua()}><img className={isOpena ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>diptqyue</h2>
                <span>Ecommerce</span><br/><br/>
                <span>2021.05.20</span>
              </div>
              <div className="quickbutton">
              <button className='button1'><a href={site[1]} target="_blank">사이트</a></button>
              <button className='button1'><a href={process[1]} target="_blank">프로세스</a></button>
              <button className='button1'><a href={manual[1]} target="_blank">매뉴얼</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item hbaf"><button onClick={()=>toggleMenub()}><img className={isOpenb ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>HBAF</h2>
                <span>Gnuboard</span><br/><br/>
                <span>2021.04.28</span>
              </div>
              <div className="quickbutton">
              <button className='button2'><a href={site[2]} target="_blank">사이트</a></button>
              <button className='button2'><a href={process[2]} target="_blank">프로세스</a></button>
              <button className='button2'><a href={manual[2]} target="_blank">매뉴얼</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
          <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item event1"><button onClick={()=>toggleMenuc()}><img className={isOpenc ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>diptqyue-event_1</h2>
                <span>Bootstrap5</span><br/><br/>
                <span>2021.04.20</span>
              </div>
              <div className="quickbutton">
              <button className='button3'><a href={site[0]} target="_blank">사이트</a></button>
              <button className='button3'><a href={process[0]} target="_blank">기획서</a></button>
              </div>
            </div>
            </Border>
          </SwiperSlide>
          <SwiperSlide>
      <Border theme={ThemeMode[0]}>
            <div className="main-slide">
              <div className="main-slide-item event2"><button onClick={()=>toggleMenud()}><img className={isOpend ? "starclick" : "star"} src={star} alt='star' width="30px" /></button></div>
              <div className="main-slide-text">
                <h2>diptqyue-event_2</h2>
                <span>HTML+CSS</span><br/><br/>
                <span>2021.04.18</span>
              </div>
              <div className="quickbutton">
              <button className='button4'><a href={site[0]} target="_blank">사이트</a></button>
              <button className='button4'><a href={process[0]} target="_blank">기획서</a></button>
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
    background-color:${({ theme }) => theme.borderColor};
    & .simmons{
      background-image: url(img/simmons.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    & .diptqyue{
      background-image: url(img/diptqyue.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    & .hbaf{
      background-image: url(img/hbaf.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    & .event1{
      background-image: url(img/diptqyue-event1.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    & .event2{
      background-image: url(img/diptqyue-event2.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  & h2{
    margin-bottom:10px;
    font-weight:bold;
    font-size:17px;
  }

`