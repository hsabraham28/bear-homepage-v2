import React, { useState } from 'react';
import './landing.scss';
import obi from './ourstorybuttonimg6.png';
import vsbi from './vsbuttonimg3.png';
import asuclog from './asuc-smaller2.png';
import esclog from './esc.png';
import tab from './tabbed3.png';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import bg from './backimg3.png';

console.log(obi);
console.log(vsbi);
console.log(asuclog);
console.log(esclog);
console.log(tab);



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
    // hides mobile menu when nav item is clicked
    this.hideMobile = (e) => {
      this.refs['hambCheck'].checked = !this.refs['hambCheck'].checked;
    };
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
      <div className="AppChild" style={this.landingStyle}>
        <Header isLanding={true} />
        <div className="landingMain">
          <div className="main">
            <div className="jumbo" >
              <h1 style={fontSize}>TO OUR NEWEST GOLDEN BEARS...</h1>
              <h2 style={fontSize}>Congratulations on your acceptance to UC Berkeley! As students, we understand how difficult the first year of college is, and now even more in the midst of a global pandemic. Times like these are not easy, but you do not have to go through them alone. We have designed this website just for the Class of 2024 to alleviate your stress and share our Berkeley perspective and experiences with you!</h2>
            </div>
            <div className="btns">


              <Link to="/discover" className="btn1 btn">
                <img align="left" src={vsbi} class="rounded-circle" alt="vspic" />
                <h1 style={fontSize}>VIRTUAL SPROUL</h1>
              </Link>


              <Link to="/story" className="btn2 btn">
                <img align="left" src={obi} class="rounded-circle" alt="ospic" />
                <h1 style={fontSize}>OUR STORY</h1>
              </Link>



            </div>
          </div>

          
        </div>
        <div className="footer">
            <img src={asuclog} alt="asuc" />
            <img src={esclog} alt="esc" />
          </div>
      </div>
    )
  }
}

export default Landing
