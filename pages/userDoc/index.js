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
                is designed to compose and execute a series of data transformation steps
                steps as a workflow. By combining this with process mining algorithms,
                it enables the support of large-scale experiments in process
                mining. As such, PM4KNIME provides the following key features:
              </p>
              <ul>
                <li>
                  <i>Design of large-scale and repetitive analyses</i>. Process mining
                  algorithms embedded in KNIMEl workflow can be executed
                  with just one click.
                </li>
                <li>
                  <i>Reuse and Sharing of process mining analysis</i>. With predefined
                  configurations and input, the workflows reproduce the same
                  results. Moreover, KNIME eases sharing of process mining
                  analyses by sharing the workflows.
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
