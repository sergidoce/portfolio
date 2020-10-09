import React from 'react';
import ReactDOM from 'react-dom';


function Card() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-800">
        <img class="w-full" src="/images/GitHub_Logo_White.png" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl text-white mb-2">The Coldest Sunset</div>
            <p class=" text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        
    </div>
                    
  );
}

export default Card;