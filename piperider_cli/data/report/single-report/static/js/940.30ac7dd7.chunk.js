"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[940],{6835:function(e,t,n){n.d(t,{At:function(){return Z},aG:function(){return x},gN:function(){return N}});var r=n(2175),i=n(7932),a=n(1431),o=n(1756),s=n(5197),u=n(4054),l=n(4176),c=n(7469),d=["children","spacing","separator","className","listProps"],f=["spacing"],m=["isCurrentPage","as","className","href"],h=["isCurrentPage","separator","isLastChild","spacing","children","className"],v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},p=(0,c.k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "}),g=(0,a.Z)(p,2),b=g[0],y=g[1],x=(0,u.Gp)((function(e,t){var n=(0,u.jC)("Breadcrumb",e),a=(0,l.Lr)(e),c=a.children,f=a.spacing,m=void 0===f?"0.5rem":f,h=a.separator,p=void 0===h?"/":h,g=a.className,y=a.listProps,x=(0,i.Z)(a,d),k=(0,s.W)(c),Z=k.length,N=k.map((function(e,t){return(0,o.cloneElement)(e,{separator:p,spacing:m,isLastChild:Z===t+1})})),w=v("chakra-breadcrumb",g);return o.createElement(u.m$.nav,(0,r.Z)({ref:t,"aria-label":"breadcrumb",className:w,__css:n.container},x),o.createElement(b,{value:n},o.createElement(u.m$.ol,(0,r.Z)((0,r.Z)({className:"chakra-breadcrumb__list"},y),{},{__css:(0,r.Z)({display:"flex",alignItems:"center"},n.list)}),N)))}));x.displayName="Breadcrumb";var k=(0,u.Gp)((function(e,t){var n=e.spacing,a=(0,i.Z)(e,f),s=y(),l=(0,r.Z)({mx:n},s.separator);return o.createElement(u.m$.span,(0,r.Z)((0,r.Z)({ref:t,role:"presentation"},a),{},{__css:l}))}));k.displayName="BreadcrumbSeparator";var Z=(0,u.Gp)((function(e,t){var n=e.isCurrentPage,a=e.as,s=e.className,l=e.href,c=(0,i.Z)(e,m),d=y(),f=(0,r.Z)({ref:t,as:a,className:v("chakra-breadcrumb__link",s)},c);return n?o.createElement(u.m$.span,(0,r.Z)({"aria-current":"page",__css:d.link},f)):o.createElement(u.m$.a,(0,r.Z)({__css:d.link,href:l},f))}));Z.displayName="BreadcrumbLink";var N=(0,u.Gp)((function(e,t){var n=e.isCurrentPage,a=e.separator,l=e.isLastChild,c=e.spacing,d=e.children,f=e.className,m=(0,i.Z)(e,h),p=(0,s.W)(d).map((function(e){return e.type===Z?(0,o.cloneElement)(e,{isCurrentPage:n}):e.type===k?(0,o.cloneElement)(e,{spacing:c,children:e.props.children||a}):e})),g=y(),b=(0,r.Z)({display:"inline-flex",alignItems:"center"},g.item),x=v("chakra-breadcrumb__list-item",f);return o.createElement(u.m$.li,(0,r.Z)((0,r.Z)({ref:t,className:x},m),{},{__css:b}),p,!l&&o.createElement(k,{spacing:c},a))}));N.displayName="BreadcrumbItem"},9355:function(e,t,n){n.d(t,{OK:function(){return ce},td:function(){return se},x4:function(){return ue},nP:function(){return le},mQ:function(){return oe}});var r=n(2175),i=n(3293),a=n(7932),o=n(1431),s=n(1756),u=n(4054),l=n(7469),c=n(4176),d=n(9130),f=["ref","isDisabled","isFocusable","clickOnEnter","clickOnSpace","onMouseDown","onMouseUp","onClick","onKeyDown","onKeyUp","tabIndex","onMouseOver","onMouseLeave"],m=function(e){return e?"":void 0};function h(){var e=(0,s.useRef)(new Map),t=e.current,n=(0,s.useCallback)((function(t,n,r,i){e.current.set(r,{type:n,el:t,options:i}),t.addEventListener(n,r,i)}),[]),r=(0,s.useCallback)((function(t,n,r,i){t.removeEventListener(n,r,i),e.current.delete(r)}),[]);return(0,s.useEffect)((function(){return function(){t.forEach((function(e,t){r(e.el,e.type,t,e.options)}))}}),[r,t]),{add:n,remove:r}}function v(e){var t=e.target,n=t.tagName,r=t.isContentEditable;return"INPUT"!==n&&"TEXTAREA"!==n&&!0!==r}var p=n(7537),g=n(4941);function b(e){return e.sort((function(e,t){var n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function y(e,t,n){var r=e+1;return n&&r>=t&&(r=0),r}function x(e,t,n){var r=e-1;return n&&r<0&&(r=t),r}var k="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,Z=(0,p.Z)((function e(){var t=this;(0,g.Z)(this,e),(0,i.Z)(this,"descendants",new Map),(0,i.Z)(this,"register",(function(e){var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?t.registerNode(e):function(n){t.registerNode(n,e)}})),(0,i.Z)(this,"unregister",(function(e){t.descendants.delete(e);var n=b(Array.from(t.descendants.keys()));t.assignIndex(n)})),(0,i.Z)(this,"destroy",(function(){t.descendants.clear()})),(0,i.Z)(this,"assignIndex",(function(e){t.descendants.forEach((function(t){var n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()}))})),(0,i.Z)(this,"count",(function(){return t.descendants.size})),(0,i.Z)(this,"enabledCount",(function(){return t.enabledValues().length})),(0,i.Z)(this,"values",(function(){return Array.from(t.descendants.values()).sort((function(e,t){return e.index-t.index}))})),(0,i.Z)(this,"enabledValues",(function(){return t.values().filter((function(e){return!e.disabled}))})),(0,i.Z)(this,"item",(function(e){if(0!==t.count())return t.values()[e]})),(0,i.Z)(this,"enabledItem",(function(e){if(0!==t.enabledCount())return t.enabledValues()[e]})),(0,i.Z)(this,"first",(function(){return t.item(0)})),(0,i.Z)(this,"firstEnabled",(function(){return t.enabledItem(0)})),(0,i.Z)(this,"last",(function(){return t.item(t.descendants.size-1)})),(0,i.Z)(this,"lastEnabled",(function(){var e=t.enabledValues().length-1;return t.enabledItem(e)})),(0,i.Z)(this,"indexOf",(function(e){var n,r;return e&&null!==(n=null==(r=t.descendants.get(e))?void 0:r.index)&&void 0!==n?n:-1})),(0,i.Z)(this,"enabledIndexOf",(function(e){return null==e?-1:t.enabledValues().findIndex((function(t){return t.node.isSameNode(e)}))})),(0,i.Z)(this,"next",(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=y(e,t.count(),n);return t.item(r)})),(0,i.Z)(this,"nextEnabled",(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.item(e);if(r){var i=t.enabledIndexOf(r.node),a=y(i,t.enabledCount(),n);return t.enabledItem(a)}})),(0,i.Z)(this,"prev",(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=x(e,t.count()-1,n);return t.item(r)})),(0,i.Z)(this,"prevEnabled",(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.item(e);if(r){var i=t.enabledIndexOf(r.node),a=x(i,t.enabledCount()-1,n);return t.enabledItem(a)}})),(0,i.Z)(this,"registerNode",(function(e,n){if(e&&!t.descendants.has(e)){var i=b(Array.from(t.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);var a=(0,r.Z)({node:e,index:-1},n);t.descendants.set(e,a),t.assignIndex(i)}}))}));var N=(0,l.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),w=(0,o.Z)(N,2),_=w[0],C=w[1];var M=n(5540),q=n(5857);var I=n(5197);var E=["defaultIndex","onChange","index","isManual","isLazy","lazyBehavior","orientation","direction"],S=["isDisabled","isFocusable"],T=["children"],P=["children","className"],B=["htmlProps","descendants"],O=["isFitted"],A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")};function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.some((function(t){return null==t||t(e),null==e?void 0:e.defaultPrevented}))}}var R=[_,function(){return C()},function(){return function(){var e=(0,s.useRef)(new Z);return k((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var t=C(),n=(0,s.useState)(-1),r=(0,o.Z)(n,2),i=r[0],a=r[1],u=(0,s.useRef)(null);k((function(){return function(){u.current&&t.unregister(u.current)}}),[]),k((function(){if(u.current){var e=Number(u.current.dataset.index);i==e||Number.isNaN(e)||a(e)}}));var l=e?t.register(e):t.register;return{descendants:t,index:i,enabledIndex:t.enabledIndexOf(u.current),register:(0,d.lq)(l,u)}}(e)}],L=(0,o.Z)(R,4),W=L[0],V=L[1],F=L[2],U=L[3];function z(e){var t,n=e.defaultIndex,r=e.onChange,i=e.index,u=e.isManual,l=e.isLazy,c=e.lazyBehavior,d=void 0===c?"unmount":c,f=e.orientation,m=void 0===f?"horizontal":f,h=e.direction,v=void 0===h?"ltr":h,p=(0,a.Z)(e,E),g=(0,s.useState)(null!==n&&void 0!==n?n:0),b=(0,o.Z)(g,2),y=b[0],x=b[1],k=function(e){var t=e.value,n=e.defaultValue,r=e.onChange,i=e.shouldUpdate,a=void 0===i?function(e,t){return e!==t}:i,u=(0,q.W)(r),l=(0,q.W)(a),c=(0,s.useState)(n),d=(0,o.Z)(c,2),f=d[0],m=d[1],h=void 0!==t,v=h?t:f,p=(0,q.W)((function(e){var t="function"===typeof e?e(v):e;l(v,t)&&(h||m(t),u(t))}),[h,u,v,l]);return[v,p]}({defaultValue:null!==n&&void 0!==n?n:0,value:i,onChange:r}),Z=(0,o.Z)(k,2),N=Z[0],w=Z[1];(0,s.useEffect)((function(){null!=i&&x(i)}),[i]);var _=F(),C=(0,s.useId)(),M=null!==(t=e.id)&&void 0!==t?t:C;return{id:"tabs-".concat(M),selectedIndex:N,focusedIndex:y,setSelectedIndex:w,setFocusedIndex:x,isManual:u,isLazy:l,lazyBehavior:d,orientation:m,descendants:_,direction:v,htmlProps:p}}var G=(0,l.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),$=(0,o.Z)(G,2),H=$[0],K=$[1];function j(e){var t=e.isDisabled,n=e.isFocusable,i=(0,a.Z)(e,S),u=K(),l=u.setSelectedIndex,c=u.isManual,p=u.id,g=u.setFocusedIndex,b=u.selectedIndex,y=U({disabled:t&&!n}),x=y.index,k=y.register,Z=x===b,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ref,n=e.isDisabled,i=e.isFocusable,u=e.clickOnEnter,l=void 0===u||u,c=e.clickOnSpace,p=void 0===c||c,g=e.onMouseDown,b=e.onMouseUp,y=e.onClick,x=e.onKeyDown,k=e.onKeyUp,Z=e.tabIndex,N=e.onMouseOver,w=e.onMouseLeave,_=(0,a.Z)(e,f),C=(0,s.useState)(!0),M=(0,o.Z)(C,2),q=M[0],I=M[1],E=(0,s.useState)(!1),S=(0,o.Z)(E,2),T=S[0],P=S[1],B=h(),O=function(e){e&&"BUTTON"!==e.tagName&&I(!1)},A=q?Z:Z||0,D=n&&!i,R=(0,s.useCallback)((function(e){if(n)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==y||y(e)}),[n,y]),L=(0,s.useCallback)((function(e){T&&v(e)&&(e.preventDefault(),e.stopPropagation(),P(!1),B.remove(document,"keyup",L,!1))}),[T,B]),W=(0,s.useCallback)((function(e){if(null==x||x(e),!(n||e.defaultPrevented||e.metaKey)&&v(e.nativeEvent)&&!q){var t=l&&"Enter"===e.key;p&&" "===e.key&&(e.preventDefault(),P(!0)),t&&(e.preventDefault(),e.currentTarget.click()),B.add(document,"keyup",L,!1)}}),[n,q,x,l,p,B,L]),V=(0,s.useCallback)((function(e){null==k||k(e),n||e.defaultPrevented||e.metaKey||v(e.nativeEvent)&&!q&&p&&" "===e.key&&(e.preventDefault(),P(!1),e.currentTarget.click())}),[p,q,n,k]),F=(0,s.useCallback)((function(e){0===e.button&&(P(!1),B.remove(document,"mouseup",F,!1))}),[B]),U=(0,s.useCallback)((function(e){if(0===e.button){if(n)return e.stopPropagation(),void e.preventDefault();q||P(!0),e.currentTarget.focus({preventScroll:!0}),B.add(document,"mouseup",F,!1),null==g||g(e)}}),[n,q,g,B,F]),z=(0,s.useCallback)((function(e){0===e.button&&(q||P(!1),null==b||b(e))}),[b,q]),G=(0,s.useCallback)((function(e){n?e.preventDefault():null==N||N(e)}),[n,N]),$=(0,s.useCallback)((function(e){T&&(e.preventDefault(),P(!1)),null==w||w(e)}),[T,w]),H=(0,d.lq)(t,O);return q?(0,r.Z)((0,r.Z)({},_),{},{ref:H,type:"button","aria-disabled":D?void 0:n,disabled:D,onClick:R,onMouseDown:g,onMouseUp:b,onKeyUp:k,onKeyDown:x,onMouseOver:N,onMouseLeave:w}):(0,r.Z)((0,r.Z)({},_),{},{ref:H,role:"button","data-active":m(T),"aria-disabled":n?"true":void 0,tabIndex:D?void 0:A,onClick:R,onMouseDown:U,onMouseUp:z,onKeyUp:V,onKeyDown:W,onMouseOver:G,onMouseLeave:$})}((0,r.Z)((0,r.Z)({},i),{},{ref:(0,d.lq)(k,e.ref),isDisabled:t,isFocusable:n,onClick:D(e.onClick,(function(){l(x)}))}));return(0,r.Z)((0,r.Z)({},N),{},{id:ee(p,x),role:"tab",tabIndex:Z?0:-1,type:"button","aria-selected":Z,"aria-controls":te(p,x),onFocus:t?void 0:D(e.onFocus,(function(){g(x),!c&&!(t&&n)&&l(x)}))})}var Y=(0,l.k)({}),X=(0,o.Z)(Y,2),Q=X[0],J=X[1];function ee(e,t){return"".concat(e,"--tab-").concat(t)}function te(e,t){return"".concat(e,"--tabpanel-").concat(t)}var ne=(0,l.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),re=(0,o.Z)(ne,2),ie=re[0],ae=re[1],oe=(0,u.Gp)((function(e,t){var n=(0,u.jC)("Tabs",e),i=(0,c.Lr)(e),o=i.children,l=i.className,d=z((0,a.Z)(i,P)),f=d.htmlProps,m=d.descendants,h=(0,a.Z)(d,B),v=(0,s.useMemo)((function(){return h}),[h]),p=(f.isFitted,(0,a.Z)(f,O));return s.createElement(W,{value:m},s.createElement(H,{value:v},s.createElement(ie,{value:n},s.createElement(u.m$.div,(0,r.Z)((0,r.Z)({className:A("chakra-tabs",l),ref:t},p),{},{__css:n.root}),o))))}));oe.displayName="Tabs",(0,u.Gp)((function(e,t){var n=function(){var e=K(),t=V(),n=e.selectedIndex,i=e.orientation,a="horizontal"===i,u="vertical"===i,l=(0,s.useState)((function(){return a?{left:0,width:0}:u?{top:0,height:0}:void 0})),c=(0,o.Z)(l,2),d=c[0],f=c[1],m=(0,s.useState)(!1),h=(0,o.Z)(m,2),v=h[0],p=h[1];return(0,M.G)((function(){if(null!=n){var e=t.item(n);if(null!=e){a&&f({left:e.node.offsetLeft,width:e.node.offsetWidth}),u&&f({top:e.node.offsetTop,height:e.node.offsetHeight});var r=requestAnimationFrame((function(){p(!0)}));return function(){r&&cancelAnimationFrame(r)}}}}),[n,a,u,t]),(0,r.Z)({position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:v?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"},d)}(),i=(0,r.Z)((0,r.Z)({},e.style),n),a=ae();return s.createElement(u.m$.div,(0,r.Z)((0,r.Z)({ref:t},e),{},{className:A("chakra-tabs__tab-indicator",e.className),style:i,__css:a.indicator}))})).displayName="TabIndicator";var se=(0,u.Gp)((function(e,t){var n=function(e){var t=K(),n=t.focusedIndex,a=t.orientation,o=t.direction,u=V(),l=(0,s.useCallback)((function(e){var t,r=function(){var e,t=u.nextEnabled(n);t&&(null==(e=t.node)||e.focus())},s=function(){var e,t=u.prevEnabled(n);t&&(null==(e=t.node)||e.focus())},l="horizontal"===a,c="vertical"===a,d=e.key,f="ltr"===o?"ArrowLeft":"ArrowRight",m="ltr"===o?"ArrowRight":"ArrowLeft",h=(t={},(0,i.Z)(t,f,(function(){return l&&s()})),(0,i.Z)(t,m,(function(){return l&&r()})),(0,i.Z)(t,"ArrowDown",(function(){return c&&r()})),(0,i.Z)(t,"ArrowUp",(function(){return c&&s()})),(0,i.Z)(t,"Home",(function(){var e,t=u.firstEnabled();t&&(null==(e=t.node)||e.focus())})),(0,i.Z)(t,"End",(function(){var e,t=u.lastEnabled();t&&(null==(e=t.node)||e.focus())})),t)[d];h&&(e.preventDefault(),h(e))}),[u,n,a,o]);return(0,r.Z)((0,r.Z)({},e),{},{role:"tablist","aria-orientation":a,onKeyDown:D(e.onKeyDown,l)})}((0,r.Z)((0,r.Z)({},e),{},{ref:t})),a=ae(),o=(0,r.Z)({display:"flex"},a.tablist);return s.createElement(u.m$.div,(0,r.Z)((0,r.Z)({},n),{},{className:A("chakra-tabs__tablist",e.className),__css:o}))}));se.displayName="TabList";var ue=(0,u.Gp)((function(e,t){var n=function(e){var t=e.children,n=(0,a.Z)(e,T),i=K(),o=i.isLazy,u=i.lazyBehavior,l=J(),c=l.isSelected,d=l.id,f=l.tabId,m=(0,s.useRef)(!1);c&&(m.current=!0);var h=function(e){var t=e.wasSelected,n=e.enabled,r=e.isSelected,i=e.mode;return!n||!!r||!("keepMounted"!==(void 0===i?"unmount":i)||!t)}({wasSelected:m.current,isSelected:c,enabled:o,mode:u});return(0,r.Z)((0,r.Z)({tabIndex:0},n),{},{children:h?t:null,role:"tabpanel","aria-labelledby":f,hidden:!c,id:d})}((0,r.Z)((0,r.Z)({},e),{},{ref:t})),i=ae();return s.createElement(u.m$.div,(0,r.Z)((0,r.Z)({outline:"0"},n),{},{className:A("chakra-tabs__tab-panel",e.className),__css:i.tabpanel}))}));ue.displayName="TabPanel";var le=(0,u.Gp)((function(e,t){var n=function(e){var t=K(),n=t.id,i=t.selectedIndex,a=(0,I.W)(e.children).map((function(e,t){return(0,s.createElement)(Q,{key:t,value:{isSelected:t===i,id:te(n,t),tabId:ee(n,t),selectedIndex:i}},e)}));return(0,r.Z)((0,r.Z)({},e),{},{children:a})}(e),i=ae();return s.createElement(u.m$.div,(0,r.Z)((0,r.Z)({},n),{},{width:"100%",ref:t,className:A("chakra-tabs__tab-panels",e.className),__css:i.tabpanels}))}));le.displayName="TabPanels";var ce=(0,u.Gp)((function(e,t){var n=ae(),i=j((0,r.Z)((0,r.Z)({},e),{},{ref:t})),a=(0,r.Z)({outline:"0",display:"flex",alignItems:"center",justifyContent:"center"},n.tab);return s.createElement(u.m$.button,(0,r.Z)((0,r.Z)({},i),{},{className:A("chakra-tabs__tab",e.className),__css:a}))}));ce.displayName="Tab"},4574:function(e,t,n){n.d(t,{aS:function(){return R},LU:function(){return K}});var r=n(1060),i=n(3983),a=n(3790),o=n(2175),s=n(4941),u=n(7537),l=n(4210),c=n(4748),d=n(2295),f=n(613),m=Math.sqrt(2*Math.PI);function h(e){var t=e.items.length,n=function(e,t,n){var r=Math.sqrt(function(e,t){return e*t/(t-1)}(t,n));return"number"===typeof e&&(r=Math.min(r,e/1.34)),1.06*r*Math.pow(n,-.2)}(e.iqr,e.variance,t);return function(r){var i,a=0,o=0;for(a=0;a<t;a++){var s=e.items[a];o+=(i=(r-s)/n,Math.exp(-.5*i*i)/m)}return o/n/t}}function v(e,t,n){var r=t-1,i=function(t){var i=t*r,a=Math.floor(i),o=i-a,s=e[a];return 0===o?s:n(s,e[Math.min(a+1,r)],o)};return{q1:i(.25),median:i(.5),q3:i(.75)}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e,t,n){return e+n*(t-e)}))}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e,t,n){return e+(t-e)*n}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e){return e}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e,t){return t}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e,t,n){return n<.5?e:t}))}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return v(e,t,(function(e,t){return.5*(e+t)}))}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length,n=t,r=Math.floor((n+3)/2)/2,i=function(t){return.5*(e[Math.floor(t)-1]+e[Math.ceil(t)-1])};return{q1:i(r),median:i((n+1)/2),q3:i(n+1-r)}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return Z(e,t)}function w(e){for(var t=0,n=e.length,r=e instanceof Float64Array?new Float64Array(n):new Float32Array(n),i=0;i<n;i+=1){var a=e[i];null==a||Number.isNaN(a)||(r[t]=a,t+=1)}var o=n-t;if(0===t)return{min:Number.NaN,max:Number.NaN,missing:o,s:[]};var s=t===n?r:r.subarray(0,t);return s.sort((function(e,t){return e===t?0:e<t?-1:1})),{min:s[0],max:s[s.length-1],missing:o,s:s}}function _(e){return 0===e.length?{min:Number.NaN,max:Number.NaN,missing:0,s:[]}:{min:e[0],max:e[e.length-1],missing:0,s:e}}function C(e,t,n,r,i){for(var a=i.eps,o=i.quantiles,s=i.coef,u=i.whiskersMode,l=function(e,t){return Math.abs(e-t)<a},c=o(e,t),d=c.median,f=c.q1,m=c.q3,h=m-f,v="number"===typeof s&&s>0,p=v?Math.max(n,f-s*h):n,g=v?Math.min(r,m+s*h):r,b=[],y=0;y<t;y+=1){var x=e[y];if(x>=p||l(x,p)){"nearest"===u&&(p=x);break}0!==b.length&&l(b[b.length-1],x)||b.push(x)}for(var k=[],Z=t-1;Z>=0;Z-=1){var N=e[Z];if(N<=g||l(N,g)){"nearest"===u&&(g=N);break}0!==k.length&&l(k[k.length-1],N)||0!==b.length&&l(b[b.length-1],N)||k.push(N)}return{median:d,q1:f,q3:m,iqr:h,outlier:b.concat(k.reverse()),whiskerHigh:g,whiskerLow:p}}function M(e,t){for(var n=0,r=0;r<t;r++){n+=e[r]}n/=t;for(var i=0,a=0;a<t;a++){var o=e[a];i+=(o-n)*(o-n)}return{mean:n,variance:i/=t}}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,o.Z)({coef:1.5,eps:.01,quantiles:p,validAndSorted:!1,whiskersMode:"nearest"},t),r=n.validAndSorted?_(e):w(e),i=r.missing,a=r.s,s=r.min,u=r.max,l={min:Number.NaN,max:Number.NaN,mean:Number.NaN,missing:i,iqr:Number.NaN,count:e.length,whiskerHigh:Number.NaN,whiskerLow:Number.NaN,outlier:[],median:Number.NaN,q1:Number.NaN,q3:Number.NaN,variance:0,items:[],kde:function(){return 0}},c=e.length-i;if(0===c)return l;var d=(0,o.Z)((0,o.Z)({min:s,max:u,count:e.length,missing:i,items:a},M(a,c)),C(a,c,s,u,n));return(0,o.Z)((0,o.Z)({},d),{},{kde:h(d)})}var I={coef:1.5,quantiles:7};function E(e){var t=null==e||"number"!==typeof e.coef?I.coef:e.coef,n=function(e){return"function"===typeof e?e:{hinges:N,fivenum:Z,7:p,quantiles:p,linear:g,lower:b,higher:y,nearest:x,midpoint:k}[e]||p}(null==e||null==e.quantiles?p:e.quantiles);return{coef:t,quantiles:n}}function S(e,t){if(e){if("number"===typeof e.median&&"number"===typeof e.q1&&"number"===typeof e.q3){if("undefined"===typeof e.whiskerMin){var n=E(t).coef,r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1.5,r=e.q3-e.q1,i="number"===typeof n&&n>0,a=i?Math.max(e.min,e.q1-n*r):e.min,o=i?Math.min(e.max,e.q3+n*r):e.max;if(Array.isArray(t)){for(var s=0;s<t.length;s+=1){var u=t[s];if(u>=a){a=u;break}}for(var l=t.length-1;l>=0;l-=1){var c=t[l];if(c<=o){o=c;break}}}return{whiskerMin:a,whiskerMax:o}}(e,Array.isArray(e.items)?e.items.slice().sort((function(e,t){return e-t})):null,n),i=r.whiskerMin,a=r.whiskerMax;e.whiskerMin=i,e.whiskerMax=a}return e}if(Array.isArray(e))return function(e,t){var n=q(e,E(t));return{items:Array.from(n.items),outliers:n.outlier,whiskerMax:n.whiskerHigh,whiskerMin:n.whiskerLow,max:n.max,median:n.median,mean:n.mean,min:n.min,q1:n.q1,q3:n.q3}}(e,t)}}function T(e,t){if(e){if("number"===typeof e.median&&Array.isArray(e.coords))return e;if(Array.isArray(e))return function(e,t){if(0!==e.length){var n=q(e,E(t)),r=function(e,t,n){for(var r=[],i=(t-e)/n,a=e;a<=t&&i>0;a+=i)r.push(a);return r[r.length-1]!==t&&r.push(t),r}(n.min,n.max,t.points).map((function(e){return{v:e,estimate:n.kde(e)}})),i=r.reduce((function(e,t){return Math.max(e,t.estimate)}),Number.NEGATIVE_INFINITY);return{max:n.max,min:n.min,mean:n.mean,median:n.median,q1:n.q1,q3:n.q3,items:Array.from(n.items),coords:r,outliers:[],maxEstimate:i}}}(e,t)}}var P={borderWidth:1,outlierStyle:"circle",outlierRadius:2,outlierBorderWidth:1,itemStyle:"circle",itemRadius:0,itemBorderWidth:0,meanStyle:"circle",meanRadius:3,meanBorderWidth:1,hitPadding:2,outlierHitRadius:4},B={outlierBackgroundColor:"backgroundColor",outlierBorderColor:"borderColor",itemBackgroundColor:"backgroundColor",itemBorderColor:"borderColor",meanBackgroundColor:"backgroundColor",meanBorderColor:"borderColor"},O=Object.keys(P).concat(Object.keys(B)),A=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"isVertical",value:function(){return!this.horizontal}},{key:"_drawItems",value:function(e){var t=this.isVertical(),n=this.getProps(["x","y","items","width","height","outliers"]),r=this.options;if(!(r.itemRadius<=0||!n.items||n.items.length<=0)){e.save(),e.strokeStyle=r.itemBorderColor,e.fillStyle=r.itemBackgroundColor,e.lineWidth=r.itemBorderWidth;var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();return function(){return(e=(9301*e+49297)%233280)/233280}}(1e3*this._datasetIndex+this._index),a={pointStyle:r.itemStyle,radius:r.itemRadius,borderWidth:r.itemBorderWidth},o=new Set(n.outliers||[]);t?n.items.forEach((function(t){o.has(t)||(0,f.au)(e,a,n.x-n.width/2+i()*n.width,t)})):n.items.forEach((function(t){o.has(t)||(0,f.au)(e,a,t,n.y-n.height/2+i()*n.height)})),e.restore()}}},{key:"_drawOutliers",value:function(e){var t=this.isVertical(),n=this.getProps(["x","y","outliers"]),r=this.options;if(!(r.outlierRadius<=0)&&n.outliers&&0!==n.outliers.length){e.save(),e.fillStyle=r.outlierBackgroundColor,e.strokeStyle=r.outlierBorderColor,e.lineWidth=r.outlierBorderWidth;var i={pointStyle:r.outlierStyle,radius:r.outlierRadius,borderWidth:r.outlierBorderWidth};t?n.outliers.forEach((function(t){(0,f.au)(e,i,n.x,t)})):n.outliers.forEach((function(t){(0,f.au)(e,i,t,n.y)})),e.restore()}}},{key:"_drawMeanDot",value:function(e){var t=this.isVertical(),n=this.getProps(["x","y","mean"]),r=this.options;if(!(r.meanRadius<=0||null==n.mean||Number.isNaN(n.mean))){e.save(),e.fillStyle=r.meanBackgroundColor,e.strokeStyle=r.meanBorderColor,e.lineWidth=r.meanBorderWidth;var i={pointStyle:r.meanStyle,radius:r.meanRadius,borderWidth:r.meanBorderWidth};t?(0,f.au)(e,i,n.x,n.mean):(0,f.au)(e,i,n.mean,n.y),e.restore()}}},{key:"_getBounds",value:function(e){return{left:0,top:0,right:0,bottom:0}}},{key:"_getHitBounds",value:function(e){var t=this.options.hitPadding,n=this._getBounds(e);return{left:n.left-t,top:n.top-t,right:n.right+t,bottom:n.bottom+t}}},{key:"inRange",value:function(e,t,n){return(!Number.isNaN(this.x)||!Number.isNaN(this.y))&&(this._boxInRange(e,t,n)||this._outlierIndexInRange(e,t,n)>=0)}},{key:"inXRange",value:function(e,t){var n=this._getHitBounds(t);return e>=n.left&&e<=n.right}},{key:"inYRange",value:function(e,t){var n=this._getHitBounds(t);return e>=n.top&&e<=n.bottom}},{key:"_outlierIndexInRange",value:function(e,t,n){var r=this.getProps(["x","y"],n),i=this.options.outlierHitRadius,a=this._getOutliers(n),o=this.isVertical();if(o&&Math.abs(e-r.x)>i||!o&&Math.abs(t-r.y)>i)return-1;for(var s=o?t:e,u=0;u<a.length;u+=1)if(Math.abs(a[u]-s)<=i)return u;return-1}},{key:"_boxInRange",value:function(e,t,n){var r=this._getHitBounds(n);return e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom}},{key:"getCenterPoint",value:function(e){var t=this.getProps(["x","y"],e);return{x:t.x,y:t.y}}},{key:"_getOutliers",value:function(e){return this.getProps(["outliers"],e).outliers||[]}},{key:"tooltipPosition",value:function(e,t){if(!e||"boolean"===typeof e)return this.getCenterPoint();t&&delete t._tooltipOutlier;var n=this.getProps(["x","y"]),r=this._outlierIndexInRange(e.x,e.y);return r<0||!t?this.getCenterPoint():(t._tooltipOutlier={index:r,datasetIndex:this._datasetIndex},this.isVertical()?{x:n.x,y:this._getOutliers()[r]}:{x:this._getOutliers()[r],y:n.y})}}]),n}(d.W_),D=O.concat(["medianColor","lowerBackgroundColor"]),R=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"draw",value:function(e){e.save(),e.fillStyle=this.options.backgroundColor,e.strokeStyle=this.options.borderColor,e.lineWidth=this.options.borderWidth,this._drawBoxPlot(e),this._drawOutliers(e),this._drawMeanDot(e),e.restore(),this._drawItems(e)}},{key:"_drawBoxPlot",value:function(e){this.isVertical()?this._drawBoxPlotVertical(e):this._drawBoxPlotHorizontal(e)}},{key:"_drawBoxPlotVertical",value:function(e){var t=this.options,n=this.getProps(["x","width","q1","q3","median","whiskerMin","whiskerMax"]),r=n.x,i=n.width,a=r-i/2;n.q3>n.q1?e.fillRect(a,n.q1,i,n.q3-n.q1):e.fillRect(a,n.q3,i,n.q1-n.q3),e.save(),t.medianColor&&"transparent"!==t.medianColor&&"#0000"!==t.medianColor&&(e.strokeStyle=t.medianColor),e.beginPath(),e.moveTo(a,n.median),e.lineTo(a+i,n.median),e.closePath(),e.stroke(),e.restore(),e.save(),t.lowerBackgroundColor&&"transparent"!==t.lowerBackgroundColor&&"#0000"!==t.lowerBackgroundColor&&(e.fillStyle=t.lowerBackgroundColor,n.q3>n.q1?e.fillRect(a,n.median,i,n.q3-n.median):e.fillRect(a,n.median,i,n.q1-n.median)),e.restore(),n.q3>n.q1?e.strokeRect(a,n.q1,i,n.q3-n.q1):e.strokeRect(a,n.q3,i,n.q1-n.q3),e.beginPath(),e.moveTo(a,n.whiskerMin),e.lineTo(a+i,n.whiskerMin),e.moveTo(r,n.whiskerMin),e.lineTo(r,n.q1),e.moveTo(a,n.whiskerMax),e.lineTo(a+i,n.whiskerMax),e.moveTo(r,n.whiskerMax),e.lineTo(r,n.q3),e.closePath(),e.stroke()}},{key:"_drawBoxPlotHorizontal",value:function(e){var t=this.options,n=this.getProps(["y","height","q1","q3","median","whiskerMin","whiskerMax"]),r=n.y,i=n.height,a=r-i/2;n.q3>n.q1?e.fillRect(n.q1,a,n.q3-n.q1,i):e.fillRect(n.q3,a,n.q1-n.q3,i),e.save(),t.medianColor&&"transparent"!==t.medianColor&&(e.strokeStyle=t.medianColor),e.beginPath(),e.moveTo(n.median,a),e.lineTo(n.median,a+i),e.closePath(),e.stroke(),e.restore(),e.save(),t.lowerBackgroundColor&&"transparent"!==t.lowerBackgroundColor&&(e.fillStyle=t.lowerBackgroundColor,n.q3>n.q1?e.fillRect(n.median,a,n.q3-n.median,i):e.fillRect(n.median,a,n.q1-n.median,i)),e.restore(),n.q3>n.q1?e.strokeRect(n.q1,a,n.q3-n.q1,i):e.strokeRect(n.q3,a,n.q1-n.q3,i),e.beginPath(),e.moveTo(n.whiskerMin,a),e.lineTo(n.whiskerMin,a+i),e.moveTo(n.whiskerMin,r),e.lineTo(n.q1,r),e.moveTo(n.whiskerMax,a),e.lineTo(n.whiskerMax,a+i),e.moveTo(n.whiskerMax,r),e.lineTo(n.q3,r),e.closePath(),e.stroke()}},{key:"_getBounds",value:function(e){var t=this.isVertical();if(null==this.x)return{left:0,top:0,right:0,bottom:0};if(t){var n=this.getProps(["x","width","whiskerMin","whiskerMax"],e),r=n.x,i=n.width,a=r-i/2;return{left:a,top:n.whiskerMax,right:a+i,bottom:n.whiskerMin}}var o=this.getProps(["y","height","whiskerMin","whiskerMax"],e),s=o.y,u=o.height,l=o.whiskerMax,c=s-u/2;return{left:o.whiskerMin,top:c,right:l,bottom:c+u}}}]),n}(A);R.id="boxandwhiskers",R.defaults=(0,o.Z)((0,o.Z)((0,o.Z)({},d.ZL.defaults),P),{},{medianColor:"transparent",lowerBackgroundColor:"transparent"}),R.defaultRoutes=(0,o.Z)((0,o.Z)({},d.ZL.defaultRoutes),B);var L=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"draw",value:function(e){e.save(),e.fillStyle=this.options.backgroundColor,e.strokeStyle=this.options.borderColor,e.lineWidth=this.options.borderWidth;var t=this.getProps(["x","y","median","width","height","min","max","coords","maxEstimate"]);null!=t.median&&(0,f.au)(e,{pointStyle:"rectRot",radius:5,borderWidth:this.options.borderWidth},t.x,t.y),t.coords&&t.coords.length>0&&this._drawCoords(e,t),this._drawOutliers(e),this._drawMeanDot(e),e.restore(),this._drawItems(e)}},{key:"_drawCoords",value:function(e,t){var n;if(n=null==t.maxEstimate?t.coords.reduce((function(e,t){return Math.max(e,t.estimate)}),Number.NEGATIVE_INFINITY):t.maxEstimate,this.isVertical()){var r=t.x,i=t.width/2/n;e.moveTo(r,t.min),t.coords.forEach((function(t){e.lineTo(r-t.estimate*i,t.v)})),e.lineTo(r,t.max),e.moveTo(r,t.min),t.coords.forEach((function(t){e.lineTo(r+t.estimate*i,t.v)})),e.lineTo(r,t.max)}else{var a=t.y,o=t.height/2/n;e.moveTo(t.min,a),t.coords.forEach((function(t){e.lineTo(t.v,a-t.estimate*o)})),e.lineTo(t.max,a),e.moveTo(t.min,a),t.coords.forEach((function(t){e.lineTo(t.v,a+t.estimate*o)})),e.lineTo(t.max,a)}e.closePath(),e.stroke(),e.fill()}},{key:"_getBounds",value:function(e){if(this.isVertical()){var t=this.getProps(["x","width","min","max"],e),n=t.x,r=t.width,i=t.min,a=n-r/2;return{left:a,top:t.max,right:a+r,bottom:i}}var o=this.getProps(["y","height","min","max"],e),s=o.y,u=o.height,l=s-u/2;return{left:o.min,top:l,right:o.max,bottom:l+u}}}]),n}(A);L.id="violin",L.defaults=(0,o.Z)((0,o.Z)({},d.ZL.defaults),P),L.defaultRoutes=(0,o.Z)((0,o.Z)({},d.ZL.defaultRoutes),B);var W=function(e,t,n){return e===t||null==e?t:null==t?e:e+(t-e)*n};function V(e,t,n){return"number"===typeof e&&"number"===typeof t?W(e,t,n):Array.isArray(e)&&Array.isArray(t)?t.map((function(t,r){return W(e[r],t,n)})):t}function F(e){var t=e.formattedValue,n=this;t&&null!=n._tooltipOutlier&&e.datasetIndex===n._tooltipOutlier.datasetIndex&&(t.hoveredOutlierIndex=n._tooltipOutlier.index)}function U(e,t){if(!e.length)return!1;for(var n=0,r=0,i=0,a=0;a<e.length;a+=1){var o=e[a].element;if(o&&o.hasValue()){var s=o.tooltipPosition(t,this);n+=s.x,r+=s.y,i+=1}}return{x:n/i,y:r/i}}function z(e){var t=["borderColor","backgroundColor"].concat(e.filter((function(e){return e.endsWith("Color")})));return(0,o.Z)({animations:{numberArray:{fn:V,properties:["outliers","items"]},colors:{type:"color",properties:t}},transitions:{show:{animations:{colors:{type:"color",properties:t,from:"transparent"}}},hide:{animations:{colors:{type:"color",properties:t,to:"transparent"}}}},minStats:"min",maxStats:"max"},I)}function G(){return{plugins:{tooltip:{position:U.register().id,callbacks:{beforeLabel:F}}}}}U.id="average",U.register=function(){return d.u.positioners.average=U,U};var $=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"_transformStats",value:function(e,t,n){for(var r=0,i=["min","max","median","q3","q1","mean"];r<i.length;r++){var a=i[r],o=t[a];"number"===typeof o&&(e[a]=n(o))}for(var s=0,u=["outliers","items"];s<u.length;s++){var l=u[s];Array.isArray(t[l])&&(e[l]=t[l].map(n))}}},{key:"getMinMax",value:function(e,t){var r=e.axis,o=this.options;e.axis=o.minStats;var s=(0,i.Z)((0,a.Z)(n.prototype),"getMinMax",this).call(this,e,t).min;e.axis=o.maxStats;var u=(0,i.Z)((0,a.Z)(n.prototype),"getMinMax",this).call(this,e,t).max;return e.axis=r,{min:s,max:u}}},{key:"parsePrimitiveData",value:function(e,t,n,r){for(var i=e.vScale,a=e.iScale,o=a.getLabels(),s=[],u=0;u<r;u+=1){var l=u+n,c={};c[a.axis]=a.parse(o[l],l);var d=this._parseStats(null==t?null:t[l],this.options);d&&(Object.assign(c,d),c[i.axis]=d.median),s.push(c)}return s}},{key:"parseArrayData",value:function(e,t,n,r){return this.parsePrimitiveData(e,t,n,r)}},{key:"parseObjectData",value:function(e,t,n,r){return this.parsePrimitiveData(e,t,n,r)}},{key:"getLabelAndValue",value:function(e){var t=(0,i.Z)((0,a.Z)(n.prototype),"getLabelAndValue",this).call(this,e),r=this._cachedMeta.vScale,o=this.getParsed(e);if(!r||!o||"NaN"===t.value)return t;t.value={raw:o,hoveredOutlierIndex:-1},this._transformStats(t.value,o,(function(e){return r.getLabelForValue(e)}));var s=this._toStringStats(t.value.raw);return t.value.toString=function(){return this.hoveredOutlierIndex>=0?"(outlier: ".concat(this.outliers[this.hoveredOutlierIndex],")"):s},t}},{key:"_toStringStats",value:function(e){var t=this,n=function(e){return null==e?"NaN":(0,f.o)(e,t.chart.options.locale,{})};return"(min: ".concat(n(e.min),", 25% quantile: ").concat(n(e.q1),", median: ").concat(n(e.median),", mean: ").concat(n(e.mean),", 75% quantile: ").concat(n(e.q3),", max: ").concat(n(e.max),")")}},{key:"updateElement",value:function(e,t,r,o){var s="reset"===o,u=this._cachedMeta.vScale,l=this.getParsed(t),c=u.getBasePixel();r._datasetIndex=this.index,r._index=t,this._transformStats(r,l,(function(e){return s?c:u.getPixelForValue(e,t)})),(0,i.Z)((0,a.Z)(n.prototype),"updateElement",this).call(this,e,t,r,o)}}]),n}(d.vn);function H(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];d.i_.addControllers(n),Array.isArray(i)?d.i_.addElements.apply(d.i_,(0,r.Z)(i)):d.i_.addElements(i),Array.isArray(a)?d.i_.addScales.apply(d.i_,(0,r.Z)(a)):d.i_.addScales(a);var o=t;return o.type=e,o}var K=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"_parseStats",value:function(e,t){return S(e,t)}},{key:"_transformStats",value:function(e,t,r){(0,i.Z)((0,a.Z)(n.prototype),"_transformStats",this).call(this,e,t,r);for(var o=0,s=["whiskerMin","whiskerMax"];o<s.length;o++){var u=s[o];e[u]=r(t[u])}}}]),n}($);K.id="boxplot",K.defaults=(0,f.V)({},[d.vn.defaults,z(D),{animations:{numbers:{type:"number",properties:d.vn.defaults.animations.numbers.properties.concat(["q1","q3","min","max","median","whiskerMin","whiskerMax","mean"],D.filter((function(e){return!e.endsWith("Color")})))}},dataElementType:R.id}]),K.overrides=(0,f.V)({},[d.vn.overrides,G()]),(function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e,r){return(0,s.Z)(this,n),t.call(this,e,H("boxplot",r,K,R,[d.f$,d.uw]))}return(0,u.Z)(n)}(d.kL)).id=K.id;var j=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"_parseStats",value:function(e,t){return T(e,t)}},{key:"_transformStats",value:function(e,t,r){(0,i.Z)((0,a.Z)(n.prototype),"_transformStats",this).call(this,e,t,r),e.maxEstimate=t.maxEstimate,Array.isArray(t.coords)&&(e.coords=t.coords.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{v:r(e.v)})})))}}]),n}($);j.id="violin",j.defaults=(0,f.V)({},[d.vn.defaults,z(O),{points:100,animations:{numbers:{type:"number",properties:d.vn.defaults.animations.numbers.properties.concat(["q1","q3","min","max","median","maxEstimate"],O.filter((function(e){return!e.endsWith("Color")})))},kdeCoords:{fn:function(e,t,n){return Array.isArray(e)&&Array.isArray(t)?t.map((function(t,r){return{v:W(e[r]?e[r].v:null,t.v,n),estimate:W(e[r]?e[r].estimate:null,t.estimate,n)}})):t},properties:["coords"]}},dataElementType:L.id}]),j.overrides=(0,f.V)({},[d.vn.overrides,G()]),(function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e,r){return(0,s.Z)(this,n),t.call(this,e,H("violin",r,j,L,[d.f$,d.uw]))}return(0,u.Z)(n)}(d.kL)).id=j.id}}]);
//# sourceMappingURL=940.30ac7dd7.chunk.js.map