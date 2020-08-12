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

      <a href="/">
        <div className="title">
        	B E A R &nbsp; {" "} {" "} W I T H &nbsp; {" "} {" "} U S
        </div>
      </a>
      
      
      <div className="ucb">
            University of California, Berkeley
      </div>



      </header>
      );
  }
}


export default Header;
