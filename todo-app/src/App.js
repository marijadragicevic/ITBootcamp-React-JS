import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import ContextProvider from './context/Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <TodoList />
        <TodoForm />
      </ContextProvider>
    </div>
  );
}

export default App;
