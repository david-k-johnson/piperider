"use strict";(self.webpackChunkpiperider_report=self.webpackChunkpiperider_report||[]).push([[826],{5826:function(e,n,i){i.r(n),i.d(n,{default:function(){return H}});var t=i(1413),s=i(885),l=i(5223),r=i(8735),a=i(6837),d=i(4385),o=i(8625),c=i(2791),u=i(3765),h=i(6157),v=i(2483),x=i(5987),j=i(1564),f=i(2504),g=i(7005),m=i(184);function p(e){switch(e.status){case"passed":return(0,m.jsx)(r.xv,{as:"span",role:"img",children:"\u2705"});case"failed":return(0,m.jsx)(r.xv,{as:"span",role:"img",children:"\u274c"});default:return(0,m.jsx)(r.xv,{as:"span",role:"img",children:"-"})}}function b(e){var n,i,t,s,l,r,a=e.data;return(0,m.jsx)(g.xJ,{children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{}),(0,m.jsx)(g.Th,{children:"Status"}),(0,m.jsx)(g.Th,{children:"Message"})]})}),(0,m.jsxs)(g.p3,{children:[(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{fontWeight:700,children:"Base"}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===a||void 0===a||null===(n=a.base)||void 0===n?void 0:n.status})}),(0,m.jsx)(g.Td,{children:null!==(i=null===a||void 0===a||null===(t=a.base)||void 0===t?void 0:t.message)&&void 0!==i?i:"-"})]}),(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{fontWeight:700,children:"Target"}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===a||void 0===a||null===(s=a.target)||void 0===s?void 0:s.status})}),(0,m.jsx)(g.Td,{children:null!==(l=null===a||void 0===a||null===(r=a.base)||void 0===r?void 0:r.message)&&void 0!==l?l:"-"})]})]})]})})}var y=i(1971);function T(e){var n,i,t,s,l,r,a=e.data;return(0,m.jsx)(g.xJ,{children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{}),(0,m.jsx)(g.Th,{children:"Status"}),(0,m.jsx)(g.Th,{children:"Expected"}),(0,m.jsx)(g.Th,{children:"Actual"})]})}),(0,m.jsxs)(g.p3,{children:[(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{fontWeight:700,children:"Base"}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===a||void 0===a||null===(n=a.base)||void 0===n?void 0:n.status})}),(0,m.jsx)(g.Td,{children:(0,y.sG)(null===a||void 0===a||null===(i=a.base)||void 0===i?void 0:i.expected)}),(0,m.jsx)(g.Td,{children:(0,y.sG)(null===a||void 0===a||null===(t=a.base)||void 0===t?void 0:t.actual)})]}),(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{fontWeight:700,children:"Target"}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===a||void 0===a||null===(s=a.target)||void 0===s?void 0:s.status})}),(0,m.jsx)(g.Td,{children:(0,y.sG)(null===a||void 0===a||null===(l=a.target)||void 0===l?void 0:l.expected)}),(0,m.jsx)(g.Td,{children:(0,y.sG)(null===a||void 0===a||null===(r=a.target)||void 0===r?void 0:r.actual)})]})]})]})})}var C=["data","type","isOpen","onClose"];function k(e){var n=e.data,i=e.type,s=void 0===i?"piperider":i,l=e.isOpen,a=e.onClose,d=(0,x.Z)(e,C);return(0,m.jsxs)(j.u_,(0,t.Z)((0,t.Z)({},d),{},{isOpen:l,size:"2xl",onClose:function(){a()},children:[(0,m.jsx)(j.ZA,{}),(0,m.jsxs)(j.hz,{children:[(0,m.jsx)(j.xB,{children:(0,m.jsx)(r.xv,{title:null===n||void 0===n?void 0:n.name,noOfLines:1,maxWidth:"calc(100% - 50px)",children:null===n||void 0===n?void 0:n.name})}),(0,m.jsx)(j.ol,{}),(0,m.jsx)(j.fe,{children:"piperider"===s?(0,m.jsx)(T,{data:n}):(0,m.jsx)(b,{data:n})}),(0,m.jsx)(j.mz,{children:(0,m.jsx)(f.zx,{onClick:a,children:"Close"})})]})]}))}var w=i(6523),Z=i(922),O=i(8453),A=i(9227),$=i(9842),_=["base","target"];function P(e){var n=e.data,i=(0,c.useRef)(null),t=(0,c.useRef)(null);return function(e){var n=e.target,i=e.data,t=e.dimensions;(0,c.useEffect)((function(){if(n&&t&&i){var e=A.Ys(n.current),s=A.tiA().domain(i.map((function(e){return e.label}))).range([0,t.width]).padding(.2),l=A.tiA().domain(_).range([0,s.bandwidth()]).padding(.05),r=A.LLu(s).tickFormat((function(e,n){var i=s.domain().length-1;return 0===n||n===i/2||n===i?e:null}));e.select(".x-axis").style("transform","translateY(".concat(t.height,"px)")).call(r);var a=A.BYU().domain([0,A.Fp7(i,(function(e){var n=e.base,i=e.target;return Math.max(n,i)}))]).range([t.height,0]),d=A.y4O(a);e.select(".y-axis").call(d);var o=A.PKp().domain(_).range(["var(--chakra-colors-blue-100)","var(--chakra-colors-blue-300)"]),c=e.selectAll(".grouped-chart").data(i).join("g").attr("class","grouped-chart").attr("transform",(function(e){return"translate(".concat(s(e.label),", 0)")})),u=(0,$.v)({target:".chart"});return c.selectAll("rect").data((function(e){return _.map((function(n){return{key:n,label:e.label,value:e[n]}}))})).enter().append("rect").attr("x",(function(e){return l(e.key)})).attr("y",(function(e){return a(e.value)})).attr("width",(function(e){return l.bandwidth()})).attr("height",(function(e){return t.height-a(e.value)})).attr("fill",(function(e){return o(e.key)})),c.selectAll(".overlay-bars").data((function(e){return _.map((function(n){return{key:n,label:e.label,value:e[n]}}))})).join("rect").attr("class","overlay-bars").attr("x",(function(e){return l(e.key)})).attr("y",(function(){return 0})).attr("width",l.bandwidth()).attr("height",(function(){return t.height})).attr("fill",(function(e){return o(e.key)})).style("opacity",0).on("mouseover",(function(e,n){u.html("\n        <div>\n          <p>Label: ".concat(n.label,"</p>\n          <p>Count: ").concat((0,y.uf)(n.value),"</p>\n        </div>\n      ")).transition().duration(500).style("visibility","visible"),A.Ys(this).style("fill","var(--chakra-colors-gray-500)").style("opacity",.3)})).on("mousemove",(function(e){u.style("top","".concat(e.pageY-10,"px")).style("left","".concat(e.pageX+10,"px"))})).on("mouseout",(function(){u.html("").transition().duration(500).style("visibility","hidden"),A.Ys(this).style("opacity",0)})),function(){e.select("svg").remove()}}}),[i,t,n])}({target:i,data:n,dimensions:(0,O.y)(t)}),(0,m.jsx)(r.kC,{className:"chart",width:"100%",ref:t,children:(0,m.jsxs)("svg",{width:"100%",overflow:"visible",ref:i,children:[(0,m.jsx)("g",{className:"x-axis"}),(0,m.jsx)("g",{className:"y-axis"})]})})}var W=i(709),N=i(6108),S=i(8662),z=function(e){var n,i,t,s,l=e.column,a=e.baseColumn,d=e.targetColumn,o="-";return(0,w.h5)(w.a$.safeParse(l)),(0,w.h5)(w.a$.safeParse(a)),(0,w.h5)(w.a$.safeParse(d)),(0,m.jsx)(r.kC,{direction:"column",gap:2,minH:"250px",children:(0,m.jsxs)(r.kC,{direction:"column",gap:3,children:[(0,m.jsxs)(r.kC,{justifyContent:"space-between",children:[(0,m.jsxs)(r.xv,{maxWidth:"calc(100% - 250px)",children:[(0,m.jsx)(r.xv,{as:"span",fontWeight:700,color:"gray.900",fontSize:"lg",mr:1,noOfLines:1,title:l.name,children:l.name}),"","(",(0,m.jsx)(r.EK,{children:l.schema_type}),")"]}),(0,m.jsxs)(r.kC,{gap:8,children:[(0,m.jsx)(r.xv,{fontWeight:700,textAlign:"right",width:"100px",children:"Base"}),(0,m.jsx)(r.xv,{fontWeight:700,textAlign:"right",width:"100px",children:"Target"})]})]}),(0,m.jsx)(r.kC,{direction:"column",mt:3,children:(0,m.jsx)(W.H,{targetColumn:d,baseColumn:a})}),"numeric"===l.type&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(S.D,{baseColumn:a,targetColumn:d})}),"datetime"===l.type&&(0,m.jsxs)(r.kC,{direction:"column",children:[(0,m.jsx)(N.$,{name:"Min",base:null!==(n=null===a||void 0===a?void 0:a.min)&&void 0!==n?n:o,target:null!==(i=null===d||void 0===d?void 0:d.min)&&void 0!==i?i:o}),(0,m.jsx)(N.$,{name:"Max",base:null!==(t=null===a||void 0===a?void 0:a.max)&&void 0!==t?t:o,target:null!==(s=null===d||void 0===d?void 0:d.max)&&void 0!==s?s:o})]})]})})};function L(e){var n=e.baseTable,i=e.targetTable;(0,w.h5)(w.vT.safeParse(n)),(0,w.h5)(w.vT.safeParse(i));var t=(0,Z.Ds)(n.columns,i.columns);return(0,m.jsx)(m.Fragment,{children:Object.entries(t).map((function(e){var n=(0,s.Z)(e,2),i=n[0],t=n[1];return(0,m.jsx)(F,{name:i,base:t.base,target:t.target},i)}))})}function F(e){var n=e.name,i=e.base,t=e.target,l=(0,c.useState)([]),a=(0,s.Z)(l,2),d=a[0],o=a[1];return(0,c.useEffect)((function(){if((null===i||void 0===i?void 0:i.type)!==(null===t||void 0===t?void 0:t.type)||"string"!==(null===i||void 0===i?void 0:i.type)&&"datetime"!==(null===i||void 0===i?void 0:i.type)){var e=null!==i&&void 0!==i&&i.distribution?(0,Z.Fo)({baseCounts:i.distribution.counts,baseLabels:i.distribution.labels}):null,n=null!==t&&void 0!==t&&t.distribution?(0,Z.Fo)({baseCounts:t.distribution.counts,baseLabels:t.distribution.labels}):null;o([e,n])}else{var s=null!==i&&void 0!==i&&i.distribution&&null!==t&&void 0!==t&&t.distribution?(0,Z.NN)({base:i.distribution,target:t.distribution}):null;o([s])}}),[i,t]),(0,m.jsx)(r.kC,{direction:"column",children:(0,m.jsxs)(r.rj,{my:8,templateColumns:"500px 1fr",gap:12,children:[(0,m.jsx)(z,{baseColumn:i,targetColumn:t,column:i||t}),1===d.length&&(0,m.jsx)(P,{data:d[0]}),2===d.length&&(0,m.jsxs)(r.rj,{my:4,templateColumns:"1fr 1fr",gap:12,children:[d[0]?(0,m.jsx)(P,{data:d[0]}):(0,m.jsx)(Y,{}),d[1]?(0,m.jsx)(P,{data:d[1]}):(0,m.jsx)(Y,{})]})]})},n)}function Y(){return(0,m.jsx)(r.kC,{alignItems:"center",justifyContent:"center",color:"gray.500",children:"No data available"})}var D=i(2982),B=i(5984),M=function(e,n){return Object.entries(e).map((function(e){var i=(0,s.Z)(e,2),l=i[0],r=i[1];return(0,t.Z)((0,t.Z)({},r),{},{key:l,type:n,changed:!1})}))};function R(e){var n=e.base,i=e.target;(0,w.h5)(w.vT.safeParse(n)),(0,w.h5)(w.vT.safeParse(i));var s=M(n.columns,"base"),l=M(i.columns,"target"),a=[].concat((0,D.Z)(s),(0,D.Z)(l)),d=l.length-s.length,o=s.length-l.length,c=a.reduce((function(e,n,i,l){var r=i<s.length?i:i-s.length,d=i>=s.length?i:i+s.length,o=a[r].schema_type!==a[d].schema_type,c=e.changed+(o?1:0),u=(0,t.Z)({name:n.name,changed:o},n);return(0,t.Z)((0,t.Z)({},e),{},{changed:c,columns:[].concat((0,D.Z)(e.columns),[u])})}),{added:d,deleted:o,changed:0,columns:[]}),u=c.added,h=c.deleted,v=c.changed,x=c.columns,j=x.slice(0,s.length),f=x.slice(s.length);return(0,m.jsxs)(r.kC,{direction:"column",children:[(0,m.jsxs)(r.xv,{mb:4,p:2,children:["Added:",(0,m.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:u}),", Deleted:",(0,m.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:h}),", Changed:"," ",(0,m.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:v})]}),(0,m.jsxs)(r.kC,{justifyContent:"space-evenly",children:[(0,m.jsx)(g.xJ,{width:"50%",children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{children:"Column"}),(0,m.jsx)(g.Th,{children:"Type"})]})}),(0,m.jsx)(g.p3,{children:j.map((function(e){var n,i;return(0,m.jsxs)(g.Tr,{color:e.changed?"red.500":"inherit",children:[(0,m.jsx)(g.Td,{children:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:"-"}),(0,m.jsx)(g.Td,{children:null!==(i=null===e||void 0===e?void 0:e.schema_type)&&void 0!==i?i:"-"})]},(0,B.x0)(10))}))})]})}),(0,m.jsx)(r.kC,{justifyContent:"center",children:(0,m.jsx)(r.iz,{orientation:"vertical"})}),(0,m.jsx)(g.xJ,{width:"50%",children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{children:"Column"}),(0,m.jsx)(g.Th,{children:"Type"})]})}),(0,m.jsx)(g.p3,{children:f.map((function(e){var n,i;return(0,m.jsxs)(g.Tr,{color:e.changed?"red.500":"inherit",children:[(0,m.jsx)(g.Td,{children:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:"-"}),(0,m.jsx)(g.Td,{children:null!==(i=null===e||void 0===e?void 0:e.schema_type)&&void 0!==i?i:"-"})]},(0,B.x0)(10))}))})]})})]})]})}var E=i(8444),I=i.n(E),J=["base","target"];function K(e){var n=e.base,i=void 0===n?[]:n,t=e.target,s=void 0===t?[]:t,l=(0,x.Z)(e,J),a=I()([].concat((0,D.Z)(i),(0,D.Z)(s)),(function(e){return"".concat(e.level,"_").concat(e.column,"_").concat(e.name)})),d=Object.values(a).map((function(e){var n={level:e[0].level,column:e[0].column,name:e[0].name};return e.forEach((function(e){"base"===e.from?n.base=e:n.target=e})),n}));return 0===d.length?(0,m.jsx)(r.kC,{direction:"column",children:(0,m.jsx)(r.xv,{textAlign:"center",children:"No tests available"})}):(0,m.jsx)(g.xJ,{children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{children:"Level"}),(0,m.jsx)(g.Th,{children:"Column"}),(0,m.jsx)(g.Th,{children:"Assertion"}),(0,m.jsx)(g.Th,{children:"Base Status"}),(0,m.jsx)(g.Th,{children:"Target Status"}),(0,m.jsx)(g.Th,{})]})}),(0,m.jsx)(g.p3,{children:Object.values(d).map((function(e){var n,i;return(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{children:e.level}),(0,m.jsx)(g.Td,{children:e.column}),(0,m.jsx)(g.Td,{children:e.name}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===(n=e.base)||void 0===n?void 0:n.status})}),(0,m.jsx)(g.Td,{children:(0,m.jsx)(p,{status:null===(i=e.target)||void 0===i?void 0:i.status})}),(0,m.jsx)(g.Td,{onClick:function(){l.onDetailVisible(e)},children:(0,m.jsx)(r.xv,{as:"span",cursor:"pointer",children:"\ud83d\udd0d"})})]},(0,B.x0)())}))})]})})}function G(e){var n,i,t,s,l,a,d=e.baseTable,o=e.targetTable;(0,w.h5)(w.vT.safeParse(d)),(0,w.h5)(w.vT.safeParse(o));var c=(0,h.YI)(null===d||void 0===d?void 0:d.piperider_assertion_result,null===d||void 0===d?void 0:d.dbt_assertion_result),u=(0,h.YI)(null===o||void 0===o?void 0:o.piperider_assertion_result,null===o||void 0===o?void 0:o.dbt_assertion_result);return(0,m.jsx)(g.xJ,{children:(0,m.jsxs)(g.iA,{variant:"simple",children:[(0,m.jsx)(g.hr,{children:(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Th,{width:"10%"}),(0,m.jsx)(g.Th,{width:"45%",children:"Base"}),(0,m.jsx)(g.Th,{width:"45%",children:"Target"})]})}),(0,m.jsxs)(g.p3,{children:[(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{children:"Table"}),(0,m.jsx)(g.Td,{children:null!==(n=null===d||void 0===d?void 0:d.name)&&void 0!==n?n:"-"}),(0,m.jsx)(g.Td,{children:null!==(i=null===o||void 0===o?void 0:o.name)&&void 0!==i?i:"-"})]}),(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{children:"Rows"}),(0,m.jsx)(g.Td,{children:null!==(t=null===d||void 0===d?void 0:d.row_count)&&void 0!==t?t:"-"}),(0,m.jsx)(g.Td,{children:null!==(s=null===o||void 0===o?void 0:o.row_count)&&void 0!==s?s:"-"})]}),(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{children:"Columns"}),(0,m.jsx)(g.Td,{children:null!==(l=null===d||void 0===d?void 0:d.col_count)&&void 0!==l?l:"-"}),(0,m.jsx)(g.Td,{children:null!==(a=null===o||void 0===o?void 0:o.col_count)&&void 0!==a?a:"-"})]}),(0,m.jsxs)(g.Tr,{children:[(0,m.jsx)(g.Td,{children:"Test status"}),(0,m.jsx)(g.Td,{children:(0,m.jsxs)(r.xv,{children:[(0,m.jsxs)(r.xv,{as:"span",fontWeight:700,children:[c.passed," "]}),"Passed",", ",(0,m.jsxs)(r.xv,{as:"span",fontWeight:700,color:c.failed>0?"red.500":"inherit",children:[c.failed," "]}),"Failed"]})}),(0,m.jsx)(g.Td,{children:(0,m.jsxs)(r.xv,{children:[(0,m.jsxs)(r.xv,{as:"span",fontWeight:700,children:[u.passed," "]}),"Passed",", ",(0,m.jsxs)(r.xv,{as:"span",fontWeight:700,color:u.failed>0?"red.500":"inherit",children:[u.failed," "]}),"Failed"]})})]})]})]})})}function H(e){var n,i=e.data,x=e.name,j=(0,c.useState)(null),f=(0,s.Z)(j,2),g=f[0],p=f[1],b=(0,l.qY)(),y=i.base,T=i.input;(0,w.h5)((0,w.C6)(!0).safeParse(i));var C=y.tables[x],Z=T.tables[x],O=null===(n=y.tables[x])||void 0===n?void 0:n.dbt_assertion_result;(0,w.h5)(w.vT.safeParse(C)),(0,w.h5)(w.vT.safeParse(Z));var A=(0,h.Ix)({data:i,reportName:x,type:"piperider"}),$=(0,s.Z)(A,2),_=$[0],P=$[1],W=(0,h.Ix)({data:i,reportName:x,type:"dbt"}),N=(0,s.Z)(W,2),S=N[0],z=N[1];return(0,v.j)(x),(0,m.jsxs)(u.o,{children:[(0,m.jsxs)(r.kC,{direction:"column",minH:"calc(100vh + 1px)",width:"100%",children:[(0,m.jsx)(r.kC,{mx:"10%",mt:4,children:(0,m.jsxs)(a.aG,{fontSize:"lg",children:[(0,m.jsx)(a.gN,{children:(0,m.jsx)(o.rU,{href:"/",children:(0,m.jsx)(a.At,{href:"/","data-cy":"cr-report-breadcrumb-back",children:"Tables"})})}),(0,m.jsx)(a.gN,{isCurrentPage:!0,children:(0,m.jsx)(a.At,{href:"#",children:x})})]})}),(0,m.jsxs)(r.kC,{border:"1px solid",borderColor:"gray.300",bg:"white",borderRadius:"md",p:6,mt:3,mx:"10%",direction:"column",gap:8,children:[(0,m.jsx)(r.X6,{fontSize:24,children:"Overview"}),(0,m.jsx)(G,{baseTable:C,targetTable:Z}),(0,m.jsxs)(d.mQ,{isLazy:!0,children:[(0,m.jsxs)(d.td,{children:[(0,m.jsx)(d.OK,{children:"Schema"}),(0,m.jsx)(d.OK,{"data-cy":"cr-report-tab-item-profiling",children:"Profiling"}),(0,m.jsx)(d.OK,{"data-cy":"cr-report-tab-item-tests",children:"Tests"}),O&&(0,m.jsx)(d.OK,{children:"dbt Tests"})]}),(0,m.jsxs)(d.nP,{children:[(0,m.jsx)(d.x4,{children:(0,m.jsx)(R,{base:C,target:Z})}),(0,m.jsx)(d.x4,{children:(0,m.jsx)(L,{baseTable:C,targetTable:Z})}),(0,m.jsx)(d.x4,{children:(0,m.jsx)(K,{base:null===_||void 0===_?void 0:_.tests,target:null===P||void 0===P?void 0:P.tests,onDetailVisible:function(e){p({type:"piperider",data:e}),b.onOpen()}})}),(0,m.jsx)(d.x4,{children:0===(null===S||void 0===S?void 0:S.tests.length)&&0===(null===z||void 0===z?void 0:z.tests.length)?(0,m.jsx)(r.kC,{justifyContent:"center",alignItems:"center",height:"100px",children:(0,m.jsx)(r.xv,{color:"gray.500",children:"No dbt tests available."})}):(0,m.jsx)(K,{base:null===S||void 0===S?void 0:S.tests,target:null===z||void 0===z?void 0:z.tests,onDetailVisible:function(e){p({type:"dbt",data:e}),b.onOpen()}})})]})]})]})]}),(0,m.jsx)(k,(0,t.Z)((0,t.Z)({},b),{},{type:null===g||void 0===g?void 0:g.type,data:null===g||void 0===g?void 0:g.data,onClose:function(){b.onClose(),p(null)}}))]})}},709:function(e,n,i){i.d(n,{H:function(){return d}});var t=i(6523),s=i(1971),l=i(922),r=i(6108),a=i(184);function d(e){var n=e.baseColumn,i=e.targetColumn;if(n){(0,t.h5)(t.a$.safeParse(n));var d=(0,l.gQ)(n),o=d.totalOfTotal,c=d.valid,u=d.total,h=d.mismatch,v=d.missing,x=d.mismatchOfTotal,j=d.validOfTotal,f=d.missingOfTotal}if(i){(0,t.h5)(t.a$.safeParse(i));var g=(0,l.gQ)(i),m=g.total,p=g.mismatchOfTotal,b=g.validOfTotal,y=g.missingOfTotal}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.$,{name:"Total",base:(0,s.uy)(u,s.uf),target:(0,s.uy)(i?m:o,i?s.uf:s.Zn)}),(0,a.jsx)(r.$,{name:"Valid",base:(0,s.uy)(i?j:c,i?s.Zn:s.uf),target:(0,s.uy)(i?b:j,s.Zn)}),(0,a.jsx)(r.$,{name:"Mismatched",base:(0,s.uy)(i?x:h,i?s.Zn:s.uf),target:(0,s.uy)(i?p:x,s.Zn)}),(0,a.jsx)(r.$,{name:"Missing",base:(0,s.uy)(i?f:v,i?s.Zn:s.uf),target:(0,s.uy)(i?y:f,s.Zn)}),(0,a.jsx)(r.$,{name:"Distinct",base:(0,s.uy)(null===n||void 0===n?void 0:n.distinct,s.uf),target:i&&(0,s.uy)(null===i||void 0===i?void 0:i.distinct,s.uf)})]})}},6108:function(e,n,i){i.d(n,{$:function(){return l}});var t=i(8735),s=i(184);function l(e){var n=e.name,i=e.base,l=e.target,r=void 0===l?null:l,a=e.baseWidth,d=void 0===a?"100px":a,o=e.targetWidth,c=void 0===o?"100px":o;return(0,s.jsxs)(t.kC,{justifyContent:"space-between",children:[(0,s.jsx)(t.xv,{fontWeight:700,children:n}),(0,s.jsxs)(t.kC,{gap:{lg:5,md:1},children:[(0,s.jsx)(t.xv,{textAlign:"right",width:d,noOfLines:1,children:i}),r&&(0,s.jsx)(t.xv,{textAlign:"right",width:c,children:r})]})]})}},8662:function(e,n,i){i.d(n,{D:function(){return d}});var t=i(8735),s=i(6523),l=i(1971),r=i(6108),a=i(184);function d(e){var n=e.baseColumn,i=e.targetColumn;return(0,s.h5)(s.a$.safeParse(n)),(0,s.h5)(s.a$.safeParse(n)),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.kC,{direction:"column",children:[(0,a.jsx)(r.$,{name:"Average",base:(0,l.uy)(null===n||void 0===n?void 0:n.avg,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.avg,l.uf)}),(0,a.jsx)(r.$,{name:"Std. Deviation",base:(0,l.uy)(null===n||void 0===n?void 0:n.stddev,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.stddev,l.uf)})]}),(0,a.jsxs)(t.kC,{direction:"column",children:[(0,a.jsx)(r.$,{name:"Min",base:(0,l.uy)(null===n||void 0===n?void 0:n.min,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.min,l.uf)}),(0,a.jsx)(r.$,{name:"5%",base:(0,l.uy)(null===n||void 0===n?void 0:n.p5,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.p5,l.uf)}),(0,a.jsx)(r.$,{name:"25%",base:(0,l.uy)(null===n||void 0===n?void 0:n.p25,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.p25,l.uf)}),(0,a.jsx)(r.$,{name:"50%",base:(0,l.uy)(null===n||void 0===n?void 0:n.p50,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.p50,l.uf)}),(0,a.jsx)(r.$,{name:"75%",base:(0,l.uy)(null===n||void 0===n?void 0:n.p75,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.p75,l.uf)}),(0,a.jsx)(r.$,{name:"95%",base:(0,l.uy)(null===n||void 0===n?void 0:n.p95,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.p95,l.uf)}),(0,a.jsx)(r.$,{name:"Max",base:(0,l.uy)(null===n||void 0===n?void 0:n.max,l.uf),target:i&&(0,l.uy)(null===i||void 0===i?void 0:i.max,l.uf)})]})]})}},8453:function(e,n,i){i.d(n,{y:function(){return l}});var t=i(885),s=i(2791);function l(e){var n=(0,s.useState)(null),i=(0,t.Z)(n,2),l=i[0],r=i[1];return(0,s.useEffect)((function(){if(e&&e.current){var n=e.current,i=new ResizeObserver((function(e){e.forEach((function(e){r(e.contentRect)}))}));return i.observe(n),function(){i.unobserve(n)}}}),[e]),l}},9842:function(e,n,i){i.d(n,{v:function(){return u}});var t=i(9227),s="var(--chakra-space-2)",l="var(--chakra-space-2)",r="var(--chakra-space-4)",a="var(--chakra-space-4)",d="var(--chakra-radii-md)",o="var(--chakra-colors-white)",c="var(--chakra-colors-blackAlpha-700)";function u(e){var n=e.target,i=e.style,u=void 0===i?{}:i;return t.Ys(n).append("div").style("visibility","hidden").style("position","absolute").style("z-index","9").style("padding-top",(null===u||void 0===u?void 0:u.paddingTop)||s).style("padding-bottom",(null===u||void 0===u?void 0:u.paddingBottom)||l).style("border-radius",(null===u||void 0===u?void 0:u.borderRadius)||d).style("padding-left",(null===u||void 0===u?void 0:u.paddingLeft)||r).style("padding-right",(null===u||void 0===u?void 0:u.paddingRight)||a).style("color",(null===u||void 0===u?void 0:u.color)||o).style("background-color",(null===u||void 0===u?void 0:u.backgroundColor)||c)}}}]);
//# sourceMappingURL=826.c858d4cc.chunk.js.map