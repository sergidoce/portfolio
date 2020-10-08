import React from 'react';
import ReactDOM from 'react-dom';


function Proyectos() {
  return (

    <div>
      <div className = 'bg-blue-900 h-screen'>
        <div className = 'container mx-auto h-full flex px-8 items-center'>
            <div className = 'px-5'>
                <h1 className='text-shadow text-white  text-7xl font-rubikMonoOne'>MIS PROYECTOS</h1>
                <div className = 'mt-20'>
                    <h2 className='text-shadow text-white  text-3xl font-rubikMonoOne'>PROYECTOS PERSONALES</h2>
                    <div className = 'mt-10 flex justify-center bg-red-100'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-800">
                            <img class="w-full" src="/images/GitHub_Logo_White.png" alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl text-white mb-2">The Coldest Sunset</div>
                                <p class=" text-base text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
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

export default Proyectos;