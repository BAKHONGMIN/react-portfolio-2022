
import React from "react";
import styled from 'styled-components';
import ComLayout from './ComLayout';
// import Slider from "./Slider";
// import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../slide.scss';
import sample1 from '../img/sample1.jpg';
import sample2 from '../img/sample2.jpg';
import sample3 from '../img/sample3.jpg';
import sample4 from '../img/sample4.jpg';
import sample5 from '../img/sample5.jpg';



const Design = () =>{
    // const ThemeMode = useTheme();
    
    return (
        <ComLayout>
            <Designwrap>
            <div class="container">
              <ul className="item1"><a href="/"><h3>DESIGN</h3><p>국민은행</p></a></ul>
              <ul className="item2"><a href="/"><h3>DESIGN</h3><p>국민은행</p></a></ul>
              <ul className="item3"><a href="/"><h3>DESIGN</h3><p>국민은행</p></a></ul>
              <ul className="item4"><a href="/"><h3>DESIGN</h3><p>국민은행</p></a></ul>
              <ul className="item5"><a href="/"><h3>DESIGN</h3><p>국민은행</p></a></ul>
              {/* <ul className="item6">6</ul>
              <ul className="item7">7</ul>
              <ul className="item8">8</ul>
              <ul className="item9">9</ul> */}
            </div>
            </Designwrap>
        </ComLayout>
        );
    }
export default Design;

const Designwrap  = styled.div`
    width:100%;
    height:80%;
  & .container{
    width:100%;
    height:100%;
    padding:0;
    display:grid;
    grid-template:3fr 2fr / 1.5fr 1fr 1.5fr;
    grid-gap:10px;
    overflow:auto;
  }
  & ul {
    background-repeat: no-repeat;
    background-size: cover;
    border:1px solid rgba(0,0,0,0.1);
    position:relative;
  }
  & a{
    color: #fff;
    position: absolute;
    background: rgba(0,0,0,0.5); left: 0; bottom: 0;
    width: 100%;
    height: 30%;
    padding: 5px 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    text-align: left;
    display: inline-block;
    font-size:2.5vmin;
    cursor: pointer;
    font-family: "Notosans-m";
    overflow: auto;
    line-height: initial;
    & h3{
      font-size:3vmin;
    }
  }
  & ul:hover a{
    opacity:1;
  }





  & .item1{
    background-image: url(${sample1});
    grid-column-start:1;
    grid-column-end: 2;
  }
  & .item2{
    background-image: url(${sample2});
    grid-column-start:2;
    grid-column-end: 3;
  }
  & .item3{
    background-image: url(${sample3});
    grid-column-start:3;
    grid-column-end: 4;

  }
  & .item4{
    background-image: url(${sample4});
    grid-column-start:1;
    grid-column-end: 3;
  }
  & .item5{
    background-image: url(${sample5});
    grid-column-start:3;
    grid-column-end: 4;
  }
`


