/* eslint-disable no-unused-vars */
import React from 'react';
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
