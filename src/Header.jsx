import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const Header = ({setSearchQuery}) => {
  const [searchinput, setsearchinput] = useState("");
  const navigate= useNavigate();

  const handleSearch = () => {
    setSearchQuery(searchinput);
    navigate("/search");
  };
  return (
    <Navbar
      expand="lg"
      className="main-navbar"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="brand-logo">
          🎬 CineBox
        </Navbar.Brand>
        {/* Menu */}
        <Nav className="ms-auto nav-links" >
          {/* <Nav.Link as={NavLink} to="/ " className="nav-item">Home</Nav.Link> */}

          <Nav.Link as={NavLink} to="/popular" className="nav-item">
            Popular
          </Nav.Link>
          <Nav.Link as={NavLink} to="/latest" className="nav-item">
            Latest
          </Nav.Link>
          <Nav.Link as={NavLink} to="/comedy" className="nav-item">
            Comedy
          </Nav.Link>
        </Nav>
        <InputGroup className="search-group"  >
          <Form.Control

          className="search-input"
          style={{ width:"100px", fontSize: "12px", padding: "0 8px" }}
            placeholder="Search movies..."
            value={searchinput}
            onChange={(e) => setsearchinput(e.target.value)}
          />
          <Button className="search-btn" variant="outline-secondary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </Navbar>
  );
};

export default Header;
