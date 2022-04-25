import Header from "../../../src/userDoc/UserDocHeader"
import Footer from "../../../src/Footer"




export default function UserDocStartingPage() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <h1>PM4KNIME Guideline for Normal User</h1>
<p>This PM4KNIME guideline is created for users who want to apply process mining techniques and accomplish their tasks in KNIME. Before using PM4KNIME, users are supposed to have basic knowledge with the process mining and operation in KNIME. The following websites are recommended, e.g. with <a href="https://www.knime.com/" rel="nofollow">KNIME</a> to get familiar with analytical workflow environment and its operation, with <a href="http://www.processmining.org/" rel="nofollow">Process Mining</a> to understand process mining applicability.</p>
<p>PM4KNIME is developed by Process And Data Science (<a href="https://www.pads.rwth-aachen.de/cms/~pnbx/PADS/" rel="nofollow">PADS</a>) group at the university RWTH Aachen. As a community extension for KNIME, PM4KNIME integrates the process mining tools from <a href="http://www.promtools.org/doku.php" rel="nofollow">ProM</a> into KNIME platform. Classical plugins from ProM are wrapped as operational nodes in KNIME, which enables the applicability of process mining techniques in the analytical workflow environment.</p>
<p>The remainder of this page is organized as follows. Firstly, the category of nodes is listed. Next, a guide is given to install KNIME and the community extension PM4KNIME. After this, sample workflows are presented to show the use of PM4KNIMEwith KNIME. Further, there is also one part documents about the use of KNIME Server.</p>
<h3>&nbsp;</h3>
<h3><strong><a href="https://github.com/pm4knime/pm4knime-document/wiki/Project-Introduction">Project Introduction</a></strong></h3>
<p>The current PM4KNIME extension implements the nodes for frequent-used process mining techniques. The category is listed below. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/pm4knime-category.jpg" alt="PM4KNIME category" className="img-fluid img-shadow" /></p>
<ul>
<li>io</li>
</ul>
<p>Under the io category, there are readers to import event log files in .xes format, Petri nets in .pnml, process tree in .ptml format. Correspondingly, there are writers to export those files into the disk.</p>
<ul>
<li>discovery</li>
</ul>
<p>Process discovery techniques derive visual models from event logs of information systems, aiming at a better understanding of real business processes. It includes classical process mining discovery algorithms.</p>
<ul>
<li>conformance checking</li>
</ul>
<p>Conformance checking analyzes the deviations between a reference process model and observed behaviors driven from its execution. Firstly, alignment-based replay is carried with inputs of an event log and Petri net. The replayed result is given in alignment. Based on the alignment, it evaluates the model in fitness, precision, and performance.</p>
<ul>
<li>log manipulation</li>
</ul>
<p>The input and output are of the same type in the event log. Filtering log, sampling log, merge log and adding noises into log are common manipulation on log.</p>
<ul>
<li>conversion</li>
</ul>
<p>It implements the conversion between DataTable in KNIME and XLog for event log.</p>
<ul>
<li>visualization</li>
</ul>
<p>It supports the visualization to explore features of data. Currently, only log visualization is implemented to provide trace-variant view and dotted view.</p>
<h3>&nbsp;</h3>
<h3><strong><a href="https://github.com/pm4knime/pm4knime-document/wiki/Installation-Instructions">Installation Instructions</a></strong></h3>
<p>There are two ways to install PM4KNIME extension.</p>
<ul>
<li>install via KNIME community extension mechanism</li>
<li>install via PADS group website.</li>
</ul>
<p>More details can be found in <strong><a href="https://github.com/pm4knime/pm4knime-document/wiki/Installation-Instructions">Installation Instructions</a></strong><br /> Of course, you can check the source code in <a href="https://github.com/pm4knime/pm4knime-development">github</a> and build your own version.</p>
<h3>&nbsp;</h3>
<h3><strong><a href="https://github.com/pm4knime/pm4knime-document/wiki/Usage-Intruction-with-Demos">Usage Instructions with Demos</a></strong></h3>
<p>We will provide several examples to demonstrate the PM4KNIME usage. The list can be found here.</p>
<ul>
<li><a href="https://github.com/pm4knime/pm4knime-document/wiki/Demo-Process-Discovery">Demo Process Discovery</a>
<ul>
<li><a href="/userDoc/guides/demos/conformance">Demo Conformance Checking</a></li>
<li><a href="/userDoc/guides/demos/logManipulation">Demo Log Manipulation</a></li>
<li><a href="/userDoc/guides/demos/repetiveExecution">Demo Repetitive Execution of Workflow</a></li>
<li><a href="/userDoc/guides/demos/parameterOptimization">Demo Parameter Optimization</a></li>
<li><a href="/userDoc/guides/demos/organizationOnWorkflow">Demo Organization on-Workflow</a></li>
<li><a href="https://github.com/pm4knime/pm4knime-document/wiki/Demo-Work-with-KNIME-Nodes">Demo Work with KNIME Nodes</a></li>
<li><a href="/userDoc/guides/demos/workWithJava">Demo Work with Java Programming</a></li>
<li><a href="/userDoc/guides/demos/workWithPython">Demo Work with Python Programming</a></li>
</ul>
</li>
</ul>
<h3>&nbsp;</h3>
<h3><strong><a href="https://github.com/pm4knime/pm4knime-document/wiki/KNIME-Server-Usage">KNIME Server Usage</a></strong></h3>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  