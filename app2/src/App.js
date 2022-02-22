import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Profile from "./pages/Profile";
import Account from "./pages/Account";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        {/* exact path ne radi ne prikazuje */}
        <Route path="/">
          <button onClick={() => setIsAuth(true)}>Login</button>
          <button onClick={() => setIsAuth(false)}>Logout</button>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/account">Account</Link>
        </Route>
        <PrivateRoute path="/profile" component={Profile} isAuth={isAuth} />
        <PrivateRoute path="/account" component={Account} isAuth={isAuth} />
      </Router>
    </div>
  );
}

export default App;
