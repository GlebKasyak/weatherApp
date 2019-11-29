import React from "react";

export class Error extends React.Component {

    state = {
        display: "d-block"
    };

    onClick = (e) => {
        this.setState({display: "d-none"});
    };

    render() {
        return(
            <div className={"alert alert-dismissible fade show error " + this.state.display} role="alert">
                <strong>Holy guacamole!</strong>
                <span className="message">Sorry! There was an error loading the items</span>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onClick}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
};