import React from 'react';
import Highlight from './highlightComponent/highlight';
import Action from './actionComponent/action';
import Logos from './logosComponent/logos';

function Landing() {
    return (
        <React.Fragment>
            <Highlight />
            <div className="togeth">
                <Action />
                <Logos />
            </div>
        </React.Fragment>
    )
}

export default Landing
