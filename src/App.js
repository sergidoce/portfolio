import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduccio from './components/introduccio';
import AboutMe from './components/aboutMe';
import Proyectos from './components/proyectos';
import Contact from './components/contact';


function App() {
  return (
    <div>
      <Introduccio></Introduccio>
      <AboutMe></AboutMe>
      <Proyectos></Proyectos>
      <Contact></Contact>
    </div>
  );
}

export default App;
