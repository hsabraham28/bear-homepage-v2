import React from 'react';
import './story.scss';

function Sidebar() {
    return (
        <div style={sideMain}>
            <div className="sideChunk">
                <h3>Transition</h3>
                <ul>
                    <input type="checkbox" id="transition1" />
                    <label htmlFor="transition1">&nbsp; In State</label><br />
                    <input type="checkbox" id="transition2" />
                    <label htmlFor="transition1">&nbsp; Out of State</label><br />
                    <input type="checkbox" id="transition3" />
                    <label htmlFor="transition1">&nbsp; International</label><br />
                </ul>
            </div>
            <div className="sideChunk">
                <h3>Academics</h3>
                <ul>
                    <input type="checkbox" id="academics1" />
                    <label htmlFor="academics1">&nbsp; CoC</label><br />
                    <input type="checkbox" id="academics2" />
                    <label htmlFor="academics1">&nbsp; CoE</label><br />
                    <input type="checkbox" id="academics3" />
                    <label htmlFor="academics1">&nbsp; CED</label><br />
                    <input type="checkbox" id="academics4" />
                    <label htmlFor="academics4">&nbsp; CNR</label><br />
                    <input type="checkbox" id="academics5" />
                    <label htmlFor="academics5">&nbsp; L&amp;S</label><br />
                </ul>
            </div>
            <div className="sideChunk">
                <h3>Student Organization</h3>
                <ul>
                    <input type="checkbox" id="org1" />
                    <label htmlFor="org1">&nbsp; Application</label><br />
                    <input type="checkbox" id="org2" />
                    <label htmlFor="org1">&nbsp; Club</label><br />

                </ul>
            </div>
        </div>
    )
}

const sideMain = {
    background: 'rgb(0, 74, 173, 0.9)',
    color: 'white',
    height: '100%',
    width: '17%',
    // position: 'fixed',
    left: '0',
    overflowX: 'hidden',
    padding: '20px',
}

export default Sidebar
