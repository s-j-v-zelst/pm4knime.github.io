import Header from "../../../../src/userDoc/UserDocHeader"
import Footer from "../../../../src/Footer"




export default function LogManipulation() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<p>In this part, the demand to manipulate an event log is shown at first. Next, the concrete workflow is provided as one sample to solve a similar problem. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-log-manipulation.PNG" alt="" width="500px" height="100px" className="img-fluid img-shadow" /></p>
<p>One example workflow with PM4KNIME is shown below:</p>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-log-manipulation-wf.PNG" alt="" width="600px" height="400px" className="img-fluid img-shadow" /></p>
<p>The steps to create the workflow above are</p>
<ol>
<li>Download the <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">dataset</a> from github. Extract the event log file <code>running-example.xes</code> from the downloaded dataset.</li>
<li>Import <code>running-example-non-conforming.xes</code> and <code>running-example-just-two-cases.xes</code> into KNIME with two nodes <strong>Event Log Reader</strong>.</li>
<li>Filter the event log <code>running-example-non-conforming.xes</code> with node <strong>Filter Event Log</strong>. Here, to filter the traces with Resource "Pete", meanwhile, the traces without the Resource "Pete" are ignored, the configuration is set in the next figure.<br /> <img title="Filter Configuration" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ol>
<p>After execution, it splits the log into two logs, one is the log to keep, the other is to dispose. <img title="Kept event log" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-result-keep.PNG" alt="image" className="img-fluid img-shadow"/></p>
<p><img title="Disposed event log" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogFilter-result-dispose.PNG" alt="image" className="img-fluid img-shadow" /></p>
<ol start="4">
<li>Merge two event logs with node <strong>Merge Log</strong></li>
</ol>
<ul>
<li>
<p>Connect the output ports from the filtered event logs and the imported event log.</p>
</li>
<li>
<p>Configure with Merge Strategy <strong>Separate Trace</strong>, it simply combines the traces from the two event logs together. Traces with the same caseID are allowed in the merged event log.</p>
</li>
<li>
<p>Configure with Merge Strategy <strong>IgnoreTrace</strong>, it ignored the traces from the second event log with the same caseID from the first event log.</p>
</li>
<li>
<p>Configure with Merge Strategy <strong>Internal Trace Merge</strong>, for the traces with the same caseID, it combines the events from the two traces together. The trace attributes can be chosen for the new attributes. The next figure shows the configuration example. <img title="Merge Log with Strategy Internal Trace Merge" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogMerge-configuration-internal-trace-02.PNG" alt="image" className="img-fluid img-shadow" /></p>
</li>
<li>
<p>Configure with Merge Strategy <strong>Internal Event Merge</strong>, for the events with the same names in the traces with the same caseID, it creates one new event and with the chosen attributs.</p>
</li>
<li>
<p>Choose strategy <strong>Internal Trace Merge</strong> and execute the node. It results in the merged event log. <img title="Merge Log with Strategy Internal Trace Merge" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LogMerge-result-internal-trace-02.PNG" alt="image" className="img-fluid img-shadow" /></p>
</li>
</ul>
<ol start="5">
<li>Classify the traces in the event log with certain attributes.</li>
</ol>
<ul>
<li>Configure</li>
<li>Execute the nodes. It outputs the result as following.</li>
</ul>
<h4>&nbsp;</h4>
<h4>Notice</h4>
<p>The event log manipulation can be achieved by applying the KNIME manipulation on Data Table which is converted from the event log. However, those operations can be simplified with the node provided before.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  