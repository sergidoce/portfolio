import React from 'react';
import ReactDOM from 'react-dom';


function Introduccio() {
  return (

    <div>
      <div className = 'bg-blue-900 h-screen'>
          <div className = 'container mx-auto h-full flex px-8 items-center'>
            <div>
              <div className = 'bg-blue-900 flex h-auto'>
                  <div className = 'w-1/2 text-white m-auto'>
                    <div className = ''>
                        <h1 className='text-shadow font-rubikMonoOne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '></h1>
                    </div>
                    <div className = ''>
                      <h2 className = 'font-MontserratSemiBold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Estudiante de Ingeniería del Software en la Universitat Politècnica de Catalunya</h2>
                    </div>

                    <div className = 'flex justify-center items-center mt-10'>

                      <div className = 'w-1/2 flex justify-center'>
                        <img src="/images/GitHub_Logo_White.png" className='h-16' alt=""/>
                      </div>
                      <div className = 'w-1/2 flex justify-center'>
                        <img src="/images/LI-Logo.png" className='h-12' alt=""/>
                      </div>

                    </div>
                  </div>

                  <div className = 'w-1/2 flex justify-center'>

                    <img src="/images/illustration.svg" className='h-auto w-auto' alt=""/>
                    
                  </div>
                  
              </div>
              <div className='flex justify-center pt-20'>  
                <h3 className='font-rubikMonoOne text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Descubre más</h3>
              </div>
              <div className='flex justify-center pt-5'>
                <img src="/images/down-arrow-white.png" className='h-20 w-20' alt=""/>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  );
}

export default Introduccio;