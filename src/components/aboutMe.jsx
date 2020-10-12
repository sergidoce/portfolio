import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div className = 'bg-green-900 py-20 '>
      
      <div className = 'container mx-auto h-full flex px-8 items-center'>
        <div>
          <h1 className='text-shadow text-white px-5 font-rubikMonoOne text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>SOBRE MÍ</h1>
          <div className = 'flex h-auto'>
            <div className = 'w-1/2 text-white m-auto px-5 mt-0'>
              <div className=''>             
                <p className = ' font-MontserratSemiBold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  </p>
              </div>
              <div className = 'flex justify-center mt-10'>
                <img src="/images/foto1.jpeg" alt="" className = 'shadow rounded-full h-3/4 w-3/4 border-4 border-white'/>

              </div>

            </div>

            <div className = 'w-1/2 h-full text-white mx-auto px-5'>
              <div className = 'font-MontserratSemiBold flex justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <div>
                  <div className = 'border-b-4'>
                    <div className='mb-10'>
                      <h3 className='underline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Educación</h3>
                      <ul className = 'list-disc list-inside'>
                        <li className = 'mt-5'>
                          Educación Secundaria Obligatoria en Escola Avenç, Sant Cugat del Vallès (2011-2015)
                        </li>
                        <li className = 'mt-5'>
                          Bachillerato Modalidad Tecnológica en Escola Frederic Mistral-Tècnic Eulàlia, Barcelona (2015-2017)
                        </li>
                        <li className = 'mt-5'>
                          Grado en Ingeniería Informática en Universitat Politécnica de Catalunya, Barcelona (2017)
                        </li>        
                      </ul>
                    </div>
                  </div>

                  <div className = 'border-b-4'>
                    <div className='mb-10'>
                      <h3 className = 'mt-10 underline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Certificados y Cursos</h3>
                      <ul className = 'list-disc list-inside'>
                        <li className = 'mt-5'>
                          Certificate in Advanced English C1, Cambridge Assessment English (2017)
                        </li>
                        <li className = 'mt-5'>
                          First Certificate in English B2, Cambridge Assessment English (2015)
                        </li>
                        <li className = 'mt-5'>
                          Curso de Introducción a Unity y al desarrollo de videojuegos (2018)
                        </li>        
                      </ul>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h3 className='underline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Habilidades</h3>
                    <ul className = 'list-disc list-inside'>
                      <li>
                        C
                      </li>
                      <li>
                        C++
                      </li>
                      <li>
                        C#
                      </li>
                      <li>
                        SQL
                      </li>
                      <li>
                        Programación Orientada a Objetos
                      </li>
                      <li>
                        HTML + CSS + Bootsrap + TailwindCSS
                      </li>
                      <li>
                        ReactJS
                      </li>
                      <li>
                        Unity
                      </li>
                      <li>
                        UML
                      </li>
                  
                    </ul>
                  </div>
                </div>

              </div>

            </div>



          </div>


          <div className='flex justify-center pt-20'>  
            <h3 className='font-rubikMonoOne text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Mis proyectos</h3>
          </div>
          <div className='flex justify-center pt-5'>
            <img src="/images/down-arrow-white.png" className='h-20 w-20' alt=""/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;