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
                    <h1 className='font-Catamaran typewriter text-black text-3xl'>Hi! I'm Sergi.</h1>
                  </div>   
                </div>
                <div className='flex justify-center mt-5'>
                  <div className='w-3/4'>
                    <h2 className = 'fade-in-1 font-Catamaran text-center text-lg'>Computer Engineering BENG at UPC (Universitat Politècnica de Catalunya).</h2>
                  </div>
                </div>
                
                <div className = 'flex justify-center mt-20'>
                      <img src="/images/illustration_2.svg" className='h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto fade-in-1' alt=""/>
                </div>    
              </div>        
          </div>
        </div>
       
    </div>
  );
}

export default Introduccio;