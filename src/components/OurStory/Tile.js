import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './story.scss';

import ostile from './os-small.png';

// console.log(ostile);


function OurStory(props) {
  return (
    <div className= "shouldEvery tilebox">
      <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalLong">
        <img src={ostile} alt="os" />
      </button>

      {/* Props are not responsive due to classes modal and fade (only when both are removed it works) */}
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{props.story.name}</h5>
              
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>{props.story.story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

OurStory.propTypes = {
  story: PropTypes.object.isRequired,
}

export default OurStory;
