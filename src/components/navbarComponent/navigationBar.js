import React from 'react';
import { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import lines from './homesStripes.PNG';
console.log(lines);



class Bar extends Component {
  render() {
    return (
      <div className="navboxes">
     
      
      <Container>
      <Row>
      <Col xs="6">
      <div className="stip">
      <img src={lines} alt="pattern" />
      </div>
      </Col>
      <Col xs="6">
            <div className="navibar">
            <div class="btn-group" role="group" aria-label="Basic example">
  			<button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">virtual sproul</button>
  			<a href="/story"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">our story</button></a>
  			<button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">about us</button>
  			<button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">log in</button>
  			</div>
  			
  			</div>
		</Col>
		</Row>
      </Container>



      </div>
      );
  }
}


export default Bar;






