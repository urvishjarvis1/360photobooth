import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/avatar/Little_Things_logo.gif";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlinePhone,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts,
  AiOutlineContacts,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} 
          className="img-fluid logo"
          alt="brand" 
          style={{borderRadius:20/2}}/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="tel:+1 306 580 1402" onClick={() => updateExpanded(false)}>
                <AiOutlinePhone style={{ marginBottom: "2px" }} /> +1 (306) 580 1402
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
            <Button
                href="https://www.instagram.com/little__findings/"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillInstagram style={{ fontSize: "1.4em" }} />
                </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
