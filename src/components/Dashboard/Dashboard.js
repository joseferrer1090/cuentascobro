import React, { Component } from "react";
import DashboardContainer from "./../../Containers/DashboardContainer/DashboardContainer";
import Footer from "./../Footer/Footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardContainer>
          <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
              <ol className="breadcrumb">
                <li>
                  <a href="#">
                    <em className="fa fa-home" />
                  </a>
                </li>
                <li className="active">Dashboard</li>
              </ol>
            </div>
            <Footer />
          </div>
        </DashboardContainer>
      </div>
    );
  }
}

export default Dashboard;
