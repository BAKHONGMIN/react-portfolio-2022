/* eslint-disable*/
import React, {useState} from 'react';
import styled from 'styled-components';
import ComLayout from './ComLayout';
import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../App.scss';
import Text from './TextEffect';
import Accordion from './Accordion';


const Interview = () =>{

    const ThemeMode = useTheme();
 

    return (
    <ComLayout>
      <H1><Text/></H1>
    <Wrapper>
      <ul>
      <Accordion title="자기소개 부탁드립니다." />
      <Accordion title="이직을 하려는 이유는 무엇인가요?"/>
      <Accordion title="나에 대한 강점이 무엇인가요?" />
      <Accordion title="지원자의 약점 (단점)은 무엇입니까?" />
      </ul>
    </Wrapper>        
        </ComLayout>
        );
    }
export default Interview;

const H1  = styled.div`
    width:100%;
    height:100px;
    position: relative;
    z-index:999;
`
const Wrapper  = styled.div`  
    width: 600px;
    margin: 20px auto;

`