import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import ContextProvider from './context/Context';
// import CheckTodo from './components/CheckTodo';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <TodoList />
        <TodoForm />
        {/* <CheckTodo/> */}
      </ContextProvider>
    </div>
  );
}

export default App;
