import Header from "../../src/userDoc/UserDocHeader";
import Footer from "../../src/Footer";
import Link from "next/link";

export default function UserDocStartingPage() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div>
            <div className="row-userDoc">
              <p>
                Welcome to the PM4KNIME user documentation! This user
                documentation provides infomation regarding PM4KNIME installation and applicaton.
              </p>
              <h1>
                {" "}
                <Link href={"/userDoc/"}>
                  <a></a>
                </Link>
              </h1>
              <h1>Project Description</h1>
              <p>
                In the last decades, process mining, a technology bridging data mining and business process management, has gained more and more attention from both academia and industry. 
                Multiple tools are developed to support process mining techniques. 
                However, none of these existing tools provide the means to design, save, and manipulated structured process mining analyses.
              </p>
              <p>
                <a href="https://www.knime.com/" rel="nofollow">
                  KNIME
                </a>{" "}
                is designed to compose and execute a series of data transformation steps as a workflow. 
                Combining this with process mining algorithms enables the support of large-scale experiments in process mining. 
                As such, PM4KNIME provides the following key features:
              </p>
              <ul>
                <li>
                  <i>Design of large-scale and repetitive analyses</i>. Process mining
                  algorithms embedded in KNIMEl workflow can be executed
                  with just one click.
                </li>
                <li>
                  <i>Reuse and Sharing of process mining analysis</i>. With predefined
                  configurations and input, the workflows reproduce the same
                  results. Moreover, KNIME eases sharing of process mining
                  analyses by sharing the workflows.
                </li>
                <li>
                  <i>Directly applying process mining in KNIME</i> With
                  PM4KNIME, KNIME users avoid the need to transfer event data to different
                  platforms.
                </li>
              </ul>              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
