import React from 'react';
import { Component } from 'react';
import os from './os-pin.png';
import vs from './vs-pin.png';
import grad from './gradient.png';


console.log(os);
console.log(vs);
console.log(grad);




class Action extends Component {
  render() {
    return (
    <div className="optionsPan" style={{
        backgroundColor: '#004aad',
        width: '100%',
        
      }}>
      	
      	<div className="virt">
    	<button><img src={vs} alt="vs" /></button>
    	<div><h2><span>VIRTUAL SPROUL</span></h2></div>
    	<div><h3><span>how do i get involved on campus?</span></h3></div>
    	</div>

    	
    	<div className="ours">
    	<button><img src={os} alt="os" /></button>
    	<div><h2><span>OUR STORY</span></h2></div>
    	<div><h3><span>who are the students of cal?</span></h3></div>
    	</div>
 
      
    	<div className="gradtext">
    	<img src={grad} alt="grad" />
    	<div><h2><span>TO OUR NEWEST GOLDEN BEARS...</span></h2></div>
    	<div><h3><span>Congratulations on your acceptance to UC Berkeley! As students, we understand how difficult the first year of college is, and now even further in the midst of a global pandemic. Times like these are not easy, but you do not have to go through them alone. We have designed this website just for the class of 2024 to alleviate some stress and answer some of your burning questions by sharing our Berkeley perspective with you!</span></h3></div>
    	</div>



      </div>
      
      



      
      );
  }
}


export default Action;
