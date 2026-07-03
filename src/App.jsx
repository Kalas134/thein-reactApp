import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './samentics/Header';
import Nav from './samentics/Nav';
import Footer from './samentics/Footer';

import Home from './samentics/pages/Home';
import About from './samentics/pages/About';
import TechUsed from './samentics/pages/TechUsed';
import Contact from './samentics/pages/Contact';

import CurriculumProj from './samentics/pages/projects/CurriculumProj';
import PersonalProj from './samentics/pages/projects/PersonalProj';
import ExtraProj from './samentics/pages/projects/ExtraProj';

import './samentics/OneCss.css';

function App() {

  return (
    <BrowserRouter /* basename="/thein-reactApp" */>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/techUsed" element={<TechUsed />} /> 

        <Route path="/proj/CurriculumProj" element={<CurriculumProj />} />
        <Route path="/proj/PersonalProj" element={<PersonalProj />} />
        <Route path="/proj/ExtraProj" element={<ExtraProj />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App