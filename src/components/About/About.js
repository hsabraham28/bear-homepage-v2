import React from 'react';
import Header from '../Header/Header';
import Team from './Team';
import placeholder from './placeholder.png';
import './about.scss'

function About(props) {
    const teams = {
        frontend: [
            {
                name: "Person",
                pic: placeholder
            },
            {
                name: "Person2",
                pic: placeholder
            },
        ],
        backend: [
            {
                name: "Person3",
                pic: placeholder
            },
            {
                name: "Person4",
                pic: placeholder
            },
            {
                name: "Person5",
                pic: placeholder
            },
            {
                name: "Person6",
                pic: placeholder
            },
        ],
        uiux: [
            {
                name: "Person1",
                pic: placeholder,
            },
        ],
        marketing: [
            {
                name: "person2",
                pic: placeholder,
            }
        ],
        special: [
            {
                name: "person1",
                pic: placeholder
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
                    <h3>Front End Team</h3>
                    <Team team={teams.frontend}/>
                    <h3>Back End Team</h3>
                    <Team team={teams.backend}/>
                    <h3>Marketing Team</h3>
                    <Team team={teams.marketing}/>
                    <h3>UI/UX Team</h3>
                    <Team team={teams.uiux}/>
                    <h3>Special Thanks</h3>
                    <Team team={teams.special}/>

                    
                </div>
            </div>
        </div>
    )
}

export default About
