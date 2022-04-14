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
import AppLayout from './AppLayout';
import { useTheme } from '../context/themeProvider';
import { Link } from 'react-router-dom';

const About = () =>{
    let [about_me,about_mech] = useState(['About_me', '박홍민', '1995.01.08']);
    let [education,educationch] = useState(['Education', '2019 부천대학교 컴퓨터공학과 졸업', '2022 그린컴퓨터아트학원 PWA프론트엔드 양성과정 수료']);
    let [experience,experiencech] = useState(['Experience', '신도기연(BOE) PLC프리랜서(6개월)', '테스탑 영업기술(19년~21년 9월)']);
    let [certificate,certificatech] = useState(['Certificate', 'GTQ 그래픽기술자격', 'Auto CAD2급','HSK 중국어 5급','1종보통 운전면허','웹디자인 기능사(예정)']);
    const ThemeMode = useTheme();
 

    return (
        <AppLayout>
            <Aboutmap>
                <Content>
                    <Main>
                        <h2>BAK HONG MIN</h2>
                        <button><a href='박홍민-이력서.pdf' download="박홍민-이력서.pdf"> RESUME</a></button>
                        <Text>
                            <ul>
                                <h3>{about_me[0]}</h3>
                                <h4>{about_me[1]}</h4>
                                <h4>{about_me[2]}</h4>
                            </ul>
                            <ul>
                                <h3>{education[0]}</h3>
                                <h4>{education[1]}</h4>
                                <h4>{education[2]}</h4>
                            </ul>
                            <ul>
                                <h3>{experience[0]}</h3>
                                <h4>{experience[1]}</h4>
                                <h4>{experience[2]}</h4>
                            </ul>
                            <ul>
                                <h3>{certificate[0]}</h3>
                                <h4>{certificate[1]}</h4>
                                <h4>{certificate[2]}</h4>
                                <h4>{certificate[3]}</h4>
                                <h4>{certificate[4]}</h4>
                                <h4>{certificate[5]}</h4>
                            </ul>
                            <ul>
                                <h3>Skills</h3>
                                <li>
                                    <img src={photoshop} alt='photoshop' width="20px"></img>
                                    <img src={illustration} alt='illustrate' width="20px"></img>
                                    <img src={word} alt='word' width="20px"></img>
                                    <img src={react} alt='react' width="20px"></img>
                                    <img src={html} alt='html' width="20px"></img>
                                    <img src={css} alt='css' width="20px"></img>
                                    <img src={javascript} alt='javascript' width="20px"></img>
                                </li>
                            </ul>
                        </Text>
                    </Main>
                    <Link to='/'>
                    <StyledButton theme={ThemeMode[0]}>
                        Go back to Home
                    </StyledButton>
                    </Link>
                </Content>
            </Aboutmap>
        </AppLayout>
        );
    }
export default About;

const Aboutmap  = styled.div`
 width:100%;
 height:100%;
 background: "#00000";
`
const Content  = styled.div`

`
const Main  = styled.div`

`
const Text  = styled.div`

`
const StyledButton = styled.button`
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
`
