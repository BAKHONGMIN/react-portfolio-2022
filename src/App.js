import React, {useState, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About.js';
import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';


function App(props) {



  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/About" component={About}/>
          </Switch>
        </Suspense>
  
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
