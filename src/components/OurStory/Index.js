import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './layout.scss';
import './style.scss';
import Tiles from "./Tiles";
import Header from '../Header/Header'


class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            stories: [
                {
                    type: "Transition", //or "Academics" or "Student Orgs"
                    subtype: "", 
                    id: "1231231",
                    challenge: "challenge here blabla",
                    concern: "not really",
                    emo: "emo wow",
                    feel: "feelgood",
                    major: "m-m-m-major",
                    name: "John Doenut",
                    residency: "in-state",
                    year: "sophomore"
                },
                {
                    type: "Academics", //or "Academics" or "Student Orgs"
                    id: "ssss",
                    challenge: "challenge here blabla",
                    concern: "not really",
                    emo: "emo wow",
                    feel: "feelgood",
                    major: "m-m-m-major",
                    name: "John Doenut",
                    residency: "in-state",
                    year: "sophomore"
                },
            ]
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:8083`)
            .then(response => response.json())
            .then(result => {
                this.setState({ stories: result }, () => console.log(this.state.stories))
            })
    }


    render() {
        return (
            <div className="AppChild">
                <Header isLanding={false} />
                <div className="story--main">
                    <Sidebar />
                    <div className="story--body">
                        <h1 className="story--heading">Stories</h1>
                        <Tiles stories={this.state.stories} />
                    </div>
                </div>
            </div>
        )
    }
}



export default Index
