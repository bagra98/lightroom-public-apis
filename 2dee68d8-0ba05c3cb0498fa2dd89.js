(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[206],{99536:function(e,t,n){"use strict";var i=n(80018),r=n(96156),l=(n(38559),n(15007)),o=n(25444),a=n(64983),s=n(26508),d=n(37791),u=n(72390),p=n(38094),c=n(70870),v=n(94148),m=n(87116),h=n(74955),f=n(76910),g=n(7672),b=n(70553),y=n(40739),x=n(46779),w=n(36426);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){for(var t=e.childrenArray,n=e.query,i=e.hasSideNav,r=[],o=null,a=null,s=function(){var e=t[0],s=0;Object.keys(w.a).forEach((function(d){var p;(null==e||null===(p=e.props)||void 0===p?void 0:p.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var n=Math.max(parseInt(e.props.repeat)||1,1),i=function(i){d=d.concat((e.props.slots||"element").split(",").map((function(e,r){return[""+e.trim()+(1===n?"":i),t[d.length+r+1]]})))},r=0;r<n;r++)i(r)}(),d.length){s+=d.length;var p=Object.fromEntries(d);"Variant"===e.props.mdxType&&(p.query=n),"Hero"===e.props.mdxType&&i&&(p.width="calc("+u.Av+" - "+u.dP+");");var c=(0,l.cloneElement)(e,O({},p));"Hero"===e.props.mdxType?o=o||c:"Resources"===e.props.mdxType?a=a||c:r.push(c)}else r.push(e)}()})),0===s&&(s++,r.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:r,heroChild:o,resourcesChild:a}},j={name:"eibcz6",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-400)"},C={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},A={name:"zjik7",styles:"display:flex"},q={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,r=e.pageContext,Z=e.query,z=(0,l.useContext)(d.Z),D=z.hasSideNav,S=z.siteMetadata,_=z.location,k=z.allSitePage,M=z.allMdx,T=z.allGithub,N=z.allGithubContributors,E=void 0===r,L=l.Children.toArray(n);if(E||"none"===(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.layout)){var R=P({childrenArray:(0,y.L)(L),query:Z,hasSideNav:D}).filteredChildren;return E?(0,s.tZ)(a.MDXProvider,null,R):(0,s.tZ)(a.MDXProvider,{components:O(O({},x.t),w.a)},R,(0,s.tZ)(p.$,{hasSideNav:D}))}var X,G,H,Y,J,K,$,I,V,B,F,Q,U,W,ee=(0,u.kR)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),te=(0,u.P4)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),ne=(0,u.sl)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),ie=ne.nextPage,re=ne.previousPage,le=null==k?void 0:k.nodes.find((function(e){var t=e.path;return(0,o.dq)(t)===(null==_?void 0:_.pathname)})),oe=null!==(X=null==le?void 0:le.component)&&void 0!==X?X:"",ae=null==M?void 0:M.nodes.find((function(e){return e.fileAbsolutePath===oe})),se=null!==(G=null==ae?void 0:ae.tableOfContents)&&void 0!==G?G:{},de=null==T?void 0:T.nodes[0],ue=de.repository,pe=de.default_branch,ce=de.root,ve=null==N?void 0:N.nodes.find((function(e){return e.path===oe})),me=null!==(H=null==ve?void 0:ve.contributors)&&void 0!==H?H:[],he=oe.replace(/.*\/src\/pages\//g,""),fe=S.home,ge=(0,u.A6)(_.pathname),be=(0,u.Gh)(null==S?void 0:S.pages),ye=(0,u.Yx)(ge,be),xe=(0,u.xH)(ge,ye),we=(0,u.Lh)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),Ze=[];if(we.length)for(var Oe=we[we.length-1].level+1,Pe=function(e){var t=we.filter((function(t){return t.level===e}));t.length&&Ze.push(t.pop())},je=0;je<Oe;je++)Pe(je);var Ce=!1;null!=r&&null!==(Y=r.frontmatter)&&void 0!==Y&&Y.jsDoc&&(Ce=!0,L=(0,y.L)(L));var Ae=P({childrenArray:L,hasSideNav:D}),qe=Ae.filteredChildren,ze=Ae.heroChild,De=Ae.resourcesChild,Se=null===ze,_e=null!==ze&&(!ze.props.variant||"default"===ze.props.variant),ke=null!==ze&&ze.props.variant&&"default"!==ze.props.variant,Me=null==se||null===(J=se.items)||void 0===J||null===(K=J[0])||void 0===K?void 0:K.items,Te=!ze&&(D||Ce)&&Me&&(Me.length>1||1===Me.length&&(null===($=Me[0])||void 0===$||null===(I=$.items)||void 0===I?void 0:I.length)>1||(null===(V=Me[0])||void 0===V?void 0:V.title)),Ne=(null==ee?void 0:ee.pathname)===(null==te||null===(B=te[0])||void 0===B?void 0:B.pathname),Ee=[];return Te&&Ee.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),D&&Ee.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:O(O({},x.t),w.a)},(0,s.tZ)("main",{css:q},ze&&ze,(0,s.tZ)("div",{css:(0,s.iv)(ke?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",_e&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:A},(0,s.tZ)("div",{css:(0,s.iv)("width:",ke?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Ee),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Se&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},ye&&(0,s.tZ)("div",{css:C},!0!==(null==fe?void 0:fe.hidden)&&null!=fe&&fe.title&&null!=fe&&fe.href?(0,s.tZ)(h.O,{pages:[u.JK,fe,O(O({},ye),{},{href:(0,o.dq)(ye.href)}),xe&&O(O({},xe),{},{href:(0,o.dq)(xe.href)})].concat((0,i.Z)(Ze.map((function(e){return O(O({},e),{},{href:(0,o.dq)(e.href.replace("/_ROOT_/","/"))})}))))}):(0,s.tZ)(h.O,{pages:[u.JK,O(O({},null==S||null===(F=S.pages)||void 0===F?void 0:F[0]),{},{href:(0,o.dq)(null==S||null===(Q=S.pages)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.href)}),O(O({},ye),{},{href:(0,o.dq)(ye.href)}),xe&&O(O({},xe),{},{href:(0,o.dq)(xe.href)})].concat((0,i.Z)(Ze.map((function(e){return O(O({},e),{},{href:(0,o.dq)(e.href.replace("/_ROOT_/","/"))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:ue,branch:pe,root:ce,pagePath:he}))),qe,Se&&Ne&&(0,s.tZ)(g.x,{pages:te}),Se&&(0,s.tZ)(b.m,{nextPage:ie,previousPage:re}),!ke&&(0,s.tZ)("div",{css:j},(0,s.tZ)("div",null,(0,s.tZ)(c.T,{repository:ue,branch:pe,root:ce,pagePath:he,contributors:me,externalContributors:null==r||null===(W=r.frontmatter)||void 0===W?void 0:W.contributors,date:me[0]?new Date(me[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(v.x,null)))),Te&&(0,s.tZ)(f.m,{tableOfContents:se}),De&&De)),(0,s.tZ)(p.$,{hasSideNav:D})))}}}]);
//# sourceMappingURL=2dee68d8-0ba05c3cb0498fa2dd89.js.map