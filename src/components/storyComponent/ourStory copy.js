import React from 'react';
import { Component } from 'react';

import ostile from './os-small.png';

console.log(ostile);


class OurStory extends Component {
  render() {
    return (
    	<div className= "shouldEvery">
      <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalLong">
  <img src={ostile} alt="os" />
</button>


<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">


        <h5 className="modal-title" id="exampleModalLongTitle">aa{this.props.name}</h5>
        
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     

      <div className="modal-body">
        <p> Survey Answers and Description! </p>
      </div>
      
    </div>
  </div>
</div>
</div>

      );
  }

}


export default OurStory;
