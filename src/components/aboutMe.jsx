import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div className = 'bg-green-900 py-10 '>
      
      <div className = 'container mx-auto h-full flex px-8 items-center'>
        <div>
          <h1 className='text-shadow text-white px-5 text-7xl font-rubikMonoOne'>SOBRE MÍ</h1>
          <div className = ' flex h-auto'>
            <div className = 'w-1/2 text-white m-auto px-5 mt-0'>
              <div className='h-1/2'>
                
                <p className = 'text-xl text-justify font-MontserratSemiBold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  </p>
              </div>
              <div className = 'flex justify-center h-1/2'>
                <img src="/images/code-icon.png" alt=""/>

              </div>

            </div>

            <div className = 'w-1/2 h-full text-white mx-auto px-5'>
              <div className = 'font-MontserratSemiBold text-xl flex justify-center'>
                <div>
                  <div className = 'border-b-4'>
                    <div className='mb-10'>
                      <h3 className='underline text-2xl'>Educación</h3>
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
                      <h3 className = 'mt-10 underline text-2xl'>Certificados y Cursos</h3>
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
                    <h3 className='underline text-2xl'>Habilidades</h3>
                    <ul className = 'list-disc list-inside'>
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



        </div>

      </div>
    </div>
  );
}

export default AboutMe;