import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLef extends React.Component {
  render() {
    return (
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
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
            <Link to="/user/dashboard">
              <em className="fa fa-plus">&nbsp;</em> Registrar cuenta
            </Link>
          </li>
          <li>
            <Link to="/user/dashboard/listaccounts">
              <em className="fa fa-list">&nbsp;</em> Mis Cuentas
            </Link>
          </li>
          <li>
            <Link to="/user/dashboard/editaccounts">
              <em className="fa fa-pencil">&nbsp;</em> Modificar Cuentas
            </Link>
          </li>
          <li>
            <Link to="/">
              <em className="fa fa-sign-out">&nbsp;</em> Cerrar Sesion
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLef;
