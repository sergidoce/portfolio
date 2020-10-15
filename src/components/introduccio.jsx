import React from 'react';
import ReactDOM from 'react-dom';


function Introduccio() {
  return (

    <div>
      <div className = 'bg-color-primario h-screen'>
          <div className = 'container mx-auto flex justify-center items-center h-full '>
            <div>
                <div className = 'flex justify-center'>
                  <div className = 'inline-block'>
                    <h1 className='font-Catamaran  typewriter text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl '>¡Hola! Soy Sergi Doce.</h1>
                  </div>   
                </div>
                <div className='flex justify-center mt-5'>
                  <div className='w-3/4'>
                    <h2 className = 'fade-in-1 font-Catamaran text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Estudiante de Ingeniería del Software en la Universitat Politècnica de Catalunya</h2>
                  </div>
                </div>
                
                <div className = 'flex justify-center mt-20'>
                      <img src="/images/illustration_2.svg" className='h-64 w-auto fade-in-1' alt=""/>
                </div>    
              </div>        
          </div>
        </div>
       
    </div>
  );
}

export default Introduccio;