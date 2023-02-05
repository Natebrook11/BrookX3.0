import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarMenu = ({ cart, totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="logo">Your Brand</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="smr-auto link" navbar>
            <NavItem>
              <NavLink href="/" className="nav-item">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="nav-item">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services" className="nav-item">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="nav-item">Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto link" navbar>
            <NavItem>
              <NavLink className="nav-item">
                Cart: {cart.length}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item">
                Total: ${totalPrice.toFixed(2)}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;