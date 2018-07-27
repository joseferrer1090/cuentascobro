import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Aux from "./Containers/Aux";
import "./styles/generalstyles.css";

// Components User
import Login from "./components/Session/Login/Login";
import Register from "./components/Session/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ListAccounts from "./components/Dashboard/ListAccounts";

// Component Administrator
import AdminPanel from "./components/Admin/Administrator";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Aux>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route
            exact
            path="/user/dashboard/listaccounts"
            component={ListAccounts}
          />
        </Aux>
      </HashRouter>
    );
  }
}

export default App;
