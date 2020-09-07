import React from 'react';
import Header from '../Header/Header';
import Team from './Team';
import './about.scss'

function About(props) {
    const teams = {
        row1: [
            {
                name: "Arrushi Agarwal",
                pic: require('./teampics/arrushi.jpg'),
                desig: "Marketing Team",
            },
            {
                name: "Hannah Abraham",
                pic: require('./teampics/hannah.jpg'),
                desig: "Front-End Developer",
            },
            {
                name: "Ivan A. Kristanto",
                pic: require('./teampics/ivan.jpg'),
                desig: "Lead Front-End Developer",
            },
        ],
        row2: [
            {
                name: "Michael Paller",
                pic: require('./teampics/michael.png'),
                desig: "Marketing Team",
            },
            {
                name: "Muskaan Agarwal",
                pic: require("./teampics/muskaan.jpg"),
                desig: "UI/UX Designer",
            },
            {
                name: "Ruirui Zhang",
                pic: require('./teampics/ruirui.jpg'),
                desig: "Back-End Developer",
            },
        ],
        row3: [
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
                name: "Wing Yiu Lo",
                pic: require("./teampics/placeholder.png"),
                desig: "UI/UX Designer",
            },
        ],
        row4: [
            {
                name: "Yuqi Ye",
                pic: require("./teampics/yuqi.jpg"),
                desig: "UI/UX Designer",
            },
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
                            <p>Add a paragraph about why we started Bear Beginnings and the story behind it.</p>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <h2>MEET THE TEAM</h2>
                    <Team team={teams.row1} />
                    <Team team={teams.row2} />
                    <Team team={teams.row3} />
                    <Team team={teams.row4} />
                    <h3>Special Thanks</h3>
                    <Team team={teams.special} />
                </div>
            </div>
        </div>
    )
}

export default About
