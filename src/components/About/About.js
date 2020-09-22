import React from 'react';
import Header from '../Header/Header';
import Team from './Team';
import './about.scss'

function About(props) {
    const teams = {
        row1: [
            {
                name: "Sreeja Apparaju",
                pic: require("./teampics/sreeja.jpeg"),
                desig: "Project Manager",
            },
            {
                name: "William Louis",
                pic: require('./teampics/william.jpeg'),
                desig: "Full-Stack Developer",
            },
            {
                name: "Ivan A. Kristanto",
                pic: require('./teampics/ivan.jpg'),
                desig: "Lead Front-End Developer",
            },
            {
                name: "Hannah Abraham",
                pic: require('./teampics/hannah.jpg'),
                desig: "Front-End Developer",
            },
            {
                name: "Ruirui Zhang",
                pic: require('./teampics/ruirui.jpg'),
                desig: "Back-End Developer",
            },
        ],
        row2: [
            {
                name: "Yuqi Ye",
                pic: require("./teampics/yuqi.jpg"),
                desig: "UI/UX Designer",
            },
            {
                name: "Muskaan Agarwal",
                pic: require("./teampics/muskaan.jpg"),
                desig: "UI/UX Designer",
            },
            {
                name: "Wing Yiu Lo",
                pic: require("./teampics/wing.jpg"),
                desig: "UI/UX Designer + Marketing",
            },
            {
                name: "Arrushi Agarwal",
                pic: require('./teampics/arrushi.jpg'),
                desig: "Marketing Team",
            },
            {
                name: "Michael Paller",
                pic: require('./teampics/michael.png'),
                desig: "Marketing Team",
            },
        ],
        row3: [
    
        ],
        row4: [
            
        ],
        special: [
            {
                name: "Danji Liu",
                pic: require("./teampics/danji.jpg"),
                desig: "UI/UX Design",
            },
            {
                name: "Muse Yang",
                pic: require('./teampics/muse.jpg'),
                desig: "Back-End Development",
            },
        ],
    }

    return (
        <div className="AppChild">
            <Header isLanding={false} />
            <div className="about-main">
                <div className="heading">
                    <div className="heading-overlay">
                        <h2>THE STORY OF BEAR BEGINNINGS</h2>
                        <div className="storybox">
                            <p>
                                We miss being bombarded with flyers on Sproul to sparking conversations with random strangers while at Berkeley! As passionate Golden Bears, we built “Bear Beginnings” to bridge this gap the best we could, especially for the incoming students. We brainstormed ideas and worked on this independent passion project during the summer with the primary goal of creating an accessible service to help you adjust to Berkeley online. Scroll down to meet us and learn about our team:)

                            </p>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <h2>MEET THE TEAM</h2>
                    <Team team={teams.row1} />
                    <Team team={teams.row2} />
                    <h3>Special Thanks</h3>
                    <Team team={teams.special} />
                </div>
            </div>
        </div>
    )
}

export default About
