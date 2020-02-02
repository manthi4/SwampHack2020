import React from 'react';
import sd from './sun-deck.png';
import up from './UPPER-DECK.png';
import ld from './LOWER-DECK.png';
import td from './TERRACE-DECK.png';

const imagesPath = {
    sun: sd,
    upper: up,
    lower: ld,
    terrace: td
  }
  
  class Ship extends React.Component {
    state = {
      id: 1
    }
    toggleImage = () => {
      this.setState(state => ({ id: state.id<4 ? state.id+1 : 1 }))
    }
  
    getImageName = () => this.state.id===1 ? 'sun' : this.state.id===2 ? 'upper' : this.state.id===3 ? 'lower' : 'terrace';
    
  
    render(i){
      const imageName = this.getImageName();
      return (
        <div>
          <img src={imagesPath[imageName]} onClick={this.toggleImage} alt="ouch"/>
        </div>
      );
    }
  }
  
  export default Ship;