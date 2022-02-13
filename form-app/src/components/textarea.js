import React, { Component } from "react";

class Textarea extends Component {
    state = {
        description: "Content of text area"
    }

    handleChange = e => {
        this.setState({ description: e.target.value });
    }

    render() {
        return (
            <form>
                <textarea value={this.state.description} onChange={this.handleChange} />
            </form>
        );
    }
}
export default Textarea;