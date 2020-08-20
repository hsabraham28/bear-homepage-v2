import React from 'react';
import './landing.scss';
import Header from '../Header/Header'


function Landing() {
    return (
        <React.Fragment>
            <Header isLanding={true} />
            <div className="landingMain">
                <div class="main">
                    <div class="jumbo">Jumbo</div>
                    <div class="btns">
                        <div class="btn1">Btn1</div>
                        <div class="btn2">Btn2</div>
                    </div>
                </div>
    
                <div class="footer">
                    Footer
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing
