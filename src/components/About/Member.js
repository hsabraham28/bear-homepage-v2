import React from 'react'

function Members(props) {
    return (
        <div className="member">
            <div>
                <img src={props.pic}></img>
            </div>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Members
