import React from 'react';
import './App.css';
import { Footer, Header, Blog, Possibility, Features, WhatGPT } from './containers';
import { CTA, Brand, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
