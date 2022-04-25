import Header from "../../../../src/userDoc/UserDocHeader"
import Footer from "../../../../src/Footer"




export default function knimeNodes() {
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
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<p>In this part, the workflow which combines the KNIME and PM4KNIME nodes is listed, in order to demonstrate the benefits from the combination of KNIME and PM4KNIME. One demand is proposed in the next figure. <br></br> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-integrate-in-knime.PNG" alt="image" className="img-fluid img-shadow" /></p>
<p>Assuming the goal is to discover the relation of activity and its cost relation with the help of the decision tree. One concrete example is given in the following figure.</p>
<p> <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-simple-integrate-in-knime-wf-01.PNG" alt="image" className="img-fluid img-shadow" /></p>
<p>The steps to build the workflow are listed below.</p>
<ol>
<li>Download the dataset from the <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">github link</a>. Extrace the event log <code>running-example.xes</code>.</li>
<li>Import the event log into KNIME</li>
<li>Convert the event log into Data Table with all attributes.</li>
<li>Filter the Data Table with node <strong>Column Filter</strong> and keep the attributes <code>Event Attribute#Costs</code> and <code>Event Attribute#concept:name</code> with the configuration. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ColumnFilter-configruation-01.PNG" alt="image" className="img-fluid img-shadow"/> <br></br>table with only two attributes. <br></br> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ColumnFilter-result-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
<li>Change the type of <code>Event Attribute#Costs</code> into integer with node <strong>String To Number</strong>.</li>
<li>Use <strong>Rule Engine</strong> to add cost category to the Data Table, which enables the usage of <strong>Decision Tree Learner</strong>.</li>
</ol>
<ul>
<li>Search <strong>Rule Engine</strong> with Node Repository. <strong>Rule Engine</strong> takes the defined rules given from the user during configuration. Those rules are then applied to each row and the corresponding outputs are added to each row if the rules match. Details can be checked on its node description. One video on it can be found in this <a href="https://www.knime.com/knime-introductory-course/chapter3/section4/data-manipulation-numbers-strings-rules" rel="nofollow">link</a>.</li>
<li>Connect it with the output of <strong>String TO Number</strong>.</li>
<li>Configure the node with settings. <code>If the cost &lt; 200, it is low; else, high.</code> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RuleEngine-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>After execution, it results in Data table shown below. <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RuleEngine-result-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
</ul>
<ol start="7">
<li>Discover the relation of costs and activity with node <strong>Decision Tree Learner</strong></li>
</ol>
<ul>
<li>Search and drag the node <strong>Decision Tree Learner</strong> into KNIME</li>
<li>Configure the node with the following configuration. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/DecisionTree-configuration-01.PNG" alt="image" className="img-fluid img-shadow" /></li>
<li>Execute the nodes, it has two views to show the graphical result. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/DecisionTree-result-simple.PNG" alt="image" className="img-fluid img-shadow"/> <br></br>The complex model <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/DecisionTree-result-complex.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
<p>The decision tree shows the activity <code>register request</code> costs low, while <code>reinitiate request</code> costs high. Could you find other relations??</p>
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
</div>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  