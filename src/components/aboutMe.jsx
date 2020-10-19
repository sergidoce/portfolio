import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div>
      <div className='bg-color-secundario text-white'>
        <div className='container mx-auto flex justify-center font-Catamaran'>
          <div className='my-20 w-3/4'> 
            <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>¡Buenas! Encantado de conocerte.</h2>
            <p className = 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos culpa iste autem! Modi veniam dolorum eveniet hic a ab animi labore repudiandae et, vel natus temporibus sunt sapiente. Magnam.</p>

            <div className='flex flex-wrap justify-center mt-10'>
              <img src="/images/foto1.jpeg" className='h-auto w-32 sm:w-32 md:w-48 lg:w-56 xl:w-64 rounded-full mx-12 shadow-xl my-10' alt=""/>
              <img src="/images/logo_upc.png" className='h-auto w-32 sm:w-32 md:w-48 lg:w-56 xl:w-64 mx-12 rounded-full shadow-xl my-10' alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-color-primario'>
        <div className='container mx-auto flex justify-center font-Catamaran py-20 mt-10 '>
          <div className='flex justify-center flex-wrap border-b-4 border-color-secundario'>
            <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Tecnología y lenguajes que uso.</h2>
            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center justify-center w-3/4'>Estas son las herramientas que he ido aprendiendo a lo largo de mi vida ya sea de forma académica o en formato de autoaprendizaje.</h3>
            <div className='flex flex-wrap justify-center'>
              
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_C.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_c++.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_csharp.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_sql.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_python.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_uml.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/html_logo.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_css.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64  mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_react.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
              
              <div className='flex justify-center items-center h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 my-4 sm:my-6 md:my-6 lg:my-10 xl:my-10'>
                <img src="/images/logo_unity.png" className='object-contain h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto ' alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;