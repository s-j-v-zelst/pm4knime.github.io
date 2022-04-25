import Header from "../../../../src/userDoc/UserDocHeader"
import Footer from "../../../../src/Footer"




export default function KnimeServerDocumentation() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <p>This section demonstrates the usage of PM4KNIME by giving concrete examples. The data set for those examples is located in github under the <a href="https://github.com/pm4knime/pm4knime-document/tree/master/dataset">link</a>.</p>
<p>Based on the dataset, multiple workflows are built to show the usage in the different parts:</p>
<h2>&nbsp;</h2>
<h2>Basic Usage</h2>
<p>This part helps get familiar with PM4KNIME nodes in simple sequent workflow.</p>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/processDiscovery">Process Discovery </a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/conformance">Conformance Checking </a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/logManipulation">Log Manipulation</a></h5>
<h2>&nbsp;</h2>
<h2>Advanced Usage</h2>
<p>This part incldues the repeative workflow execution in KNIME. How to Loop and FlowVaribale is the practice focus.</p>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/repetiveExecution">Repetitive Execution of Workflow</a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/parameterOptimization">Parameter Optimization </a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/organizationOnWorkflow">Organization on Workflow </a></h5>
<h2>&nbsp;</h2>
<h2>Integration with KNIME</h2>
<p>This part explores the potential use of other functions from KNIME, in order to achieve more computation power of PM4KNIME.</p>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/knimeNodes">Connect to KNIME Nodes</a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/workWithJava">Work with Java Programming</a></h5>
<h5>&nbsp;</h5>
<h5><a href="/userDoc/guides/demos/workWithPython">Work with Python Programming</a></h5>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  