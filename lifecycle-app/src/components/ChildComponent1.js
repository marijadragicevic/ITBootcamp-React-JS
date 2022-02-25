import React, { Component } from "react";

export default class ChildComponent1 extends Component {
    state = {
        favoriteColor: "red"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "blue" });
        }, 3000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = `Before the update fav color was ${prevState.favoriteColor} `;
        return null;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = `The update fav color is ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1>My fav color is {this.state.favoriteColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}