import Header from "../../../../srcuserDocuserDocHeader"
import Footer from "../../../../src/Footer"




export default function RepetitiveExecution() {
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
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<p>In this part, the demand to do experiment with different parameters settings is shown at first. Next, the concrete workflow is provided as one sample to solve a similar problem. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-loop.PNG" alt="" width="600px" height="150px" className="img-fluid img-shadow"/></p>
<p>In [https://www.knime.com/nodeguide/control-structures/loops/example-for-recursive-replacement-of-strings] describes the use of loop to recursively execute the workflow. <em><strong>Recursive Loop Start/End</strong></em> is used to build the structure. For Recursive Loop End, there are at least 2 out ports, port 0 to output the data, other output ports data will be passed again into the loop.</p>
<p><strong>Attention!!!</strong></p>
<p>There are hidden flow variables in Node <em><strong>XX_Loop_Start/End</strong></em>. They are local flow variables and defined by the node. We can connect the other nodes to use the flow variables. Even output them into the data table.</p>
<p>One sample from KNIME is given <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-loop-wf.PNG" alt="" width="800px" height="400px" className="img-fluid img-shadow" /></p>
<p>The goal of this workflow is to discover different process models in Petri net with different noise thresholds under the strategy <code>Inductive Miner -- Infrequent</code>. Steps to create the workflow above are</p>
<ol>
<li>Download the event log <code>repairExample.xes</code> and the parameter settings excel file 'demo-loop-discovery-noise-threshold.xlsx' from the <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_8.zip">dataset</a>. 'demo-loop-discovery-noise-threshold.xlsx' saves the different noise threshold for Inductive Miner.</li>
<li>Import the event log file and the parameter settings file.</li>
</ol>
<ul>
<li>Import the event log with node <strong>Event Log Reader</strong>.</li>
<li>Import the Parameter settings file with node <strong>Excel Reader(XLS)</strong>. The configuration looks in the following way. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/XLSReader-configuration-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
<p>The noise-threshold can be seen through Preview Tab at the bottom, which helps read the parameter settings right.</p>
<ol start="3">
<li>Begin Loop with predefined <code>Loop Structure</code> in KNIME. <code>Loop Structure</code> requires the explicit <strong>XX Loop Start</strong> and <strong>XX Loop End</strong> nodes. The workflow between <strong>XX Loop Start</strong> and <strong>XX Loop End</strong> is the loop body and executed with the specified iterations. There are multiple nodes in KNIME. More information can be found with this <a href="https://www.knime.com/nodeguide/control-structures/loops" rel="nofollow">link</a>.</li>
</ol>
<ul>
<li>In the current case, use the node <strong>Table Row to Variable Loop Start</strong>, which reads from the Data Table and generates the Flow Variable according to the column specification. In every loop, it reads the next row assigns the values to Flow Variables.</li>
<li>Drag <strong>Inductive Miner</strong> into KNIME for the process discovery. As known, the discovery is repeated with different noise threshold settings. Therefore, it should be put into the right side of the loop node <strong>Table Row to Variable Loop Start</strong>.</li>
<li>Configure the node <strong>Inductive Miner</strong>.
<ul>
<li>Set the Inductive Miner strategy to be <code>Inductive Miner -- Infrequent</code></li>
<li>Set the noise threshold by going the Tab FlowVariable and clicking the DropDown Box at NoiseThreshold. Choose the flow variable "noise-threshold". <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-configuration-fv-01.PNG" alt="image" /> After this, the configuration panel looks like this <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-configuration-fv-02.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
</li>
<li>Export the Petri net with the node <strong>Petrinet Writer</strong>. To avoid the overwriting error happening with the same name for exporting Petri net. Different names should be given according to the noise threshold.</li>
<li>Drag <strong>Create File Name</strong> into KNIME to generate the file name for exporting the Petri net.<br /> * Connect with the output port <code>Flow Variable</code> in Node <strong>Table Row to Variable Loop Start</strong> to get the <code>noise threshold</code> value. * Configure the node with the following settings.<br></br> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/FileName-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /><br></br> It generates the one <code>Flow Variable</code> called <code>filePath</code>. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/FileName-result-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
<li>Connect the output port <code>Flow Variable</code> in Node <strong>Create File Name</strong> to assign <code>filePath</code> to the Petri net file path</li>
</ul>
<ol start="4">
<li>End Loop with node <strong>Variable Loop End</strong>. This node requires the input type is <code>Flow Variable</code>. To output the filePath and noise threshold, we connect the output port of <strong>Create File Name</strong> with the input port of <strong>Variable Loop End</strong>.</li>
</ol>
<ul>
<li>Configure the <strong>Variable Loop End</strong> to specify its output data. Flow Variable <code>filePath</code>, <code>noise-threshold</code> and <code>RowID</code> are chosen. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LoopEnd-Variable-configuration-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
<ol start="5">
<li>Execute the loop simply by clicking the last node <strong>Variable Loop End</strong>. Or click the Running button at the top menu. After execution, all the outputs from each loop is summarized at the output port of <strong>Variable Loop End</strong>. The following figure shows one overview. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/LoopEnd-Variable-result-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ol>
</div>
</div>
</div>
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
  