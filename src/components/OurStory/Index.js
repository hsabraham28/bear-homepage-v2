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
            stories: []
        }

        this.componentWillMount = this.componentWillMount.bind(this)
    }

    componentWillMount() {
        fetch(`http://localhost:8083`)
            .then(response => response.json())
            .then(result => {
                this.setState({ stories: result }, () => console.log(this.state.stories))
            })
    }


    render() {
        return (
            <React.Fragment>
                <Header isLanding={false} />
                <div className="story--main">
                    <Sidebar />
                    <div className="story--body">
                        <h1 className="story--heading">Stories</h1>
                        <Tiles stories={this.state.stories} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default Index
