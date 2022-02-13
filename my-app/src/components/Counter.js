import React, { Component } from "react";

class Counter extends Component {
    // Kada hocemo da pristupamo this za svaku funkciju,ali prema ES6 novi standardima mozemo da pristupimo bez constructora
    // constructor() {
    //     super();
    //     console.log(`Constructor`, this);
    //     this.formatCount = this.formatCount.bind(this);
    // }

    state = {
        counter: 0,
        imgURL: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    }

    styles = {
        fontSize: '10px',
        fontWeight: "bold"
    }

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    handelDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    //kada je anonimna funkcija potreban je constructor
    // formatCount() {
    //     // destructuring
    //     const { counter } = this.state;
    //     console.log(counter);
    // }

    formatCount = () => {
        const { counter } = this.state;
        return counter === 0 ? "Zero" : counter;
    }
    addClass = () => {
        return this.state.counter === 0 ? "warning" : "success";
    }


    render() {
        return (
            <div>
                <h1 style={this.styles}>Pozdrav iz Child komponente</h1>
                <p style={{ fontSize: "1.5rem" }}>Ja sam paragraf</p>

                <img src={this.state.imgURL} />
                <br />
                <button onClick={this.handelDecrement}> -</button>

                {/* <p>Count:{this.state.counter} </p> */}

                <p className={this.addClass()}>Count:{this.formatCount()} </p>
                <button onClick={this.handleIncrement}>+</button>

                <h1>Tagovi</h1>
                {
                    this.state.tags.map((tag, index) => (
                        <p key={index}>#{tag}</p>
                    ))
                }
            </div>
        );
    }
}

export default Counter;