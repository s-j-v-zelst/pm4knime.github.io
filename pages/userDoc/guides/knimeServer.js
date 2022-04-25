import Header from "../../../src/userDoc/UserDocHeader"
import Footer from "../../../src/Footer"




export default function KnimeServerDocumentation() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <h1>KNIME Server Usage</h1>
<p>This separate section talks about the usage of KNIME Server. The section is structured by questions.</p>
<h2>&nbsp;</h2>
<h2>What is KNIME Server?</h2>
<p><a href="https://www.knime.com/knime-server" rel="nofollow">KNIME Server</a> is another KNIME running on remote machine. In our case, it is our workstation. Different from local KNIME, it provides more features.</p>
<ul>
<li>Automation of workflow execution. The execution of workflow can be scheduled with a certain execution time and number. At certain time, the execution will be triggered. It is good for routine tasks.</li>
<li>Collaboration.</li>
<li>Usually more powerful computation.</li>
</ul>
<h2>&nbsp;</h2>
<h2>How to upload local KNIME workflow into KNIME Server?</h2>
<p>There are two ways to use KNIME Server, one is by connecting KNIME Server within local KNIME, the other is by KNIME WebPortal. Both need the account information from user. Different account can be set with different authorities.</p>
<h3>&nbsp;</h3>
<h3>Connecting with local KNIME</h3>
<ul>
<li>click the icon in KNIME workflow explorer above.<br /> image is in need</li>
<li>log in with the given account in KNIME. After successful connection, the content in KNIME Server will be shown on the top of the Explorer. It has the similar structure like local KNIME and the editing way is the same. <strong>Remember KNIME Server runs a KNIME in the background.</strong></li>
</ul>
<h3>&nbsp;</h3>
<h3>Upload workflow</h3>
<p>To upload local workflow, we can drag the local workflow directly into KNIME Server.Or, by copying and pasting workflow, we can upload local workflow into the KNIME Server.</p>
<h3>&nbsp;</h3>
<h3>Configure workflow</h3>
<p>The difference in KNIME Server is that you can click the workflow and set the execution. Execution times and numbers can be set. Even, KNIME Server could report the state of each execution. We can choose if resetting the workflow before it executes.</p>
<h3>&nbsp;</h3>
<h3>Put data into KNIME Server</h3>
<p>Like putting data into KNIME, we can add our data folder in KNIME Server by</p>
<ol>
<li>create data folder under the category</li>
<li>drag data into this folder</li>
<li>use this data in workflow by adding relative path.</li>
</ol>
<h2>&nbsp;</h2>
<h2>How to run workflow in KNIME Server</h2>
<p>Like in local KNIME, we can right-click the workflow. After each running, it will generate a snapshot of the execution and store the snapshot in KNIME Server.</p>
<h2>&nbsp;</h2>
<h2>Knowledge</h2>
<h6>&nbsp;</h6>
<h6>Relative Path</h6>
<p>In KNIME, there are several predefined relative path. <code>knime://knime.workflow</code> : the current wirkflow location <code>knime://knime.mountpoint</code> : the local and Server mount point.</p>
<h6>&nbsp;</h6>
<h6>Account Permission</h6>
<p>Like Linux, KNIME Server orders users into groups and give the users permission in three levels. Read + Write + Execution.</p>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  