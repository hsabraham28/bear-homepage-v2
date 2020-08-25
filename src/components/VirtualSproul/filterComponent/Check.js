import React, { Component } from 'react'

export class Check extends Component {
    constructor(props) {
        super(props);
        [this.tagName, this.tagBool] = Object.entries(props.tag).map(
            ([key, value]) => [key, value]
        );
        console.log(props.tag, Object.entries(props.tag));
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                {/* <input className="form-check-input" onChange={e => this.filterCheckBoxEventHandler(e, this.state.Technology)} name="Technology" type="checkbox" id="inlineCheckboxTech" checked={this.state.Technology} />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Tech</label> */}
            </div>
        )
    }
}

export default Check
