import React, { Component } from "react";

class NavTop extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-custom navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#sidebar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Sistema Cuenta cobros
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavTop;
