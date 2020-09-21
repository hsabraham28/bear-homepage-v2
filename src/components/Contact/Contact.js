import React from 'react';
import Header from '../Header/Header';
import './style.scss';

function Contact() {
    return (
        <div className="AppChild">
            <Header isLanding={false} />

            <div className="contact-main">
                <div className="heading">
                    <div className="heading-overlay">
                        <h2>Contact Us!</h2>

                    </div>
                </div>

                <div className="body">
                    <a className="join" href="https://forms.gle/Eqe4xxiyo18RPRcs9">
                        <h2>Register your student organization here! </h2>
                    </a>

                    <a className="join" href="https://docs.google.com/document/d/1yOJpkO7cSE7miOK5_7hvT0h9FYdm2pebYmUIYFDCzKk/edit?usp=sharing">
                        <h2>Add your story here! </h2>
                    </a>

                    <h4>Have any thoughts, questions, or concerns?</h4>
                    <a className="email" href="mailto:bearbeginningsberkeley@gmail.com">
                        <h4>Contact us through email!</h4>
                    </a>

                    <a className="email" href="https://forms.gle/HJTUXYXtH4N9FSDe8">
                        <h4>Apply to our developer team!</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
