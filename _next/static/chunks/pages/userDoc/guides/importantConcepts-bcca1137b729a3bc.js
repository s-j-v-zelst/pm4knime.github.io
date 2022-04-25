(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{1362:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return t}});var i=n(9600),r=n(7857),o=n(5893);function t(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"section",children:[(0,o.jsx)("h1",{children:"KNIME Important Concepts"}),(0,o.jsx)("p",{children:"This section briefly introduces concepts from KNIME which are related and important to PM4KNIME usage. More information about those concepts can be found on the given links from KNIME."}),(0,o.jsx)("h2",{children:"\xa0"}),(0,o.jsx)("h2",{children:"How to create a workflow"}),(0,o.jsxs)("p",{children:["The exact information can be found with this ",(0,o.jsx)("a",{href:"https://www.knime.com/getting-started",rel:"nofollow",children:"link"}),"."]}),(0,o.jsx)("h2",{children:"\xa0"}),(0,o.jsx)("h2",{children:"States of nodes in KNIME"}),(0,o.jsx)("p",{children:"There are four types states of nodes in KNIME."}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Not Configured in Red light: Usually after adding a new node to Workflow Editor"}),(0,o.jsx)("li",{children:'Configured in Yellow light: After configuration, it changes from red to yellow. Some nodes have the status "configured" when they are created, or left from last configuration.'}),(0,o.jsx)("li",{children:"Executed in Green light: State after execution is successful."}),(0,o.jsx)("li",{children:"Error in Red Cross: Some errors show during execution."})]}),(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-states.PNG",alt:"image",className:"img-fluid img-shadow"})}),(0,o.jsxs)("p",{children:["Cancel the execution of node by ",(0,o.jsx)("strong",{children:"Reset"}),", the node changes from ",(0,o.jsx)("em",{children:(0,o.jsx)("strong",{children:"Executed"})})," into ",(0,o.jsx)("em",{children:(0,o.jsx)("strong",{children:"configured"})}),"."]}),(0,o.jsx)("h2",{children:"\xa0"}),(0,o.jsx)("h2",{children:"Ports of Nodes"}),(0,o.jsx)("p",{children:"There are input ports and output ports for one node. The types of them are:"}),(0,o.jsxs)("ol",{children:[(0,o.jsx)("li",{children:"Data of Table in Black Triangle:"}),(0,o.jsx)("li",{children:"Model in Blue Rectangle:"}),(0,o.jsx)("li",{children:"An image in Green Rectangle:"}),(0,o.jsx)("li",{children:"Flow Variable in Red Circle:"}),(0,o.jsx)("li",{children:"Database Connection in Red Rectangle:"}),(0,o.jsx)("li",{children:"Database Query in Maroon Rectangle:"})]}),(0,o.jsx)("h2",{children:"\xa0"}),(0,o.jsx)("h2",{children:"FlowVariable"}),(0,o.jsx)("p",{children:"Flow Variable is shown as one red circle in KNIME and usually used to configure parameters automatically."}),(0,o.jsx)("h4",{children:"\xa0"}),(0,o.jsx)("h4",{children:"Usage"}),(0,o.jsx)("p",{children:"[https://www.knime.com/knime-introductory-course/chapter7/section1/creation-and-usage-of-flow-variables]"}),(0,o.jsx)("h5",{children:"\xa0"}),(0,o.jsx)("h5",{children:"Goal: Try to parameterize the automation of workflow."}),(0,o.jsx)("h5",{children:"\xa0"}),(0,o.jsx)("h5",{children:"Types: There are two kinds of flow variables,"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"global flow variable"})," for the whole workflow"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"local flow variable"})," with explicit port to connect to node, it has effect on the ",(0,o.jsx)("strong",{children:"all nodes after the port connection"}),". We can also transfer data value into flow variable by using node ",(0,o.jsx)("em",{children:(0,o.jsx)("strong",{children:"Table Row to Variable"})})," is used to define new flow variables. The names of flow variables are defined by the column names."]})]}),(0,o.jsx)("h2",{children:"\xa0"}),(0,o.jsx)("h2",{children:"Loop Structure"}),(0,o.jsxs)("p",{children:["The detailed information can be found in ",(0,o.jsx)("a",{href:"https://www.knime.com/nodeguide/control-structures/loops",rel:"nofollow",children:"KNIME Loop"}),". ",(0,o.jsx)("br",{})," ",(0,o.jsx)("img",{src:"https://github.com/pm4knime/pm4knime-document/raw/master/images/KNIME-loop.PNG",alt:"image",className:"img-fluid img-shadow"})]}),(0,o.jsx)("p",{children:"Most important things to remember are:"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["In KNIME, it requires two nodes in pair to explicitly represent the loop start and loop end. The format for the pair is ",(0,o.jsx)("code",{children:"XXX Loop Start"})," and ",(0,o.jsx)("code",{children:"XXX Loop End"}),"."]}),(0,o.jsxs)("li",{children:["After execution Loop, the result from each iteration is summarized at the ",(0,o.jsx)("code",{children:"XXX Loop End"}),"."]}),(0,o.jsx)("li",{children:"Loop is usually used with Flow Variable to modify the node's settings."})]})]})}),(0,o.jsx)(r.Z,{})]})}},7857:function(e,s,n){"use strict";var i=n(5893);s.Z=function(e){return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the ",(0,i.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,i.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,n){"use strict";n(7294);var i=n(4593),r=(n(1664),n(634)),o=n(682),t=n(9368),a=n(3210),l=n(5893),c=function(){return(0,l.jsxs)(i.q,{children:[(0,l.jsx)("meta",{charSet:"UTF-8"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("title",{children:"PM4KNIME"}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/pm4knimeLogo.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/pm4knimeLogo.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/pm4knimeLogo.png"}),(0,l.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,l.jsx)("meta",{name:"google",content:"notranslate"})]})},d=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Z,{className:"mx-auto color-nav",collapseOnSelect:!0,expand:"lg",variant:"light",fixed:"top",children:(0,l.jsxs)(o.Z,{children:[(0,l.jsxs)(r.Z.Brand,{children:[(0,l.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,l.jsx)("img",{src:"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,l.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},href:"/",children:[(0,l.jsx)("img",{src:"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:""}),"PM4KNIME"]})]}),(0,l.jsx)(r.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,l.jsxs)(r.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,l.jsx)(t.Z,{className:"ms-auto",children:(0,l.jsx)(t.Z.Link,{href:"/userDoc",children:"Home"})}),(0,l.jsx)(t.Z,{children:(0,l.jsxs)(a.Z,{title:"Guideline for normal user",id:"collasible-nav-dropdown",children:[(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides",children:"Introduction Guides"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/features",children:"PM4KNIME Features"}),(0,l.jsx)(a.Z.Divider,{}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/installation",children:"Installation Instructions"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/importantConcepts",children:"KNIME Important Concepts"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/bugReport",children:"Bug Report"}),(0,l.jsx)(a.Z.Divider,{}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/knimeServer",children:"KNIME Server Usage"})]})}),(0,l.jsx)(t.Z,{children:(0,l.jsxs)(a.Z,{title:"Usage Examples",id:"collasible-nav-dropdown",children:[(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/",children:"Introduction Demos"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/processDiscovery",children:"Process Discovery"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/conformance",children:"Confromance"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/logManipulation",children:"Log Manipulation"}),(0,l.jsx)(a.Z.Divider,{}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/repetiveExecution",children:"Repetitive Execution of Workflow"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/parameterOptimization",children:"Parameter Optimization"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/organizationOnWorkflow",children:"Organization on Workflow"}),(0,l.jsx)(a.Z.Divider,{}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/knimeNodes",children:"KNIME Nodes"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/workWithJava",children:"Working with Java"}),(0,l.jsx)(a.Z.Item,{href:"/userDoc/guides/demos/workWithPython",children:"Working with Python"})]})})]})]})})})};s.Z=function(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(d,{})]})}},7457:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/importantConcepts",function(){return n(1362)}])}},function(e){e.O(0,[929,774,888,179],(function(){return s=7457,e(e.s=s);var s}));var s=e.O();_N_E=s}]);