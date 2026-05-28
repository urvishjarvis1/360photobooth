import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/avatar/Little_Things_logo.gif";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlinePhone } from "react-icons/ai";

function NavBar({ onRentNow }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleRentNow = () => {
    updateExpanded(false);
    onRentNow?.();
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={logo}
            className="img-fluid logo"
            alt="brand"
            style={{ borderRadius: 10 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="tel:+13065801402"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlinePhone style={{ marginBottom: "2px" }} /> +1 (306) 580
                1402
              </Nav.Link>
            </Nav.Item>
            <div className="nav-cta-group">
              <button
              
                type="button"
                className="rent-now-btn rent-now-btn--nav"
                onClick={handleRentNow}
              >
                Get a Quote
              </button>
              <Button
                href="https://www.instagram.com/little__findings/"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner nav-instagram-btn"
                aria-label="Instagram"
              >
                <AiFillInstagram style={{ fontSize: "1.4em" }} />
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
