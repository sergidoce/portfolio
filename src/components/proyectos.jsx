import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'



function Proyectos() {
  return (

    <div>
      <div className = 'bg-color-primario'>
        <div className = 'container mx-auto flex justify-center font-Catamaran'>

          <div>
            <div className='flex justify-center flex-wrap'>
              <h2 className = 'text-5xl'>Proyectos universitarios.</h2>
              <h3 className='text-3xl text-center justify-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit molestias repudiandae recusandae cumque consequatur asperiores hic labore.</h3>
            </div>
            <div className='flex justify-center flex-wrap'>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_upc.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_python.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_unity.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_upc.png'></Card>
              
            </div>

            <div className='flex justify-center flex-wrap mt-10'>
              <h2 className = 'text-5xl'>Proyectos personales.</h2>
              <h3 className='text-3xl text-center justify-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit molestias repudiandae recusandae cumque consequatur asperiores hic labore.</h3>
            </div>
            <div className='flex justify-center flex-wrap'>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_upc.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_python.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_unity.png'></Card>
              <Card titulo='Ejemplo' descripcion = 'Esta es una descripcion de ejemplo. Que no se tenga en cuenta.' imgsrc='/images/logo_upc.png'></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;