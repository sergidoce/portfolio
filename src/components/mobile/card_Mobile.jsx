import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render(){
    return (
      <div className="img__wrap flex h-48  w-64 sm:w-64 font-Catamaran border-2 border-color-secundario rounded-lg my-3">
         <img className="object-contain px-10 py-5" src={this.props.imgsrc} />
         <div className="img__description rounded px-2 py-2">
            <div className='flex justify-center'>
              <h3 className='text-base '>{this.props.titulo}</h3>
            </div>
            <div className='flex justify-center'>
              <p className = 'text-sm text-justify'>{this.props.descripcion}</p>
            </div>
            <div className='flex justify-center space-x-4 mt-5'>
              <button className='bg-white hover:bg-color-secundario text-color-secundario hover:text-white px-2 text-sm rounded-full'>Github</button>
              <button className='bg-white hover:bg-color-secundario text-color-secundario hover:text-white px-2  text-sm rounded-full'>Proyecto</button>

            </div>
         </div>
      </div>
    );
  }
}

export default Card;