import Header from "../../../../srcuserDocuserDocHeader"
import Footer from "../../../../src/Footer"




export default function Conformance() {
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
<p>In this part, the demand to do conformance checking is shown at first. Conformance checking needs a process model and an event log as inputs. But in reality, an event log is possibly not provided directly in .xes format, instead, in CSV file. The following concrete workflow is provided as one sample to deal with this situation.</p>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-conformance-check.PNG" alt="" width="400px" height="200px" className="img-fluid img-shadow" /></p>
<p>One example workflow with PM4KNIME is shown below:</p>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-conformance-check-wf.PNG" alt="" width="600px" height="300px"  className="img-fluid img-shadow"/></p>
<p>To create the workflow shown above, the following steps are required.</p>
<ol>
<li>Download the <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">dataset</a>. Extract the CSV file <code>running-example.csv</code> from the downloaded dataset.</li>
<li>Import the CSV file into KNIME with node <strong>CSV Reader</strong>. The detail on this node can be found in the <a href="https://nodepit.com/node/org.knime.base.node.io.csvreader.CSVReaderNodeFactory" rel="nofollow">link</a>.</li>
</ol>
<ul>
<li>Configure the settings like this dialog <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/CSVReader-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Execute the node and get the Data table. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/CSVReader-result-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ul>
<ol start="3">
<li>Convert the Data table into event log with the node <strong>Table2XLog Converter</strong>.</li>
</ol>
<ul>
<li>In the Option Tab, we set the necessary attributes to generate an event log. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/CSV2LogConverter-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>In Choose attribute set Tab, we choose optional attributes for the event log. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/CSV2LogConverter-configuration-02.PNG" alt="image" className="img-fluid img-shadow"/></li>
<li>Execute the node and we get the event log.</li>
</ul>
<ol start="4">
<li>Import the Petri net which is generated from the last step.</li>
<li>Replay the event log on Petri net
<ul>
<li>Connect the <strong>Alignment-Based Replayer(Default)</strong> with the event log and Petri net output.</li>
<li>Configure the node with the settings <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ReplayerDefault-configuration.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Execute the nodes and check the result in alignment <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Alignment-result-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
</li>
<li>Check the fitness and precision on the Petri net and event.
<ul>
<li>Connect the alignment result with <strong>Fitness Checker</strong>. Here no parameter is required. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Fitness-result.PNG" alt="image" className="img-fluid img-shadow" /> One view is provided to show the projection on Petri net. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Fitness-result-view.PNG" alt="image" className="img-fluid img-shadow"/></li>
<li>Connect the alignment result with <strong>Precision Checker</strong>, given the setting <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Precision-configuration.PNG" alt="image" className="img-fluid img-shadow" /> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Precision-result.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ul>
</li>
</ol>
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
  