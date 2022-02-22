import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Switch => Routes
// import UserContextProvider from "./context/UserContext";
// import { Navbar } from "./styled";
// import { Home, About, Users, UserDetails } from "./views";
//
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivetRoute from "./components/PrivetRoute"


function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={
              <PrivetRoute>
                <About />
              </PrivetRoute>
            }
          />
        </Routes>
      </Router>

      {/* <UserContextProvider>
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
      <button>Button</button> */}

    </div>
  );
}

export default App;
