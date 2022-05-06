import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function FeaturesPM4KNIME() {
  /*
Only Important for images it has to 
have the the base url or it does not work
*/
  const baseUrl = nextConfig.basePath;
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>PM4KNIME Features</h1>
            <p>
              As a community extension for KNIME, PM4KNIME integrates the
              classical ProM plugins into KNIME platform and brings process
              mining into the analytical workflow environment. In this way, it
              eases the users to conduct large-scale and repetitive experiments,
              reuse and share the process mining analysis by predefined
              configuration, and process data with existing operations in KNIME.
            </p>
            <p>
              With respect to the PM4KNIME nodes functionality, we categorize
              the PM4KNIME features in the following part:
            </p>
            <h3>&nbsp;</h3>
            <h3>Category</h3>
            <div className={"image-container"}>
              <p>
                <Image
                  src={
                    baseUrl + "/assets/images/Features/pm4knime-category.jpg"
                  }
                  layout="fill"
                  alt="Exception screenshot"
                ></Image>
              </p>
            </div>
          </div>
          <div className="row-userDoc">
            IO Under IO category, there are nodes to read and write event log
            and process models.
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Node Name</th>
                  <th>Function</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Event Log Readers</td>
                  <td>
                    read an event log in .xes,.mxml, .xes.gz or .mxml.gz format
                    with strategy of Open Naive or Lenient
                  </td>
                  <td>file path</td>
                  <td>event log object, shown with log view</td>
                </tr>
                <tr>
                  <td>Event Log Writer</td>
                  <td>write an event log into .xes,.mxml format</td>
                  <td>event log, file path</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Petrinet Reader/Writer</td>
                  <td>
                    read/write an Petri net in format .pnml from/to an local
                    disk
                  </td>
                  <td>file path</td>
                  <td>Petri net is shown in an graph</td>
                </tr>
                <tr>
                  <td>Process Tree Reader/Writer</td>
                  <td>
                    read/write an proces tree in format .ptml from/to an local
                    disk
                  </td>
                  <td>file path</td>
                  <td>Process tree</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row-userDoc">
            <p>
              Conversion It enables the data exchange of KNIME and ProM. What's
              more, it provides the conversion of process models. More details
              are listed below.
            </p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Node Name</th>
                  <th>Function</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table2XLog Converter</td>
                  <td>
                    convert a data table, the default data type of KNIME, into
                    the event log that is processed by ProM
                  </td>
                  <td>data table</td>
                  <td>event log object</td>
                </tr>
                <tr>
                  <td>XLog2Table Converter</td>
                  <td>
                    convert an event log of ProM into DataTable format of KNIME
                  </td>
                  <td>event log object</td>
                  <td>data table</td>
                </tr>
                <tr>
                  <td>PT2PN Converter</td>
                  <td>convert a process tree into a Petri net</td>
                  <td>process tree object</td>
                  <td>Petri net</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row-userDoc">
            <p>
              <p>Log Manipulation</p> The nodes in this category manipulate an
              event log object and provides functionalities, like filtering,
              sampling, merging and classifying log. More details are listed
              below.
            </p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Node Name</th>
                  <th>Function</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Filter Log By Length</td>
                  <td>filter the traces according to trace length.</td>
                  <td>1 event log</td>
                  <td>1 event log</td>
                </tr>
                <tr>
                  <td>Filter Log By Frequency</td>
                  <td>
                    there are two types of filter: one works on the trace
                    variant. if the trace variant is over the frequency
                    threshold, all the traces in this variant meets the filter
                    condition; one work on the whole event log by cumulative
                    frequency. All trace variants are sorted w.r.t. frequency in
                    descending order. Trace variants are accumulated until their
                    sum meets the filter criteria.
                  </td>
                  <td>event log</td>
                  <td>event log</td>
                </tr>
                <tr>
                  <td>Random Classify Log</td>
                  <td>
                    randomly classify traces with different label in trace
                    variances
                  </td>
                  <td>event log</td>
                  <td>event log</td>
                </tr>
                <tr>
                  <td>Sample Event Log</td>
                  <td>
                    randomly sample traces in event log with a threshold in
                    integer as absolute number or relative percentage
                  </td>
                  <td>event log</td>
                  <td>event log</td>
                </tr>
                <tr>
                  <td>Merge Event Log</td>
                  <td>
                    merge event log on trace or event log, with ignoring or
                    substituting strategy for duplicated traces or events
                  </td>
                  <td>2 event log</td>
                  <td>event log</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row-userDoc">
            <p>Process Discovery</p>
            Process discovery mines visual process models from event logs that
            record the business execution, aiming at a better understanding of
            real business processes. PM4KNIME provides classical process mining
            discovery algorithms. Their types, inputs, and outputs are listed in
            the following table.
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Algorithm Name</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alpha Miner</td>
                  <td>event log</td>
                  <td>Petri net</td>
                </tr>
                <tr>
                  <td>Inductive Miner</td>
                  <td>event log</td>
                  <td>process tree</td>
                </tr>
                <tr>
                  <td>Heuristics Miner</td>
                  <td>event log</td>
                  <td>Petri net *(generate a C-Net view)</td>
                </tr>
                <tr>
                  <td>ILP Miner</td>
                  <td>event log</td>
                  <td>Petri net</td>
                </tr>
                <tr>
                  <td>DFM Miner</td>
                  <td>event log</td>
                  <td>directly-follows graph</td>
                </tr>
                <tr>
                  <td>DFM2PT Miner</td>
                  <td>directly-follows graph</td>
                  <td>process tree</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row-userDoc">
            <p>Conformance Checking</p>
            Conformance checking analyzes the deviations between a reference
            process model and observed behaviors driven from its execution.
            Firstly, alignment-based replay is carried with inputs of an event
            log and Petri net. The replayed result is given in alignment. Based
            on the alignment, it evaluates the model in the listed perspectives.
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Function</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alignment-Based Replayer</td>
                  <td>
                    replay the event log into Petri net and get the optimal
                    alignment for traces
                  </td>
                  <td>event log + Petri net</td>
                  <td>replayer result in alignment</td>
                </tr>
                <tr>
                  <td>Fitness</td>
                  <td>
                    based on the alignment, check the fitness that measures the
                    matches of event log and process model
                  </td>
                  <td>replayer result in alignment</td>
                  <td>fitness value + projected model</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>
                    based on the alignment, calculate the performance according
                    to time metrics, like throughput time, waiting time
                  </td>
                  <td>replayer result in alignment</td>
                  <td>performance statistical info + projected model</td>
                </tr>
                <tr>
                  <td>Precision</td>
                  <td>
                    based on the alignment, check precision that measures how
                    much the model allows more behavior than event log
                  </td>
                  <td>replayer result in alignment</td>
                  <td>precision statistical info</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row-userDoc">
            <p>GraphViz visualization</p>
            This nodes offer a GraphViz JavaScript visualization of the process
            models, which can be further used in KNIME Server.
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Node Name</th>
                  <th>Function</th>
                  <th>Input Type</th>
                  <th>Output Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Visualize DFM (GraphViz)</td>
                  <td>
                    This node implements a JavaScript Visualization of a
                    Directly Follows Model.
                    <br />
                    It visualizes all possible traces (order of activities). The
                    green nodes are the start activities and the red activities
                    are the end activity. The number on the arcs that connect to
                    another activity displays the number of traces that choose
                    the following activity after the current activity.
                  </td>
                  <td>Input Directly Follows Miner</td>
                  <td> Javascript GraphViz visualization</td>
                </tr>
                <tr>
                  <td>Visualize PN (GraphViz)</td>
                  <td>
                    This node implements a JavaScript Visualization of a Petri
                    Net.
                  </td>
                  <td>Input Petri Net</td>
                  <td>JavaScript GraphViz visualization PN</td>
                </tr>
                <tr>
                  <td>Visualize PT (GraphViz)</td>
                  <td>
                    This node implements a JavaScript Visualization of a Process
                    Tree.
                  </td>
                  <td>Input Process Tree</td>
                  <td>JavaScript GraphViz visualization ProcessTree</td>
                </tr>
              </tbody>
            </table>
          </div>
          optional This category marks the potential extension of PM4KNIME
          project.
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
