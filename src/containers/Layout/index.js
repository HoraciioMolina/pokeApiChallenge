import React from "react";
import Navbar from "../../components/UI/navbar";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout-container-header">
        <Navbar />
      </div>
      <div className="layout-container-body">{props.children}</div>
    </div>
  );
};

export default Layout;
