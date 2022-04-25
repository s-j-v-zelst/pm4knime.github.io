import Header from "../../../srcuserDocuserDocHeader"
import Footer from "../../../src/Footer"




export default function FeaturesPM4KNIME() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <h1>PM4KNIME Features</h1>
<p>As a community extension for KNIME, PM4KNIME integrates the classical ProM plugins into KNIME platform and brings process mining into the analytical workflow environment. In this way, it eases the users to conduct large-scale and repetitive experiments, reuse and share the process mining analysis by predefined configuration, and process data with existing operations in KNIME.</p>
<p>With respect to the PM4KNIME nodes functionality, we categorize the PM4KIME features in the following part:</p>
<h3>&nbsp;</h3>
<h3>Category</h3>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/pm4knime-category.jpg" alt="pm4knime category" className="img-fluid img-shadow" /></p>
<ul>
<li>IO Under io category, there are nodes to read and write event log and process models.</li>
</ul>
<table className="table table-striped">
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
<td>Event Log Reader</td>
<td>read an event log in .xes,.mxml format with strategy of Open Naive or Lenient</td>
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
<td>read/write an Petri net in format .pnml from/to an local disk</td>
<td>file path</td>
<td>Petri net is shown in an graph</td>
</tr>
<tr>
<td>Process Tree Reader/Writer</td>
<td>read/write an proces tree in format .ptml from/to an local disk</td>
<td>file path</td>
<td>Process tree</td>
</tr>
</tbody>
</table>
<ul>
<li>Conversion It enables the data exchange of KNIME and ProM. What's more, it provides the conversion of process models. More details are listed below.</li>
</ul>
<table className="table table-striped">
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
<td>convert a data table, the default data type of KNIME, into the event log that is processed by ProM</td>
<td>data table</td>
<td>event log object</td>
</tr>
<tr>
<td>XLog2Table Converter</td>
<td>convert an event log of ProM into DataTable format of KNIME</td>
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
<ul>
<li>Log Manipulation The nodes in this category manipulate an event log object and provides functionalities, like filtering, sampling, merging and classifying log. More details are listed below.</li>
</ul>
<table className="table table-striped">
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
<td>there are two types of filter: one works on the trace variant. if the trace variant is over the frequency threshold, all the traces in this variant meets the filter condition; one work on the whole event log by cumulative frequency. All trace variants are sorted w.r.t. frequency in descending order. Trace variants are accumulated until their sum meets the filter criteria.</td>
<td>event log</td>
<td>event log</td>
</tr>
<tr>
<td>Random Classify Log</td>
<td>randomly classify traces with different label in trace variances</td>
<td>event log</td>
<td>event log</td>
</tr>
<tr>
<td>Sample Event Log</td>
<td>randomly sample traces in event log with a threshold in integer as absolute number or relative percentage</td>
<td>event log</td>
<td>event log</td>
</tr>
<tr>
<td>Merge Event Log</td>
<td>merge event log on trace or event log, with ignoring or substituting strategy for duplicated traces or events</td>
<td>2 event log</td>
<td>event log</td>
</tr>
</tbody>
</table>
<ul>
<li>Discovery</li>
</ul>
<p>Process discovery mines visual process models from event logs that record the business execution, aiming at a better understanding of real business processes. PM4KNIME provides classical process mining discovery algorithms. Their types, inputs, and outputs are listed in the following table.</p>
<table className="table table-striped">
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
<ul>
<li>conformance checking Conformance checking analyzes the deviations between a reference process model and observed behaviors driven from its execution. Firstly, alignment-based replay is carried with inputs of an event log and Petri net. The replayed result is given in alignment. Based on the alignment, it evaluates the model in the listed perspectives.</li>
</ul>
<table className="table table-striped">
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
<td>replay the event log into Petri net and get the optimal alignment for traces</td>
<td>event log + Petri net</td>
<td>replayer result in alignment</td>
</tr>
<tr>
<td>Fitness</td>
<td>based on the alignment, check the fitness that measures the matches of event log and process model</td>
<td>replayer result in alignment</td>
<td>fitness value + projected model</td>
</tr>
<tr>
<td>Performance</td>
<td>based on the alignment, calculate the performance according to time metrics, like throughput time, waiting time</td>
<td>replayer result in alignment</td>
<td>performance statistical info + projected model</td>
</tr>
<tr>
<td>Precision</td>
<td>based on the alignment, check precision that measures how much the model allows more behavior than event log</td>
<td>replayer result in alignment</td>
<td>precision statistical info</td>
</tr>
</tbody>
</table>
<ul>
<li>optional This category marks the potential extension of pm4knime project.</li>
</ul>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  