import React from 'react';
import Sidebar from './Sidebar';
import './layout.scss';
import './style.scss';
import Tiles from "./Tiles";
import Header from '../Header/Header';



class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            stories: [
                // { // base: required fields
                //     id: "id1", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "academics", // string (either "academics", "transition", "student orgs") 

                //     // academics
                //     email: "email1",
                //     college: "college1",
                //     gpareq: "gpareq1",
                //     prereq: "prereq1",
                //     tips: "tips1",
                //     rigor: "rigor1",
                // },
                // { // base: required fields
                //     id: "id2", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "transition", // string (either "academics", "transition", "clubs", "apps") 

                //     // transition
                //     residency: "in-state", // either "in-state", "out-of-state", or "international"
                //     feel: "feel1",
                //     emo: "emo1",
                //     concern: "concern1",
                //     challenge: "challenge1",
                // },
                // { // base: required fields
                //     id: "id3", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "student orgs", // string (either "academics", "transition", "clubs", "apps") 

                //     // club
                //     clubs: "clubs1",
                //     transition: "transition1",
                //     proscons: "proscons1",
                //     balance: "balance1",
                //     type: "clubs",
                // },
                // { // base: required fields
                //     id: "id4", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "student orgs", // string (either "academics", "transition", "clubs", "apps") 

                //     // app
                //     factors: "factors1",
                //     cope: "cope1",
                //     advice: "advice1",
                //     pic: "pic1",
                //     type: "apps",
                // },
            ]
        }

        this.componentDidMount = this.componentDidMount.bind(this)

        
    }

    componentDidMount() {
        fetch(`https://157.245.228.180:8083`)
            .then(response => response.json())
            .then(result => {
                this.setState({ stories: result }) //for debug use: , () => console.log(this.state.stories)
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
