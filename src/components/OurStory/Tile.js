import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import ostile from './os-small.png';

// console.log(ostile);


function OurStory(props) {
  const modalID = `#` + name
  console.log(modalID)

  const tempID = `temp` + name
  return (
    <div className= "shouldEvery tilebox">
      <button type="button" className="btn" data-toggle="modal" data-target={modalID}>
        <img src={ostile} alt="os" />
      </button>

      {/* Props are not responsive due to classes modal and fade (only when both are removed it works) */}
      <div className="modal fade modal-grey" id={name} tabIndex="-1" role="dialog" aria-labelledby={tempID} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={tempID}>{props.name}</h5>
              
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

/** OurStory.propTypes = {
  story: PropTypes.object.isRequired,
}*/


export default OurStory;
