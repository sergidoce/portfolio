import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'


function Proyectos() {
  return (

    <div>
      <div className = 'bg-blue-900 h-screen'>
        <div className = 'container mx-auto h-full flex px-8 items-center'>
            <div className = 'px-5'>
                <h1 className='text-shadow text-white  text-7xl font-rubikMonoOne'>MIS PROYECTOS</h1>
                <div className = 'mt-20'>
                    <h2 className='text-shadow text-white  text-3xl font-rubikMonoOne'>PROYECTOS PERSONALES</h2>
                    <div className = 'mt-10 flex justify-center bg-red-100'>
                        
                    </div>
                </div>
            </div>



        </div>

      </div>
       
    </div>
  );
}

export default Proyectos;