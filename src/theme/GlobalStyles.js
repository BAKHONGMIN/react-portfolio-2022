import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  html{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
