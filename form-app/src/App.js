import logo from './logo.svg';
import './App.css';
import Form from "./components/form.js";
import Inputs from "./components/input.js";
import Textarea from './components/textarea.js';
import Select from './components/select.js';

function App() {
  return (
    <div>
      <Form />
      <Inputs />
      <Textarea />
      <Select />
    </div>
  );
}

export default App;
