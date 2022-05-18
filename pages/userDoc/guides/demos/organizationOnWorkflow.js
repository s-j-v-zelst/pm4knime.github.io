import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function OrganizationOnWorkflow() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1> Workflow Organization</h1>
          <p>
            This part demonstrates the methods in KNIME to clean up workflow and
            provide better organization on workflow. One example workflow is to
            filter out the traces, which are started before a arbitrary date.
            Next, the kept traces after this time are used to discover a Petri
            Net. To have more visibility in the workflow, the filtering
            operation is wrapped as node <strong>Preparation</strong>.
          </p>
          <Image
            style={{ marginBottom: 0 }}
            src={
              basePath +
              "/assets/images/organizationOnWorkflow/demo-advanced-wrap-02.png"
            }
            width="500px"
            height="281px"
            alt="demo-simple-discover.png"
            className="img-fluid img-shadow"
          ></Image>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/demo-advanced-wrap-wf-02.png"
              }
              width="500px"
              height="281px"
              alt="demo-advanced-wrap-wf-02.png"
              className="img-fluid img-shadow"
            />
            <p>
              {" "}
              The workflow before the wrapping is shown in the figure. There are
              two ways to wrap the nodes, one way is to create MetaNode, another
              way is to create Component.
              <a
                href="https://docs.knime.com/2019-06/analytics_platform_metanode_guide/index.html"
                rel="nofollow"
              >
                link
              </a>
              . Below, both methods are shown. The MetaNode is shown as first.{" "}
            </p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/Component-open-02.png"
              }
              width="500px"
              height="281px"
              alt="Component-open-02.png"
              className="img-fluid img-shadow"
            />
            This is the same worklflow as component. {""}
          </div>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/MetaNode-design-01.png"
              }
              width="500px"
              height="281px"
              alt="MetaNode-design-01.png"
              className="img-fluid img-shadow"
            />
            This is the same worklflow as a MetaNode. {""}
          </div>

          <p>The following steps show how to wrap the workflow.</p>
          <ul>
            <li>Create the workflow with all nodes expanded.</li>

            <li>
              <p>
                Download the dataset <code>chapter_1 </code>
                from the{" "}
                <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                  github link
                </a>{" "}
                and extract it to get the event log{" "}
                <code>running-example.csv</code>.
              </p>
            </li>
            <li>
              <p>
                Import <code>running-example.csv</code> with node{" "}
                <strong>CSV Reader</strong>.
              </p>
            </li>
          </ul>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/StringInput-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="StringInput-configuration-01.png"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                <p>
                  Define a Flow Variable <code>startDateVar</code> in String
                  with node <strong>String Input</strong>. This Flow Variable{" "}
                  <code>startDateVar</code> defines the filtering criteria.
                  After this date, all the events are filtered out.
                  <br />{" "}
                </p>
              </li>
              <li>
                <p>
                  Filter the events rows out if its timestamp is before the
                  defined <code>startDateVar</code>.
                </p>
              </li>
              <li>
                <p>
                  Drag node <strong>Rule-based Row Splitter</strong> into KNIME.
                  This node outputs two Data Tables, one contains rows matching
                  the rule, the other rows are contained in the second Data
                  Table. More information can also be found in the{" "}
                  <a
                    href="https://www.knime.com/knime-introductory-course/chapter3/section4/data-manipulation-numbers-strings-rules"
                    rel="nofollow"
                  >
                    video
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/RuleSplitter-configruation-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleSplitter-configuration-01.png"
              className="img-fluid img-shadow"
            />

            <ul>
              <li>
                <p>
                  Connect the node <strong>Rule-based Row Splitter</strong> with
                  the output port of <strong>String Input</strong> and of{" "}
                  <strong>CSV Reader</strong>.
                </p>
              </li>
              <li>
                <p>
                  Configure <strong>Rule-based Row Splitter</strong> with the
                  following condition.
                </p>
              </li>
              <li>
                <blockquote>
                  <p>
                    $#Event Attribute#time:timestamp$ &gt;= $$
                    {"{SstartDateVar}"}$$ =&gt; TRUE
                  </p>
                </blockquote>
              </li>
            </ul>
          </div>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/RuleSplitter-result-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleSplitter-result-01.png"
              className="img-fluid img-shadow"
            />
            <p>After the execution, two tables are shown as output. </p>
          </div>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/GroupBy-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleSplitter-configruation-02.png"
              className="img-fluid img-shadow"
            />

            <p>
              Extract the caseIDs from the second Data Table which start before
              the <code>startDateVar</code> by the <strong>GrouBy</strong> node.{" "}
            </p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/GroupBy-result-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleSplitter-configruation-02.png"
              className="img-fluid img-shadow"
            />
            <p>
              Filter out the rows with the caseIDs from the result of{" "}
              <strong>GroupBy</strong> operation.
            </p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/ReferenceRowFilter-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="ReferenceRowFilter-configuration"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                Import the node <strong>Reference Row Filter</strong>. The
                configuration is seen on the left{" "}
              </li>
              <li>
                Execute <strong>Reference Row Filter</strong> and get the result{" "}
              </li>
            </ul>
          </div>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/ReferenceRowFilter-result-01.png"
              }
              width="500px"
              height="281px"
              alt="ReferenceRowFilter-result-01"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>Convert CSV into an event log</li>
              <li>
                Discover a Petri net with node <strong>Inductive Miner</strong>.
                The settings are
              </li>
              <li>
                {" "}
                <blockquote>
                  <p>
                    Strategy: Inductive Miner -Infrequent Noise Threshold: 0.2
                  </p>
                </blockquote>
              </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/MetaNode-design-mata.png"
              }
              width="500px"
              height="281px"
              alt="MetaNode-design-mata.png"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                Replay the event log on the Petri net with node{" "}
                <strong>Alignment-Based Replayer(Default)</strong>.
              </li>
              <li>
                Check the fitness with node <strong>Fitness Checker</strong>.
              </li>
              <li>
                Wrap the nodes from <strong>CSV Reader</strong> to{" "}
                <strong>Inductive Miner</strong> as the node{" "}
                <code>Preparation</code>.
              </li>
              <li>
                Select the related nodes, right click and choose{" "}
                <code>Create Metanode</code>{" "}
              </li>
            </ul>
          </div>

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/MetaNode-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="MetaNode-configuration-01"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                After this, it generates the result like this, Its configuration
                contains no option.{" "}
              </li>
              <li>
                However, in the <strong>MetaNode</strong>, the{" "}
                <code>startDataVar</code> can't be modified to allow flexible
                settings. To allow the <code>MetaNode</code> configurable, we
                use another method <strong>Component</strong>.
              </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/Component-design-component.png"
              }
              width="500px"
              height="281px"
              alt="Component-design-component"
              className="img-fluid img-shadow"
            />
            <p>
              Select the related nodes, right click and choose{" "}
              <code>Create Component</code>{" "}
            </p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/organizationOnWorkflow/Component-configuration-withStr.png"
              }
              width="500px"
              height="281px"
              alt="Component-configuration-withStr"
              className="img-fluid img-shadow"
            />
            <p>
              After this, it generates the result like this, Its configuration
              contains option like defined in node <strong>String Input</strong>
              .{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
