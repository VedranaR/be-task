import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <h1 className="navbar-brand">{branding}</h1>
      </div>
    </nav>
  );
};

const headerStyle = {
  color: "red",
  fontSize: "3rem"
};

export default Header;
