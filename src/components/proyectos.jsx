import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'



function Proyectos() {
  return (

    <div>
      <div className = 'bg-color-primario'>
        <div className = 'container mx-auto flex justify-center font-Catamaran pb-20'>
          <div>
            <div className='flex justify-center flex-wrap'>
              <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Proyectos universitarios.</h2>
              <h3 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center justify-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit molestias repudiandae recusandae cumque consequatur asperiores hic labore.</h3>
            </div>
            <div className='flex justify-center flex-wrap'>
              <Card titulo='SafetyOut' descripcion = 'Aplicación nativa para Android y iOS para organizar actividades al aire libre en el contexto de la pandemia por el COVID-19.' imgsrc='/images/safetyout.jpg'></Card>
              <Card titulo='Overcooked!' descripcion = 'Videojuego clon del ya existente Overcooked! diseñado y desarrollado en el contexto de la asignatura Videojuegos. Este proyecto ha sido desarrollado con Unity y C#' imgsrc='/images/overcooked.png'></Card>
              <Card titulo='The Goonies' descripcion = 'Otro videojuego clon. Esta vez del clásico The Goonies lanzado en 1986 para la MSX. Este proyecto ha sido desarrollado con OpenGL y C++' imgsrc='/images/goonies.jpg'></Card>            
            </div>

            <div className='flex justify-center flex-wrap mt-10'>
              <h2 className = 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Proyectos personales.</h2>
              <h3 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center justify-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit molestias repudiandae recusandae cumque consequatur asperiores hic labore.</h3>
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