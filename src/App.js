import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduccio from './components/introduccio';
import AboutMe from './components/aboutMe';
import Proyectos from './components/proyectos'


function App() {
  return (
    <div>
      <Introduccio></Introduccio>
      <AboutMe></AboutMe>
      <Proyectos></Proyectos>
    </div>
  );
}

export default App;
