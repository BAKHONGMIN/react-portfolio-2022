/* eslint-disable*/
import React, {useState,} from 'react';
import styled from 'styled-components';
// import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../App.scss';


const TextEffect = () =>{

    // const ThemeMode = useTheme();



    return (
        <Text>
        <div class="text">
            <h1>INTERVIEW</h1>
            {/* <h2>INTERVIEW</h2> */}
        </div>
        </Text>
        );
    }
export default TextEffect;

const Text  = styled.div`
.text{
    width:100%;
    text-align:center;

  }
  h1{
    font-size:4vw;
    font-weight:bold;
    font-family: "Notosans-m", sans-serif;
    text-align:center;
    ${({ theme }) => theme.textColor};
    letter-spacing:30px;
    transition:1s;
    -webkit-transition:1s;
    -ms-transition:1s;
    position: relative;
    padding:10px;

   
  }
  
  h1:before,
  h1:after{
    content:"";
    position: absolute;
    height: 7px;
    width: 0px;
    background:${({ theme }) => theme.textColor};;
    transition:300ms;
    -webkit-transition:1s;
    -ms-transition:1s;
    opacity:0.3;
    left:50%;
  }
  
  h1:before{
    bottom:0;
   
  }
  
  h1:after{
    top:0;
    
  }
  
  h1:hover{
    letter-spacing:30px;
  }
  
  h1:hover:before,
  h1:hover:after{
     width: 100%;
      opacity:1;
    left:0;
  
  }
  h1:hover ~ h2{
    opacity:0;
  }
  
  h2{
    color:#333;
    font-family: "Notosans-m", sans-serif;
    text-align:center;
    font-size:70px;
    font-weight:100;
    bottom:40px;
    position: absolute;
    transition:1s;
    -webkit-transition:1s;
    -ms-transition:1s;
    opacity:0.1;
    width: 100%;
    letter-spacing:5px;
  }

`