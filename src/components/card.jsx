import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render(){
    return (
      <div class=" w-1/4 rounded overflow-hidden shadow-lg bg-gray-800 my-5 mx-5 px-5 py-5">
          <div className = 'h-32 flex justify-center'>
            <img class="object-scale-down" src={this.props.image} />
          </div>
          <div className="px-6 py-4 font-MontserratSemiBold text-white">
            <h3 className = 'text-2xl'>{this.props.title}</h3>
            <p className="text-l">{this.props.definition}</p>
          </div>
          <div className = 'h-8 flex justify-center mt-5'>
            <img class="object-scale-down" src="/images/GitHub_Logo_White.png" />
          </div>     
      </div>    
    );
  }
}

export default Card;