import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import oski from './oski-big.png';

//console.log(oski);


class ClubCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    //console.log(this.props.name)
    const org = this.props.org

    const cardID = 'a' + org.id;
    const cardIDPound = '#a' + org.id;

    const titleID = 'a' + org.id;

    return (


      <div className="clubLayout">

        <MDBCard wide cascade data-toggle="modal" data-target={cardIDPound}>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={oski}
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>{org.name}</strong>
            </MDBCardTitle>


            <MDBCardText>

            </MDBCardText>
            <MDBCol md='12' className='d-flex justify-content-center'>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>

        <div className="modal fade" id={cardID} tabindex="-1" role="dialog" aria-labelledby={titleID} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={titleID}>{org.name}</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">Email: </div>
                    <div className="col-md-9 ml-auto">{org.clubEmail}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Size: </div>
                    <div className="col-md-9 ml-auto">{org.size}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">What is the student organization about? </div>
                    <div className="col-md-9 ml-auto">{org.intro}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">What is it like to be a part of the student organization? </div>
                    <div className="col-md-9 ml-auto">{org.experience}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Tags </div>
                    <div className="col-md-9 ml-auto">{org.tags}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Social Media: </div>
                    <div className="col-md-9 ml-auto">{org.socialMedia}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Youtube Link: </div>
                    <div className="col-md-9 ml-auto">{org.yTLink}</div>
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