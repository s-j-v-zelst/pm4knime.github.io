import Header from "../../../../src/userDoc/UserDocHeader"
import Footer from "../../../../src/Footer"




export default function OrganizationOnWorkflow() {
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
<p>This part demonstrates the methods in KNIME to clean up workflow and provide better organization on workflow. One example workflow is to filter out the traces which are started before one date at first. Next, the kept traces after this time are used to discover one Petri net. To clean up the workflow, the filtering operation is wrapped as node <strong>Preparation</strong>.</p>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-wrap-02.PNG" alt="" width="500px" height="200px" className="img-fluid img-shadow" /></p>
<p>The workflow before the wrapping is shown in the following figure. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-wrap-wf-02.PNG" alt="image" className="img-fluid img-shadow" /> <br></br> There are two ways to wrap the nodes, one way is to create MetaNode, another way is to create Component. The difference can be found in this <a href="https://docs.knime.com/2019-06/analytics_platform_metanode_guide/index.html" rel="nofollow">link</a>. Below, both methods are shown. The MetaNode is shown as first. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/MetaNode-design-01.PNG" alt="image" className="img-fluid img-shadow" /> <br></br> After opening the MetaNode, it looks like <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/MetaNode-open-01.PNG" alt="image" className="img-fluid img-shadow" /> Organized in Component. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Component-design-01.PNG" alt="image" className="img-fluid img-shadow" /> <br></br>After opening the MetaNode, it looks like <br></br> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Component-open-02.PNG" alt="image" className="img-fluid img-shadow" /></p>
<p>The following steps show how to wrap the workflow.</p>
<ol>
<li>Create the workflow with all nodes expanded.</li>
</ol>
<ul>
<li>
<p>Download the dataset <code>chapter_1 </code>from the <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">github link</a> and extract it to get the event log <code>running-example.csv</code>.</p>
</li>
<li>
<p>Import <code>running-example.csv</code> with node <strong>CSV Reader</strong>.</p>
</li>
<li>
<p>Define a Flow Variable <code>startDateVar</code> in String with node <strong>String Input</strong>. This Flow Variable <code>startDateVar</code> defines the filtering criteria. After this date, all the events are filtered out.<br /> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/StringInput-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></p>
</li>
<li>
<p>Filter the events rows out if its timestamp is before the defined <code>startDateVar</code>.</p>
</li>
<li>
<p>Drag node <strong>Rule-based Row Splitter</strong> into KNIME. This node outputs two Data Tables, one contains rows matching the rule, the other rows are contained in the second Data Table. More information can also be found in the <a href="https://www.knime.com/knime-introductory-course/chapter3/section4/data-manipulation-numbers-strings-rules" rel="nofollow">vidoe</a>.</p>
</li>
<li>
<p>Connect the node <strong>Rule-based Row Splitter</strong> with the output port of <strong>String Input</strong> and of <strong>CSV Reader</strong>.</p>
</li>
<li>
<p>Configure <strong>Rule-based Row Splitter</strong> with the following condition.</p>
</li>
</ul>
<blockquote>
<p>$#Event Attribute#time:timestamp$ &gt;= $${"{SstartDateVar}"}$$ =&gt; TRUE</p>
</blockquote>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RuleSplitter-configruation-01.PNG" alt="image" className="img-fluid img-shadow" /></p>
<ul>
<li>After execution, two tables are output as shown in the following. <img title="First Data Table with matching rows" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RuleSplitter-result-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ul>
<p><img title="Second Data table without matching rows" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RuleSplitter-configruation-02.PNG" alt="image" className="img-fluid img-shadow"/></p>
<ul>
<li>Extract the caseIDs from the second Data Table which start before the <code>startDateVar</code> by node <strong>GrouBy</strong>. <img title="Configuration on GroupBy" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/GroupBy-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /> <img title="Resutl after execution on GroupBy" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/GroupBy-result-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Filter out the rows with the caseIDs from the result of <strong>GroupBy</strong>.</li>
<li>Import the node <strong>Reference Row Filter</strong>. The configuration is like <img title="Reference Row Filter Configuration" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ReferenceRowFilter-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Execute <strong>Reference Row Filter</strong> and get the result <img title="Reference Row Filter Result" src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ReferenceRowFilter-result-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Convert CSV into an event log</li>
<li>Discover a Petri net with node <strong>Inductive Miner</strong>. The settings are</li>
</ul>
<blockquote>
<p>Strategy: Inductive Miner -Infrequent Noise Threshold: 0.2</p>
</blockquote>
<ul>
<li>Replay the event log on the Petri net with node <strong>Alignment-Based Replayer(Default)</strong>.</li>
<li>Check the fitness with node <strong>Fitness Checker</strong>.</li>
</ul>
<ol start="2">
<li>Wrap the nodes from <strong>CSV Reader</strong> to <strong>Inductive Miner</strong> as the node <code>Preparation</code>.</li>
</ol>
<ul>
<li>Select the related nodes, right click and choose <code>Create Metanode</code> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/MetaNode-design-mata.png" alt="image" className="img-fluid img-shadow" /></li>
<li>After this, it generates the result like this, Its configuration contains no option. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/MetaNode-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ul>
<p>However, in the <strong>MetaNode</strong>, the <code>startDataVar</code> can't be modified to allow flexible settings. To allow the <code>MetaNode</code> configurable, we use another method <strong>Component</strong>.</p>
<ul>
<li>Select the related nodes, right click and choose <code>Create Component</code> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Component-design-component.png" alt="image" className="img-fluid img-shadow"/></li>
<li>After this, it generates the result like this, Its configuration contains option like defined in node <strong>String Input</strong>. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Component-configuration-withStr.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
<p>This section is more applicable on complex workflow</p>
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
  