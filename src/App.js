import React from 'react';
import logo from './logo.svg';
import './App.css';

//Desktop version

import Introduccio from './components/introduccio';
import AboutMe from './components/aboutMe';
import Proyectos from './components/proyectos';
import Contact from './components/contact';

//Mobile version

import Introduccio_Mobile from './components/mobile/introduccio_Mobile';
import AboutMe_Mobile from './components/mobile/aboutMe_Mobile';
import Proyectos_Mobile from './components/mobile/proyectos_Mobile';
import Contact_Mobile from './components/mobile/contact_Mobile';


class App extends React.Component {
  
  constructor(){

    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount(){

    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  render(){
    const {width} = this.state;
    const isMobile = width <= 500;

    if(isMobile){
      return(
        <div>
          <Introduccio_Mobile></Introduccio_Mobile>
          <AboutMe_Mobile></AboutMe_Mobile>
          <Proyectos_Mobile></Proyectos_Mobile>
          <Contact_Mobile></Contact_Mobile>
        </div>
      );
    } else{

      return(
        <div>
          <Introduccio></Introduccio>
          <AboutMe></AboutMe>
          <Proyectos></Proyectos>
          <Contact></Contact>
        </div>
      );
    }
  }
}

export default App;
