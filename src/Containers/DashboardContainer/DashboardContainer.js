import React from "react";
import NavTop from "./../../components/Nav/NavTop/NavTop";
import NavLeft from "./../../components/Nav/NavLeft/NavLeft";

const DashboardContainer = props => {
  return (
    <div>
      <NavTop />
      <NavLeft />
      {props.children}
    </div>
  );
};

export default DashboardContainer;
