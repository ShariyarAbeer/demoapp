import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Post from "./pages/Post";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="Part_A">
            <div className="Pages">
              <div>
                <NavLink
                  to="/home"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  exact
                  to="/"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Profile
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/post"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Post
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/setting"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Setting
                </NavLink>
              </div>
            </div>
          </div>
          <div className="Part_B">
            <Route exact path="/" component={Profile} />
            <Route path="/home" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/setting" component={Setting} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
