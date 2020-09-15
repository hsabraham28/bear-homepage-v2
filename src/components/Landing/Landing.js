import React, { useState } from 'react';
import './landing.scss';
import obi from './ourstorybuttonimg6.png';
import vsbi from './vsbuttonimg3.png';
import asuclog from './asuc-smaller2.png';
import esclog from './esc.png';
import tab from './tabbed3.png';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
// import bg from './backimg3.png';
import bg from './placeholderbg.jpg';
import gate from "./gate.png"; 
import smile from "./smile.svg";

// console.log(obi);
// console.log(vsbi);
// console.log(asuclog);
// console.log(esclog);
// console.log(tab);



class Landing extends React.Component {
  constructor(props) {
    super(props);

    // Set custom background and header for landing page
    this.landingStyle = {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    this.state = { isMobile: window.innerWidth < 1100 }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1100
      });
    }, false);
  }

  render() {
    const fontSize = this.state.isMobile ? {
      fontSize: 'x-large'
    } : { fontSize: '' };

    return (
      <div className="big-landing-wrapper" style={this.landingStyle}>
        <div className="AppChild">
          <Header isLanding={true} />
          <div className="landingMain">
            <div className="main">
              <div className="jumbo" >
                <h1 style={fontSize}>DEDICATED TO OUR NEWEST GOLDEN BEARS...</h1>
                <h2 style={fontSize}>Congratulations on your acceptance to UC Berkeley! As students, we understand how difficult the first year of college is, and now even more in the midst of a global pandemic. Times like these are not easy, but you do not have to go through them alone. We have designed this website especially for the Class of 2024 in the hopes to alleviate your stress and share our Berkeley perspective and experiences with you!</h2>
              </div>
              <div className="btns">
                <Link to="/discover" >
                  <div className="vs">
                    <img src={gate}></img>
                    <h1>VIRTUAL SPROUL</h1>
                    <p>Discover Student Organizations!</p>
                  </div>
                </Link>


                <Link to="/story">
                  <div className="os">
                    <img src={smile}></img>
                    <h1>OUR STORY</h1>
                    <p>Read Honest Student Experiences!</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="disclaimer">
              <p>Image credit (c) Ritvik Bhalla</p>
              <p>DISCLAIMER - Bear Beginnings is not responsible or liable in any manner for any Content posted on our Website. You are solely responsible for you interactions with other users of the website, and we will not be liable for any damage or harm resulting from any content or your interactions with other users of the website.</p>
            </div>

            <div>
              {/* <img src={asuclog} alt="asuc" />
              <img src={esclog} alt="esc" /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
