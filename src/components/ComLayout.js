import React from 'react';
import styled from 'styled-components';
import { ComContainer } from '../style/comstyle';
import Header from './Header';
import { useTheme } from '../context/themeProvider';

const ComLayout = ({children}) => {
  const ThemeMode = useTheme();
  return (
    <WrapContainer>
      <Header />
      <ComContainer theme={ThemeMode[0]}>{children}</ComContainer> 
    </WrapContainer>
  )
}

export default ComLayout;

const WrapContainer = styled.main`
  height: 100vh;
  width:100%;
`;
