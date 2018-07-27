import React, { Component } from "react";
import DashboardContainer from "./../../../Containers/DashboardContainer/DashboardContainer";
import Footer from "./../../Footer/Footer";

class ListAccount extends Component {
  render() {
    return (
      <div>
        <DashboardContainer>
          <p> lista de cuentas</p>
          <Footer />
        </DashboardContainer>
      </div>
    );
  }
}
export default ListAccount;
