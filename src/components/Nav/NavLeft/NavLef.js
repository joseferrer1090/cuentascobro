import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLef extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-sidebar">
          <div className="profile-userpic">
            <img
              src="images/profile-pic-1.jpg"
              width="50"
              class="img-responsive"
              alt=""
            />
          </div>
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">Username</div>
            <div className="profile-usertitle-status">
              <span className="indicator label-success" />Online
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="divider" />
        <ul className="nav menu">
          <li className="active">
            <a href="index.html">
              <em className="fa fa-plus">&nbsp;</em> Registrar cuenta
            </a>
          </li>
          <li>
            <a href="widgets.html">
              <em className="fa fa-list">&nbsp;</em> Mis Cuentas
            </a>
          </li>
          <li>
            <a href="charts.html">
              <em className="fa fa-pencil">&nbsp;</em> Modificar Cuentas
            </a>
          </li>
          <li>
            <a href="buttons.html">
              <em className="fa fa-sign-out">&nbsp;</em> Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLef;
