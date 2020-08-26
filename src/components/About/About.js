import React from 'react';
import Header from '../Header/Header';
import Team from './Team';
import './about.scss'

function About(props) {
    const teams = {
        frontend: [
            {
                name: "Ivan A. Kristanto",
                pic: require('./teampics/ivan.jpg')
            },
            {
                name: "Hannah Abraham",
                pic: require('./teampics/hannah.jpg')
            },
        ],
        backend: [
            {
                name: "",
                pic: require('./teampics/placeholder.png')
            },
            {
                name: "Muse Yang",
                pic: require('./teampics/muse.jpg')
            },
        ],
        uiux: [
            {
                name: "Muskaan Agarwal",
                pic: require("./teampics/muskaan.jpg"),
            },
            {
                name: "Danji Liu",
                pic: require("./teampics/danji.jpg"),
            },
            {
                name: "Yuqi Ye",
                pic: require("./teampics/yuqi.jpg"),
            },
        ],
        marketing: [
            {
                name: "Arrushi Agarwal",
                pic: require('./teampics/arrushi.jpg'),
            }
        ],
        special: [
            {
                name: "person1",
                pic: require('./teampics/placeholder.png')
            }
        ]
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
                    <h3>UI/UX Team</h3>
                    <Team team={teams.uiux} />
                    <h3>Front End Team</h3>
                    <Team team={teams.frontend} />
                    <h3>Back End Team</h3>
                    <Team team={teams.backend} />
                    <h3>Marketing Team</h3>
                    <Team team={teams.marketing} />
                    <h3>Special Thanks</h3>
                    <Team team={teams.special} />
                </div>
            </div>
        </div>
    )
}

export default About
