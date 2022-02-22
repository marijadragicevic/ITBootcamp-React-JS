import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import MissionDetails from './components/MissionDetails';
import { Home, Missions, Launches, Rockets } from "./pages/index";
import LauncheDetails from './components/LaunchDetails';
import RocketDetails from './components/RocketDetails';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches" element={<Launches />} />

          <Route path="/missions/:id" element={<MissionDetails />} />
          <Route path="/launches/:id" element={<LauncheDetails />} />
          <Route path="/rockets/:id" element={<RocketDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
