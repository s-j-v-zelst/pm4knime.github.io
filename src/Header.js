import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import nextConfig from "../next.config";

const MetaInformation = () => {
  const basePath = nextConfig.basePath;
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>PM4KNIME</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={basePath + "/assets/pm4knimeLogo.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={basePath + "/assets/pm4knimeLogo.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={basePath + "/assets/pm4knimeLogo.png"}
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
  const basePath = nextConfig.basePath;

  return (
    <>
      <Navbar
        scrolling
        dark
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
                src={basePath + "/assets/fit_logo.svg"}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
            <Link href="/">
              <a
                className="navbar-brand pl-4 pr-4"
                style={{ paddingLeft: "15px" }}
              >
                <img
                  src={basePath + "/assets/pm4knimeLogo.png"}
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
              <Nav.Link href="#about">About PM4KNIME</Nav.Link>
              <Nav.Link href="#download">Download to the plugin</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="User Documentation"
                id="collasible-nav-dropdown"
              >
                <Link href="/userDoc" passHref>
                  <NavDropdown.Item>Documentation Home</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides" passHref>
                  <NavDropdown.Item>Introduction Guides</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/demos" passHref>
                  <NavDropdown.Item>Demos</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/userDoc/guides/bugReport" passHref>
                  <NavDropdown.Item>Bug Report</NavDropdown.Item>
                </Link>
                <Link href="/userDoc/guides/knimeServer" passHref>
                  <NavDropdown.Item>KNIME Server Usage</NavDropdown.Item>
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
