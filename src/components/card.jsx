import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render(){
    return (
      <div className="img__wrap flex justify-center h-32 sm:h-32 md:h-32 lg:h-64 xl:h-64 w-64 sm:w-64 md:w-64 lg:w-128 xl:w-128 font-Catamaran border-4 border-color-secundario rounded-lg mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5 my-10">
         <img className="px-10 py-5" src={this.props.imgsrc} />
         <div className="img__description rounded px-10 py-5">
            <div className='flex justify-center'>
              <h3 className='text-2xl '>{this.props.titulo}</h3>
            </div>
            <div className='flex justify-center'>
              <p className = 'text-lg text-justify'>{this.props.descripcion}</p>
            </div>
            <div className='flex justify-center space-x-4 mt-5'>
              <a href={this.props.link}>
                <button className='bg-white hover:bg-color-secundario text-color-secundario hover:text-white py-2 px-4 rounded-full'>Github</button>
              </a>
            </div>
         </div>
      </div>
    );
  }
}

export default Card;