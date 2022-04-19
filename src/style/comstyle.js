import styled from 'styled-components';
import '../fonts/font.css'
import { useTheme } from '../context/themeProvider';

export const ComContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  font-family:'Notosans-m';
  padding: 20px 5%;
  background-color : ${props => props.theme === 'light' ? "#f8f7f4" : "#1e1e22"}; 
`;
