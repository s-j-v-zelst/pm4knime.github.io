import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";
import Highlight from "react-highlight";

export default function WorkWithPython() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Working with Python</h1>
            <p>
              Python extension in KNIME enables the python scripting. By
              importing python environment with different packages, it allows
              the python execution in such environments. In a personal view, the
              configuration is the most complex part to import the Python
              scripting. After this, in the Python extension nodes, python
              scripts are like the normal ones. In this demo, we shows two parts
              of the Python usages. One is the basic Python scripting, the other
              focuses on the integration of pm4py into KNIME.
            </p>
            <p>
              First, to configure Python in KNIME by following this steps in the{" "}
              <a
                href="https://docs.knime.com/2018-12/python_installation_guide/index.html"
                rel="nofollow"
              >
                link
              </a>
              . In brief summary, those steps are in need.
            </p>
            <ol>
              <li>
                Download and install Python with miniconda or Annaconda.
                Minicanda is chosen to benefit the integration of pm4py. The
                installation steps are the same as pm4py in this{" "}
                <a
                  href="http://pm4py.pads.rwth-aachen.de/installation/"
                  rel="nofollow"
                >
                  link
                </a>
                .
              </li>
              <li>
                <a
                  href="https://docs.knime.com/2018-12/python_installation_guide/index.html#_installation"
                  rel="nofollow"
                >
                  Install the Python Extension in KNIME
                </a>
              </li>
            </ol>
            <blockquote>
              <p>
                File=&gt; Install KNIME Extension =&gt; Search Python Extension
                =&gt; Install
              </p>
            </blockquote>
            <ol start="3">
              <li>
                <a
                  href="https://docs.knime.com/2018-12/python_installation_guide/index.html#_configure_the_knime_python_integration"
                  rel="nofollow"
                >
                  Set the Python Environment
                </a>
                .
              </li>
            </ol>
            <blockquote>
              <p>
                File=&gt;Perference =&gt; Search Python =&gt; Use the created
                env for pm4py.
              </p>
            </blockquote>
            <h3>
              the normal python scripting in KNIME, similarly like Java Snippet.
            </h3>
            <p>
              <Image
                src={
                  basePath +
                  "/assets/images/workingWithPython/demo-advanced-python-programming.png"
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
                    "/assets/images/workingWithPython/demo-advanced-python-programming-wf.png"
                  }
                  alt=""
                  width="450px"
                  height="200px"
                  className="img-fluid img-shadow"
                />
                <p>A concrete workflow is shown in the next figure. </p>
              </div>
            </p>
            <p>To create this workflow, those steps are in need:</p>
            <ol>
              <li>
                Download the dataset <code>chapter_1</code> from the github{" "}
                <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                  link
                </a>{" "}
                and extract it to get the CSV file{" "}
                <code>running-example.csv</code>.
              </li>
              <li>
                Import CSV into KNIME with node <strong>CSV Reader</strong>.
              </li>
              <li>
                Use node <strong>Python Script</strong> to add a category to the
                Data table.
              </li>
            </ol>
            Configure the node <strong>Python Script</strong> with settings
            <Highlight language="python">
              {`# Copy input to output
costValues = input_table['Costs']
print(costValues.mean())

print( len(costValues))
print("begin")
ctg = list()

for idx in range(0, len(costValues)) :
	# print(costValues[idx])
	if costValues[idx] > 250 :
		ctg.append("high")
	elif costValues[idx] > 100 :
		ctg.append("medium")
	else:  
		ctg.append("low")

print(len(ctg))
input_table['category'] = ctg

output_table = input_table.copy()`}
            </Highlight>
            <Image
              src={
                basePath +
                "/assets/images/workingWithPython/PythonScript-configuration-01.png"
              }
              alt=""
              width="450px"
              height="200px"
              className="img-fluid img-shadow"
            />
            <p>
              After execution, it outputs the result <br></br>
              <Image
                src={
                  basePath +
                  "/assets/images/workingWithPython/PythonScript-result-01.png"
                }
                alt=""
                width="450px"
                height="200px"
                className="img-fluid img-shadow"
              />
            </p>
            <h3>&nbsp;</h3>
            <h3>Python scripting with pm4py</h3>
            <p>
              The task is to use the pm4py for process discovery. <br></br>{" "}
              <Image
                src={
                  basePath +
                  "/assets/images/workingWithPython/demo-advanced-python-programming-02.png"
                }
                alt=""
                width="400px"
                height="150px"
                className="img-fluid img-shadow"
              />
              <br></br> To simplify the workflow, the input and output are
              enclosed in Python Script. In this way, the concrete workflow
              looks like this. <br></br>{" "}
              <Image
                src={
                  basePath +
                  "/assets/images/workingWithPython/demo-advanced-python-programming-02-wf.png"
                }
                alt=""
                width="300px"
                height="160px"
                className="img-fluid img-shadow"
              />
            </p>
            <ol>
              <li>
                Drag node <strong>Python Source</strong> into KNIME
              </li>
              <li>Configure it like the following</li>
            </ol>
            <Highlight className="python">
              {`from pandas import DataFrame
from pm4py.algo.discovery.alpha import factory as alpha_miner
from pm4py.objects.log.importer.xes import factory as xes_importer
from pm4py.visualization.petrinet import factory as vis_factory
# Create empty table
output_table = DataFrame()

log = xes_importer.import_log('E:\\Datasets\\PM4KNIME\\Dataset\\Chapter_1\\running-example.xes')
net, initial_marking, final_marking = alpha_miner.apply(log)
gviz = vis_factory.apply(net, initial_marking, final_marking)
vis_factory.view(gviz)`}
            </Highlight>
            <p>
              <Image
                src={
                  basePath +
                  "/assets/images/workingWithPython/PythonSouce-configuration-01.png"
                }
                alt=""
                width="400px"
                height="150px"
                className="img-fluid img-shadow"
              />
            </p>
            <Image
              src={
                basePath +
                "/assets/images/workingWithPython/PythonSouce-result-01.png"
              }
              alt=""
              width="400px"
              height="150px"
              className="img-fluid img-shadow"
            />
            <ol start="3">
              <li>
                Execute the workflow, output the view of generated process
                model.{" "}
              </li>
            </ol>
            <p>
              Here only the simply ussage case is shown to integrate pm4py into
              KNIME. Anyway, it is an interesting task and needs more
              exploration later.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
