(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1bXK":function(e,t,a){e.exports=a.p+"static/James_Clark_Resume-0ab0a12afa1055905b72ee4344f05382.pdf"},"2ZV5":function(e,t,a){},"6WPf":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=p(t||a||[]);return i&&i.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),c.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+o+a+i+t+r+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,n=e.generateSources,r=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(L,(0,l.default)({ref:t,src:a},r,{ariaHidden:s}));return i.length>1?c.default.createElement("picture",null,n(i),o):o})),L=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:i,src:n},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:k?1:0,transition:C?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,z={transitionDelay:v+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&z,o,f),V={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:E};if(h){var M=h,P=p(h);return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),P.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:M,generateSources:N}),P.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:M,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(M),c.default.createElement(L,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:M}))}}))}if(g){var A=g,J=p(g),B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:J.width,height:J.height},r);return"inherit"===r.display&&delete B.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(J.srcSet)},T&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:J.width,opacity:this.state.imgLoaded?0:1,height:J.height},C&&z)}),J.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:J.base64,spreadProps:V,imageVariants:A,generateSources:N}),J.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:J.tracedSVG,spreadProps:V,imageVariants:A,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(A),c.default.createElement(L,{alt:a,title:t,width:J.width,height:J.height,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},J,{imageVariants:A}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,a,i){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",i)}}C.propTypes={resolutions:j,sizes:T,fixed:z(d.default.oneOfType([j,d.default.arrayOf(j)])),fluid:z(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=C;t.default=H},"B+uJ":function(e,t,a){},J8rT:function(e,t,a){},QeBL:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("9Dj+"),s=a("zLVn");a("J8rT");var o=function(e){var t=e.children,a=e.className,i=Object(s.a)(e,["children","className"]),r="full-page "+a;return n.a.createElement("div",Object.assign({},i,{className:r}),t)},l=a("vrFN"),c=a("Wbzz"),d=a("9eSz"),u=a.n(d);var f=function(e){var t=e.fileName,a=Object(s.a)(e,["fileName"]),i=Object(c.useStaticQuery)("3844298681").allImageSharp.edges.find((function(e){return e.node.fluid.originalName===t}));return i?n.a.createElement(u.a,Object.assign({},a,{style:{position:"inherit"},fluid:i.node.fluid})):null};a("yR+2");var m=function(e){var t=e.fileName;return n.a.createElement("div",{className:"bounding-box"},n.a.createElement(f,{className:"avatar-image",fileName:t}))},p=a("TSYQ"),h=a.n(p),g=a("jMEf"),b=a("oh6M");a("2ZV5");var v=function(e){var t=e.xpIcons,a=Object(s.a)(e,["xpIcons"]);return n.a.createElement("div",Object.assign({},a,{className:h()("xp-grid",a.className)}),t.map((function(e,t){return n.a.createElement(b.a,{icon:e,size:"large",key:e})})))};a("B+uJ");var y=function(e){var t=e.children,a=e.className,i=void 0===a?"":a,r=e.border,o=void 0!==r&&r,l=e.text,c=void 0===l?"button":l,d=Object(s.a)(e,["children","className","border","text"]);return n.a.createElement("div",Object.assign({},d,{className:h()(i,"button",{border:o})}),t?n.a.Children.map(t,(function(e){var t;return n.a.cloneElement(e,{className:h()("button-content",(null===(t=e.props)||void 0===t?void 0:t.className)||"")})})):n.a.createElement("span",{className:"button-content"},c))};a("zPBp");function E(e){var t=e.experience,a=Object(s.a)(e,["experience"]);return n.a.createElement("div",a,n.a.createElement("h3",{className:"mb-n"},t.positionTitle),n.a.createElement("h4",null,t.timeAt),n.a.createElement("div",{className:"flx-col bullet"},t.info.map((function(e){return n.a.createElement("div",{key:e.description,className:"flx-row"},n.a.createElement("span",{className:"mr-s"},"•"),n.a.createElement("span",{className:"mb-s"},e.description))}))),t.techUsed&&n.a.createElement(v,{className:"xp-icons",xpIcons:t.techUsed}))}function w(e){var t=e.experience,r=Object(s.a)(e,["experience"]),o=Object(i.useState)({selected:0,firstLoad:!1}),l=o[0],c=o[1];var d,u,f,m,p,g,b=Object(i.useCallback)((function(){c(Object.assign({},l,{firstLoad:!l.firstLoad}))}),[l]);return Object(i.useEffect)((function(){return window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[b]),Object(i.useEffect)((function(){c(Object.assign({},l,{firstLoad:!0}))}),[]),n.a.createElement("div",Object.assign({},r,{className:h()(r.className,"filter-table flx-col ai-b"),style:{height:(p=((null===(f=document.getElementById("table-buttons"))||void 0===f?void 0:f.clientHeight)||0)+30,g=(null===(m=document.getElementById("experience-download"))||void 0===m?void 0:m.clientHeight)||0,t.reduce((function(e,t,a){var i,n=(null===(i=document.getElementById("experience-card-"+a))||void 0===i?void 0:i.clientHeight)||0;return(n+=p+g)>e?n:e}),0))}}),n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{id:"table-buttons",className:"tab-buttons"},t.map((function(e,t){return n.a.createElement("button",{key:t,className:"filter-button",onClick:(a="selected",i=t,function(){var e;c(Object.assign({},l,((e={})[a]=i,e)))})},e.company);var a,i})),n.a.createElement("span",{className:"highlight-tab",style:{left:"calc(\n            var(--current-width) * "+l.selected+"\n          )"}}))),(u=null===(d=document.getElementById("experience-card-"+l.selected))||void 0===d?void 0:d.clientHeight,n.a.createElement("div",{className:"experience-card-container flx-row",style:{width:"calc(var(--current-width) * "+t.length+")",height:u}},t.map((function(e,a){return n.a.createElement(E,{id:"experience-card-"+a,key:a,experience:e,className:"experience-card flx-col",style:{left:"calc(calc(var(--current-width) * "+t.length+") * calc("+a+" - "+l.selected+"))",opacity:a===l.selected?"1":"0"}})})))),n.a.createElement(y,{id:"experience-download",className:"xp-download",border:!0},n.a.createElement("a",{href:a("1bXK"),download:!0},"Download Resume")))}w.defaultProps={experience:[]};var S="undefined"!=typeof window?w:function(){return null};a("6WPf");var x=function(e){var t=e.projects;return n.a.createElement("div",{className:"projects"},t.map((function(e){return function(e){return n.a.createElement("div",{key:e.title,className:"project"},n.a.createElement("h2",{className:"title"},e.title),n.a.createElement("p",{className:"description pr-m"},e.description),n.a.createElement(v,{className:"tech",xpIcons:e.tech}),e.externalLink&&n.a.createElement(b.a,{link:e.externalLink.link,target:"_blank",icon:e.externalLink.icon,hoverType:"primary",size:"medium",className:"external-link"}),n.a.createElement(y,{border:!0,className:"github"},n.a.createElement("a",{href:e.github.link},"View Code")))}(e)})))},N={company:"CARBON",positionTitle:"Software Engineer",timeAt:"OCTOBER 2019 - JULY 2020",techUsed:[g.a.CPP,g.a.Javascript,g.a.TypeScript,g.a.Express,g.a.Node,g.a.Axios,g.a.Jest,g.a.React,g.a.SASS,g.a.CSS,g.a.MobX,g.a.OpenGL],info:[{description:"Improved the runtime of the patch selection tool, an internal tool used for selecting subsets of 3D geometries, by ~80% through the implementation of a Union-Find algorithm (C++)"},{description:"Implemented a generic cancel functionality for the server-side job infrastructure, eliminating long user wait times of 20+ minutes (JavaScript & TypeScript, Express & Axios)"},{description:"Unified testing frameworks by setting up the Jest framework and converting server-side unit tests (JavaScript & TypeScript, Jest, Node)"},{description:"Refreshed icon library and style sheets to bring better consistency to user experience across the many different user interfaces (React, CSS & Sass, Javascript & Typescript)"},{description:"Developed a new user interface that allows users to view information by hovering over rendered 3D geometries, improving UX (TypeScript, React, MobX, Sass, OpenGL)"}]},I={company:"CONSCIOUX",positionTitle:"Freelance Frontend Engineer",timeAt:"APRIL 2019 - MAY 2019, SUMMER 2018",techUsed:[g.a.React,g.a.Javascript,g.a.StyledComponents],info:[{description:"Prototype and design pages for company website"},{description:"Handle deployments to the company's AWS S3 bucket"}]},k=[N,{company:"HATCHWAYS",positionTitle:"Coding Bootcamp",timeAt:"SUMMER 2019",techUsed:[g.a.React,g.a.Javascript,g.a.Express,g.a.MaterialUI,g.a.MongoDB,g.a.MobX,g.a.Node],info:[{description:"Developed an Amazon price watching website within a month in a team of two"},{description:"Implemented the login, signin, and landing page as well as demo page for prospective users"},{description:"Integrated the SendGrid api so users can recieve emails when prices drop"},{description:"Helped design and implement a NoSQL database in the cloud with MongoDB Atlas"}]},I],R={title:"DEALSMATE",github:{icon:g.a.Github,link:"https://github.com/JamesClark123/Deals-Mate"},externalLink:{icon:g.a.ExternalLink,link:"https://www.dealsmatefinder.com/login"},description:"Dealsmate is an Amazon price watching website that will notify you, by email, when the price drops on a product",tech:[g.a.React,g.a.MongoDB,g.a.Node,g.a.MaterialUI]},O=[{title:"PORTFOLIO",github:{icon:g.a.Github,link:"https://github.com/JamesClark123/Portfolio"},description:"This website! Designed by the superb designer (and my wife) Cindy Chen. Hope you like it :)",tech:[g.a.React,g.a.SASS,g.a.Gatsby,g.a.TypeScript]},R,{title:"HAMT",github:{icon:g.a.Github,link:"https://github.com/JamesClark123/hamt"},description:"An independent study from my time in college, I implemented a persistent & functional hash map. Read more about it on my github.",tech:[g.a.Ocaml]}];a("sg+I");t.default=function(){function e(){return n.a.createElement("div",{className:"introduction-text"},n.a.createElement("h1",{className:"introduction-header"},"Hi! I'm James."),n.a.createElement("p",{className:"introduction-paragraph"},"I am a software engineer living in the San Francisco Bay Area. I specialize in full-stack and front-end development and am knowledgeable in React and Typescript. I spent the last year working on intricate problems at a 3D printing company, where I worked on user interface, back-end, and geometry code. I’m open to front-end or full-stack positions either in the Bay Area or remote."))}function t(e){return function(){var t;return null===(t=document.getElementById(e))||void 0===t?void 0:t.scrollIntoView({behavior:"smooth"})}}return n.a.createElement(r.a,{navOptions:n.a.createElement("div",{className:"flx-row"},n.a.createElement(y,{onClick:t("home"),text:"Home"}),n.a.createElement(y,{onClick:t("experience"),text:"Experience"}),n.a.createElement(y,{onClick:t("projects"),text:"Projects"}),n.a.createElement(y,{onClick:t("contact"),text:"Contact"}),n.a.createElement(y,{border:!0},n.a.createElement("a",{href:a("1bXK"),download:!0},"Resume")))},n.a.createElement(l.a,{title:"Home"}),n.a.createElement(o,{id:"home",className:"introduction flx-row jc-se ai-c pt-l"},n.a.createElement(e,null),n.a.createElement(m,{fileName:"James_Clark_square.png",className:"headshot"})),n.a.createElement(o,{id:"experience",className:"flx-col jc-se ai-c"},n.a.createElement("h1",null,"EXPERIENCE"),n.a.createElement(S,{experience:k})),n.a.createElement(o,{id:"projects",className:"flx-col jc-c ai-c"},n.a.createElement("h1",{className:"featured-title"},"FEATURED PROJECTS"),n.a.createElement(x,{projects:O})),n.a.createElement(o,{id:"contact",className:"flx-col jc-c ai-c contact-page"},n.a.createElement("h1",{className:"contact"},"HIRE ME"),n.a.createElement("p",{className:"contact-p"},"If you like my work, please reach out with any relavant opportunities. I'm currently available for hire."),n.a.createElement(y,{border:!0,className:"contact-b"},n.a.createElement("a",{href:"mailto:jamesloganclark@gmail.com"},"Contact"))))}},"sg+I":function(e,t,a){},"yR+2":function(e,t,a){},zPBp:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-84e000c627588b6eb016.js.map