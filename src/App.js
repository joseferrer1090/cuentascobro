import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import "./styles/generalstyles.css";

// Components User
import Login from "./components/Session/Login/Login";
import Register from "./components/Session/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ListAccounts from "./components/Dashboard/ListAccounts";
import EditAccounts from "./components/Dashboard/EditAccounts";

// Component Administrator
import AdminPanel from "./components/Admin/Administrator";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route
            exact
            path="/user/dashboard/listaccounts"
            component={ListAccounts}
          />
          <Route
            exact
            path="/user/dashboard/editaccounts"
            component={EditAccounts}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
