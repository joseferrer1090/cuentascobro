import React, { Component } from "react";
import DashboardContainer from "./../../Containers/DashboardContainer/DashboardContainer";
import Footer from "./../Footer/Footer";
import ChargeAccount from "./../Dashboard/ChargeAccount/ChargeAccount";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div class="row">
            <ol class="breadcrumb">
              <li>
                <a href="#">
                  <em class="fa fa-plus" />
                </a>
              </li>
              <li class="active">Registro de cuenta</li>
            </ol>
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
