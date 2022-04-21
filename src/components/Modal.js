import React from 'react'
import '../App.scss'
import Contact from './Contact'
import styled from 'styled-components';
import close from '../img/close.svg'
import '../fonts/font.css';
import { useTheme } from '../context/themeProvider';
const Modal = ({modalClose}) => {
  

  const onCloseModal = (e) => {
      console.log('e.target: ', e.target)
      console.log('e.tarcurrentTargetget: ', e.currentTarget)
      if(e.target === e.currentTarget){
          modalClose()
      }

  }
  const ThemeMode = useTheme();
  return (
      <Modalwrap theme={ThemeMode[0]}>
      <div className="modal__container" onClick={onCloseModal}>
          <div className="modal">
              <h2>Contact_me</h2>
              <button className="modal__button" onClick={modalClose}><img src={close} alt="close" width="25px" /></button>
              <div className='contact'><Contact/></div>
              <span>※구글이메일과 연동되어 메세지가 발송됩니다.</span>
          </div>
      </div>
      </Modalwrap>
  )
}


export default Modal;

const Modalwrap = styled.ul`
  & .modal__container{
    font-family: "Notosans-m";
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index:9999999;

    & .modal{
        width: 500px;
        height: 500px;
        background-color:  ${props => props.theme === 'light' ? '#fff' : '#303134'};
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        z-index:999999;
        border:2px solid #333;
        border-radius: 20px;
        & h2{
          left: 50%;
          transform: translateX(-50%);
          top:5%;
          position: absolute;
          font-size:25px;
          width:200px;
          line-height:30px
          font-weight:bold;
          text-align:center;
        }

        & .modal__button{
          width:100%;
          height:60px;
          line-height:60px;
          text-align: center;
          position: relative;
          & img{
            float:right;
            margin:10px 10px;
            filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
          }
        
        }
        & .contact{
          width:100%;
          position: relative;
        }
        & span{
          font-size:10px;
          line-height:12px;
          width:100%;
          font-weight:bold;
          text-align:center;
          left: 50%;
          transform: translateX(-50%);
          bottom:10px;
          position: absolute;

        } 
      }
    }
`