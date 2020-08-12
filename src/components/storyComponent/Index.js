import React from 'react';
import Sidebar from './Sidebar';
import './story.css';


function Index() {
    return (
        <div style={main}>
            <Sidebar />
            <div style={storyBody}>
                <h1>hi2</h1>
            </div>
        </div>
    )
}

// Styles for the body div
const storyBody = {
    background: 'red',
    //width: '20px'
}

const main = {
 paddingTop: '0px',
}

export default Index
