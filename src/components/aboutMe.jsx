import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div>
      <div className='bg-color-secundario text-white'>
        <div className='container mx-auto flex justify-center font-Catamaran'>
          <div className='my-20 w-3/4'> 
            <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Hello! Nice to meet you.</h2>
            <p className = 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify mt-5'>My name is Sergi Doce and I'm a Computer Engineering BENG student at FIB (Facultat d'Informàtica de Barcelona). Although I've studied the majority of my bachelor in Barcelona, I'm now
              in an exchange programme at the Technical University of Denmark (DTU). I'd like to start working on a professional level, that's why now I'm looking for a company where I can stay as an intern.</p>
            <div className='flex flex-wrap justify-center mt-10'>
              <img src="/images/foto1.jpeg" className='h-auto w-24 sm:w-24 md:w-32 lg:w-48 xl:w-56 rounded-full mx-8 shadow-xl my-10' alt=""/>
              <img src="/images/logo_upc.png" className='h-auto w-24 sm:w-24 md:w-32 lg:w-48 xl:w-56 mx-8 rounded-full shadow-xl my-10' alt=""/>
              <img src="/images/DTU_LOGO.jpg" className='h-auto w-24 sm:w-24 md:w-32 lg:w-48 xl:w-56 mx-8 rounded-full shadow-xl my-10' alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-color-primario'>
        <div className='container mx-auto flex justify-center font-Catamaran py-20 mt-10 '>
          <div className='border-b-4 border-color-secundario'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Technologies and languages I use.</h2>
            <div className='flex mx-auto w-3/4'>
              <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center'>These are the tools that I've been learning through all my life in university or self-learning.</h3>
            </div>
            <div className='flex justify-center my-10'>
              <div className='flex h-auto w-3/4 border-2 rounded-lg border-color-secundario'>
                <div className='w-1/2 border-r border-color-secundario'>
                  <div className='flex justify-center py-4 space-x-4 border-b-2 border-color-secundario'>
                    <h2 className='my-auto text-center text-2xl'>Programming languages</h2>
                  </div>
                  <div className='space-y-4 my-4'>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>C</h3>
                      <img src="/images/logo_c.png" className='h-auto w-10'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>C++</h3>
                      <img src="/images/logo_c++.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>C#</h3>
                      <img src="/images/logo_csharp.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>Java</h3>
                      <img src="/images/logo_java.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>JavaScript</h3>
                      <img src="/images/logo_javascript.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>Python</h3>
                      <img src="/images/logo_python.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>SQL</h3>
                      <img src="/images/logo_sql.png" className='h-auto w-8'></img>
                    </div>
                  </div>

                </div>
                <div className='w-1/2 border-l border-color-secundario'>
                  <div className='flex justify-center py-4 space-x-4 border-b-2 border-color-secundario'>
                    <h2 className='my-auto text-center text-2xl'>Frameworks and other tools</h2>
                  </div>
                  <div className='space-y-4 my-4'>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>HTML</h3>
                      <img src="/images/html_logo.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>CSS</h3>
                      <img src="/images/logo_css.png" className='h-auto w-6'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>React Js</h3>
                      <img src="/images/logo_react.png" className='h-8 w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>UML</h3>
                      <img src="/images/logo_uml.png" className='h-8 w-10'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>Unity</h3>
                      <img src="/images/logo_unity.png" className='h-auto w-8'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>Node Js</h3>
                      <img src="/images/logo_node.png" className='h-auto w-10'></img>
                    </div>
                    <div className='flex justify-center space-x-4'>
                      <h3 className='my-auto text-2xl'>MongoDB</h3>
                      <img src="/images/logo_mongodb.png" className='h-auto w-8'></img>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;