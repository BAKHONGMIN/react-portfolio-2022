import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About.js';
import Portfolio from './components/Portfoilo.js';
// import Contact from './components/Contact.js';
import Interview from './components/Interview';
import Design from './components/Design';
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
            <Route exact path="/Interview" component={Interview}/>
            <Route exact path="/Design" component={Design}/>
            {/* <Route exact path="/Contact" component={Contact}/> */}
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;


