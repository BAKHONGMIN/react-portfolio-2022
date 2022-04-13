/* eslint-disable*/
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../fonts/font.css';
import Menu from '../img/menu.svg';
import Blogo from '../img/B.svg';
import Portfolio from '../img/portfolio.svg';
import Interview from '../img/pre-interview.svg';
import Contact from '../img/contact_me.svg';
import Design from '../img/design.svg';
import Banner from '../img/banner.svg';
import '../App.scss';
import { useTheme } from '../context/themeProvider';

const Header = () => {

  let [site,sitech] = useState(['https://pf.kakao.com/chat', 'https://github.com/BAKHONGMIN', 'mailto:ghdals2655@naver.com', 'tel:010-2162-2664']);
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }
  let [menutext,menutextch] = useState(['About_me', 'Portfoilo', 'Interview', 'Contact_me','Design','Banner']);
  const ThemeMode = useTheme();
  
  return (
    <nav>
      <StyledHeader>
        <RightMenu>
            <Menutext><a href={site[0]} target="_blank">Kakaotalk</a></Menutext>
            <Menutext><a href={site[1]} target="_blank">Git hub</a></Menutext>
            <Menutext><a href={site[2]}>Email</a></Menutext>
            <Menutext><a href={site[3]}>Phone</a></Menutext>
            <Menutext theme={ThemeMode[0]}><Link to="/"><img src={Menu} alt="menu" onClick={()=>toggleMenu()} /></Link></Menutext>
        </RightMenu>
      </StyledHeader>
      <Submenu className={isOpen ? "menuwrap" : "d-none"}>
        <Submenuwrap>
          <Submenuicon>
            <Menuimg><img src={Blogo} alt="blogo" width="20px"/><br/><span>{menutext[0]}</span></Menuimg>
            <Menuimg><img src={Portfolio} alt="portfoilo" width="30px" /><br/><span>{menutext[1]}</span></Menuimg>
            <Menuimg><img src={Interview} alt="interview" width="30px" /><br/><span>{menutext[2]}</span></Menuimg>
          </Submenuicon>
          <Submenuicon>
            <Menuimg><img src={Contact} alt="contact" width="30px" /><br/><span>{menutext[3]}</span></Menuimg>
            <Menuimg><img src={Design} alt="design" width="25px" /><br/><span>{menutext[4]}</span></Menuimg>
            <Menuimg><img src={Banner} alt="banner" width="30px" /><br/><span>{menutext[5]}</span></Menuimg>
          </Submenuicon>
        </Submenuwrap>
      </Submenu>
    </nav>
  )
}

export default Header;

const StyledHeader = styled.ul`
  align-items: center;
  width: 100%;
  height: 50px;
  font-family: "Notosans-m";
`

const RightMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  float: right;
  margin: 10px 20px;

`
const Menutext = styled.li`
  font-family: "Notosans-m";
  & a {
  display: flex;
  align-items: center;
  font-size: 14px;
  }
  & img{
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
  }
`
const Submenu = styled.div`
  float: right;
  position: fixed;
  top: 10%;
  right: 20px;
  background-color: #202124;
  width: 300px;
  height: 200px;
  border-radius: 20px;
`
const Submenuwrap = styled.div`
  margin:10px 5px;

`


const Submenuicon = styled.div`
  display: flex;
`

const Menuimg = styled.li`
  width: 100px;
  height: 80px;
  text-align: center;
  position: relative;
  & img{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  & span{
    font-size:12px;
    color: white;
    position: absolute;
    bottom: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`