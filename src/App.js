import React, {useState, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About.js';
import Portfolio from './components/Portfoilo.js';
import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';
import './App.scss';
// import styled from 'styled-components';

function App(props) {



  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Portfolio" component={Portfolio}/>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;


