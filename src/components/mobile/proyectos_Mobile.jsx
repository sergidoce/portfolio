import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card_Mobile'



function Proyectos() {
  return (

    <div>
      <div className = 'bg-color-primario'>
        <div className = 'container mx-auto flex justify-center font-Catamaran pb-20'>
          <div>
            <div className='flex justify-center flex-wrap'>
              <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Projects</h2>
            </div>
            <div className='flex justify-center flex-wrap'>
              <Card link='https://github.com/joelng28/SafetyOUTBackEnd.git' titulo='SafetyOut' descripcion = 'Native application for Android and iOS to organize open air activities in the context of the COVID-19 pandemic. I was tasked with the Back End, which was developed using NodeJS and MongoDB.' imgsrc='/images/safetyout.jpg'></Card>
              <Card link='https://github.com/PauVal99/Overcooked.git' titulo='Overcooked!' descripcion = 'Clone videogame of the already existent Overcooked! designed and developed in the context of the FIB VJ course. This project has been developed with Unity and C#.' imgsrc='/images/overcooked.png'></Card>
              <Card link='https://github.com/PauVal99/The-Goonies.git' titulo='The Goonies' descripcion = 'Another clone videogame. This time of the classic The Goonies launched in 1986 for the MSX. This project has been developed with OpenGL and C++' imgsrc='/images/goonies.jpg'></Card>
              <Card link='https://github.com/sergidoce/lacapsadetrons.git' titulo='La Capsa de Trons website' descripcion = 'Website made with ReactJS' imgsrc='/images/capsadetrons.jpg'></Card>
              <Card link='https://github.com/sergidoce/generador.git' titulo='University timetable generator' descripcion = 'Python desktop app that creates timetables for students based on the selected courses. It uses the FIB Open API to collect data. Algorithm based on backtracking. UI not finished yet.' imgsrc='/images/fib.png'></Card>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;