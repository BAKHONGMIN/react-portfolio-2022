/* eslint-disable*/
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
// import ComLayout from './ComLayout';
import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import { useForm } from 'react-hook-form';


const Contact = () =>{
    const ThemeMode = useTheme();
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ghdals2655', 'template_za4ohkm', form.current, 'WLH6FXRz-1KPEnjDc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
 

    return (
          <Layout theme={ThemeMode[0]}>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
   
            <div className="field">
              <label htmlFor="user_company">Company</label>
              <input type="text" name="user_company"  />
            </div>
            <div className="field">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className="field">
              <label htmlFor="user_email">Email</label>
              <input type="text" name="user_email" />
            </div>
            <div className="field">
              <label htmlFor="user_number">Number</label>
              <input type="number" name="user_number" placeholder="'-'없이 입력해주세요." />
            </div>
            <div className="field fieldmessage">
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" cols="40" rows="10" placeholder='메세지를 남겨주세요' />
            </div>
            <input onClick={() => alert('메세지가 전송되었습니다.')} type="submit" className="button" value="Send Email" />
            
          </form>
         
          </Layout>
        );
    }
export default Contact;

const Layout  = styled.div`
    width:100%;
    height:100%;
    padding:20px;
    position: relative;
    & .field {
      margin-bottom: 10px;
      
    }

    & .field label {
      display: block;
      font-size: 15px;
      margin-bottom:5px;
      font-weight:bold;
      color:  ${({ theme }) => theme.textColor};
    }

    & .field input {
      display: block;
      width: 100%;
      line-height: 20px;
      font-size: 14px;
      border:1px solid #333;
    }

    & input[type="submit"] {
      display: block;
      padding: 6px 30px;
      font-size: 14px;
      background-color: #333;
      color: #fff;
      border: none
      text-align:center;
      position: absolute;
       left: 50%;
       transform: translateX(-50%);
       cursor: pointer;
    }
    & .fieldmessage{
      & textarea {
        height: 100px;
        width: 100%;
        line-height: 1.5;
        font-size: 14px;
        border:1px solid #333;
      }
    }
  

`

