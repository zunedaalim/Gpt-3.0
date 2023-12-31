import React from 'react'
import {Blog,Feature,Footer,Header,Possibility,WhatGPT3} from './containers';
import {Article,Brand,CTA,Features,Nav} from './components';
import './App.css' ;
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Nav/> 
      <Header/>
      </div>
    <Brand/>
    <WhatGPT3/>
    <Feature/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App