import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
