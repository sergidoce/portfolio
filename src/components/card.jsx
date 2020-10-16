import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render(){
    return (
      <div className="img__wrap flex w-128 h-64 font-Catamaran border-4 border-color-secundario rounded-lg mx-5 my-10">
         <img className="object-contain px-10 py-5" src={this.props.imgsrc} />
         <div className="img__description rounded px-10 py-5">
            <div className='flex justify-center'>
              <h3 className='text-2xl '>{this.props.titulo}</h3>
            </div>
            <div className='flex justify-center'>
              <p className = 'text-lg text-justify'>{this.props.descripcion}</p>
            </div>
            <div className='flex justify-center space-x-4 mt-5'>
              <button className='bg-white hover:bg-color-secundario text-color-secundario hover:text-white py-2 px-4 rounded-full'>Github</button>
              <button className='bg-white hover:bg-color-secundario text-color-secundario hover:text-white  py-2 px-4 rounded-full'>Proyecto</button>

            </div>
         </div>
      </div>
    );
  }
}

export default Card;