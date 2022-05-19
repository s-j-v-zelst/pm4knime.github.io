import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";
export default function knimeNodes() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1>Working with KNIME Nodes</h1>
          <p>
            In this part, the workflow which combines the KNIME and PM4KNIME
            nodes is listed, in order to demonstrate the benefits from the
            combination of KNIME and PM4KNIME. One demand is proposed in the
            next figure. <br></br>{" "}
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/demo-simple-integrate-in-knime.png"
              }
              width="300px"
              height="169px"
              alt="demo-simple-integrate-in-knime"
              className="img-fluid img-shadow"
            />
          </p>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/demo-simple-integrate-in-knime-wf-01.png"
              }
              width="500px"
              height="281px"
              alt="demo-simple-integrate-in-knime-wf-01"
              className="img-fluid img-shadow"
            />
            <p>
              Assuming the goal is to discover the relation of activity and its
              cost relation with the help of the decision tree. One concrete
              example is given in the following figure.
            </p>{" "}
            <br></br>
          </div>
          <p>The steps to build the workflow are listed below.</p>
          <ul>
            <li>
              Download the dataset from the{" "}
              <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                github link
              </a>
              . Extrace the event log <code>running-example.xes</code>.
            </li>
            <li>Import the event log into KNIME</li>
            <li>Convert the event log into Data Table with all attributes.</li>
          </ul>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/ColumnFilter-configruation-01.png"
              }
              width="500px"
              height="281px"
              alt="demo-simple-integrate-in-knime-wf-01"
              className="img-fluid img-shadow"
            />
            <p>
              Filter the Data Table with node <strong>Column Filter</strong> and
              keep the attributes <code>Event Attribute#Costs</code> and{" "}
              <code>Event Attribute#concept:name</code> with the configuration.{" "}
            </p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/ColumnFilter-result-01.png"
              }
              width="500px"
              height="281px"
              alt="ColumnFilter-result-01"
              className="img-fluid img-shadow"
            />
            <br></br>table with only two attributes. <br></br>{" "}
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/RuleEngine-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleEngine-configuration-01"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                Change the type of <code>Event Attribute#Costs</code> into
                integer with node <strong>String To Number</strong>.
              </li>
              <li>
                Use <strong>Rule Engine</strong> to add cost category to the
                Data Table, which enables the usage of{" "}
                <strong>Decision Tree Learner</strong>.
              </li>

              <li>
                Search <strong>Rule Engine</strong> with Node Repository.{" "}
                <strong>Rule Engine</strong> takes the defined rules given from
                the user during configuration. Those rules are then applied to
                each row and the corresponding outputs are added to each row if
                the rules match. Details can be checked on its node description.
                One video on it can be found in this{" "}
                <a
                  href="https://www.knime.com/knime-introductory-course/chapter3/section4/data-manipulation-numbers-strings-rules"
                  rel="nofollow"
                >
                  link
                </a>
                .
              </li>
              <li>
                Connect it with the output of <strong>String TO Number</strong>.
              </li>
              <li>
                Configure the node with settings.{" "}
                <code>If the cost &lt; 200, it is low; else, high.</code>{" "}
              </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath + "/assets/images/knimeNodes/RuleEngine-result-01.png"
              }
              width="500px"
              height="281px"
              alt="RuleEngine-configuration-01"
              className="img-fluid img-shadow"
            />
            <p>After execution, it results in Data table shown below.</p>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/DecisionTree-configuration-01.png"
              }
              width="500px"
              height="281px"
              alt="DecisionTree-configuration-01"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                Discover the relation of costs and activity with node{" "}
                <strong>Decision Tree Learner</strong>
              </li>

              <li>
                Search and drag the node <strong>Decision Tree Learner</strong>{" "}
                into KNIME
              </li>
              <li>Configure the node with the following configuration. </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/DecisionTree-result-simple.png"
              }
              width="500px"
              height="281px"
              alt="DecisionTree-configuration-01"
              className="img-fluid img-shadow"
            />
            <p>
              Execute the nodes, it has two views to show the graphical result.{" "}
            </p>
            <Image
              src={
                basePath +
                "/assets/images/knimeNodes/DecisionTree-result-complex.png"
              }
              width="500px"
              height="281px"
              alt="DecisionTree-configuration-01"
              className="img-fluid img-shadow"
            />

            <p>
              The decision tree shows the activity <code>register request</code>{" "}
              costs low, while <code>reinitiate request</code> costs high. Could
              you find other relations??
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
