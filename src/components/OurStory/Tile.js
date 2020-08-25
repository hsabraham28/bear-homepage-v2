import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import ostile from './placeholder.png';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.storyType = props.story.type;
  }


  /** card types **/
  renderText() {
    switch (this.storyType) {
      case "Transition":
        this.trClass = () => {
          switch (this.props.story.residency) {
            case "in-state":
              return "tr-inst";
            case "out-of-state":
              return "tr-outst";
            case "intl":
              return "tr-intl";
          }
        }
        return (
          <MDBCardText className="story--card-text">
            <div class="tr">Transition</div>
            <div class={this.trClass()}>{this.props.story.residency}</div>
          </MDBCardText>
        );
      case "Academics":
        return (
          <MDBCardText className="story--card-text">
            <div class="ac">Academics</div>
            <div class="ac">{this.props.story.major}</div>
          </MDBCardText>
        );
      case "Student Org":
        this.stClass = () => {
          switch (this.props.story.residency) { //fixme
            case "applications":
              return "st-app";
            case "clubs":
              return "st-club";

          }
        }
        return (
          <MDBCardText className="story--card-text">
            <div class="story--major">Student Orgs</div>
            <div class={this.stClass()}>{this.props.story.residency}</div>
          </MDBCardText>
        );
    }
  }

  cardBorder(type) {
    const radius = {
      borderRadius: '0 0 5px 5px', border: '2px solid'
    }

    switch (this.props.story.type) {
      case "Transition":
        return { ...radius, borderColor: '#00a9a5' };
      case "Academics":
        return { ...radius, borderColor: '#e75a7c' };
      case "Student Orgs":
        return { ...radius, borderColor: '#004aad' };
    }
  }

  render() {
    const story = this.props.story;

    const cardIDPound = `#a` + story.id;
    const cardID = `a` + story.id;

    const titleID = `title` + story.id



    return (
      <div className="shouldEvery tilebox">
        <MDBCard wide cascade data-toggle="modal" data-target={cardIDPound} >
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={ostile}
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center' style={this.cardBorder()}>
            <MDBCardTitle className='card-title'>
              {story.name}
            </MDBCardTitle>


            {this.renderText()}

            <MDBCol md='12' className='d-flex justify-content-center'>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>

        <div className="modal fade modal-grey" id={cardID} tabIndex="-1" role="dialog" aria-labelledby={titleID} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={titleID}>{story.name}</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">Year: </div>
                    <div className="col-md-9 ml-auto">{story.year}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Major: </div>
                    <div className="col-md-9 ml-auto">{story.major}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Residency: </div>
                    <div className="col-md-9 ml-auto">{story.residency}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Challenge: </div>
                    <div className="col-md-9 ml-auto">{story.challenge}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Concern: </div>
                    <div className="col-md-9 ml-auto">{story.concern}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Emo? </div>
                    <div className="col-md-9 ml-auto">{story.emo}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Feel: </div>
                    <div className="col-md-9 ml-auto">{story.feel}</div>
                  </div>
                </div>
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
