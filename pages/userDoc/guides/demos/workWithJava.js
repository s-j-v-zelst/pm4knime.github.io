import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";
export default function WorkWithJava() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <h1>Working with Java</h1>
          <p>
            KNIME allows the scripting of multiple programming, which provides
            more functionality in flexible ways. In this section, Java
            Programming in KNIME is explored with the goal, to add category into
            the Data Table.
          </p>
          <Image
            src={
              basePath +
              "/assets/images/workingWithJava/demo-advanced-java-programming.png"
            }
            alt=""
            width="450px"
            height="200px"
            className="img-fluid img-shadow"
          />

          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/workingWithJava/demo-advanced-java-programming-wf.png"
              }
              width="450px"
              height="200px"
              alt="image"
              className="img-fluid img-shadow"
            />
            <p>
              {" "}
              One concrete workflow is created based on the following steps.{" "}
            </p>
          </div>

          <ol>
            <li>
              Download the dataset <code>chapter_1</code> from the github{" "}
              <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                link
              </a>{" "}
              and extract to get the CSV file <code>running-example.csv</code>.
            </li>
            <li>
              Import CSV into KNIME with node <strong>CSV Reader</strong>.
            </li>
            <li>
              Use node <strong>Java Snippet</strong> to add a category to the
              Data table.
            </li>
          </ol>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/workingWithJava/JavaSnippet-configuration-01.png"
              }
              alt="image"
              width="450px"
              height="200px"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>
                Search and drag the node <strong>Java Snippet</strong> to KNIME.
                The node enables the java programming in KNIME through the
                provided data access panel. Do remember the operation iterates
                on each row. More description is shown on the right panel when
                clicking on the node. Besides the description, one tutorial in
                video can be accessed with the{" "}
                <a
                  href="https://www.youtube.com/watch?v=alI7eCtxWOI"
                  rel="nofollow"
                >
                  link
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="new-wrapper">
            <Image
              src={
                basePath +
                "/assets/images/workingWithJava/JavaSnippet-result-01.png"
              }
              alt="image"
              width="450px"
              height="200px"
              className="img-fluid img-shadow"
            />
            <ul>
              <li>Configure it with the settings. </li>
              <li>Execute the node and get the result </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
