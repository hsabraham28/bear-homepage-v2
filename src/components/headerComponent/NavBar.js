import React from 'react';
import './header.css';

function NavBar() {
    return (
        <div className="navibar">
            <div className="btn-group navibarGroup" role="group" aria-label="Basic example">
              <a href="#"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">virtual sproul</button></a>
              <a href="/story"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">our story</button></a>
              <a href="#"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">about us</button></a>
              <a href="#"><button type="button" className="btn btn-lg btn-primary btn-square btn-outline-light custom-btn">log in</button></a>
            </div>
        </div>
    )
}

export default NavBar
