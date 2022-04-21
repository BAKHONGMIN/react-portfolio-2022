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
      <Accordion title="Why is the sky blue?">
        Sunlight reaches Earth's atmosphere and is scattered in all directions by
        all the gases and particles in the air. Blue light is scattered more than
        the other colors because it travels as shorter, smaller waves. This is why
        we see a blue sky most of the time.
      </Accordion>
      <Accordion title="What's It Like Inside Jupiter?">
        It's really hot inside Jupiter! No one knows exactly how hot, but
        scientists think it could be about 43,000°F (24,000°C) near Jupiter's
        center, or core.
      </Accordion>
      <Accordion title="What Is a Black Hole?">
        A black hole is an area of such immense gravity that nothing -- not even
        light -- can escape from it.
      </Accordion>
      <Accordion title="What Is a Black Hole?">
        A black hole is an area of such immense gravity that nothing -- not even
        light -- can escape from it.
      </Accordion>

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