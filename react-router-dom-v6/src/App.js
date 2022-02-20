import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Switch => Routes
import UserContextProvider from "./context/UserContext";
import { Navbar } from "./styled";
import { Home, About, Users, UserDetails } from "./views";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <div>
            <Navbar>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </Navbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </Router>
      </UserContextProvider>
      {/* <button>Button</button> */}
    </div>
  );
}

export default App;
