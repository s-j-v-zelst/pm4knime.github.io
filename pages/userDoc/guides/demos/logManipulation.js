import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function LogManipulation() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Log Manipulation</h1>
            <p>
              In this section, we will demonstrate the use of log manipulation.
              To be more precise, the usage of splitting and filtering the event
              log.
            </p>
            <Image
              style={{ marginBottom: 0 }}
              src={
                basePath +
                "/assets/images/logManipulation/demo-simple-log-manipulation.PNG"
              }
              width="400px"
              height="150px"
              alt="demo-simple-discover.png"
              className="img-fluid img-shadow"
            ></Image>
            <div className="new-wrapper">
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath + "/assets/images/logManipulation/complettLog.jpg"
                }
                width="450px"
                height="250px"
                alt="complettLog.jpg"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                First, download the dataset from github, after that extract the
                event log file "running-examples.xes" from the downloaded
                dataset. Second, import "running-example-non-conforming.xes" and
                "running-example-just-two-cases.xes" with the "XES Reader" node.
                After that, connect the "XES Reader" to the "Filter Log By
                Frequency" node.
              </p>
            </div>

            <div className="new-wrapper">
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/logManipulation/filterLogDialog.jpg"
                }
                width="350px"
                height="150px"
                alt="filterLogDialog.jpg"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                Now we connect the node that reads the
                "running-example-just-two-cases.xes",we configure our "Filter
                Log By Frequency" node.
              </p>
            </div>
            <p>
              The option "Keep trace" means that the chosen traces that match
              the following conditions will be kept. If not selected, the traces
              matching the conditions will be removed.
            </p>

            <p>
              {" "}
              The option "isForSingleTV" indicates (when checked) if we want to
              apply the filter on trace variant or on the whole event log(when
              unchecked).
            </p>

            <p>
              {" "}
              The option "Threshold" defines the threshold to filter. It accepts
              both percentage and absolute value. With value 0-1.0, it means the
              percentage in the whole event log size. When it is equal or
              greater than 1, it represents the absolute integer threshold.After
              configuration, it will be casted down into an integer value.The
              trace with equal or greater size than the threshold will be
              filtered.{" "}
            </p>

            <p>
              For that example we check both boxes and choose the threshold to
              be 0,1.
            </p>

            <div className="new-wrapper">
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/logManipulation/filteredEventLog.jpg"
                }
                width="350px"
                height="150px"
                alt="filteredEventLog.jpg"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                {" "}
                After the execution, the log should be trace variant filtered,
                by a factor of 0,1. The filtered log can be viewed in the log
                view of the node.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath + "/assets/images/logManipulation/complettLog.jpg"
                }
                width="450px"
                height="250px"
                alt="complettLog.jpg"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                In the end, we merge the filtered log with the other "XES
                Reader". Considering our filtered and imported event log, we
                connect the output ports from the filtered and the imported
                event log into the "MergeLog" node.
              </p>
              <Image
                style={{ marginBottom: 0 }}
                src={
                  basePath +
                  "/assets/images/logManipulation/LogMerge-configuration-internal-trace-02.png"
                }
                width="450px"
                height="250px"
                alt="LogMerge-configuration-internal-trace-02"
                className="img-fluid img-shadow"
              ></Image>
              <p>
                Inside of the "MergeLog" node we have several merge strategies.
                <ul>
                  <li>
                    <b>Seperate Trace</b> it combines the traces from the two
                    event logs together. Traces with the same caseID are allowed
                    in the merged event log.
                  </li>
                  <li>
                    <b>IgnoreTrace</b> it ignores the traces from the second
                    event log with the same caseID from the first event log.
                  </li>
                  <li>
                    <b>Internal Trace Merge</b>, for the traces with the same
                    caseID, it combines the events from the two traces together.
                    The trace attributes can be chosen for the new attributes.
                    An Example can be seen on the left.{" "}
                  </li>
                  <li>
                    <b>Internal Event Merge</b>, for the events with the same
                    names in the traces with the same caseID, it creates one new
                    event and with the chosen attributes.
                  </li>
                </ul>
              </p>
            </div>
            <p>
              The generated event log can observed in the view of "MergeLog"
              view.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
