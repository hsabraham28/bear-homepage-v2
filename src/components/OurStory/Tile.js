import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import ostile from './os-small.png';

// console.log(ostile);


class Tile extends Component{
  constructor(props) {
    super()
    this.state = {
        tileName: "",
        tileText:""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount() {
    this.setState({
      tileName: this.props.name,
      tileText: this.props.text
    })
  }
  render() {
    const modalID = `#` + this.props.name
    
    const tempID = `temp` + this.props.name
    return (
      <div className= "shouldEvery tilebox">
      < button type="button" onClick = {this.onClickHandler} className="btn" data-toggle="modal" data-target={modalID}>
          <img src={ostile} alt="os" />
      </button>

      {/* Props are not responsive due to classes modal and fade (only when both are removed it works) */}
      <div className="modal fade modal-grey" id={this.props.name} tabIndex="-1" role="dialog" aria-labelledby={tempID} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={tempID}>{this.props.name}</h5>
              
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
  }

  onClickHandler() {
    console.log("Clicked")
    alert("Student name: " + this.state.tileName + " and Text: " + this.state.tileText)
  }
  
}

/** OurStory.propTypes = {
  story: PropTypes.object.isRequired,
}*/


export default Tile;
