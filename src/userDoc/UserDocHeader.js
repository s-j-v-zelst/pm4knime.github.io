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
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/pm4knimeLogo.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/pm4knimeLogo.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/pm4knimeLogo.png"/>
    <meta name="description"
          content="PM4KNIME implements state-of-the-art process mining algorithms."/>
    <meta name="google" content="notranslate"/>
    </Helmet>
)

}

const Navigation = () => {

    return (
        <>
    <Navbar className="mx-auto color-nav"  collapseOnSelect expand="lg"  variant="light" fixed="top">
  <Container>
  <Navbar.Brand >
  <a className="navbar-brand" href="https://fit.fraunhofer.de">
        <img src="/assets/fit_logo.svg" width="auto" height="30"
                 className="d-inline-block align-top" alt=""/>
        </a>

        <a className="navbar-brand pl-4 pr-4" style={{paddingLeft:"15px"}} href="/">
        <img src="/assets/pm4knimeLogo.png" width="auto" height="30"
                 className="d-inline-block align-top" alt=""
                 />
            PM4KNIME
        </a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/userDoc">Home</Nav.Link>
    </Nav>
    <Nav>
      <NavDropdown title="Guideline for normal user" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/userDoc/guides">Introduction Guides</NavDropdown.Item>
      <NavDropdown.Item href="/userDoc/guides/features">PM4KNIME Features</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/userDoc/guides/installation">Installation Instructions</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/importantConcepts">KNIME Important Concepts</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/bugReport">Bug Report</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/userDoc/guides/knimeServer">KNIME Server Usage</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <NavDropdown title="Usage Examples" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/userDoc/guides/demos/">Introduction Demos</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/processDiscovery">Process Discovery</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/conformance">Confromance</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/logManipulation">Log Manipulation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/userDoc/guides/demos/repetiveExecution">Repetitive Execution of Workflow</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/parameterOptimization">Parameter Optimization</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/organizationOnWorkflow">Organization on Workflow</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/userDoc/guides/demos/knimeNodes">KNIME Nodes</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/workWithJava">Working with Java</NavDropdown.Item>
        <NavDropdown.Item href="/userDoc/guides/demos/workWithPython">Working with Python</NavDropdown.Item>

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