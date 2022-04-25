import Header from "../../../src/userDoc/UserDocHeader"
import Footer from "../../../src/Footer"




export default function Installation() {
    return (
        <>
        <Header></Header>
        <div className="container"> 

        <div className ="section">
        <h1>Installation Instructions</h1>
<p>KNIME is installed at first to enable PM4KNIME usage. After installing KNIME, the PM4KNIME as one KNIME extension is installed separately by giving a link. KNIME Server supports workflow sharing and cooperation in KNIME, its use and installation are optional in this project.</p>
<h4>&nbsp;</h4>
<h4>ATTENTION!!</h4>
<p>If this is not your first time to install PM4KNIME, due to the modification of update site changes, some old update sites become invalid. Please make sure to delete those invalid update sites at first; Otherwise, there will be errors during installation or the installation is stuck.</p>
<h2>&nbsp;</h2>
<h2>KNIME Analaytic Platform Installation</h2>
<p>This is the installation for the normal user of pm4knime.</p>
<ul>
<li><a href="https://www.knime.org" rel="nofollow">KNIME</a> version 4.0 or higher The KNIME installation can be found in <a href="https://www.knime.com/installation" rel="nofollow">https://www.knime.com/installation</a>. It includes three steps:
<ul>
<li><a href="https://www.knime.org" rel="nofollow">Step 1</a>: asks for the registration on KNIME to support future updates and help. You can skip it and go directly to</li>
<li><a href="https://www.knime.com/downloads/download-knime" rel="nofollow">Step 2</a> : download the version for Windows 64x in default.</li>
<li><a href="https://www.knime.com/next-steps" rel="nofollow">Step 3</a>: some guides on the basic usage on KNIME. After reading this instruction, you should be able to create a workflow in KNIME, and read CSV file into KNIME.</li>
</ul>
</li>
</ul>
<h2>&nbsp;</h2>
<h2>PM4KNIME installation</h2>
<p>The general installation for KNIME extension is described in the <a href="https://www.knime.com/downloads/update" rel="nofollow">link</a>. Here, we briefly specify those steps for PM4KNIME extension.</p>
<ol>
<li>Goto <strong>Help</strong> &gt; <strong>Install new software..</strong>, after running KNIME.</li>
<li>Press <strong>add</strong> button, open Dialog <strong>Add Repository</strong>.</li>
<li>Set the installation location for PM4KNIME.<br /> As explained in the KNIME <a href="https://www.knime.com/downloads/update" rel="nofollow">link</a>, there are two ways to install community extension, one is with <strong>url</strong>, the other is with <strong>local</strong>. Because PM4KNIME is available on KNIME community, so we can use the default update site in KNIME, which is also shown in the screenshot.<br /> KNIME Community Extension(Experimental) : <a href="http://update.knime.com/community-contributions/4.1" rel="nofollow">http://update.knime.com/community-contributions/4.1</a></li>
</ol>
<p><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PM4KNIME-set-community-extension-website.png" alt="image" className="img-fluid img-shadow" /></p>
<p>If this website is not listed in "Available Software Sites", you can add the community experimental website by clicking on Add in the right panel and choosing</p>
<ul>
<li><strong>URL</strong> installation
<ol>
<li>Set Name = KNIME Community Extension(Experiemental)</li>
<li>Set Location = <code>http://update.knime.com/community-contributions/4.1</code></li>
<li>Click "OK" to return the previous dialog <strong>Available Software</strong></li>
</ol>
</li>
</ul>
<ol start="4">
<li>Click <strong>Work with</strong> to select the download location created before. Sometimes, it takes some time to show the extension from the location.<br /> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PM4KNIME-install-feature.png" alt="image"className="img-fluid img-shadow" /></li>
<li>Follow the installation by clicking next.</li>
<li>With <strong>Security Warning</strong>, click <strong>install anyway</strong> to continue the installation.</li>
<li>Restart KNIME</li>
</ol>
<h3>&nbsp;</h3>
<h3>PM4KNIME Updates and Uninstall</h3>
<p>After installation of PM4KNIME, if there is a new version available, it is recommended to update the installed version. The update can be done into ways:</p>
<ul>
<li>With all updates into KNIME</li>
</ul>
<ol>
<li><strong>File</strong> &gt; <strong>Update KNIME</strong>. It lists all the extensions for updates. Sometimes, it takes a long time to show.</li>
<li>Choose PM4KNIME to update.</li>
</ol>
<ul>
<li>Specific update for PM4KNIME and Uninstallation</li>
</ul>
<ol>
<li>
<p><strong>File</strong> &gt; <strong>Install KNIME Extension</strong></p>
</li>
<li>
<p>Choose the **what is already installed ** and click on it. It shows the installed extensions in KNIME. <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PM4KNIME-update.png" alt="image" className="img-fluid img-shadow" /></p>
</li>
<li>
<p>Choose pm4knime Feature. At the bottom, three options are shown, <strong>Update</strong>, <strong>Uninstall</strong> and <strong>Properties</strong>.</p>
</li>
<li>
<p>Click on <strong>Update</strong> and follow the instructions later to update PM4KNIME. or</p>
</li>
<li>
<p>Click on <strong>Uninstall</strong> and follow the instructions later to uninstall PM4KNIME.</p>
</li>
</ol>
<h3>&nbsp;</h3>
<h3>Extension Screenshot</h3>
<p>After restarting KNIME, if installation succeeds, it shows one category <code>Process Mining</code> in <strong>Node Repository</strong>. By clicking on the name, we can get an overview of this extension PM4KNIME. <br></br><img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/PM4KNIME-category-inKNIME.PNG" alt="image" className="img-fluid img-shadow"  /> <br></br> On the right part of the KNIME, some details information is given on the <code>Process Mining</code>.<br></br> <img src="https://github.com/pm4knime/pm4knime-document/raw/master/images/pm4knime-category-description.PNG" alt="image" className="img-fluid img-shadow" /></p>
<h2>&nbsp;</h2>
<h2>KNIME Server Installation</h2>
<h3>&nbsp;</h3>
<h3>Requirments:</h3>
<ul>
<li>academic license to get the academic license, we need to provide the KNIME team with
<ul>
<li>Mac address of Computer</li>
<li>Contact person information, email address</li>
</ul>
</li>
</ul>
<h3>&nbsp;</h3>
<h3>Knowledge</h3>
<ul>
<li>to install KNIME Server, it is better to use a normal account, different as I thought before.</li>
<li>in the license there is one limit on the user number. Currently, the limit is 5. The exact meaning is:</li>
<li>only 5 active users are allowed to log in KNIME Server.</li>
<li>more than 5 users are allowed to register in KNIME Server</li>
<li>the active state of one user is marked since he/she logs in KNIME Server. It will turn into idle after one week.</li>
<li>there is also the possibility to apply for a license without 5 user limit. But at first, notated by people here, Let us start with 5.</li>
<li>the license is valid for one year. Before they expire, We need to contact KNIME team again to update the license.</li>
</ul>
</div>
</div>
        <Footer></Footer>
        </>
    )
  }
  