/* eslint-disable*/
import React, {useState} from 'react';
import styled from 'styled-components';
// import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../App.scss';


const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <Text>
      <div className="accordion-wrapper">
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
      </Text>
    );
  };
  export default Accordion;

  

const Text = styled.div`
    font-family: "Notosans-m";

   & .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 700px;
  }
  
  & .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);

  }
  
  & .accordion-title {
    font-family: 'Notosans-kr-m';
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
    padding: 0.5em 1.5em;
    border: solid 1.5px;
    border-color:${({ theme }) => theme.borderColor};
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 0;
    width:100vmin;
  
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
    }
  
    &:hover,
    &.open {
      color: black;
    }
  
    &.open {
      &::after {
        content: "";
        border-top: 0;
        border-bottom: 5px solid ;
      }
    }
  }
  
  .accordion-content {
    padding: 1em 1.5em;
    background:#3552;
    width:100vmin;
  }
  


`