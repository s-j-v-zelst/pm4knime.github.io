(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9938:function(e,t,n){"use strict";var r=n(930),a=n(5696),i=n(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.src,s=e.sizes,o=e.unoptimized,m=void 0!==o&&o,h=e.priority,j=void 0!==h&&h,k=e.loading,S=e.lazyRoot,P=void 0===S?null:S,E=e.lazyBoundary,I=void 0===E?"200px":E,A=e.className,z=e.quality,_=e.width,C=e.height,L=e.style,R=e.objectFit,D=e.objectPosition,q=e.onLoadingComplete,K=(e.onError,e.placeholder),Z=void 0===K?"empty":K,F=e.blurDataURL,B=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),H=c.useContext(f.ImageConfigContext),U=c.useMemo((function(){var e=v||H||d.imageConfigDefault,t=[].concat(i(e.deviceSizes),i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[H]),T=B,W=s?"responsive":"intrinsic";"layout"in T&&(T.layout&&(W=T.layout),delete T.layout);var G=O;if("loader"in T){if(T.loader){var V=T.loader;G=function(e){e.config;var t=g(e,["config"]);return V(t)}}delete T.loader}var J="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(n)){var Q=b(n)?n.default:n;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(F=F||Q.blurDataURL,J=Q.src,(!W||"fill"!==W)&&(C=C||Q.height,_=_||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}n="string"===typeof n?n:J;var X=N(_),$=N(C),Y=N(z),ee=!j&&("lazy"===k||"undefined"===typeof k);(n.startsWith("data:")||n.startsWith("blob:"))&&(m=!0,ee=!1);x.has(n)&&(ee=!1);var te,ne=c.useState(!1),re=a(ne,2),ae=re[0],ie=re[1],se=u.useIntersection({rootRef:P,rootMargin:I,disabled:!ee}),oe=a(se,3),ce=oe[0],le=oe[1],de=oe[2],ue=!ee||le,fe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},me={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},he=!1,pe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:D};0;0;var ge=Object.assign({},L,"raw"===W?{aspectRatio:"".concat(X," / ").concat($)}:pe),ve="blur"!==Z||ae?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(F,'")'),backgroundPosition:D||"0% 0%"};if("fill"===W)fe.display="block",fe.position="absolute",fe.top=0,fe.left=0,fe.bottom=0,fe.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof $){var xe=$/X,ye=isNaN(xe)?"100%":"".concat(100*xe,"%");"responsive"===W?(fe.display="block",fe.position="relative",he=!0,me.paddingTop=ye):"intrinsic"===W?(fe.display="inline-block",fe.position="relative",fe.maxWidth="100%",he=!0,me.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===W&&(fe.display="inline-block",fe.position="relative",fe.width=X,fe.height=$)}else 0;var je={src:y,srcSet:void 0,sizes:void 0};ue&&(je=w({config:U,src:n,unoptimized:m,layout:W,width:X,quality:Y,sizes:s,loader:G}));var be=n;0;var we="imagesrcset",Ne="imagesizes";we="imageSrcSet",Ne="imageSizes";var Oe=(r(t={},we,je.srcSet),r(t,Ne,je.sizes),t),ke=c.default.useLayoutEffect,Me=c.useRef(q),Se=c.useRef(n);c.useEffect((function(){Me.current=q}),[q]),ke((function(){Se.current!==n&&(de(),Se.current=n)}),[de,n]);var Pe=p({isLazy:ee,imgAttributes:je,heightInt:$,widthInt:X,qualityInt:Y,layout:W,className:A,imgStyle:ge,blurStyle:ve,loading:k,config:U,unoptimized:m,placeholder:Z,loader:G,srcString:be,onLoadingCompleteRef:Me,setBlurComplete:ie,setIntersection:ce,isVisible:ue},T);return c.default.createElement(c.default.Fragment,null,"raw"===W?c.default.createElement(M,Object.assign({},Pe)):c.default.createElement("span",{style:fe},he?c.default.createElement("span",{style:me},te?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,c.default.createElement(M,Object.assign({},Pe))),j?c.default.createElement(l.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+je.src+je.srcSet+je.sizes,rel:"preload",as:"image",href:je.srcSet?void 0:je.src},Oe))):null)};var s,o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),l=(s=n(6505))&&s.__esModule?s:{default:s},d=n(5980),u=n(7215),f=n(1059),m=(n(7206),n(4979));function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},x=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,a=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,a=e.quality,i=new URL("".concat(t.path).concat(S(n))),s=i.searchParams;s.set("auto",s.get("auto")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||r.toString()),a&&s.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(S(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,a=e.layout,s=e.width,o=e.quality,c=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,r){var a=e.deviceSizes,s=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var o,c=/(^|\s)(1?\d?\d)vw/g,l=[];o=c.exec(r);o)l.push(parseInt(o[2]));if(l.length){var d=.01*Math.min.apply(Math,l);return{widths:s.filter((function(e){return e>=a[0]*d})),kind:"w"}}return{widths:s,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return s.find((function(t){return t>=e}))||s[s.length-1]})))),kind:"x"}}(t,s,a,c),u=d.widths,f=d.kind,m=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,r){return"".concat(l({config:t,src:n,quality:o,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:o,width:u[m]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,a,i){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(x.add(t),"blur"===r&&i(!0),null===a||void 0===a?void 0:a.current)){var n=e.naturalWidth,s=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:s})}})))}var M=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,a=e.qualityInt,i=e.layout,s=e.className,o=e.imgStyle,l=e.blurStyle,d=e.isLazy,u=e.placeholder,f=e.loading,m=e.srcString,h=e.config,v=e.unoptimized,x=e.loader,y=e.onLoadingCompleteRef,j=e.setBlurComplete,b=e.setIntersection,N=e.onError,O=(e.isVisible,g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},O,t,"raw"!==i||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":i,className:s,style:p({},o,l),ref:c.useCallback((function(e){b(e),(null===e||void 0===e?void 0:e.complete)&&k(e,m,0,u,y,j)}),[b,m,i,u,y,j]),onLoad:function(e){k(e.currentTarget,m,0,u,y,j)},onError:function(e){"blur"===u&&j(!0),N&&N(e)}})),(d||"blur"===u)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},O,w({config:h,src:m,unoptimized:v,layout:i,width:r,quality:a,sizes:t.sizes,loader:x}),"raw"!==i||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":i,style:o,className:s,loading:f||"lazy"}))))};function S(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(7285);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,s=void 0!==i&&i;return n||a&&s}},6505:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var i,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),o=(i=n(148))&&i.__esModule?i:{default:i},c=n(7285),l=n(523),d=n(9546);n(7206);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var d=m[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var u=a.props[d],f=r[d]||new Set;"name"===d&&s||!f.has(u)?(f.add(u),r[d]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,s.default.cloneElement(e,o)}return s.default.cloneElement(e,{key:i})}))}var p=function(e){var t=e.children,n=s.useContext(c.AmpStateContext),r=s.useContext(l.HeadManagerContext);return s.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=p},148:function(e,t,n){"use strict";var r=n(7980),a=n(3227),i=n(8361),s=(n(2191),n(5971)),o=n(2715),c=n(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var u=function(e){s(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},2614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});n(9008),n(5675),n(7294);var r=n(4593),a=(n(1664),n(634)),i=n(682),s=n(9368),o=n(3210),c=n(5893),l=function(){return(0,c.jsxs)(r.q,{children:[(0,c.jsx)("meta",{charSet:"UTF-8"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,c.jsx)("title",{children:"PM4KNIME"}),(0,c.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"assets/pm4knimeLogo.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"assets/pm4knimeLogo.png"}),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"assets/pm4knimeLogo.png"}),(0,c.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,c.jsx)("meta",{name:"google",content:"notranslate"})]})},d=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,{scrolling:!0,dark:!0,className:"mx-auto color-nav",collapseOnSelect:!0,expand:"lg",variant:"light",fixed:"top",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(a.Z.Brand,{children:[(0,c.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,c.jsx)("img",{src:"assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,c.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},href:"#",children:[(0,c.jsx)("img",{src:"assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:""}),"PM4KNIME"]})]}),(0,c.jsx)(a.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,c.jsxs)(a.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,c.jsxs)(s.Z,{className:"ms-auto",children:[(0,c.jsx)(s.Z.Link,{href:"#about",children:"About PM4KNIME"}),(0,c.jsx)(s.Z.Link,{href:"#download",children:"Download to the plugin"}),(0,c.jsx)(s.Z.Link,{href:"#contact",children:"Contact"})]}),(0,c.jsx)(s.Z,{children:(0,c.jsxs)(o.Z,{title:"User Documentation",id:"collasible-nav-dropdown",children:[(0,c.jsx)(o.Z.Item,{href:"/userDoc",children:"Home"}),(0,c.jsx)(o.Z.Item,{href:"#action/3.2",children:"Guideline for Normal User"}),(0,c.jsx)(o.Z.Item,{href:"#action/3.3",children:"Usage Examples"}),(0,c.jsx)(o.Z.Divider,{}),(0,c.jsx)(o.Z.Item,{href:"#action/3.4",children:"Bug Report"}),(0,c.jsx)(o.Z.Item,{href:"#action/3.4",children:"KNIME Server Usage"})]})})]})]})})})},u=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)(d,{})]})},f=n(7857);function m(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{}),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)("div",{className:"section",id:"about",children:[(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col-12 text-center",children:[(0,c.jsx)("img",{src:"assets/pm4knimeLogo.png",height:"100",width:"auto",className:"d-inline text-center"}),(0,c.jsx)("h1",{className:"section-header",children:"PM4KNIME"}),(0,c.jsx)("h2",{className:"mt-n3 mb-5",children:"State-of-the-art process mining in KNIME Analytics Platform"}),(0,c.jsxs)("p",{children:["PM4KNIME is a ",(0,c.jsx)("i",{children:"process mining"})," extension, developed by the ",(0,c.jsx)("a",{href:"http://fit.fraunhofer.de/process-mining",target:"_blank",children:"process mining research group"}),"of",(0,c.jsx)("a",{href:"http://fit.fraunhofer.de/",target:"_blank",children:"Fraunhofer FIT"}),", for the leading open-source platform, to data science solutions, ",(0,c.jsx)("a",{href:"https://www.knime.com/knime-analytics-platform",target:"_blank",children:"KNIME Analytics Platform"}),". PM4KNIME implements several state-of-the-art process mining algorithms in a user-friendly manner and is ",(0,c.jsx)("i",{children:"free of charge for non-commercial and academic use"}),"."]}),(0,c.jsx)("p",{children:"KNIME is designed to compose and execute a  sequence of data manipulation steps, namely a workflow, in scientific applications. By combining this with the process mining domain, it enables the support of large-scale experiments in process mining."}),(0,c.jsx)("p",{children:"As a community extension for KNIME, PM4KNIME integrates the Process Mining tools from ProM into the KNIME Analytics Platform. Classical plugins from ProM are wrapped as node extensions in KNIME and can be used to build a complete process mining workflow."})]})}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12",children:(0,c.jsx)("img",{src:"assets/pm4knime-screenshot.png",className:"img-fluid img-shadow",alt:"Responsive image"})})}),(0,c.jsx)("div",{className:"row mt-5",children:(0,c.jsx)("div",{className:"col-12",children:(0,c.jsx)("h2",{children:"Functionality Overview"})})}),(0,c.jsxs)("div",{className:"row  justify-content-between text-center",children:[(0,c.jsxs)("div",{className:"col-md-3 m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-random fa-2x"}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"mt-3",children:["Get a selection of ",(0,c.jsx)("strong",{children:" classical "})," ProM plugins in KNIME"]})]}),(0,c.jsxs)("div",{className:"col-md-3  m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-file-import fa-2x"}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("strong",{children:"Create"})," Large-scale and repetitive experiments. Process mining experiments in the analytical workflow context can be executed with just one click. ",(0,c.jsx)("br",{})]})]}),(0,c.jsxs)("div",{className:"col-md-3 m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-chevron-right fa-2x"})," ",(0,c.jsx)("i",{className:"fas fa-chevron-right fa-2x ml-n3"}),(0,c.jsxs)("div",{className:"mt-3",children:["Create your process analysis ",(0,c.jsx)("strong",{children:"comfortably"})," in a visual workflow environment"]})]}),(0,c.jsxs)("div",{className:"col-md-3  m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-search fa-2x"}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("strong",{children:"Discover"})," process models from your event data"]})]}),(0,c.jsxs)("div",{className:"col-md-3  m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-filter fa-2x"}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("strong",{children:"Effortlessly"})," use other KNIME extensions to further preprocess and post-process the data for process mining algorithms."]})]}),(0,c.jsxs)("div",{className:"col-md-3 m-3 p-3 border rounded feature-box lead",children:[(0,c.jsx)("i",{className:"fas fa-file-export fa-2x"}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("strong",{children:"Save"})," your current analysis, with its configuration and input as KNIME workflows, and share it with others!"]})]})]}),(0,c.jsx)("div",{className:"row"})]}),(0,c.jsx)("hr",{id:"download"}),(0,c.jsxs)("div",{className:"section",children:[(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)("h1",{className:"section-header",children:["Download to the plugin",(0,c.jsx)("i",{className:"fas fa-download ml-3 icon-color"})]})})}),(0,c.jsx)("div",{className:"row mt-5 mb-2 flex-fill",children:(0,c.jsx)("div",{className:"col-md-4 text-center",children:(0,c.jsxs)("a",{href:"https://hub.knime.com/pm4knime/extensions/org.pm4knime.feature/latest",children:[(0,c.jsx)("i",{className:"fas fa-download ml-3 icon-color"}),(0,c.jsx)("br",{}),"Download"]})})}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12 mt-3",children:(0,c.jsx)("div",{className:"collapse text-monospace",id:"collapseChangelog",children:(0,c.jsx)("div",{id:"changelog-text",className:"card card-body lead",children:"Loading..."})})})})]}),(0,c.jsx)("hr",{id:"tool-paper"}),(0,c.jsxs)("div",{className:"section mb-5",children:[(0,c.jsx)("div",{className:"row",id:"contact",children:(0,c.jsx)("div",{className:"col",children:(0,c.jsxs)("h1",{className:"section-header",children:["Contact",(0,c.jsx)("i",{className:"fas fa-paper-plane ml-3 icon-color"})]})})}),(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col",children:["Get in touch if you have any questions or custom request (pm4knime[at]pads.rwth-aachen.de).",(0,c.jsx)("h2",{children:(0,c.jsxs)("a",{href:"mailto:pm4knime@pads.rwth-aachen.de",children:[(0,c.jsx)("i",{className:"fas fa-envelope"}),"email"]})})]})}),(0,c.jsxs)("div",{className:"row mt-2 mb-2",children:[(0,c.jsx)("div",{className:"col-md-8"}),(0,c.jsx)("div",{className:"col-md-4"})]})]})]}),(0,c.jsx)(f.Z,{})]})}},7857:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the ",(0,r.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,r.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,r.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2614)}])},9008:function(e,t,n){n(6505)},5675:function(e,t,n){n(9938)}},function(e){e.O(0,[929,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);