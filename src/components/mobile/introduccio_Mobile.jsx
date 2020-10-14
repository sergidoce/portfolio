import React from 'react';
import ReactDOM from 'react-dom';


function Introduccio() {
  return (

    <div>
      <div className = 'bg-blue-900 h-screen'>
          <div className = 'container mx-auto h-full flex px-8 items-center'>
            <div>
              <div className = 'bg-blue-900 flex h-auto'>
                  <div className = 'w-full text-white m-auto text-center'>
                    <div className = ''>
                        <h1 className='text-shadow font-rubikMonoOne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>SERGI DOCE</h1>
                    </div>
                    <div className = 'mt-5'>
                      <h2 className = 'font-MontserratSemiBold text-base '>Estudiante de Ingeniería del Software en la Universitat Politècnica de Catalunya</h2>
                    </div>

                    <div className = 'flex justify-center items-center mt-10'>
                      <div className = 'w-1/2 flex justify-center'>
                        <img src="/images/GitHub_Logo_White.png" className='h-10' alt=""/>
                      </div>
                      <div className = 'w-1/2 flex justify-center'>
                        <img src="/images/LI-Logo.png" className='h-8' alt=""/>
                      </div>
                    </div>
                  </div>
                  
              </div>
              <div className='flex justify-center pt-20'>  
                <h3 className='font-rubikMonoOne text-white text-sm'>Descubre más</h3>
              </div>
              <div className='flex justify-center pt-5'>
                <img src="/images/down-arrow-white.png" className='h-10 w-10' alt=""/>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  );
}

export default Introduccio;