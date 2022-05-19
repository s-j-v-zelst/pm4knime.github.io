import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";

export default function WorkWithPython() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <p>
            Python extension in KNIME enables the python scripting. By importing
            python environment with different packages, it allows the python
            execution in such environments. In a personal view, the
            configuration is the most complex part to import the Python
            scripting. After this, in the Python extension nodes, python scripts
            are like the normal ones. In this demo, we shows two parts of the
            Python usages. One is the basic Python scripting, the other focuses
            on the integration of pm4py into KNIME.
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
              Download and install Python with miniconda or Annaconda. Minicanda
              is chosen to benefit the integration of pm4py. The installation
              steps are the same as pm4py in this{" "}
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
              File=&gt;Perference =&gt; Search Python =&gt; Use the created env
              for pm4py.
            </p>
          </blockquote>
          <h3>&nbsp;</h3>
          <h3>
            the normal python scripting in KNIME, similarly like Java Snippet.
          </h3>
          <p>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-python-programming.PNG"
              alt=""
              width="400px"
              height="150px"
              className="img-fluid img-shadow"
            />{" "}
            <br></br>A concrete workflow is shown in the next figure. <br></br>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-python-programming-wf.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
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
          <ul>
            <li>
              Configure the node <strong>Python Script</strong> with settings
            </li>
          </ul>
          <div class="highlight highlight-source-python position-relative overflow-auto">
            <pre>
              <span class="pl-c"># Copy input to output</span>
              <span class="pl-s1">costValues</span> <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">input_table</span>[
              <span class="pl-s">'Costs'</span>]<span class="pl-en">print</span>
              (<span class="pl-s1">costValues</span>.
              <span class="pl-en">mean</span>())
              <span class="pl-en">print</span>( <span class="pl-en">len</span>(
              <span class="pl-s1">costValues</span>
              ))
              <span class="pl-en">print</span>(<span class="pl-s">"begin"</span>
              )<span class="pl-s1">ctg</span> <span class="pl-c1">=</span>{" "}
              <span class="pl-en">list</span>()
              <span class="pl-k">for</span> <span class="pl-s1">idx</span>{" "}
              <span class="pl-c1">in</span> <span class="pl-en">range</span>(
              <span class="pl-c1">0</span>, <span class="pl-en">len</span>(
              <span class="pl-s1">costValues</span>
              )) :<span class="pl-c"># print(costValues[idx])</span>
              <span class="pl-k">if</span> <span class="pl-s1">costValues</span>
              [<span class="pl-s1">idx</span>] <span class="pl-c1">&gt;</span>{" "}
              <span class="pl-c1">250</span> :<span class="pl-s1">ctg</span>.
              <span class="pl-en">append</span>(<span class="pl-s">"high"</span>
              )<span class="pl-k">elif</span>{" "}
              <span class="pl-s1">costValues</span>[
              <span class="pl-s1">idx</span>] <span class="pl-c1">&gt;</span>{" "}
              <span class="pl-c1">100</span> :<span class="pl-s1">ctg</span>.
              <span class="pl-en">append</span>(
              <span class="pl-s">"medium"</span>)<span class="pl-k">else</span>:
              <span class="pl-s1">ctg</span>.<span class="pl-en">append</span>(
              <span class="pl-s">"low"</span>)<span class="pl-en">print</span>(
              <span class="pl-en">len</span>(<span class="pl-s1">ctg</span>))
              <span class="pl-s1">input_table</span>[
              <span class="pl-s">'category'</span>] <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">ctg</span>
              <span class="pl-s1">output_table</span>{" "}
              <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">input_table</span>.
              <span class="pl-en">copy</span>()
            </pre>
          </div>
          <p>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PythonScript-configuration-01.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <p>
            After execution, it outputs the result <br></br>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PythonScript-result-01.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <h3>&nbsp;</h3>
          <h3>Python scripting with pm4py</h3>
          <p>
            The task is to use the pm4py for process discovery. <br></br>{" "}
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-python-programming-02.PNG"
              alt=""
              width="400px"
              height="150px"
              className="img-fluid img-shadow"
            />
            <br></br> To simplify the workflow, the input and output are
            enclosed in Python Script. In this way, the concrete workflow looks
            like this. <br></br>{" "}
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-python-programming-02-wf.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <ol>
            <li>
              Drag node <strong>Python Source</strong> into KNIME
            </li>
            <li>Configure it like the following</li>
          </ol>
          <div class="highlight highlight-source-python position-relative overflow-auto">
            <pre>
              <span class="pl-k">from</span> <span class="pl-s1">pandas</span>{" "}
              <span class="pl-k">import</span>{" "}
              <span class="pl-v">DataFrame</span>
              <span class="pl-k">from</span> <span class="pl-s1">pm4py</span>.
              <span class="pl-s1">algo</span>.
              <span class="pl-s1">discovery</span>.
              <span class="pl-s1">alpha</span> <span class="pl-k">import</span>{" "}
              <span class="pl-s1">factory</span> <span class="pl-k">as</span>{" "}
              <span class="pl-s1">alpha_miner</span>
              <span class="pl-k">from</span> <span class="pl-s1">pm4py</span>.
              <span class="pl-s1">objects</span>.<span class="pl-s1">log</span>.
              <span class="pl-s1">importer</span>.<span class="pl-s1">xes</span>{" "}
              <span class="pl-k">import</span>{" "}
              <span class="pl-s1">factory</span> <span class="pl-k">as</span>{" "}
              <span class="pl-s1">xes_importer</span>
              <span class="pl-k">from</span> <span class="pl-s1">pm4py</span>.
              <span class="pl-s1">visualization</span>.
              <span class="pl-s1">petrinet</span>{" "}
              <span class="pl-k">import</span>{" "}
              <span class="pl-s1">factory</span> <span class="pl-k">as</span>{" "}
              <span class="pl-s1">vis_factory</span>
              <span class="pl-c"># Create empty table</span>
              <span class="pl-s1">output_table</span>{" "}
              <span class="pl-c1">=</span> <span class="pl-v">DataFrame</span>
              ()
              <span class="pl-s1">log</span> <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">xes_importer</span>.
              <span class="pl-en">import_log</span>(
              <span class="pl-s">
                'E:<span class="pl-cce">\\</span>
                Datasets
                <span class="pl-cce">\\</span>
                PM4KNIME
                <span class="pl-cce">\\</span>
                Dataset
                <span class="pl-cce">\\</span>
                Chapter_1
                <span class="pl-cce">\\</span>
                running-example.xes'
              </span>
              )<span class="pl-s1">net</span>,{" "}
              <span class="pl-s1">initial_marking</span>,{" "}
              <span class="pl-s1">final_marking</span>{" "}
              <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">alpha_miner</span>.
              <span class="pl-en">apply</span>(<span class="pl-s1">log</span>)
              <span class="pl-s1">gviz</span> <span class="pl-c1">=</span>{" "}
              <span class="pl-s1">vis_factory</span>.
              <span class="pl-en">apply</span>(<span class="pl-s1">net</span>,{" "}
              <span class="pl-s1">initial_marking</span>,{" "}
              <span class="pl-s1">final_marking</span>)
              <span class="pl-s1">vis_factory</span>.
              <span class="pl-en">view</span>(<span class="pl-s1">gviz</span>)
            </pre>
          </div>
          <p>
            <img
              src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PythonSouce-configuration-01.PNG"
              alt="image"
              className="img-fluid img-shadow"
            />
          </p>
          <ol start="3">
            <li>
              Execute the workflow, output the view of generated process model.{" "}
              <img
                src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PythonSouce-result-01.PNG"
                alt="image"
                className="img-fluid img-shadow"
              />
            </li>
          </ol>
          <p>
            Here only the simply ussage case is shown to integrate pm4py into
            KNIME. Anyway, it is an interesting task and needs more exploration
            later.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
