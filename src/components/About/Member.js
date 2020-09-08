import React from 'react';
import mask from './about-mask.png';


function Member(props) {
    const memberImageStyle = {
        backgroundImage: `url(${props.pic})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        WebkitMaskImage: `url(${mask})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',

        maskImage: `url(${mask})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center'
    };
    return (
        <div className="member">
            <div style={memberImageStyle}>
                <img src={props.pic} />
            </div>
            <h2>{props.name}</h2>
            <h4>{props.desig}</h4>
        </div>
    );
}

export default Member;
