import React from 'react'

function TileBody(props) { //props: label (with colon/question mark and without space), content
    return (
        <div>
            <div className="row">
                <div className="col-md-3">{props.label + " "}</div>
                <div className="col-md-9 ml-auto">{props.content}</div>
            </div>
        </div>
    )
}

export default TileBody;
