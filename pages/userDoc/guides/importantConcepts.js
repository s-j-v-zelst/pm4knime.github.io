import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";

export default function ImportantConcept() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1>KNIME Important Concepts</h1>
          <p>
            This section briefly introduces concepts from KNIME which are
            related and important to PM4KNIME usage. More information about
            those concepts can be found on the given links from KNIME.
          </p>
          <h2>&nbsp;</h2>
          <h2>How to create a workflow</h2>
          <p>
            The exact information can be found with this{" "}
            <a href="https://www.knime.com/getting-started" rel="nofollow">
              link
            </a>
            .
          </p>
          <h2>&nbsp;</h2>
          <h2>States of nodes in KNIME</h2>
          <p>There are four types states of nodes in KNIME.</p>
          <ul>
            <li>
              Not Configured in Red light: Usually after adding a new node to
              Workflow Editor
            </li>
            <li>
              Configured in Yellow light: After configuration, it changes from
              red to yellow. Some nodes have the status "configured" when they
              are created, or left from last configuration.
            </li>
            <li>
              Executed in Green light: State after execution is successful.
            </li>
            <li>Error in Red Cross: Some errors show during execution.</li>
          </ul>
          <p>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-states.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <p>
            Cancel the execution of node by <strong>Reset</strong>, the node
            changes from{" "}
            <em>
              <strong>Executed</strong>
            </em>{" "}
            into{" "}
            <em>
              <strong>configured</strong>
            </em>
            .
          </p>
          <h2>&nbsp;</h2>
          <h2>Ports of Nodes</h2>
          <p>
            There are input ports and output ports for one node. The types of
            them are:
          </p>
          <ol>
            <li>Data of Table in Black Triangle:</li>
            <li>Model in Blue Rectangle:</li>
            <li>An image in Green Rectangle:</li>
            <li>Flow Variable in Red Circle:</li>
            <li>Database Connection in Red Rectangle:</li>
            <li>Database Query in Maroon Rectangle:</li>
          </ol>
          <h2>&nbsp;</h2>
          <h2>FlowVariable</h2>
          <p>
            Flow Variable is shown as one red circle in KNIME and usually used
            to configure parameters automatically.
          </p>
          <h4>&nbsp;</h4>
          <h4>Usage</h4>
          <p>
            [https://www.knime.com/knime-introductory-course/chapter7/section1/creation-and-usage-of-flow-variables]
          </p>
          <h5>&nbsp;</h5>
          <h5>Goal: Try to parameterize the automation of workflow.</h5>
          <h5>&nbsp;</h5>
          <h5>Types: There are two kinds of flow variables,</h5>
          <ul>
            <li>
              <strong>global flow variable</strong> for the whole workflow
            </li>
            <li>
              <strong>local flow variable</strong> with explicit port to connect
              to node, it has effect on the{" "}
              <strong>all nodes after the port connection</strong>. We can also
              transfer data value into flow variable by using node{" "}
              <em>
                <strong>Table Row to Variable</strong>
              </em>{" "}
              is used to define new flow variables. The names of flow variables
              are defined by the column names.
            </li>
          </ul>
          <h2>&nbsp;</h2>
          <h2>Loop Structure</h2>
          <p>
            The detailed information can be found in{" "}
            <a
              href="https://www.knime.com/nodeguide/control-structures/loops"
              rel="nofollow"
            >
              KNIME Loop
            </a>
            . <br></br>{" "}
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-loop.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <p>Most important things to remember are:</p>
          <ul>
            <li>
              In KNIME, it requires two nodes in pair to explicitly represent
              the loop start and loop end. The format for the pair is{" "}
              <code>XXX Loop Start</code> and <code>XXX Loop End</code>.
            </li>
            <li>
              After execution Loop, the result from each iteration is summarized
              at the <code>XXX Loop End</code>.
            </li>
            <li>
              Loop is usually used with Flow Variable to modify the node's
              settings.
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
