import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render(){
    return (
      <div class=" w-full rounded overflow-hidden shadow-lg bg-gray-800 my-5 mx-1 px-5 py-5">
          <div className = 'h-24 flex justify-center'>
            <img class="object-scale-down" src={this.props.image} />
          </div>
          <div className="px-1 py-2 font-MontserratSemiBold text-white">
            <h3 className = 'text-xl'>{this.props.title}</h3>
            <p className='text-sm mt-2'>{this.props.definition}</p>
          </div>
          <div className = 'h-8 flex justify-center mt-5'>
            <img class="object-scale-down" src="/images/GitHub_Logo_White.png" />
          </div>     
      </div>    
    );
  }
}

export default Card;