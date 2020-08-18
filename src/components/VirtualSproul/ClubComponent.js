import React from "react";
import './layout.scss';


function ClubComponent(props) {
    return (

        <div className="vs--cards">
            {props.clubArray}
        </div>
    )
}


export default ClubComponent
