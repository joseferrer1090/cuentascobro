import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                Login -- Sistema Cuenta cobros
              </div>
              <div className="panel-body">
                <form role="form">
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button type="button" className="btn btn-primary">
                          {" "}
                          Login{" "}
                        </button>
                      </div>
                      <div className="col-md-6">
                        <Link to="/register" className="btn btn-default">
                          {" "}
                          Registro{" "}
                        </Link>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
