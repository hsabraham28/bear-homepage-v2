import React, { Component } from 'react'

export class Check extends Component {
    constructor(props) {
        super(props);
        this.tagName = props.tagName;
        this.tagID = this.tagName.replace(/\s/g, "");
        this.onCheck = this.onCheck.bind(this);
        this.tagVar = props.tagVar;
    }

    onCheck(e) {
        this.props.eHandler(e, this.tagBool)
    }

    render() {
        this.tagBool = this.props.tagBool;
        return (
            <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={this.onCheck.bind(this)} name={this.tagVar} type="checkbox" id={this.tagID} checked={this.tagBool} />
                <label className="form-check-label" htmlFor={this.tagID}>{this.tagName}</label>
            </div>
        )
    }
}

export default Check
