import React, { Component } from "react";

class ChildCounter extends Component {
    // state = {
    //     value: this.props.value
    // }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // }

    render() {
        return (
            <div style={{ margin: "15px" }}>#{this.props.counter.value}
                {/* <p>Ovo je iz propsa {this.props.value}</p> */}
                <button onClick={() => this.props.onIncrement(this.props.counter.id)}>+</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>

        );
    }
}
export default ChildCounter;