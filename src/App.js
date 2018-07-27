import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/generalstyles.css";

// Components User
import Login from "./components/Session/Login/Login";
import Register from "./components/Session/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";

// Component Administrator
import AdminPanel from "./components/Admin/Administrator";

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
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/admin/dashboard" component={AdminPanel} />
        </div>
      </Router>
    );
  }
}

export default App;
