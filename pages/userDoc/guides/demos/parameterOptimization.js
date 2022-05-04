import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";

export default function ParameterOptimization() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div class="Layout-main" data-view-component="true">
            <div id="wiki-body" class="gollum-markdown-content">
              <div class="markdown-body">
                <div class="Layout-main" data-view-component="true">
                  <div id="wiki-body" class="gollum-markdown-content">
                    <div class="markdown-body">
                      <div class="Layout-main" data-view-component="true">
                        <div id="wiki-body" class="gollum-markdown-content">
                          <div class="markdown-body">
                            <p>
                              This part demonstrates the demand to optimize one
                              measurement based on parameters. In the example
                              listed below, fitness is chosen as the object
                              function. The parameters on model discover are the
                              variables affecting the fitness. One concrete
                              workflow is provided as one sample to meet this
                              demand.
                            </p>
                            <p>
                              <img
                                src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-optimization.PNG"
                                alt=""
                                width="600px"
                                height="150px"
                                className="img-fluid img-shadow"
                              />
                            </p>
                            <p>
                              In the concrete example listed below, Inductive
                              Miner Infrequent is the discover algorithm, the
                              deciding factor is the noise threshold. Now, we
                              want to optimize fitness and get the corresponding
                              noise threshold.{" "}
                              <img
                                src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-optimization-wf.PNG"
                                alt="image"
                                className="img-fluid img-shadow"
                              />
                            </p>
                            <p>Steps to achieve this goal is</p>
                            <ol>
                              <li>
                                Download the event log{" "}
                                <code>repairExample.xes</code> and{" "}
                                <code>repairExampleSample2.xes</code> from the
                                dataset <code>Chapter_8</code> with the{" "}
                                <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_8.zip">
                                  link on github
                                </a>
                                . <code>repairExample.xes</code> is used to
                                discover a Petri net while{" "}
                                <code>repairExampleSample2.xes</code> is used to
                                as the input event log for conformance checking.
                              </li>
                              <li>
                                Import the event log{" "}
                                <code>repairExample.xes</code> and{" "}
                                <code>repairExampleSample2.xes</code> into the
                                KNIME.
                              </li>
                              <li>Begin Optimization Loop.</li>
                            </ol>
                            <ul>
                              <li>
                                Use node{" "}
                                <strong>
                                  Parameter Optimization Loop Start
                                </strong>{" "}
                                to begin the loop. Set the parameters in its
                                configuration. Here,{" "}
                                <code>noise-threshold</code> is set from 0 to 1
                                with step size 0.1 and Search strategy{" "}
                                <code>Brute Force</code> is chosen.{" "}
                                <img
                                  src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Optimization-configuration-01.PNG"
                                  alt="image"
                                  className="img-fluid img-shadow"
                                />
                              </li>
                            </ul>
                            <h4>&nbsp;</h4>
                            <h4>
                              Attention! Now only numeric is accepted as a
                              parameter.
                            </h4>
                            <ul>
                              <li>
                                <p>
                                  After execution, it generates the{" "}
                                  <code>noise-threshols</code> as one Flow
                                  Variable.{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Optimization-result-01.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  Use <strong>Inductive Miner</strong> and set
                                  its strategy as{" "}
                                  <code>Inductive Miner -Infrequent</code> and
                                  its noise threshold as Flow Variable{" "}
                                  <code>noise-threshold</code>.{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/InductiveMiner-configuration-fv-02.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  Connect node{" "}
                                  <strong>
                                    Alignment-Based Repalyer(Default)
                                  </strong>{" "}
                                  with the output port of{" "}
                                  <strong>Event Log Reader</strong> for{" "}
                                  <code>repairExampleSample2.xes</code> and the
                                  output port of{" "}
                                  <strong>Inductive Miner</strong>.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Configure the node as its default value.{" "}
                                  <br></br>{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/ReplayerDefault-configuration-02.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  Connect node <strong>Fitness Checker</strong>{" "}
                                  with the alignment result. After execution, it
                                  gives out the fitness information.{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Fitness-result-02.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  Set the object function. As shown in the
                                  fitness result, there are multiple
                                  measurements. Among those values, the one{" "}
                                  <code>Trace Fitness</code> is the object
                                  function. To get only this value, rows are
                                  filtered at first and the chosen one is
                                  converted into a Flow Variable.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Filter row with <strong>Row Filter</strong>.
                                  Only <code>Trace Fitness</code> is included in
                                  the result. Firstly, the column to filter is
                                  chosen. Then the matching criterial is chosen.
                                  The configuration looks like in the figure
                                  below.<br></br>{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RowFilter-configruation-01.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  After filtering, we have only one row as
                                  output. <br></br>{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/RowFilter-result-01.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                              <li>
                                <p>
                                  Change the row to Flow Variable by node{" "}
                                  <strong>Table Row to Variable</strong>. The
                                  reason is that the current{" "}
                                  <strong>
                                    Parameter Optimization Loop End
                                  </strong>{" "}
                                  only accepts the Flow Variable as input
                                  parameter.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Configure the node{" "}
                                  <strong>
                                    Parameter Optimization Loop End
                                  </strong>{" "}
                                  by choosing the object function as{" "}
                                  <code>Value</code> like the following figure.{" "}
                                  <img
                                    src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Optimization-configuration-02.PNG"
                                    alt="image"
                                    className="img-fluid img-shadow"
                                  />
                                </p>
                              </li>
                            </ul>
                            <ol start="4">
                              <li>
                                End the loop and execute the whole process by
                                executing the last node or clicking the run
                                button above. It outputs the result in two
                                tables, one is the <code>Best Parameter</code>{" "}
                                while the other is <code>All parameter</code>{" "}
                                with all information of parameters and their
                                result.{" "}
                                <img
                                  title="All parameter result"
                                  src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Optimization-result-02.PNG"
                                  alt="image"
                                  className="img-fluid img-shadow"
                                />{" "}
                                <img
                                  title="Best parameter result"
                                  src="https://github.com/pm4knime/pm4knime-document/raw/master/images/Optimization-result-03.PNG"
                                  alt="image"
                                  className="img-fluid img-shadow"
                                />
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
