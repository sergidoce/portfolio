import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div className = 'bg-green-900 '>
      <div className = 'container mx-auto h-full flex px-8 items-center'>
        <div>
          <div className = ' flex h-auto'>
            <div className = 'w-1/2 text-white m-auto px-5 mt-0'>
              <h1 className='text-shadow text-7xl font-rubikMonoOne'>SOBRE MÍ</h1>
              <p className = 'text-xl text-justify font-MontserratSemiBold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea </p>

            </div>

            <div className = 'w-1/2 text-white m-auto px-5'>
              <div className = 'flex justify-center'>
                <img src="/images/code-icon.png" alt=""/>

              </div>
              <div className = ''>
                <p>Educación</p>
                <ul className = 'list-disc'>
                  <li>
                    Elemento 1
                  </li>
                  <li>
                    Elemento 2
                  </li>
                  <li>
                    Elemento 3
                  </li>
                  <li>
                    Elemento 4
                  </li>
               
                </ul>

              </div>

            </div>



          </div>



        </div>

      </div>
    </div>
  );
}

export default AboutMe;