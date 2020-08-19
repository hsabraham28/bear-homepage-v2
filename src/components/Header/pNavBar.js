import React from 'react';
import './pHeader.scss';
import { Link } from "react-router-dom";

function pNavBar() {
    return (
        <div className="navibar">
            <div className="btn-group navibarGroup" role="group" aria-label="Basic example">
              <Link to="/discover"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">virtual sproul</button></Link>
              <Link to="/story"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">our story</button></Link>
              <Link to="#"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">about us</button></Link>
              <Link to="#"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">log in</button></Link>
            </div>
        </div>
    )
}

export default pNavBar
