import React from 'react';
import { Component } from 'react';
import dot from './dotts.png';
console.log(dot);


class Header extends Component {
  render() {
    return (
      <header>
     <div className="dots">
      <img src={dot} alt="pattern" />
      </div>

      <div className="title">
      	B E A R &nbsp; {" "} {" "} W I T H &nbsp; {" "} {" "} U S
      </div>
      
      
      <div className="ucb">
            university of california, berkeley
      </div>



      </header>
      );
  }
}


export default Header;
