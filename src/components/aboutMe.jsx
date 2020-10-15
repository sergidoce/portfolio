import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div>
      <div className='bg-color-secundario text-white'>
        <div className='container mx-auto flex justify-center font-Catamaran'>
          <div className='my-20 w-3/4'> 
            <h2 className = 'text-5xl text-center'>¡Buenas! Encantado de conocerte.</h2>
            <p className = 'text-3xl text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos culpa iste autem! Modi veniam dolorum eveniet hic a ab animi labore repudiandae et, vel natus temporibus sunt sapiente. Magnam.</p>

            <div className='flex flex-wrap justify-center mt-10'>
              <img src="/images/foto1.jpeg" className='h-auto w-64 rounded-full mx-12 shadow-xl my-10' alt=""/>
              <img src="/images/logo_upc.png" className='h-auto w-64 mx-12 rounded-full shadow-xl my-10' alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-color-primario'>
        <div className='container mx-auto flex justify-center font-Catamaran my-20'>
          <div>
            <h2 className='text-5xl text-center'>Tecnología y lenguajes que uso.</h2>
            <div className='flex flex-wrap justify-center'>
              
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_C.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_c++.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_csharp.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_sql.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_python.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_uml.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64  mx-10 my-10'>
                <img src="/images/html_logo.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_css.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-64  mx-10 my-10'>
                <img src="/images/logo_react.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
              
              <div className='flex justify-center items-center h-64 mx-10 my-10'>
                <img src="/images/logo_unity.png" className='object-contain h-48 w-auto ' alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;