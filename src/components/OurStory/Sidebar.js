import React from 'react';

function Sidebar() {
    return (
        <div className="side--main">
            <div className="welcomeChunk">
                <h1>Welcome to Our Stories</h1>
                <p>Learn more about life at UC Berkeley from the students themselves! The following shows the 3 categories of stories; read to find out more!</p>
            </div>
            <div className="sideChunk tr">
                <h3 className="tr-head">Transition</h3>
                <p>What were the initial few weeks of the first semester like for students everywhere? Read about stories from <span className="tr-inst">in-state</span>, <span className="tr-outst">out-of-state</span>, and <span className="tr-intl">international</span> students!</p>
            </div>
            <div className="sideChunk ac">
                <h3 className="ac-head">Academics</h3>
                <p>Want to learn more about the classes for your specific majors? Or are you trying to balance your schedule? Find out what Cal students from various <span>majors</span> have to say!</p>
            </div>
            <div className="sideChunk st">
                <h3 className="st-head">Student Organization</h3>
                <p><span className="st-club">Club</span> - learn about the best ways to explore student orgs!</p>
                <p><span className="st-app">Applications</span> - with recruitment season on the horizon, learn more about what it's like to apply and interview for orgs!</p>
            </div>
        </div>
    )
}


export default Sidebar
