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
              <div className="row">
                <form action="" role="form">
                  <div className="col-xs-4 pull-right">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DD/MM/YYYY"
                        disabled
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="col-md-6">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        {" "}
                        <i className="fa fa-user" />{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombres"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        {" "}
                        <i className="fa fa-user" />{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellidos"
                        disabled
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="col-md-12">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        {" "}
                        <i className="fa fa-envelope" />{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email@email.com"
                        disabled
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Digite el concepto de la cuenta de cobro y demas actividades a realizadas."
                    />
                    <br />
                  </div>
                  <br />
                  <div className="col-md-6">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        {" "}
                        <i className="fa fa-usd" />{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="digite el valor a cobrar sin puntos"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group input-group-sm">
                      <span className="input-group-addon">
                        {" "}
                        <i className="fa fa-upload" />{" "}
                      </span>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="panel-footer">
              <button type="button" className="btn btn-default">
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
