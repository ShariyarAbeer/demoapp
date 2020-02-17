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
            <img
              style={{ margin: 30, borderRadius: 400 / 2 }}
              width={200}
              height={200}
              className="mr-7"
              src="https://scontent.fdac15-1.fna.fbcdn.net/v/t1.0-9/29497614_815393248852087_9185027329996104120_n.jpg?_nc_cat=100&_nc_ohc=kDJdbIvBcZoAX-CytLd&_nc_ht=scontent.fdac15-1.fna&oh=7d3281b224f119daf1cc35134b630d11&oe=5EF8788A"
              alt="Generic placeholder"
            />
            <div className="Pages">
              <div>
                <NavLink
                  exact
                  to="/"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  About Me
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/home"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Resume
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/post"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Education
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/setting"
                  activeClassName="Pages__Link--Active"
                  className="Pages__Link"
                >
                  Contact
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
