import React, { Component } from "react";

class ChargeAccount extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-heading">
              <i className="fa fa-file" /> Registrar cuenta de cobro
            </div>
            <div className="panel-body">
              <p>Formulario</p>
            </div>
            <div className="panel-footer">
              <button type="button" className="btn btn-default">
                {" "}
                Ingresar cuenta de cobro{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChargeAccount;
