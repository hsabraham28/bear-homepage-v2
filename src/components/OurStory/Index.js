import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import './story.scss';
import Tiles from "./Tiles";
import ourStory from './Tile';


class Index extends React.Component {
    // Placeholder for REST API; remove contents when implementing back-end.
    constructor(props) {
        super()
        this.state = {
            stories: []
        }

        this.componentWillMount = this.componentWillMount.bind(this)
    }

    componentWillMount() {
        fetch(`http://localhost:8083`)
        .then(response => response.json())
        .then(result => {
            this.setState({stories: result}, () => console.log(this.state.stories))
        })
    }
    
    render() {
        return (
            <div style={main}>
                <Sidebar />
                <div style={storyBody}>
                    <h1 style={headingStyle}>Stories</h1>
                    <Tiles stories={this.state.stories} />
                </div>
            </div>
        )
    }
    
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
