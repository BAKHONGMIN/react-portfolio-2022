/* eslint-disable*/
import React, {useState} from 'react';
import styled from 'styled-components';
import photoshop from '../img/photoshop.svg';
import illustration from '../img/illustration.svg';
import word from '../img/word.svg';
import react from '../img/react.svg';
import html from '../img/html.svg';
import css from '../img/css.svg';
import javascript from '../img/javascript.svg';
import mainimg from '../img/Layer 9.png';
import ComLayout from './ComLayout';
import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../App.scss';


const About = () =>{
    let [about_me,about_mech] = useState(['About_me', '박홍민', '1995.01.08','인천 부평구']);
    let [education,educationch] = useState(['Education', '부천대학교 컴퓨터공학과 졸업', '그린컴퓨터아트학원 PWA프론트엔드 양성과정 수료']);
    let [experience,experiencech] = useState(['Experience', '신도기연(BOE) PLC프리랜서', '테스탑 기술영업']);
    let [certificate,certificatech] = useState(['Certificate', '웹디자인 기능사','GTQ 그래픽기술자격', 'Auto CAD2급','HSK 중국어 5급','1종보통 운전면허']);
    const ThemeMode = useTheme();
 

    return (
        <ComLayout>
            <Aboutmap>
                <Content>
                    <Main>
                        <li className='maintext'>
                        <h2>BAK HONG MIN</h2>
                        <button><a href='박홍민-이력서.pdf' download="박홍민-이력서.pdf"> RESUME</a></button>
                        <Text>
                        <div>
                            <ul>
                                <h2>{about_me[0]}</h2>
                                <li>
                                    <a><h3>Name</h3><h4>{about_me[1]}</h4></a>
                                    <a><h3>Ages</h3><h4>{about_me[2]}</h4></a>
                                    <a><h3>Address</h3><h4>{about_me[3]}</h4></a>
                                </li>
                            </ul>
                            <ul>
                                <h2>{certificate[0]}</h2>
                                <li>
                                    <a><h3>2022.04</h3><h4>{certificate[1]}</h4></a>
                                    <a><h3>2022.02</h3><h4>{certificate[2]}</h4></a>
                                    <a><h3>2018.07</h3><h4>{certificate[3]}</h4></a>
                                    <a><h3>2022.02</h3><h4>{certificate[4]}</h4></a>
                                    <a><h3>2017.02</h3><h4>{certificate[5]}</h4></a>
                                </li>
                            </ul>
                        </div>
                            <ul>
                                <h2>{education[0]} &amp; {experience[0]}</h2>
                                <li>
                                    <span><h3>14.02 ~ 18.02</h3><h4>{education[1]}</h4></span>
                                    <span><h3>21.12 ~ 22.05</h3><h4>{education[2]}</h4></span><br/>
                                    <span><h3>19.02 ~ 19.06</h3><h4>{experience[1]}</h4></span>
                                    <span><h3>19.10 ~ 21.10</h3><h4>{experience[2]}</h4></span>
                                </li>
                            </ul>
              
                            <ul>
                                <h3>Skills</h3>
                                <li>
                                    <Img theme={ThemeMode[0]}>
                                    <img src={photoshop} alt='photoshop' width="30px"></img>
                                    <img src={illustration} alt='illustrate' width="30px"></img>
                                    <img src={word} alt='word' width="30px"></img>
                                    <img src={react} alt='react' width="30px"></img>
                                    <img src={html} alt='html' width="30px"></img>
                                    <img src={css} alt='css' width="30px"></img>
                                    <img src={javascript} alt='javascript' width="32px"></img>
                                    </Img>
                                </li>
                            </ul>
                        </Text>
                        </li>
                    </Main>
                </Content>
                <Mainimg>
                <div className="mainimg">
                    <img src={mainimg} alt='mainimg'/>
                </div>
                </Mainimg>
            </Aboutmap>
        </ComLayout>
        );
    }
export default About;

const Aboutmap  = styled.div`
    width:100%;
    height:100%;
    position: relative;
    z-index:9999999;
`
const Content  = styled.div`
    width:500px;
    padding:5px 10px;
    height:100%;
`
const Main  = styled.ul`
    width:100%;
    font-family: "Notosans-m", "Notosans-kr-m";
    & li{
        
        & h2{
            font-size:20px;
            margin:10px 0;
            font-family: "Notosans-m";
            font-weight: bold;
        }
        & button{
            width: 150px;
            line-height:25px;
            background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
            border:1px solid #000;
            padding:0;
            text-align: center;
            cursor: pointer;
            transition: 0.5s;
            & a{
                color:#000;
                font-size:13px;
            }
        }
    }
    & button:hover{
        background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
        border:1px solid #000;
        & a{
            color: #000;
            font-weight: bold;
        }
    }
`
const Text  = styled.div`
    & div{
        display:flex;
        justify-content: space-between;
        & ul{
            
        }
    }
    & ul{
        margin:10px 0;
        & h2{
            font-size:21px;
            padding-bottom:0px;
            font-weight: bold;
        }
        & li {
            & a{
                display:flex;
                line-height:25px;
                & h3{
                    font-size: 15px;
                    font-weight: bold;
                    width:90px;
                }
                & h4{
                    font-family: "Notosans-kr-b";
                    font-size:14px;
                }
            }
            & span{
                display:flex;
                line-height:25px;
                & h3{
                    font-size: 15px;
                    font-weight: bold;
                    width:120px;
                }
                & h4{
                    font-family: "Notosans-kr-b";
                    font-size:14px;
                }
            }  
        }
    }

`
const Mainimg  = styled.div`
    z-index: 10000;
    cursor: pointer;
    position:absolute;
    bottom:5%;
    right:0%;
    -webkit-animation-name: mainimg;
    transition: 1s;
`
const Maini  = styled.div`
    z-index: 99;
    cursor: pointer;
    position:absolute;
    bottom:15%;
    right:10%;
    -webkit-animation-name: mainimg;
    transition: 1s;
`
const Img  = styled.ul`
& img{
    margin:0 10px 0 0;
    filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
}
`