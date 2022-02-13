import React, { Component } from "react";

export default class ChildComponent3 extends Component {
    state = {
        name: "Maja",
        newName: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ name: this.state.newName })
    }

    handelChange = e => {
        this.setState({ newName: e.target.value });
    }

    // ona mora da vraca nesto uglavnom true ili false
    // da li treba da se update-uje ili ne
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState);

        if (this.state.name === nextState.name) {
            console.log("this.state i nextState su isti");
            return false;
        }
        console.log("they are not the same");


        return true;
    }

    render() {
        return (
            <div>
                {this.state.name}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handelChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}