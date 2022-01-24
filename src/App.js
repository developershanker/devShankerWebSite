import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const App = () => {

	const [expand, updateExpanded] = useState(false);
  const linkTextStyle = {}
  return (
    <Router>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={"sticky"}
      >
        <Container>
          <Navbar.Brand href="/">
			  <text>Bhawana Shanker</text>
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
            <Nav className="ml-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                   Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                   About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  {" "}
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
