import ThemeToggle from './components/ThemeToggle';
import SongList from './components/SongList';
import ThemeContextProvider from './context/TeamContext';
import SongContextProvider from './context/SongContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />

        <SongContextProvider>
          <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
