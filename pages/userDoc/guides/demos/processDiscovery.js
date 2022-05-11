import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";

export default function ProcessDiscovery() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="Layout-main" data-view-component="true">
            <div id="wiki-body" className="gollum-markdown-content">
              <div className="markdown-body">
                <h1>Process Discovery</h1>

                <p>
                  In this part, the demand to discover a process model is shown
                  at first. Next, the concrete workflow is provided as one
                  sample to solve a similar problem.{" "}
                  <img
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-discover.PNG"
                    alt=""
                    width="400px"
                    height="100px"
                    className="img-fluid img-shadow"
                  />
                </p>
                <p>One example workflow with PM4KNIME is shown below:</p>
                <p>
                  <img
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-discover-wf.PNG"
                    alt=""
                    width="600px"
                    height="250px"
                    className="img-fluid img-shadow"
                  />
                </p>
                <p>
                  The following steps will guide you to accomplish the task and
                  discover a Petri net from an event log.
                </p>
                <ol>
                  <li>
                    Download the{" "}
                    <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                      dataset
                    </a>
                    . Extract the event log <code>running-example.xes</code>{" "}
                    from the downloaded dataset.
                  </li>
                  <li>
                    Create a workflow in KNIME called
                    "PM4KNIME-Release-01-WF-Discovery".
                  </li>
                  <li>
                    Import the event log running-example.xes
                    <ul>
                      <li>
                        Drag the node <strong>Event Log Reader</strong> from the
                        category <strong>ProcessMining-&gt;IO</strong> or by
                        searching the related name, like "Event" in Node
                        Repository.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  <img
                    title="Node Search in KNIME"
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-search-node.PNG"
                    alt="image"
                    className="img-fluid img-shadow"
                  />
                </p>
                <div class="snippet-clipboard-content position-relative overflow-auto">
                  <pre class="notranslate">
                    <code class="notranslate">
                      * Configure the **Event Log Reader** with the path to file
                      running-example.xes and click OK to close the dialog.
                    </code>
                  </pre>
                </div>
                <p>
                  <img
                    title="Event Log Reader COnfiguration Dialog"
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-configuration-01.PNG"
                    alt="image"
                    className="img-fluid img-shadow"
                  />
                </p>
                <div class="snippet-clipboard-content position-relative overflow-auto">
                  <pre class="notranslate">
                    <code class="notranslate">
                      * Execute the node by right-clicking the node and choosing
                      **Execute** option. * Inspect the event log by choosing
                      the Output port, which is always located as the last
                      option by right-clicking.
                    </code>
                  </pre>
                </div>
                <p>
                  <img
                    title="Event log Overview"
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-result-summary.PNG"
                    alt="image"
                    className="img-fluid img-shadow"
                  />
                </p>
                <p>
                  Click the graph to show different perspectives on the event
                  log.{" "}
                  <img
                    title="Event Log with Traces"
                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogReader-result-trace-01.PNG"
                    alt="image"
                    className="img-fluid img-shadow"
                  />
                </p>
                <ol start="4">
                  <li>
                    Drag the node <strong>Inductive Miner</strong> into the
                    KNIME and connect it with the output port of the event log.
                    <ul>
                      <li>Configure the settings with the following values.</li>
                    </ul>
                  </li>
                </ol>
                <blockquote>
                  <p>
                    Select Inductive Miner Type: Inductive Miner - Infrequent
                    Write the Noise Threshold: 0.2 Select Event Classifier:
                    Event Name{" "}
                    <img
                      title="IM Configuration"
                      src="https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-configuration-01.PNG"
                      alt="image"
                      className="img-fluid img-shadow"
                    />
                  </p>
                </blockquote>
                <ul>
                  <li>Click OK to close the configuration dialog.</li>
                  <li>Execute the nodes.</li>
                  <li>
                    Check the generated Petri net in output port. An accepting
                    Petri net is given as the result.{" "}
                    <img
                      title="Generated Petri net from Inductive Miner"
                      src="https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-result-01.PNG"
                      alt="image"
                      className="img-fluid img-shadow"
                    />
                  </li>
                </ul>
                <ol start="5">
                  <li>
                    Export the generate Petri net with node{" "}
                    <strong>Petrinet Writer</strong>.
                    <ul>
                      <li>
                        <p>
                          Connect the input port of{" "}
                          <strong>Petrinet Writer</strong> with the output port
                          of node <strong>Inductive Miner</strong>.
                        </p>
                      </li>
                      <li>
                        <p>Choose the file path, like</p>
                        <p>
                          <code>\Generated\running-im-pn.pnml</code>
                        </p>
                      </li>
                      <li>
                        <p>Execute the node to save the Petri net.</p>
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  Following those steps, hopefully, you get more familiar with
                  task of process discovery. More miners are found in the
                  category "Process Mining-&gt;Discovery". The node and option
                  settings descriptions are listed on the right site if you
                  click the node.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
