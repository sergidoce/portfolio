import React from 'react';
import ReactDOM from 'react-dom';


function Footer() {
  return (

    <div className='bg-color-primario h-48 flex content-center'>
      <div className='container m-auto py-10 flex justify-center text-color-secundario font-Catamaran'>
        <div>
          <div>
            <h3 className='text-lg'>Página diseñada y desarrollada por mí</h3>
          </div>
          <div className = 'flex justify-center h-8 mt-5 '>
              <h3 className='text-lg my-auto'>Made with</h3>
              <img src="/images/tailwind-logo.png" alt="" className='h-4 w-auto my-auto ml-2' />
          </div>
          <div className = 'flex justify-center h-8 mt-5'>
              <a href="https://www.linkedin.com/in/sergi-doce-48a1b1119/">
                <img src="/images/LI-Logo_Blue.png" alt="" className='h-4 w-auto my-auto mr-2' />
              </a>
              <a href="https://github.com/sergidoce">
                <img src="/images/GitHub_Logo_Blue.png" alt="" className='h-4 w-auto my-auto ml-2' />
              </a>
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default Footer;