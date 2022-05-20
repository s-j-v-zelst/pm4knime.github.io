import Header from "../../src/userDoc/UserDocHeader";
import Footer from "../../src/Footer";
import Link from "next/link";

export default function UserDocStartingPage() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div>
            <div className="row-userDoc">
              <p>
                Welcome to the PM4KNIME user documentation! This user
                documentation provides infomation regarding PM4KNIME installation and applicaton.
              </p>
              <h1>
                {" "}
                <Link href={"/userDoc/"}>
                  <a></a>
                </Link>
              </h1>
              <h1>Project Description</h1>
              <p>
                In the last decades, process mining, a technology bridging data
                mining and business process management, has gained more and more
                attention from both academy and industry. Multiple tools
                are developed to support process mining techniques. 
                However, none of these existing tools provide means to design, save and manipulated structured process minig analyses.
              </p>
              <p>
                <a href="https://www.knime.com/" rel="nofollow">
                  KNIME
                </a>{" "}
                is designed to compose and execute a series of data manipulation
                steps, namely a workflow, in scientific application. By
                combining this analytical workflow with process mining domain,
                it enables the support of large-scale experiments in process
                mining.
              </p>
              <p>
                Driven by this motivation, PM4KNIME is started by the group{" "}
                <a
                  href="https://www.pads.rwth-aachen.de/cms/~pnbx/PADS/"
                  rel="nofollow"
                >
                  Process And Data Science
                </a>{" "}
                at the university RWTH Aachen. Developed as a community
                extension for KNIME, PM4KNIME integrates ProM into KNIME by
                wrapping ProM plugins as operational nodes in KNIME and is
                continued by Frauhofer FIT Group. Those nodes can connect each
                other and build a workflow to complete process mining tasks.
              </p>
              <p>
                By bring process mining techniques into KNIME, PM4KNIME benefits
                the users from the following perspectives:
              </p>
              <ul>
                <li>
                  Large-scale and repetitive experiments. Process mining
                  experiments in the analytical workflow context can be executed
                  with just one click.
                </li>
                <li>
                  Reuse and Share of process mining analysis. With predefined
                  configuration and input, those workflows reproduce the same
                  result. Moreover, KNIME eases the share of process mining
                  analysis by sharing the workflows.
                </li>
                <li>
                  Ability to use process mining techniques in KNIME. With
                  PM4KNIME, KNIME users avoid the transfer of different
                  platforms.
                </li>
                <li>
                  Ability to use KNIME data analytic extensions. KNIME provides
                  nodes to support the preprocess and post-process of data for
                  the process mining algorithm.
                </li>
              </ul>
              <h1>Documentation Sections</h1>
              <ul>
                <li>
                  <p>
                    Normal User: This section provides the manual for normal
                    users with KNIME. It is divided into the following parts.
                  </p>
                  <ul>
                    <li>project introduction</li>
                    <li>how to install PM4KNIME</li>
                    <li>how to use PM4KNIME</li>
                    <li>how to use KNIME server</li>
                  </ul>
                </li>
                <li>
                  <p>
                    Developer: This part aims to guide developers to understand
                    PM4KNIME better and reducing effort and pain during
                    programming. It includes the following parts.
                  </p>
                  <ul>
                    <li>how to fork and build project?</li>
                    <li>how to add node extension into the project?</li>
                    <li>how to manage the dependency?</li>
                    <li>how to release a new version of this project?</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
