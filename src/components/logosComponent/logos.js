import React from 'react';
import { Component } from 'react';
import asucc from './asuc-smaller.png';
import escc from './esc.png';
// console.log(asucc);
// console.log(escc);


class Logos extends Component {
  render() {
    return (
      
     <div className="logo-pics" style={{
        backgroundColor: '#004aad',
        width: '100%',
        height: '100px'
      }}>
     	<div className='asucs'><img src={asucc} alt="asuc" /></div>
     	<div className='escs'><img src={escc} alt="asuc" /></div>
     </div>

      
      
      
      



      
      );
  }
}


export default Logos;
