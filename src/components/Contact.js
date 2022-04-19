/* eslint-disable*/
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import ComLayout from './ComLayout';
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
        <ComLayout>
          <Layout>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
   
              {/* <label>Company</label>
              <input type="text" name="user_company" placeholder="회사명을 입력해주세요" /> */}
            <div className="field">
              <label htmlFor="user_company">Company</label>
              <input type="text" name="user_company"  {...register("Company", {max: 20, min: 0, maxLength: 20})} />
            </div>
            <div className="field">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" {...register("Name", {max: 10, min: 0, maxLength: 9})}/>
            </div>
            <div className="field">
              <label htmlFor="user_email">Email</label>
              <input type="text" name="user_email"  {...register("Email", {max: 40, min: 2, maxLength: 39, pattern: /abcde@abcd.com/i})}/>
            </div>
            <div className="field">
              <label htmlFor="user_number">Number</label>
              <input type="number" name="user_number" placeholder="'-'없이 입력해주세요." {...register("Number", {max: 20, min: 2, maxLength: 20, pattern: /01000000000/i})} />
            </div>
            <div className="field fieldmessage">
              <label htmlFor="message">message</label>
              <textarea type="text" name="message" form='message' cols="40" rows="10" autoFocus required wrap="hard" placeholder='메세지를 남겨주세요' {...register("Message", {max: 100, min: 0, maxLength: 100})}></textarea>
            </div>
            <input type="submit" className="button" value="Send Email" />
          </form>
          </Layout>
        </ComLayout>
        );
    }
export default Contact;

const Layout  = styled.div`
    width:290px;
    height:700px;
    padding:20px;
    position: relative;
    & .field {
      margin-bottom: 10px;
    }

    & .field label {
      display: block;
      font-size: 16px;
      margin-bottom:5px;
      font-weight:bold;
      color: #777;
    }

    & .field input {
      display: block;
      width: 250px;
      line-height: 1.5;
      font-size: 14px;
      border:1px solid #333;
    }

    & input[type="submit"] {
      display: block;
      padding: 6px 30px;
      font-size: 14px;
      background-color: #4460AA;
      color: #fff;
      border: none
      text-align:center;
      position: absolute;
       left: 50%;
       transform: translateX(-50%);
    }
    & .fieldmessage{
      & textarea {
        height: 100px;
        width: 250px;
        line-height: 1.5;
        font-size: 14px;
        border:1px solid #333;
      }
    }

`

