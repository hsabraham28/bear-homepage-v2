import React from 'react';
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



function Landing() {
  // Set custom background and header for landing page
  const landingStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
  }


  return (
    <div className="AppChild" style={landingStyle}>
      <Header isLanding={true} />
      <div className="landingMain">
        <div className="main">
          <div className="jumbo">
            <h1>TO OUR NEWEST GOLDEN BEARS...</h1>
            <h2>Congratulations on your acceptance to UC Berkeley! As students, we understand how difficult the first year of college is, and now even more in the midst of a global pandemic. Times like these are not easy, but you do not have to go through them alone. We have designed this website just for the Class of 2024 to alleviate your stress and share our Berkeley perspective and experiences with you!</h2>
          </div>
          <div className="btns">


            <Link to="/discover" className="btn1 btn">
              <img align="left" src={vsbi} class="rounded-circle" alt="vspic" />
              <h1>VIRTUAL SPROUL</h1>
            </Link>


            <Link to="/story" className="btn2 btn">
              <img align="left" src={obi} class="rounded-circle" alt="ospic" />
              <h1>OUR STORY</h1>
            </Link>



          </div>
        </div>

        <div class="footer">
          <img src={asuclog} alt="asuc" />
          <img src={esclog} alt="esc" />
        </div>
      </div>
    </div>
  )
}

export default Landing
