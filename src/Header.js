import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Link from 'next/link'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';

const MetaInformation = () =>{

return(
    <Helmet>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <title>PM4KNIME</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/pm4knimeLogo.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="assets/pm4knimeLogo.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="assets/pm4knimeLogo.png"/>
    <meta name="description"
          content="PM4KNIME implements state-of-the-art process mining algorithms."/>
    <meta name="google" content="notranslate"/>
    </Helmet>
)

}

const Navigation = () => {

    return (
        <>
    <Navbar scrolling dark className="mx-auto color-nav" collapseOnSelect expand="lg"  variant="light" fixed="top">
  <Container>
  <Navbar.Brand >
  <a className="navbar-brand" href="https://fit.fraunhofer.de">
        <img src="assets/fit_logo.svg" width="auto" height="30"
                 className="d-inline-block align-top" alt=""/>
        </a>

        <a className="navbar-brand pl-4 pr-4" style={{paddingLeft:"15px"}} href="#">
        <img src="assets/pm4knimeLogo.png" width="auto" height="30"
                 className="d-inline-block align-top" alt=""
                 />
            PM4KNIME
        </a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#about">About PM4KNIME</Nav.Link>
      <Nav.Link href="#download">Download to the plugin</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <NavDropdown title="User Documentation" id="collasible-nav-dropdown">
        <NavDropdown.Item href="userDoc">Home</NavDropdown.Item>
        <NavDropdown.Item href="userDoc/guides">Introduction Guides</NavDropdown.Item>
        <NavDropdown.Item href="userDoc/guides/demos/">Demos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="userDoc/guides/bugReport">Bug Report</NavDropdown.Item>
        <NavDropdown.Item href="userDoc/guides/knimeServer">KNIME Server Usage</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>    
        </>
    )
}

export default Header => {
    return (
        <>            
         <MetaInformation></MetaInformation>
        <Navigation></Navigation>
        </>
    )

}