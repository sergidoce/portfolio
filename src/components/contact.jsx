import React from 'react';
import ReactDOM from 'react-dom';


class Contact extends React.Component {
  render(){
    return (
        <div>
        <div className = 'bg-green-900 py-20'>
          <div className = 'container mx-auto h-full flex px-8 items-center py-20'>
              <div className = 'w-full px-5'>
                  <h1 className='text-shadow text-white  text-7xl font-rubikMonoOne'>CONTACTO</h1>
                  <div className = ' mt-20'>
                     <form action="">
                        <div className = 'flex w-1/2 flex-content-center'>
                            <div className = 'w-1/2 flex flex-justify-start'>
                                <div>
                                    <label className = 'block uppercase tracking-wide text-white text-3xl font-rubikMonoOne mb-2' htmlFor="">Nombre</label>
                                    <input className = 'appearance-none w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>
                            <div className = 'w-1/2 flex flex-justify-start'>
                                <div>
                                    <label className = 'block uppercase tracking-wide text-white text-3xl font-rubikMonoOne mb-2' htmlFor="">Apellido</label>
                                    <input className = 'appearance-none w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>

                        </div>
                                                 
                        <div className = 'mt-10'>
                            <label className = 'block uppercase tracking-wide text-white text-3xl font-rubikMonoOne mb-2' htmlFor="">e-mail</label>
                            <input className = 'appearance-none w-1/2 bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>
                            <label className = 'block uppercase tracking-wide text-white text-3xl font-rubikMonoOne mb-2' htmlFor="">Mensaje</label>
                            <textarea className = 'appearance-none w-1/2 h-64 bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>  
                            <button class="bg-blue-900 hover:bg-blue-800 w-64 h-16 text-xl text-white font-rubikMonoOne py-2 px-4 rounded-full">
                                Enviar
                            </button>  
                        </div>
                     </form>
                  </div>
              </div>
          </div>
  
        </div>
         
      </div>
    );
  }
}

export default Contact;