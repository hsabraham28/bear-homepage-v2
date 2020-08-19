import React, {useState} from 'react';
import Sidebar from './Sidebar';
import './story.scss';
import Tiles from "./Tiles";
import ourStory from './Tile';


function Index() {
    // Placeholder for REST API; remove contents when implementing back-end.
    const [state, setState] = useState({
        stories: []
    })

    fetch(`http://localhost:8083`)
    .then(response => response.json())
    .then(result =>  {
        setState({stories: result})
    })
    return (
        <div style={main}>
            <Sidebar />
            <div style={storyBody}>
                <h1 style={headingStyle}>Stories</h1>
                <Tiles stories={state.stories} />
            </div>
        </div>
    )
}

// High-level styles for the body div
const main = {
    paddingTop: '0px',
    display: 'flex',
}
   
const storyBody = {
    flexGrow: '1',
    padding: '25px',
}

const headingStyle = {
    textAlign: 'center',
    color: 'black',
}


export default Index
