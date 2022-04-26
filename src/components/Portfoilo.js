/* eslint-disable*/
import React, {useState} from 'react';
import styled from 'styled-components';
import ComLayout from './ComLayout';
import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import Imgcard from './Imgcard';


const Portfolio = () =>{
    const ThemeMode = useTheme();
 

    return (
        <ComLayout>
            <Imgcardtext theme={ThemeMode[0]}><h2>최근에 추가된 항목</h2></Imgcardtext>
            <Imgcard></Imgcard>
        </ComLayout>
        );
    }
export default Portfolio;

const Imgcardtext  = styled.div`
width:100%;
height:80px;
line-height:80px;
 & h2{
    font-family: "Notosans-m";
    font-size:30px;
    color: ${({ theme }) => theme.textColor};
 }
`

