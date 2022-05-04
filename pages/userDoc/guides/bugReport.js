import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function BugReport() {
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
          <div>
            <h1>Bug Report in PM4KNIME</h1>
            <p>
              This section provides the Email template to report bugs on
              PM4KNIME, aiming to benefit the easy communication and clear
              problem report. Before you report bugs, please make sure your
              current version the newest. To use the newest version, update or
              install it with the{" "}
              <Link href="/userDoc/guides/installation">
                <a>instruction</a>
              </Link>
              .
            </p>
            <h2>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is"></a>
            </h2>
            <h2>PM4KNIME bug report in Email</h2>
            <p>Email address: pm4knime@pads.rwth-aachen.de&nbsp;</p>
            <p>
              node ##XXX Node## with exception <code>Exception X</code>
            </p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is"></a>
            </h4>
            <h4>The Exception Screenshot is:</h4>
            <p>.....</p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-example-workflow-is"></a>
            </h4>
            <h4>The Example workflow is:</h4>
            <p>......</p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#more-information-in-my-knime-log"></a>
            </h4>
            <h4>More information in my KNIME Log:</h4>
            <p>.....</p>
            <p>
              Given one concrete example, the bug report on the node{" "}
              <strong>Alignment Based Replayer(Default)</strong> with exception{" "}
              <code>NullPointerException</code>.
            </p>
            <h3>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#pm4knime-bug-report"></a>
            </h3>
            <h3>PM4KNIME bug report</h3>
            <p>
              node <strong>Alignment Based Replayer(Default)</strong> with
              exception <code>NullPointerException</code>
            </p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is-1"></a>
            </h4>
            <h4>The Exception Screenshot is:</h4>
            <div className={"image-container"}>
              <p>
                <Image
                  src={
                    baseUrl +
                    "/assets/images/BugReport/BugReport-screenshot-01.png"
                  }
                  layout="fill"
                  alt="Exception screenshot"
                ></Image>
              </p>
            </div>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-example-workflow-is-1"></a>
            </h4>
            <h4>The Example workflow is:</h4>
            <div className={"image-container"}>
              <p>
                To do it, we need to export the workflow through the operation:
                Click Workflow ==&gt; Export KNIME Worflow ==&gt; Choose path
                ==&gt; Upload as an attachment.{" "}
                <Image
                  src={baseUrl + "/assets/images/BugReport/KNIME-export-wf.png"}
                  layout="fill"
                  alt="Workflow Example"
                ></Image>
              </p>
            </div>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#more-information-in-my-knime-log-1"></a>
            </h4>
            <h4>More information in my KNIME Log:</h4>
            <div className={"image-container"}>
              <p>
                To find the knime.log which records the exception information
                during running KNIME, we can find the location from{" "}
                <strong>KNIME Console</strong> shown below.{" "}
                <Image
                  src={
                    baseUrl +
                    "/assets/images/BugReport/BugReport-defaultReplayer.png"
                  }
                  layout="fill"
                  alt="Default Replayer Bug"
                ></Image>
                &nbsp;After finding the knime.log, add it as one attachment to
                Email.
              </p>
            </div>
            <h2>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#pm4knime-bug-report-in-github"></a>
            </h2>
            <h2>PM4KNIME bug report in Github</h2>
            <p>
              Following the guide in github{" "}
              <a href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue">
                how to create issue
              </a>
              , the steps to report bugs on pm4knime can be done with opening
              issue on the pm4knime/pm4knime-development. Concrete steps are:
            </p>
            <ol>
              <li>
                <p>Go to issue page of pm4knime/pm4knime-development</p>
              </li>
              <li>
                <p>Create a new issue with clicking on &quot;New issue&quot;</p>
              </li>
              <li>
                <p>Report the bug with the same template like in Email.</p>
              </li>
            </ol>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is-2"></a>
            </h4>
            <h4>The Exception Screenshot is:</h4>
            <p>
              Drag the saved screenshot into the issue dialog. It will upload
              automatically.
            </p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-example-workflow-is-2"></a>
            </h4>
            <h4>The Example workflow is:</h4>
            <p>
              It can <strong>not</strong> be uploaded currently!!
            </p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#more-information-in-my-knime-log-2"></a>
            </h4>
            <h4>More information in my KNIME Log:</h4>
            <p>
              Drag the saved log into the issue dialog. It will upload
              automatically.
            </p>
            <p>Any report is welcome and will be take seriously.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
