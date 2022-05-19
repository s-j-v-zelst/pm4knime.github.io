import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function Conformance() {
  return (
    <>
      <Header></Header>
      <div className="section">
        <div className="container">
          <div className="row-userDoc">
            <h1>Conformance Checking</h1>
            <Image
              style={{ marginBottom: 0 }}
              src={
                basePath +
                "/assets/images/conformanceChecking/conformance-check.png"
              }
              width="400px"
              height="150px"
              alt="demo-simple-conformance-check"
              className="img-fluid img-shadow"
            ></Image>
            <p>
              In this part, the demand to do conformance checking is shown at
              first. Conformance checking needs a process model and an event log
              as inputs. In this we will provide a process model and event log
              to do a fitness and precision evaluation.
            </p>
            <h1>Preparations</h1>
            <div className="new-wrapper">
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/conformance-check-wf.png"
                }
                width="1280px"
                height="720px"
                alt="demo-simple-conformance-check-wf"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                {" "}
                To create a workflow, which evaluates a process model, we first
                download the dataset Download the{" "}
                <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                  dataset
                </a>
                . Extract the xes file <code>running-example.xes</code> from the
                downloaded dataset.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/processDiscovery/XESReaderDialog.jpg"
                }
                width="1280px"
                height="720px"
                alt="demo-simple-conformance-check"
                className="img-fluid img-shadow"
              ></Image>
              <p> Than we read the xes file with the help of the XES Reader</p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/processDiscovery/InspectEventLog.jpg"
                }
                width="1280px"
                height="720px"
                alt="demo-simple-conformance-check"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                The log should consist of the activities "decide", "check
                ticket" etc.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/reading PNML file.png"
                }
                width="1280px"
                height="720px"
                alt="demo-simple-conformance-check"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                {" "}
                Than we read to Petri Net from the giving dataset with the help
                of the PNML Reader.
              </p>
            </div>
            After the preparations we come to the actual conformance checking
            part. For that we first generate our alignments and feed them to our
            precision and fitness nodes respectfully. We first start with the
            fitness view.
            <h1>Fitness</h1>
            <div className="new-wrapper">
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/alignmentbaseReplayer.png"
                }
                width="1280px"
                height="720px"
                alt="alignmentbaseReplayer"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                With the help of the Alignment-Based Replayer node we can create
                our alignments. For that example we take as "Classifier Name"
                "#Event Attribute #concept:name" and select replay strategy "ILP
                Replayer", with the default values. For further inside the
                replay results can be checked inside of the node.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/fitnessCheckerInformation.jpg"
                }
                width="1280px"
                height="720px"
                alt="alignmentbaseReplayer"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                {" "}
                After executing the "Fitness Checker" we should get statistics
                about the fitness
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/fitnessCheckerModelView.jpg"
                }
                width="1280px"
                height="720px"
                alt="alignmentbaseReplayer"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                {" "}
                With the "Projection View" on the node it is also possible to
                see the fitness on the model.
              </p>
            </div>
            <h1>Precision</h1>
            <div
              className="
          new-wrapper"
            >
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/precisionCheckerDialog.jpg"
                }
                width="1280px"
                height="720px"
                alt="alignmentbaseReplayer"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                {" "}
                The "Precision Checker" node should be run with the ETC
                Precision option for this example.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/conformanceChecking/precisionCheckerInformation.jpg"
                }
                width="1280px"
                height="720px"
                alt="alignmentbaseReplayer"
                className="img-fluid img-shadow"
              ></Image>{" "}
              <p>
                In the view we can than observe the precision of our process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
