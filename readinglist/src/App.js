import './App.css';
import CounterReducer from './components/CounterReducer';
import { BookContexProvider } from './context/BookContext';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <CounterReducer />

      <BookContexProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContexProvider>
    </div>
  );
}

export default App;
