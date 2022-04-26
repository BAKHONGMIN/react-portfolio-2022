import React from 'react';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import Typing from './Typing';
// import Slidetext from './Slidetext';
import Submenuimg from '../img/submenuimg.svg';
import Logo from '../img/logo.svg';
import Searchimg from '../img/search.svg';
import Mic  from '../img/mic.svg';
import Key  from '../img/keyboard.svg';
import '../App.scss';
import { useTheme } from '../context/themeProvider';

const Main = () => {
  const names = ['현명한 박홍민', '똑똑한 박홍민', '한결같은 박홍민', '진실된 박홍민', '변하지 않는 박홍민', '카멜레온 같은 박홍민'] ;
  // const nameList = names.map((index) => (<Slidetext name={index}/>));
  const ThemeMode = useTheme();
  return (
    <AppLayout>
      <Bodywrap theme={ThemeMode[0]}>
        <Bak theme={ThemeMode[0]}><img src={Logo} alt="logo" /></Bak>
        <Search>
          <Iconsearch theme={ThemeMode[0]}><img src={Searchimg} alt="search" width="20px"/></Iconsearch>
          <Input theme={ThemeMode[0]}>
            <Searchmenu >
              <li><Typing /></li>
            </Searchmenu>
            <Submenu>
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[0]}</a></li></Div> 
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[1]}</a></li></Div> 
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[2]}</a></li></Div> 
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[3]}</a></li></Div> 
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[4]}</a></li></Div>
              <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenuimg} alt="submenu" className="submenuimg" /><a href="/" className="submenutext">{names[5]}</a></li></Div>  
            </Submenu> 
          </Input>
          <Iconkey theme={ThemeMode[0]}><img src={Key} alt="key" width="20px" /></Iconkey>
          <Iconmic><img src={Mic} alt="mic" width="25px" /></Iconmic>
        </Search>
      </Bodywrap>
    </AppLayout>
  )
}

export default Main;


const Bodywrap = styled.div`
  width:100px
  background-color: #333333;
  overflow: auto;
`

const Bak = styled.div`
  & img {
    width: 150px;
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
  }
`
const Search = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 460px;
  height: 20px;
  line-height: 20px;
  margin: 0;
  z-index:1;
`
const Input = styled.div`
  width: 100%;
  border-radius: 15px;
  border: none;
  padding: 6px 60px;
  box-shadow:0  0 2px rgb(193, 193, 193);
  text-align: left;
  overflow: hidden;
  height: 40px;
  -webkit-animation-name: movingPara;
  -webkit-animation-duration: 2s;
  -webkit-animation-delay: 6s;
  animation-name: movingPara;
  animation-duration: 2s;
  z-index:1;
  animation-delay: 6s;
  animation-fill-mode: forwards;
  background:  ${props => props.theme === 'light' ? '#FFFFFF' : '#303134'};
`
const Iconsearch = styled.div`
  position: absolute;
  left: 20px;
  top: 45%;
  height: 20px;
  line-height: 20px;
  margin-top:2px;
  & img{
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
  }
`
const Searchmenu = styled.div`
  margin-top:5px;
  padding-bottom:10px;
  height:20px;
  line-height:20px;
`
const Div = styled.ul`
  & img{
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
  }
  & a{
    color :  ${props => props.theme === 'light' ? '#5a5a5a' : '#b2afaf'};
  }
`
const Submenu = styled.div`
  padding: 10px 0px;
  margin-left: -35px;
  overflow: auto;
`
const Iconmic = styled.div`
  position: absolute;
  right: 20px;
  top: 40%;
  cursor: pointer;
`
const Iconkey = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  cursor: pointer;
  & img{
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
  }
`