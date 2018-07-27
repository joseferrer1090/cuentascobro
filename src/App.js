import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/generalstyles.css";

// Components
import Login from "./components/Session/Login/Login";
import Register from "./components/Session/Register/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
