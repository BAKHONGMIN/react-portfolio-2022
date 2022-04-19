// /* eslint-disable*/
// import React from 'react'; 
// import Submenu from '../img/submenuimg.svg';
// import '../App.scss';
// import { useTheme } from '../context/themeProvider';
// import styled from 'styled-components';



// const Slidetext = (props) => { 
//     const ThemeMode = useTheme();
    
//     return ( 
//     <Div theme={ThemeMode[0]}><li className='submenuli'><img src={Submenu} alt="submenu" className="submenuimg" /><a href="" className="submenutext">{props.name}</a></li></Div> 
//     ); }; 
// export default Slidetext;


// const Div = styled.div`
//   & img{
//     filter:  ${props => props.theme === 'light' ? 'invert(0)' : 'invert(1)'};
//   }
//   & a{
//     color :  ${props => props.theme === 'light' ? '#5a5a5a' : '#b2afaf'};
//   }
// `