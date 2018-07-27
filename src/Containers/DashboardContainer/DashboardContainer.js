import React from "react";
import NavTop from "./../../components/Nav/NavTop/NavTop";
import NavLef from "./../../components/Nav/NavLeft/NavLef";

const DashboardContainer = props => {
  return (
    <div>
      <NavTop />
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <NavLef />
      </div>
      {props.children}
    </div>
  );
};

export default DashboardContainer;
