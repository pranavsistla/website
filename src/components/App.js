import Button from '@material-ui/core/Button';
import Header from '../components/ui/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage'
import Merca from '../components/Experience/Merca'
import Scrollobj from '../components/ui/Scrollobj'

import React, {useState} from 'react';

import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
import Footer from '../components/ui/Footer'

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Scrollobj showBelow = {250}/>
        <Header/> 
        <LandingPage/>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
