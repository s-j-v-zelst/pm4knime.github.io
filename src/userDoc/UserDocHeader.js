import React, { Component } from "react";
import nextConfig from "../../next.config";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MetaInformation = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>PM4KNIME</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={nextConfig.basePath + "/assets/pm4knimeLogo.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={nextConfig.basePath + "/assets/pm4knimeLogo.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={nextConfig.basePath + "/assets/pm4knimeLogo.png"}
      />
      <meta
        name="description"
        content="PM4KNIME implements state-of-the-art process mining algorithms."
      />
      <meta name="google" content="notranslate" />
    </Helmet>
  );
};

const Navigation = () => {
  return (
    <>
      <Navbar
        className="mx-auto color-nav"
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <a className="navbar-brand" href="https://fit.fraunhofer.de">
              <img
                src={nextConfig.basePath + "/assets/fit_logo.svg"}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
            <Link href={"/"} passHref>
              <a
                className="navbar-brand pl-4 pr-4"
                style={{ paddingLeft: "15px" }}
              >
                <img
                  src={nextConfig.basePath + "/assets/pm4knimeLogo.png"}
                  width="auto"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
                PM4KNIME
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link href={"/userDoc/"} passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Guideline for normal user"
                id="collasible-nav-dropdown"
              >
                <Link href="/userDoc/guides/" passHref>
                  <NavDropdown.Item>Introduction Guides</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/features" passHref>
                  <NavDropdown.Item>PM4KNIME Features</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/userDoc/guides/installation" passHref>
                  <NavDropdown.Item>Installation Instructions</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/importantConcepts" passHref>
                  <NavDropdown.Item>KNIME Important Concepts</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/bugReport" passHref>
                  <NavDropdown.Item>Bug Report</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/userDoc/guides/knimeServer" passHref>
                  <NavDropdown.Item>KNIME Server Usage</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Usage Examples" id="collasible-nav-dropdown">
                <Link href="/userDoc/guides/demos" passHref>
                  <NavDropdown.Item>Introduction Demos</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos/processDiscovery" passHref>
                  <NavDropdown.Item>Process Discovery</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos/conformance" passHref>
                  <NavDropdown.Item>Confromance</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos/logManipulation" passHref>
                  <NavDropdown.Item>Log Manipulation</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/userDoc/guides/demos/repetiveExecution" passHref>
                  <NavDropdown.Item>
                    Repetitive Execution of Workflow
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/userDoc/guides/demos/parameterOptimization"
                  passHref
                >
                  <NavDropdown.Item>Parameter Optimization</NavDropdown.Item>
                </Link>
                <Link
                  href="/userDoc/guides/demos/organizationOnWorkflow"
                  passHref
                >
                  <NavDropdown.Item>Organization on Workflow</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/userDoc/guides/demos/knimeNodes" passHref>
                  <NavDropdown.Item>KNIME Nodes</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos/workWithJava" passHref>
                  <NavDropdown.Item>Working with Java</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos/workWithPython" passHref>
                  <NavDropdown.Item>Working with Python</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default (Header) => {
  return (
    <>
      <MetaInformation></MetaInformation>
      <Navigation></Navigation>
    </>
  );
};
