import './App.css';
import React, { Component, PureComponent } from 'react';
import Counter from "./components/Counter.js";
import Counters from "./components/Counters.js"
import Navbar from './components/Navbar.js';


class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 }
    ]
  }

  render() {
    return (
      <div className='mojaKlasa'>
        Iza viticadtih zagrada 2+2 =  {2 + 2}
        <Navbar totalCounters={this.state.counters.length} />
        <Counter />
        {/* <Counters /> */}
        {/* druga polovina drugog casa */}
        {/* <Form />
      <Inputs />
      <Textarea /> */}
        {/* <Select /> */}
      </div>
    );
  }
}

export default App;
