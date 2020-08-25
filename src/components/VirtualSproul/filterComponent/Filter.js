import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Check from './Check';




/** Filter component responsible for updating search with tag parameters */
class Filter extends Component {

  constructor() {
    super()
    this.state = {
      Technology: false,
      Music: false,
      Art: false,
      Greek: false,
      Business: false,
      Government: false,
      Size50: false,
      tagList: [],
    }

    this.filterCheckBoxEventHandler = this.filterCheckBoxEventHandler.bind(this)

  }

  filterCheckBoxEventHandler(event, currBool) {
    //const stateElement = event.target.name
    this.setState({ [event.target.name]: !currBool })
    if (!currBool && !this.state.tagList.includes(event.target.name)) {
      this.state.tagList.push(event.target.name)
    }
    if (!currBool == false && this.state.tagList.includes(event.target.name)) {
      const index = this.state.tagList.indexOf(event.target.name)
      this.state.tagList.splice(index, 1)
    }
    console.log(this.state.tagList)
    this.props.filterParentUpdate(this.state.tagList)
  }


  render() {

    return (

      <div className="filter-section">
        <div className="boxes myFilter">
          <h3>What Type of Activity?</h3>
          <p>Click on the search icon to apply filters.</p>
          <Check eHandler={this.filterCheckBoxEventHandler} key="consulting" tagName="Consulting/Client Project" tagVar="consulting" tagBool={this.state.consulting} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="ncproject" tagName="Non-Client Project" tagVar="ncproject" tagBool={this.state.ncproject} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="cultural" tagName="Cultural" tagVar="cultural" tagBool={this.state.cultural} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="competition" tagName="Competition" tagVar="competition" tagBool={this.state.competition} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="performance" tagName="Performance" tagVar="performance" tagBool={this.state.performance} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="activism" tagName="Activism" tagVar="activism" tagBool={this.state.activism} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="sports" tagName="sports/Recreation" tagVar="sports" tagBool={this.state.sports} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="service" tagName="service" tagVar="service" tagBool={this.state.service} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="discussion" tagName="discussion" tagVar="discussion" tagBool={this.state.discussion} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="media" tagName="media/Publication" tagVar="media" tagBool={this.state.media} />
          
          <h3>Org Size</h3>
          <Check eHandler={this.filterCheckBoxEventHandler} key="test" tagName="test" tagVar="test" tagBool={this.state.test} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="test" tagName="test" tagVar="test" tagBool={this.state.test} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="test" tagName="test" tagVar="test" tagBool={this.state.test} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="test" tagName="test" tagVar="test" tagBool={this.state.media} />
          
          {/* <div className="form-check form-check-inline">
            <input className="form-check-input" onChange={e => this.filterCheckBoxEventHandler(e, this.state.Greek)} name="Greek" type="checkbox" id="inlineCheckboxGreeks" checked={this.state.Greek} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Greeks</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" onChange={e => this.filterCheckBoxEventHandler(e, this.state.Business)} name="Business" type="checkbox" id="inlineCheckboxBusiness" checked={this.state.Business} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Business</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" onChange={e => this.filterCheckBoxEventHandler(e, this.state.Government)} name="Government" type="checkbox" id="inlineCheckboxGovernment" checked={this.state.Government} />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Government</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" onChange={e => this.filterCheckBoxEventHandler(e, this.state.Size50)} name="Size50" type="checkbox" id="inlineCheckboxSize" checked={this.state.Size50} />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Size &lt; 50</label>
          </div> */}
        </div>

      </div>
    );
  }
}




export default Filter;
