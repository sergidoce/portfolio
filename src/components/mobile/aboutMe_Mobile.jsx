import React from 'react';
import ReactDOM from 'react-dom';


function AboutMe() {
  return (

    <div>
      <div className='bg-color-secundario text-white'>
        <div className='container mx-auto flex justify-center font-Catamaran'>
          <div className='my-10 w-3/4'> 
            <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>¡Buenas! Encantado de conocerte.</h2>
            <p className = 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos culpa iste autem! Modi veniam dolorum eveniet hic a ab animi labore repudiandae et, vel natus temporibus sunt sapiente. Magnam.</p>

            <div className='flex flex-wrap justify-center mt-5'>
              <img src="/images/foto1.jpeg" className='h-auto w-24 rounded-full mx-3 shadow-xl my-2' alt=""/>
              <img src="/images/logo_upc.png" className='h-auto w-24 rounded-full mx-3 shadow-xl my-2' alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-color-primario'>
        <div className='container mx-auto flex justify-center font-Catamaran py-10'>
          <div className='flex justify-center flex-wrap '>
            <h2 className='text-xl text-center'>Tecnología y lenguajes que uso.</h2>
            <h3 className='text-sm text-center justify-center w-3/4'>Estas son las herramientas que he ido aprendiendo a lo largo de mi vida ya sea de forma académica o en formato de autoaprendizaje.</h3>
            <div className='flex flex-wrap justify-center'>
              
              <div className='flex justify-center items-center h-24 mx-4 my-4 '>
                <img src="/images/logo_C.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_c++.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_csharp.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_sql.png" className='object-contain h-20  w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_python.png" className='object-contain h-20  w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_uml.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/html_logo.png" className='object-contain h-20  w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_css.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_react.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
              
              <div className='flex justify-center items-center h-24 mx-4 my-4'>
                <img src="/images/logo_unity.png" className='object-contain h-20 w-auto ' alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;