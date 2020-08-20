import React from 'react';
import './landing.scss';
import obi from './ourstorybuttonimg6.png';
import vsbi from './vsbuttonimg3.png';
import asuclog from './asuc-smaller2.png';
import esclog from './esc.png';
import tab from './tabbed3.png';

console.log(obi);
console.log(vsbi);
console.log(asuclog);
console.log(esclog);
console.log(tab);


function Landing() {
    return (
        <div className="landingMain">
            <div className="main">
                <div className="jumbo">
                <h1>TO OUR NEWEST GOLDEN BEARS...</h1>
                <h2>Congratulations on your acceptance to UC Berkeley! As students, we understand how difficult the first year of college is, and now even more in the midst of a global pandemic. Times like these are not easy, but you do not have to go through them alone. We have designed this website just for the Class of 2024 to alleviate your stress and share our Berkeley perspective and experiences with you!</h2>
                </div>
                <div className="btns">
                    <div className="btn1 btn"><img src={vsbi} class="rounded-circle" alt="vspic" /> VIRTUAL SPROUL </div>
                    
                    
                    <div className="btn2 btn"><img src={obi} class="rounded-circle" alt="ospic" /> &nbsp; OUR STORY</div>
                    
                    
                </div>
                
            </div>

            <div class="footer">
                <img src={asuclog} alt="asuc" />
                <img src={esclog} alt="esc" />
            </div>
        </div>
    )
}

export default Landing
