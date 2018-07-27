import React, { Component } from "react";
import DashboardContainer from "./../../Containers/DashboardContainer/DashboardContainer";
import Footer from "./../Footer/Footer";
import ListAccount from "./ListAccount/ListAccount";

class ListAccounts extends Component {
  render() {
    return (
      <DashboardContainer>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div class="row">
            <ol class="breadcrumb">
              <li>
                <a href="#">
                  <em class="fa fa-list" />
                </a>
              </li>
              <li class="active">Mis cuentas</li>
            </ol>
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

export default ListAccounts;
