import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter.js';
// import Counter1 from './components/Counter1.js';
// import Select from './components/Select.js';
import SongList from "./components/SongList.js";


function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* {show ? <Counter1 /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      {/* <Select /> */}
      <SongList />
    </div>
  );
}

export default App;
