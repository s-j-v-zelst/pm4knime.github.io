import Head from "next/head";
import Image from "next/image";

import Header from "../src/Header";
import Footer from "../src/Footer";
import { basePath } from "../next.config";
export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section" id="about">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={basePath + "/assets/pm4knimeLogo.png"}
                height="100"
                width="auto"
                className="d-inline text-center"
              />
              <h1 className="section-header">PM4KNIME</h1>
              <h2 className="mt-n3 mb-5">
                State-of-the-art process mining in the KNIME Analytics Platform
              </h2>

              <p>
                PM4KNIME is a <i>process mining</i> extension, developed by the{" "}
                <a
                  href="http://fit.fraunhofer.de/process-mining"
                  target="_blank"
                >
                  process mining research group
                </a>{" "}
                of the {" "}
                <a href="http://fit.fraunhofer.de/" target="_blank">
                  Fraunhofer Institute for Applied Information Technology
                </a>
                , for the leading open-source data science platform{" "}
                <a
                  href="https://www.knime.com/knime-analytics-platform"
                  target="_blank"
                >
                  KNIME
                </a>
                . PM4KNIME implements several state-of-the-art process mining
                algorithms in a user-friendly manner and is distributed under the{" "}
                <i>Apache 2.0 License</i>.
              </p>

              <p>
                KNIME is designed to compose and execute a sequence of data manipulation steps, i.e., a data transformation workflow. 
                Combined with process mining technology, it supports large-scale process mining analytics.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img
                src={basePath + "/assets/pm4knime-screenshot.png"}
                className="img-fluid img-shadow"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h2>Functionality Overview</h2>
            </div>
          </div>
          <div className="row  justify-content-between text-center">
            <div className="col-md-3 m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-random fa-2x"></i>
              <br />
              <div className="mt-3">
                Get a selection of <strong> classical </strong> ProM plugins in
                KNIME
              </div>
            </div>

            <div className="col-md-3  m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-file-import fa-2x"></i>
              <div className="mt-3">
                <strong>Create</strong> Large-scale and repetitive experiments.
                Process mining experiments in the analytical workflow context
                can be executed with just one click. <br />
              </div>
            </div>

            <div className="col-md-3 m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-chevron-right fa-2x"></i>{" "}
              <i className="fas fa-chevron-right fa-2x ml-n3"></i>
              <div className="mt-3">
                Create your process analysis <strong>comfortably</strong> in a
                visual workflow environment
              </div>
            </div>

            <div className="col-md-3  m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-search fa-2x"></i>
              <div className="mt-3">
                <strong>Discover</strong> process models from your event data
              </div>
            </div>

            <div className="col-md-3  m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-filter fa-2x"></i>
              <div className="mt-3">
                <strong>Effortlessly</strong> use other KNIME extensions to
                further preprocess and post-process the data for process mining
                algorithms.
              </div>
            </div>

            <div className="col-md-3 m-3 p-3 border rounded feature-box lead">
              <i className="fas fa-file-export fa-2x"></i>
              <div className="mt-3">
                <strong>Save</strong> your current analysis, with its
                configuration and input as KNIME workflows, and share it with
                others!
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>

        <hr id="download" />
        <div className="section">
          <div className="row">
            <div className="col-12">
              <h1 className="section-header">
                Download in KNIME hub
                <a href="https://hub.knime.com/pm4knime/extensions/org.pm4knime.feature/latest">
                  <i
                    className="fas fa-download ml-3 icon-color"
                    style={{ marginLeft: 10 }}
                  ></i>
                </a>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-3">
              <div className="collapse text-monospace" id="collapseChangelog">
                <div id="changelog-text" className="card card-body lead">
                  Loading...
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr id="tool-paper" />

        <div className="section mb-5">
          <div className="row" id="contact">
            <div className="col">
              <h1 className="section-header">
                Contact<i className="fas fa-paper-plane ml-3 icon-color"></i>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Get in touch if you have any questions or custom request
              (pm4knime@fit.fraunhofer.de).
              <h2>
                <a href="mailto:pm4knime@fit.fraunhofer.de">
                  <i className="fas fa-envelope"></i>
                  email
                </a>
              </h2>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col-md-8"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
