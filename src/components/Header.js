import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <img
              src={require("../logo.png")}
              alt=""
              style={{ maxHeight: "50px" }}
            />
          </Link>
          <NavbarBrand href="/" className="ml-auto">
            Airport Currency Exchange
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ marginRight: "10px" }}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin">Admin</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
