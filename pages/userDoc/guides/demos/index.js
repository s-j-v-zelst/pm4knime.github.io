import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import Link from "next/link";

export default function IntroductionDemos() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Installation Instructions</h1>

            <p>
              This section demonstrates the usage of PM4KNIME by giving concrete
              examples. The data set for those examples is located in github
              under the{" "}
              <a href="https://github.com/pm4knime/pm4knime-document/tree/master/dataset">
                link
              </a>
              .
            </p>
            <p>
              Based on the dataset, multiple workflows are built to show the
              usage in the different parts:
            </p>
            <h2>&nbsp;</h2>
            <h2>Basic Usage</h2>
            <p>
              This part helps get familiar with PM4KNIME nodes in simple sequent
              workflow.
            </p>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/processDiscovery">
                <a>Process Discovery</a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/conformance">
                <a>Conformance Checking </a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/logManipulation">
                <a>Log Manipulation</a>
              </Link>
            </h5>
            <h2>&nbsp;</h2>
            <h2>Advanced Usage</h2>
            <p>
              This part incldues the repeative workflow execution in KNIME. How
              to Loop and FlowVaribale is the practice focus.
            </p>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/repetiveExecution">
                <a>Repetitive Execution of Workflow</a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/parameterOptimization">
                <a>Parameter Optimization </a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/organizationOnWorkflow">
                <a>Organization on Workflow </a>
              </Link>
            </h5>
            <h2>&nbsp;</h2>
            <h2>Integration with KNIME</h2>
            <p>
              This part explores the potential use of other functions from
              KNIME, in order to achieve more computation power of PM4KNIME.
            </p>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/knimeNodes">
                <a>Connect to KNIME Nodes</a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              <Link href="/userDoc/guides/demos/workWithJava">
                <a>Work with Java Programming</a>
              </Link>
            </h5>
            <h5>&nbsp;</h5>
            <h5>
              {" "}
              <Link href="/userDoc/guides/demos/workWithPython">
                <a>Work with Python Programming</a>
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
