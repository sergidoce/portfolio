import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Introduccio from './components/introduccio';



function App() {
  return (
      <Introduccio></Introduccio>
  );
}

export default App;
