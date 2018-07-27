import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                {" "}
                Registro de usuario -- Sistema Cuenta cobros{" "}
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user" />
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nombres"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-user" />
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Apellidos"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope" />
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-lock" />
                          </span>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="passwors"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="fa fa-lock" />
                          </span>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Re password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="panel-footer">
                <Link to="/" type="button" className="btn btn-default">
                  {" "}
                  <i className="fa fa-arrow-left" /> Atras{" "}
                </Link>
                <button className="btn btn-default pull-right">
                  {" "}
                  <i className="fa fa-check" /> Registrar{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
