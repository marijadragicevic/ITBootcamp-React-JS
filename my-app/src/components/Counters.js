import React, { Component } from "react";
import ChildCounter from "./ChildCounter.js";

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 }
        ]
    }

    handleIncrement = (id) => {
        console.log(id);

        // Spread operator
        const counters = [...this.state.counters];

        this.setState({
            counters: this.state.counters.map((item) => {
                return item.id === id ? { ...item, value: item.value + 1 } : item;
            }),
        });
    }
    handelDelete = (id) => {
        this.setState({
            // prevState je kopija celog statea,a ne objekata samo
            counters: this.state.counters.filter(item => item.id !== id)
        });
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    // ovde prosledjujemo
                    <ChildCounter
                        key={counter.id}
                        // value={counter.value}
                        // id={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handelDelete}
                    />
                ))}
            </div>
        );
    }
}
export default Counters;