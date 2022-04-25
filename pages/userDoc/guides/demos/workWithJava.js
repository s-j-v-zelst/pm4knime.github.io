import Header from "../../../../src/userDoc/UserDocHeader"
import Footer from "../../../../src/Footer"




export default function WorkWithJava() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<div class="Layout-main" data-view-component="true">
<div id="wiki-body" class="gollum-markdown-content">
<div class="markdown-body">
<p>KNIME allows the scripting of multiple programming, which provides more functionality in flexible ways. In this section, Java Programming in KNIME is explored with the goal, to add category into the Data Table.</p>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-java-programming.PNG" alt="" width="450px" height="200px" className="img-fluid img-shadow"/></p>
<p>One concrete workflow is created based on the following steps. <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/demo-advanced-java-programming-wf.PNG" alt="image" className="img-fluid img-shadow" /></p>
<ol>
<li>Download the dataset <code>chapter_1</code> from the github <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">link</a> and extract to get the CSV file <code>running-example.csv</code>.</li>
<li>Import CSV into KNIME with node <strong>CSV Reader</strong>.</li>
<li>Use node <strong>Java Snippet</strong> to add a category to the Data table.</li>
</ol>
<ul>
<li>Search and drag the node <strong>Java Snippet</strong> to KNIME. The node enables the java programming in KNIME through the provided data access panel. Do remember the operation iterates on each row. More description is shown on the right panel when clicking on the node. Besides the description, one tutorial in video can be accessed with the <a href="https://www.youtube.com/watch?v=alI7eCtxWOI" rel="nofollow">link</a>.</li>
<li>Configure it with the settings. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/JavaSnippet-configuration-01.PNG" alt="image" /></li>
<li>Execute the node and get the result <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/JavaSnippet-result-01.PNG" alt="image" className="img-fluid img-shadow"/></li>
</ul>
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
</div>
</div>
</div>
</div>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  