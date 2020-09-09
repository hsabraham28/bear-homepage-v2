import React from 'react';
import { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBView, MDBCol } from 'mdbreact';
import placeholder from './placeholder.png';

//console.log(oski);


class ClubCard extends Component {
  constructor(props) {
    super()
    // console.log(props.org.tags[0])
    this.tags = props.org.tags[0].split(/\s#|#/).filter(Boolean).map(tag => {
      tag = tag.charAt(0).toUpperCase() + tag.slice(1);
      return (
        <p key={tag}>{tag}</p>
      )
    })
    // console.log(this.tags)
  }

  addDefaultSrc(e) {
    e.target.src = placeholder;
  }

  render() {
    const org = this.props.org;

    const cardID = 'a' + org.id;
    const cardIDPound = '#a' + org.id;

    const titleID = 'a' + org.id;

    // Image links
    const imageLink = this.props.org.logo == "" ? placeholder : this.props.org.logo;

    return (


      <div className="clubLayout">

        <MDBCard wide cascade data-toggle="modal" data-target={cardIDPound}>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={imageLink}
              alt='Card cap'
              onError={this.addDefaultSrc}
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>{org.name}</strong>
            </MDBCardTitle>


            {/* <MDBCardText component={'span'}> */}
            <div className="tagshown">
              {this.tags}
            </div>
            {org.intro.substring(0, 150) + '...'}
            {/* </MDBCardText> */}

            <MDBCol md='12' className='d-flex justify-content-center'>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>

        <div className="modal fade" id={cardID} tabIndex="-1" role="dialog" aria-labelledby={titleID} aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={titleID}>{org.name}</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="container-fluid vs--inner-tile">
                  <div className="vs-text-img">
                    <img src={imageLink} onError={this.addDefaultSrc}></img>
                  </div>
                  <div className="vs-text-wrapper">
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-envelope"></i>
                        <p>Club:</p>
                      </div>
                      <div className="col-md-9 ml-auto">{org.clubEmail}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-search-plus"></i>
                        <p>Commonly known by:</p>
                      </div>
                      <div className="col-md-9 ml-auto">{org.abbrevName}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Size of the club:</p> </div>
                      <div className="col-md-9 ml-auto">{org.size}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-home"></i>
                        <p>About {org.name}</p>:
                      </div>
                      <div className="col-md-9 ml-auto">{org.intro}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-hands-helping"></i>
                        <p>What is it like to be a part of the student organization?</p>
                      </div>
                      <div className="col-md-9 ml-auto">{org.experience}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-tags"></i>
                        <p>Tags:</p>
                      </div>
                      <div className="col-md-9 ml-auto">{org.tags}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-hashtag"></i>
                        <p>Social Media:</p>
                      </div>
                      <div className="col-md-9 ml-auto">{org.socialMedia}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-video"></i>
                        <p>LEAD Center Video:</p> </div>
                      <div className="col-md-9 ml-auto">{org.yTLink}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



}





export default ClubCard;