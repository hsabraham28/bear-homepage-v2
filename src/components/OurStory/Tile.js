import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import ostile from './placeholder.png';
import TileBody from './TileBody';
import PropTypes from 'prop-types';


class Tile extends Component {
  constructor(props) {
    super(props);
    this.story = props.story;
    this.storyType = props.story.storyType;

    /** random id generator for TileBody keys */
    this.idGen = () => {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
  }


  /** 
   * Card Types
   * outputs an object whose elements are usable by the render method.
   * **/

  renderTypes() {
    let output = {
      cardTextJSX: null, // JSX element
      cardStyle: null, // object; for style attribute in JSX
      cardBodies: null // array of <TileBody> components
    };

    // card radius, identical across types
    const radius = {
      borderRadius: '0 0 5px 5px',
      border: '2px solid'
    };


    switch (this.storyType) {
      /** Transition */
      case "transition":
        // helper function
        this.trClass = () => {
          switch (this.props.story.residency) {
            case "in-state":
              return "tr-inst";
            case "out-of-state":
              return "tr-outst";
            case "international":
              return "tr-intl";
            default:
              return "";
          }
        };

        return {
          cardTextJSX: (
            <MDBCardText className="story--card-text">
              <div class="tr">Transition</div>
              <div class={this.trClass()}>{this.props.story.residency}</div>
            </MDBCardText>
          ),
          cardStyle: { ...radius, borderColor: '#00a9a5' },
          cardBodies: [
            <TileBody key={this.idGen()} label={"Story Type:"} content={"Transitioning to UC Berkeley, " + this.story.residency + "."} />,
            <TileBody key={this.idGen()} label={"How did you feel when you first transitioned into Berkeley?"} content={this.story.feel} />,
            <TileBody key={this.idGen()} label={"Positive and negative emotions?"} content={this.story.emo} />,
            <TileBody key={this.idGen()} label={"Were there any concerns? Unexpected circumstances?"} content={this.story.concern} />,
            <TileBody key={this.idGen()} label={"Was transitioning into Berkeley socially challenging?"} content={this.story.challenge} />,
          ],
        };

      /** Academics */
      case "academics":
        return {
          cardTextJSX: (
            <MDBCardText className="story--card-text">
              <div class="ac">Academics</div>
              <div class="ac">{this.props.story.major}</div>
            </MDBCardText>
          ),
          cardStyle: { ...radius, borderColor: '#e75a7c' },
          cardBodies: [
            <TileBody key={this.idGen()} label={"College"} content={this.story.college} />,
            <TileBody key={this.idGen()} label={"Story Type:"} content={"Academics at UC Berkeley"} />,
            <TileBody key={this.idGen()} label={"Email:"} content={this.story.email} />,
            <TileBody key={this.idGen()} label={"GPA Requirements"} content={this.story.gpareq} />,
            <TileBody key={this.idGen()} label={"What prerequisites and maximum units do you recommend taking during the fall semester?"} content={this.story.prereq} />,
            <TileBody key={this.idGen()} label={"Tips on planning classes and coping with academic stress"} content={this.story.tips} />,
            <TileBody key={this.idGen()} label={"What do you think about the academic rigor of UC Berkeley classes when compared to your school curriculum / AP courses / Community college classes?"} content={this.story.rigor} />,
          ],
        };


      /** Student org supertype */
      case "student orgs":
        this.stClass = () => {
          switch (this.props.story.type) { //fixme
            // Applications
            case "apps":
              return "st-app";
            // Clubs
            case "clubs":
              return "st-club";
            default:
              return "";
          }
        };

        this.stBody = () => {
          switch (this.props.story.type) { //fixme
            // Applications
            case "apps":
              return [
                <TileBody key={this.idGen()} label={"Story Type:"} content={"Student Org, Application Process."} />,
                <TileBody key={this.idGen()} label={"What important factors did you consider when applying to clubs? How did you survey, categorize, or sort the clubs you wanted to join?"} content={this.story.factors} />,
                <TileBody key={this.idGen()} label={"How do you cope with the club application processes (info-sessions, interviews, applications)?"} content={this.story.cope} />,
                <TileBody key={this.idGen()} label={"Any advice on preparing for club interviews and filling out applications?"} content={this.story.advice} />,
                // <TileBody key={this.idGen()} label={"Picture:"} content={this.story.pic} />,
              ];

            // Clubs
            case "clubs":
              return [
                <TileBody key={this.idGen()} label={"Story Type:"} content={"Student Org, Clubs on Campus."} />,
                <TileBody key={this.idGen()} label={"Which Clubs / Student Organizations are you part of? Why did you pick them?"} content={this.story.clubs} />,
                <TileBody key={this.idGen()} label={"How was the transition into the clubs? How long did it take you to get used to its logistics?"} content={this.story.transition} />,
                <TileBody key={this.idGen()} label={"What do you think are the pros / cons of being in a club?"} content={this.story.proscons} />,
                <TileBody key={this.idGen()} label={"How do you balance club activities with academics and social life?"} content={this.story.balance} />,
              ];

            default:
              return "";
          }
        }

        return {
          cardTextJSX: (
            <MDBCardText className="story--card-text">
              <div class="st">Student Orgs</div>
              <div class={this.stClass()}>{this.props.story.type}</div>
            </MDBCardText>
          ),
          cardStyle: { ...radius, borderColor: '#004aad' },
          cardBodies: this.stBody(),
        };

      default:
        return output;
    }
  }

  cardBorder(type) { //FIXME delete after transfering to renderText
  }

  render() {
    /** defining constants for convenience */
    const story = this.props.story;
    const cardIDPound = `#a` + story.id;
    const cardID = `a` + story.id;
    const titleID = `title` + story.id

    /** Destructuring the variable elements for the different types */
    const { cardTextJSX, cardStyle, cardBodies } = this.renderTypes();


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

          <MDBCardBody cascade className='text-center' style={cardStyle}>
            <MDBCardTitle className='card-title'>
              {story.name}
            </MDBCardTitle>


            {cardTextJSX}

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
                  <TileBody key={this.idGen()} label={"Year:"} content={this.story.year} />
                  <TileBody key={this.idGen()} label={"Major(s) and Minor(s):"} content={this.story.major} />

                  {cardBodies}

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

Tile.propTypes = {
  story: PropTypes.object.isRequired,
}


export default Tile;
