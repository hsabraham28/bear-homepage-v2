import React from 'react';
import { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import oski from './oski-big.png';

console.log(oski);


function ClubCard(props) {

  const cardIDPound = `#a` + props.org.id;
  const cardID = `a` + props.org.id;
  
  const titleID = 'title' + props.org.id;

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
            <strong>{props.org.name}</strong>
          </MDBCardTitle>


          <MDBCardText>
            {props.org.info}
          </MDBCardText>

          <MDBCol md='12' className='d-flex justify-content-center'>

          </MDBCol>
        </MDBCardBody>

      </MDBCard>

      <div className="modal fade" id={cardID} tabIndex="-1" role="dialog" aria-labelledby={titleID} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">


              <h5 className="modal-title" id={titleID}>Name of Student Organization</h5>

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            <div className="modal-body">


              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">{props.org.name}</div>
                  <div className="col-md-9 ml-auto">Email goes here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">Size: </div>
                  <div className="col-md-9 ml-auto">Size goes here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">What is the student organization about? </div>
                  <div className="col-md-9 ml-auto">Description goes here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">What is it like to be a part of the student organization? </div>
                  <div className="col-md-9 ml-auto">Answer goes here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">Tags </div>
                  <div className="col-md-9 ml-auto">Tags go here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">Social Media: </div>
                  <div className="col-md-9 ml-auto">Social Media goes here</div>
                </div>
                <div className="row">
                  <div className="col-md-3">Youtube Link: </div>
                  <div className="col-md-9 ml-auto">YT Link goes here</div>
                </div>


              </div>


            </div>

          </div>
        </div>
      </div>

    </div>
  );
}





export default ClubCard;
