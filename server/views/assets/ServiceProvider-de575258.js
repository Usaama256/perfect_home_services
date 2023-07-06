import{e as xe,j as l,s as le,u as et,a0 as Dt,a1 as _t,r as C,a2 as tt,a3 as rt,a4 as Ct,a5 as Ot,a6 as Pt,a7 as nt,a as S,F as Tt,a8 as ze,E as at,p as $e,a9 as Nt,g as ot,h as se,aa as Mt,S as Et,I as Rt,X as ie,b as Me,V as kt,B as Xe,G as It,D as At}from"./index-559316ce.js";import{G as jt}from"./GenLayout-fa677226.js";import{P as Ie}from"./ProgressiveImage-db1fb5f0.js";import{M as Ye}from"./MyRating-568ce965.js";import{T as $t}from"./TableContainer-97b8cfb5.js";import{T as qt,a as Wt,b as He,c as H,d as Ut}from"./TableRow-2f33760f.js";import{G as Bt}from"./Grid-2fa76f59.js";import{C as it}from"./Card-2c90ac9f.js";import{C as st}from"./CardContent-e3b9abf5.js";import{D as Lt}from"./Delete-b4e49272.js";import{P as Ft}from"./Phone-615fd2c4.js";import{C as zt,a as Xt}from"./CardHeader-648a1719.js";import{G as Ve}from"./Grid2-0add4141.js";import{T as Yt}from"./TextField-d3365dcc.js";import"./Select-3d2ee0e4.js";import"./useFormControl-ad3eb840.js";const Ht=xe(l("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call"),Vt=xe(l("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email"),Gt=xe(l("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn"),Kt=xe(l("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),Jt=({crumbs:e,...r})=>{const n=et();return l(Qt,{...r,children:e==null?void 0:e.map((t,c)=>l("div",{className:"breadcrumb-item",children:l("span",{className:"label",onClick:()=>(t==null?void 0:t.link)&&n(t==null?void 0:t.link),children:t==null?void 0:t.name})},c))})},Qt=le.div`
  width: 100%;
  background-color: #aa0000;
  color: #fff;
  display: flex;
  font-size: 14px;
  position: relative;
  /* padding: 4.28px; */
  margin: 20px 0px;

  .breadcrumb-item {
    padding-left: 15px;
    cursor: pointer;
  }

  .breadcrumb-item:first-child {
    padding-left: 10px;
  }

  .breadcrumb-item .label {
    display: block;
    padding: 8px 15px;
    float: left;
    font-size: 15px;
    text-transform: capitalize;
  }

  .breadcrumb-item::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    transform: rotate(130deg) skew(-8deg);
    float: right;
    position: relative;
    top: 6px;
    left: 15px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    background-color: #aa0000;
    /* box-shadow: -2px -2px 1px 0px #3f0101; */
  }

  .breadcrumb-item.current,
  .breadcrumb-item.current::after {
    background-color: #0ac0c9;
  }
`;var we={exports:{}},lt={};const Zt=Dt(_t);var _={},B={};Object.defineProperty(B,"__esModule",{value:!0});B.dontSetMe=ar;B.findInArray=er;B.int=nr;B.isFunction=tr;B.isNum=rr;function er(e,r){for(var n=0,t=e.length;n<t;n++)if(r.apply(r,[e[n],n,e]))return e[n]}function tr(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function rr(e){return typeof e=="number"&&!isNaN(e)}function nr(e){return parseInt(e,10)}function ar(e,r,n){if(e[r])return new Error("Invalid prop ".concat(r," passed to ").concat(n," - do not set this, set it on the child."))}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.browserPrefixToKey=ut;Z.browserPrefixToStyle=or;Z.default=void 0;Z.getPrefix=ct;var Ee=["Moz","Webkit","O","ms"];function ct(){var e,r,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";var t=(e=window.document)===null||e===void 0||(r=e.documentElement)===null||r===void 0?void 0:r.style;if(!t||n in t)return"";for(var c=0;c<Ee.length;c++)if(ut(n,Ee[c])in t)return Ee[c];return""}function ut(e,r){return r?"".concat(r).concat(ir(e)):e}function or(e,r){return r?"-".concat(r.toLowerCase(),"-").concat(e):e}function ir(e){for(var r="",n=!0,t=0;t<e.length;t++)n?(r+=e[t].toUpperCase(),n=!1):e[t]==="-"?n=!0:r+=e[t];return r}var sr=ct();Z.default=sr;function Ae(e){return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ae(e)}Object.defineProperty(_,"__esModule",{value:!0});_.addClassName=mt;_.addEvent=ur;_.addUserSelectStyles=wr;_.createCSSTransform=vr;_.createSVGTransform=yr;_.getTouch=br;_.getTouchIdentifier=xr;_.getTranslation=qe;_.innerHeight=gr;_.innerWidth=mr;_.matchesSelector=gt;_.matchesSelectorAndParentsTo=cr;_.offsetXYFromParent=hr;_.outerHeight=dr;_.outerWidth=pr;_.removeClassName=ht;_.removeEvent=fr;_.removeUserSelectStyles=Sr;var A=B,Ge=lr(Z);function ft(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(ft=function(c){return c?n:r})(e)}function lr(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||Ae(e)!=="object"&&typeof e!="function")return{default:e};var n=ft(r);if(n&&n.has(e))return n.get(e);var t={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if(p!=="default"&&Object.prototype.hasOwnProperty.call(e,p)){var i=c?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(t,p,i):t[p]=e[p]}return t.default=e,n&&n.set(e,t),t}function Ke(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,t)}return n}function dt(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Ke(Object(n),!0).forEach(function(t){pt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function pt(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var ve="";function gt(e,r){return ve||(ve=(0,A.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,A.isFunction)(e[n])})),(0,A.isFunction)(e[ve])?e[ve](r):!1}function cr(e,r,n){var t=e;do{if(gt(t,r))return!0;if(t===n)return!1;t=t.parentNode}while(t);return!1}function ur(e,r,n,t){if(e){var c=dt({capture:!0},t);e.addEventListener?e.addEventListener(r,n,c):e.attachEvent?e.attachEvent("on"+r,n):e["on"+r]=n}}function fr(e,r,n,t){if(e){var c=dt({capture:!0},t);e.removeEventListener?e.removeEventListener(r,n,c):e.detachEvent?e.detachEvent("on"+r,n):e["on"+r]=null}}function dr(e){var r=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return r+=(0,A.int)(n.borderTopWidth),r+=(0,A.int)(n.borderBottomWidth),r}function pr(e){var r=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return r+=(0,A.int)(n.borderLeftWidth),r+=(0,A.int)(n.borderRightWidth),r}function gr(e){var r=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return r-=(0,A.int)(n.paddingTop),r-=(0,A.int)(n.paddingBottom),r}function mr(e){var r=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return r-=(0,A.int)(n.paddingLeft),r-=(0,A.int)(n.paddingRight),r}function hr(e,r,n){var t=r===r.ownerDocument.body,c=t?{left:0,top:0}:r.getBoundingClientRect(),p=(e.clientX+r.scrollLeft-c.left)/n,i=(e.clientY+r.scrollTop-c.top)/n;return{x:p,y:i}}function vr(e,r){var n=qe(e,r,"px");return pt({},(0,Ge.browserPrefixToKey)("transform",Ge.default),n)}function yr(e,r){var n=qe(e,r,"");return n}function qe(e,r,n){var t=e.x,c=e.y,p="translate(".concat(t).concat(n,",").concat(c).concat(n,")");if(r){var i="".concat(typeof r.x=="string"?r.x:r.x+n),g="".concat(typeof r.y=="string"?r.y:r.y+n);p="translate(".concat(i,", ").concat(g,")")+p}return p}function br(e,r){return e.targetTouches&&(0,A.findInArray)(e.targetTouches,function(n){return r===n.identifier})||e.changedTouches&&(0,A.findInArray)(e.changedTouches,function(n){return r===n.identifier})}function xr(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function wr(e){if(e){var r=e.getElementById("react-draggable-style-el");r||(r=e.createElement("style"),r.type="text/css",r.id="react-draggable-style-el",r.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,r.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(r)),e.body&&mt(e.body,"react-draggable-transparent-selection")}}function Sr(e){if(e)try{if(e.body&&ht(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var r=(e.defaultView||window).getSelection();r&&r.type!=="Caret"&&r.removeAllRanges()}}catch{}}function mt(e,r){e.classList?e.classList.add(r):e.className.match(new RegExp("(?:^|\\s)".concat(r,"(?!\\S)")))||(e.className+=" ".concat(r))}function ht(e,r){e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(r,"(?!\\S)"),"g"),"")}var L={};Object.defineProperty(L,"__esModule",{value:!0});L.canDragX=Cr;L.canDragY=Or;L.createCoreData=Tr;L.createDraggableData=Nr;L.getBoundPosition=Dr;L.getControlPosition=Pr;L.snapToGrid=_r;var I=B,re=_;function Dr(e,r,n){if(!e.props.bounds)return[r,n];var t=e.props.bounds;t=typeof t=="string"?t:Mr(t);var c=We(e);if(typeof t=="string"){var p=c.ownerDocument,i=p.defaultView,g;if(t==="parent"?g=c.parentNode:g=p.querySelector(t),!(g instanceof i.HTMLElement))throw new Error('Bounds selector "'+t+'" could not find an element.');var y=g,x=i.getComputedStyle(c),b=i.getComputedStyle(y);t={left:-c.offsetLeft+(0,I.int)(b.paddingLeft)+(0,I.int)(x.marginLeft),top:-c.offsetTop+(0,I.int)(b.paddingTop)+(0,I.int)(x.marginTop),right:(0,re.innerWidth)(y)-(0,re.outerWidth)(c)-c.offsetLeft+(0,I.int)(b.paddingRight)-(0,I.int)(x.marginRight),bottom:(0,re.innerHeight)(y)-(0,re.outerHeight)(c)-c.offsetTop+(0,I.int)(b.paddingBottom)-(0,I.int)(x.marginBottom)}}return(0,I.isNum)(t.right)&&(r=Math.min(r,t.right)),(0,I.isNum)(t.bottom)&&(n=Math.min(n,t.bottom)),(0,I.isNum)(t.left)&&(r=Math.max(r,t.left)),(0,I.isNum)(t.top)&&(n=Math.max(n,t.top)),[r,n]}function _r(e,r,n){var t=Math.round(r/e[0])*e[0],c=Math.round(n/e[1])*e[1];return[t,c]}function Cr(e){return e.props.axis==="both"||e.props.axis==="x"}function Or(e){return e.props.axis==="both"||e.props.axis==="y"}function Pr(e,r,n){var t=typeof r=="number"?(0,re.getTouch)(e,r):null;if(typeof r=="number"&&!t)return null;var c=We(n),p=n.props.offsetParent||c.offsetParent||c.ownerDocument.body;return(0,re.offsetXYFromParent)(t||e,p,n.props.scale)}function Tr(e,r,n){var t=e.state,c=!(0,I.isNum)(t.lastX),p=We(e);return c?{node:p,deltaX:0,deltaY:0,lastX:r,lastY:n,x:r,y:n}:{node:p,deltaX:r-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:r,y:n}}function Nr(e,r){var n=e.props.scale;return{node:r.node,x:e.state.x+r.deltaX/n,y:e.state.y+r.deltaY/n,deltaX:r.deltaX/n,deltaY:r.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Mr(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function We(e){var r=e.findDOMNode();if(!r)throw new Error("<DraggableCore>: Unmounted during event!");return r}var Se={},De={};Object.defineProperty(De,"__esModule",{value:!0});De.default=Er;function Er(){}function ye(e){return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ye(e)}Object.defineProperty(Se,"__esModule",{value:!0});Se.default=void 0;var Re=kr(C),k=Ue(tt),Rr=Ue(rt),P=_,V=L,ke=B,oe=Ue(De);function Ue(e){return e&&e.__esModule?e:{default:e}}function vt(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(vt=function(c){return c?n:r})(e)}function kr(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||ye(e)!=="object"&&typeof e!="function")return{default:e};var n=vt(r);if(n&&n.has(e))return n.get(e);var t={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if(p!=="default"&&Object.prototype.hasOwnProperty.call(e,p)){var i=c?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(t,p,i):t[p]=e[p]}return t.default=e,n&&n.set(e,t),t}function Je(e,r){return $r(e)||jr(e,r)||Ar(e,r)||Ir()}function Ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ar(e,r){if(e){if(typeof e=="string")return Qe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,r)}}function Qe(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function jr(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],c=!0,p=!1,i,g;try{for(n=n.call(e);!(c=(i=n.next()).done)&&(t.push(i.value),!(r&&t.length===r));c=!0);}catch(y){p=!0,g=y}finally{try{!c&&n.return!=null&&n.return()}finally{if(p)throw g}}return t}}function $r(e){if(Array.isArray(e))return e}function qr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function Ze(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function Wr(e,r,n){return r&&Ze(e.prototype,r),n&&Ze(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ur(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&je(e,r)}function je(e,r){return je=Object.setPrototypeOf||function(t,c){return t.__proto__=c,t},je(e,r)}function Br(e){var r=Fr();return function(){var t=be(e),c;if(r){var p=be(this).constructor;c=Reflect.construct(t,arguments,p)}else c=t.apply(this,arguments);return Lr(this,c)}}function Lr(e,r){if(r&&(ye(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function be(e){return be=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},be(e)}function j(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var q={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},G=q.mouse,_e=function(e){Ur(n,e);var r=Br(n);function n(){var t;qr(this,n);for(var c=arguments.length,p=new Array(c),i=0;i<c;i++)p[i]=arguments[i];return t=r.call.apply(r,[this].concat(p)),j(T(t),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),j(T(t),"mounted",!1),j(T(t),"handleDragStart",function(g){if(t.props.onMouseDown(g),!t.props.allowAnyClick&&typeof g.button=="number"&&g.button!==0)return!1;var y=t.findDOMNode();if(!y||!y.ownerDocument||!y.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var x=y.ownerDocument;if(!(t.props.disabled||!(g.target instanceof x.defaultView.Node)||t.props.handle&&!(0,P.matchesSelectorAndParentsTo)(g.target,t.props.handle,y)||t.props.cancel&&(0,P.matchesSelectorAndParentsTo)(g.target,t.props.cancel,y))){g.type==="touchstart"&&g.preventDefault();var b=(0,P.getTouchIdentifier)(g);t.setState({touchIdentifier:b});var O=(0,V.getControlPosition)(g,b,T(t));if(O!=null){var D=O.x,w=O.y,N=(0,V.createCoreData)(T(t),D,w);(0,oe.default)("DraggableCore: handleDragStart: %j",N),(0,oe.default)("calling",t.props.onStart);var E=t.props.onStart(g,N);E===!1||t.mounted===!1||(t.props.enableUserSelectHack&&(0,P.addUserSelectStyles)(x),t.setState({dragging:!0,lastX:D,lastY:w}),(0,P.addEvent)(x,G.move,t.handleDrag),(0,P.addEvent)(x,G.stop,t.handleDragStop))}}}),j(T(t),"handleDrag",function(g){var y=(0,V.getControlPosition)(g,t.state.touchIdentifier,T(t));if(y!=null){var x=y.x,b=y.y;if(Array.isArray(t.props.grid)){var O=x-t.state.lastX,D=b-t.state.lastY,w=(0,V.snapToGrid)(t.props.grid,O,D),N=Je(w,2);if(O=N[0],D=N[1],!O&&!D)return;x=t.state.lastX+O,b=t.state.lastY+D}var E=(0,V.createCoreData)(T(t),x,b);(0,oe.default)("DraggableCore: handleDrag: %j",E);var F=t.props.onDrag(g,E);if(F===!1||t.mounted===!1){try{t.handleDragStop(new MouseEvent("mouseup"))}catch{var R=document.createEvent("MouseEvents");R.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.handleDragStop(R)}return}t.setState({lastX:x,lastY:b})}}),j(T(t),"handleDragStop",function(g){if(t.state.dragging){var y=(0,V.getControlPosition)(g,t.state.touchIdentifier,T(t));if(y!=null){var x=y.x,b=y.y;if(Array.isArray(t.props.grid)){var O=x-t.state.lastX||0,D=b-t.state.lastY||0,w=(0,V.snapToGrid)(t.props.grid,O,D),N=Je(w,2);O=N[0],D=N[1],x=t.state.lastX+O,b=t.state.lastY+D}var E=(0,V.createCoreData)(T(t),x,b),F=t.props.onStop(g,E);if(F===!1||t.mounted===!1)return!1;var R=t.findDOMNode();R&&t.props.enableUserSelectHack&&(0,P.removeUserSelectStyles)(R.ownerDocument),(0,oe.default)("DraggableCore: handleDragStop: %j",E),t.setState({dragging:!1,lastX:NaN,lastY:NaN}),R&&((0,oe.default)("DraggableCore: Removing handlers"),(0,P.removeEvent)(R.ownerDocument,G.move,t.handleDrag),(0,P.removeEvent)(R.ownerDocument,G.stop,t.handleDragStop))}}}),j(T(t),"onMouseDown",function(g){return G=q.mouse,t.handleDragStart(g)}),j(T(t),"onMouseUp",function(g){return G=q.mouse,t.handleDragStop(g)}),j(T(t),"onTouchStart",function(g){return G=q.touch,t.handleDragStart(g)}),j(T(t),"onTouchEnd",function(g){return G=q.touch,t.handleDragStop(g)}),t}return Wr(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var c=this.findDOMNode();c&&(0,P.addEvent)(c,q.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var c=this.findDOMNode();if(c){var p=c.ownerDocument;(0,P.removeEvent)(p,q.mouse.move,this.handleDrag),(0,P.removeEvent)(p,q.touch.move,this.handleDrag),(0,P.removeEvent)(p,q.mouse.stop,this.handleDragStop),(0,P.removeEvent)(p,q.touch.stop,this.handleDragStop),(0,P.removeEvent)(c,q.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,P.removeUserSelectStyles)(p)}}},{key:"findDOMNode",value:function(){var c,p,i;return(c=this.props)!==null&&c!==void 0&&c.nodeRef?(p=this.props)===null||p===void 0||(i=p.nodeRef)===null||i===void 0?void 0:i.current:Rr.default.findDOMNode(this)}},{key:"render",value:function(){return Re.cloneElement(Re.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),n}(Re.Component);Se.default=_e;j(_e,"displayName","DraggableCore");j(_e,"propTypes",{allowAnyClick:k.default.bool,disabled:k.default.bool,enableUserSelectHack:k.default.bool,offsetParent:function(r,n){if(r[n]&&r[n].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:k.default.arrayOf(k.default.number),handle:k.default.string,cancel:k.default.string,nodeRef:k.default.object,onStart:k.default.func,onDrag:k.default.func,onStop:k.default.func,onMouseDown:k.default.func,scale:k.default.number,className:ke.dontSetMe,style:ke.dontSetMe,transform:ke.dontSetMe});j(_e,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){function r(o){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(o)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return x.default}}),e.default=void 0;var n=N(C),t=D(tt),c=D(rt),p=D(Zt),i=_,g=L,y=B,x=D(Se),b=D(De),O=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function D(o){return o&&o.__esModule?o:{default:o}}function w(o){if(typeof WeakMap!="function")return null;var s=new WeakMap,u=new WeakMap;return(w=function(d){return d?u:s})(o)}function N(o,s){if(!s&&o&&o.__esModule)return o;if(o===null||r(o)!=="object"&&typeof o!="function")return{default:o};var u=w(s);if(u&&u.has(o))return u.get(o);var f={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in o)if(m!=="default"&&Object.prototype.hasOwnProperty.call(o,m)){var v=d?Object.getOwnPropertyDescriptor(o,m):null;v&&(v.get||v.set)?Object.defineProperty(f,m,v):f[m]=o[m]}return f.default=o,u&&u.set(o,f),f}function E(){return E=Object.assign||function(o){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(o[f]=u[f])}return o},E.apply(this,arguments)}function F(o,s){if(o==null)return{};var u=R(o,s),f,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);for(d=0;d<m.length;d++)f=m[d],!(s.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(o,f)&&(u[f]=o[f])}return u}function R(o,s){if(o==null)return{};var u={},f=Object.keys(o),d,m;for(m=0;m<f.length;m++)d=f[m],!(s.indexOf(d)>=0)&&(u[d]=o[d]);return u}function K(o,s){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);s&&(f=f.filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable})),u.push.apply(u,f)}return u}function W(o){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?K(Object(u),!0).forEach(function(f){M(o,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):K(Object(u)).forEach(function(f){Object.defineProperty(o,f,Object.getOwnPropertyDescriptor(u,f))})}return o}function ee(o,s){return ue(o)||ce(o,s)||J(o,s)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(o,s){if(o){if(typeof o=="string")return ne(o,s);var u=Object.prototype.toString.call(o).slice(8,-1);if(u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set")return Array.from(o);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return ne(o,s)}}function ne(o,s){(s==null||s>o.length)&&(s=o.length);for(var u=0,f=new Array(s);u<s;u++)f[u]=o[u];return f}function ce(o,s){var u=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(u!=null){var f=[],d=!0,m=!1,v,a;try{for(u=u.call(o);!(d=(v=u.next()).done)&&(f.push(v.value),!(s&&f.length===s));d=!0);}catch(h){m=!0,a=h}finally{try{!d&&u.return!=null&&u.return()}finally{if(m)throw a}}return f}}function ue(o){if(Array.isArray(o))return o}function fe(o,s){if(!(o instanceof s))throw new TypeError("Cannot call a class as a function")}function de(o,s){for(var u=0;u<s.length;u++){var f=s[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(o,f.key,f)}}function Oe(o,s,u){return s&&de(o.prototype,s),u&&de(o,u),Object.defineProperty(o,"prototype",{writable:!1}),o}function pe(o,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(s&&s.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),s&&ae(o,s)}function ae(o,s){return ae=Object.setPrototypeOf||function(f,d){return f.__proto__=d,f},ae(o,s)}function Pe(o){var s=Te();return function(){var f=te(o),d;if(s){var m=te(this).constructor;d=Reflect.construct(f,arguments,m)}else d=f.apply(this,arguments);return ge(this,d)}}function ge(o,s){if(s&&(r(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $(o)}function $(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function te(o){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)},te(o)}function M(o,s,u){return s in o?Object.defineProperty(o,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[s]=u,o}var Q=function(o){pe(u,o);var s=Pe(u);function u(f){var d;return fe(this,u),d=s.call(this,f),M($(d),"onDragStart",function(m,v){(0,b.default)("Draggable: onDragStart: %j",v);var a=d.props.onStart(m,(0,g.createDraggableData)($(d),v));if(a===!1)return!1;d.setState({dragging:!0,dragged:!0})}),M($(d),"onDrag",function(m,v){if(!d.state.dragging)return!1;(0,b.default)("Draggable: onDrag: %j",v);var a=(0,g.createDraggableData)($(d),v),h={x:a.x,y:a.y};if(d.props.bounds){var Y=h.x,U=h.y;h.x+=d.state.slackX,h.y+=d.state.slackY;var z=(0,g.getBoundPosition)($(d),h.x,h.y),X=ee(z,2),Ne=X[0],me=X[1];h.x=Ne,h.y=me,h.slackX=d.state.slackX+(Y-h.x),h.slackY=d.state.slackY+(U-h.y),a.x=h.x,a.y=h.y,a.deltaX=h.x-d.state.x,a.deltaY=h.y-d.state.y}var he=d.props.onDrag(m,a);if(he===!1)return!1;d.setState(h)}),M($(d),"onDragStop",function(m,v){if(!d.state.dragging)return!1;var a=d.props.onStop(m,(0,g.createDraggableData)($(d),v));if(a===!1)return!1;(0,b.default)("Draggable: onDragStop: %j",v);var h={dragging:!1,slackX:0,slackY:0},Y=!!d.props.position;if(Y){var U=d.props.position,z=U.x,X=U.y;h.x=z,h.y=X}d.setState(h)}),d.state={dragging:!1,dragged:!1,x:f.position?f.position.x:f.defaultPosition.x,y:f.position?f.position.y:f.defaultPosition.y,prevPropsPosition:W({},f.position),slackX:0,slackY:0,isElementSVG:!1},f.position&&!(f.onDrag||f.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),d}return Oe(u,[{key:"componentDidMount",value:function(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var d,m,v;return(d=(m=this.props)===null||m===void 0||(v=m.nodeRef)===null||v===void 0?void 0:v.current)!==null&&d!==void 0?d:c.default.findDOMNode(this)}},{key:"render",value:function(){var d,m=this.props;m.axis,m.bounds;var v=m.children,a=m.defaultPosition,h=m.defaultClassName,Y=m.defaultClassNameDragging,U=m.defaultClassNameDragged,z=m.position,X=m.positionOffset;m.scale;var Ne=F(m,O),me={},he=null,wt=!!z,Be=!wt||this.state.dragging,Le=z||a,Fe={x:(0,g.canDragX)(this)&&Be?this.state.x:Le.x,y:(0,g.canDragY)(this)&&Be?this.state.y:Le.y};this.state.isElementSVG?he=(0,i.createSVGTransform)(Fe,X):me=(0,i.createCSSTransform)(Fe,X);var St=(0,p.default)(v.props.className||"",h,(d={},M(d,Y,this.state.dragging),M(d,U,this.state.dragged),d));return n.createElement(x.default,E({},Ne,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(v),{className:St,style:W(W({},v.props.style),me),transform:he}))}}],[{key:"getDerivedStateFromProps",value:function(d,m){var v=d.position,a=m.prevPropsPosition;return v&&(!a||v.x!==a.x||v.y!==a.y)?((0,b.default)("Draggable: getDerivedStateFromProps %j",{position:v,prevPropsPosition:a}),{x:v.x,y:v.y,prevPropsPosition:W({},v)}):null}}]),u}(n.Component);e.default=Q,M(Q,"displayName","Draggable"),M(Q,"propTypes",W(W({},x.default.propTypes),{},{axis:t.default.oneOf(["both","x","y","none"]),bounds:t.default.oneOfType([t.default.shape({left:t.default.number,right:t.default.number,top:t.default.number,bottom:t.default.number}),t.default.string,t.default.oneOf([!1])]),defaultClassName:t.default.string,defaultClassNameDragging:t.default.string,defaultClassNameDragged:t.default.string,defaultPosition:t.default.shape({x:t.default.number,y:t.default.number}),positionOffset:t.default.shape({x:t.default.oneOfType([t.default.number,t.default.string]),y:t.default.oneOfType([t.default.number,t.default.string])}),position:t.default.shape({x:t.default.number,y:t.default.number}),className:y.dontSetMe,style:y.dontSetMe,transform:y.dontSetMe})),M(Q,"defaultProps",W(W({},x.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))})(lt);var yt=lt,bt=yt.default,zr=yt.DraggableCore;we.exports=bt;we.exports.default=bt;we.exports.DraggableCore=zr;var Xr=we.exports;const Yr=Ct(Xr),Hr=e=>l(Yr,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:l(nt,{...e})}),Vr=({url:e,open:r,setOpen:n})=>{const t=()=>{n(!1)};return l(Pt,{open:r,onClose:t,maxWidth:"xl",fullWidth:!0,onClick:()=>t(),TransitionComponent:Kr,"aria-labelledby":"draggable-dialog-titles",style:{backgroundColor:"#000000be",overflow:"hidden"},PaperComponent:Hr,children:l(Gr,{children:l(Ie,{src:e})})})},Gr=le.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`,Kr=C.forwardRef(function(r,n){return l(Ot,{direction:"up",ref:n,...r})}),Jr=({children:e,variant:r,...n})=>r==="contained"?l(Qr,{...n,children:e}):l(Zr,{...n,children:e}),Qr=le.button`
  margin-top: 10px 10px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: all 0.3s linear;
  background-color: #aa0000;
  border: 1.5px solid #aa0000;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: 1.5px solid #aa0000;
    color: #aa0000;
  }
`,Zr=le.button`
  margin-top: 10px 10px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: all 0.3s linear;
  background-color: rgba(0, 0, 0, 0);
  border: 1.5px solid #aa0000;
  color: #aa0000;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #aa0000;
    border: 1.5px solid #aa0000;
    color: #fff;
  }
`,en=({data:e})=>{var r,n;return l($t,{component:nt,sx:{background:"rgba(0, 0, 0, 0)",boxShadow:"none"},children:l(qt,{sx:{minWidth:700},"aria-label":"spanning table",children:e&&S(Tt,{children:[l(Wt,{children:S(He,{children:[l(H,{align:"left",sx:{color:"#aa0000"},children:"Item"}),((r=e[0])==null?void 0:r.price)&&S(H,{align:"left",sx:{color:"#aa0000"},children:["Price (",(n=e[0])==null?void 0:n.currency,")"]}),l(H,{align:"left",sx:{color:"#aa0000"},children:"Description"})]})}),l(Ut,{children:e==null?void 0:e.map((t,c)=>{var p,i,g;return S(He,{children:[t!=null&&t.name?l(H,{align:"left",sx:{color:"#444"},children:t.name?t.name:""}):l(H,{align:"left",sx:{color:"#444"},children:""}),(p=e[0])!=null&&p.price?l(H,{align:"left",sx:{color:"#444"},children:t.price?t.price:""}):l(H,{align:"left",sx:{color:"#444"},children:" "}),(t==null?void 0:t.desc)&&l(H,{align:"left",sx:{color:"#444"},children:((i=t==null?void 0:t.desc)==null?void 0:i.length)<181?t.desc:`${(g=t.desc)==null?void 0:g.substring(0,180)}...`})]},c)})})]})})})};xt.propTypes={src:ze.string.isRequired,sx:ze.object};function xt({src:e,sx:r}){return l(at,{component:"span",sx:{width:24,height:24,display:"inline-block",bgcolor:"currentColor",mask:`url(${e}) no-repeat center / contain`,WebkitMask:`url(${e}) no-repeat center / contain`,...r}})}const tn=({review:e,userId:r,SPid:n,setComments:t})=>{const{Cid:c,Uid:p,username:i,comment:g,profilePic:y,createdAt:x}=e,b=parseInt(p,10)===parseInt(r,10),{enqueueSnackbar:O}=ot(),D=async()=>{if(b===!0)try{const w=await ie.get(`/user.api/userDeleteComment/${c}/${p}/${n}`);w.status===200&&(t(w.data),O("Comment Deleted Successfully",{variant:"success"}))}catch(w){console.log(w),w.response?console.log(w.response,w.message):w.request?w.request.status?console.error(w.message,w.request):console.log(w.request,w.message):console.log(w.message),O("Deleted Failed",{variant:"error"})}};return l(Bt,{item:!0,xs:12,sm:6,md:6,style:{width:"100%"},children:S(it,{sx:{position:"relative",width:"100%"},children:[S(rn,{children:[l(xt,{color:"paper",src:"/static/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper"}}),l(nn,{alt:i,src:y}),l(an,{children:S(se,{variant:"h5",children:[i," ",S(se,{variant:"caption",children:["on ",Mt(x)]})]})})]}),S(st,{sx:{pt:4},children:[l(se,{variant:"body",style:{padding:"0px"},children:g}),b&&l(Et,{display:"flex",direction:"row",alignItems:"center",justifyContent:"flex-end",children:l(Rt,{size:"small",color:"error",onClick:()=>D(),children:l(Lt,{size:"small"})})})]})]})})},rn=$e("div")({position:"relative",paddingTop:0}),nn=$e(Nt)(({theme:e})=>({zIndex:9,width:32,height:32,position:"absolute",left:e.spacing(3),bottom:e.spacing(-2)})),an=$e("div")({top:0,width:"100%",height:"100%",padding:"10px 0px 5px 80px",background:"#d8d7d7"}),Dn=()=>{const{services:e}=Me(a=>a.services),{sPs:r}=Me(a=>a.sPs),{user:n}=Me(a=>a.user),t=parseInt(kt().pathname.split("/")[3],10),c=et(),{enqueueSnackbar:p}=ot(),[i,g]=C.useState(null),[y,x]=C.useState(null),[b,O]=C.useState(null),[D,w]=C.useState(null),[N,E]=C.useState(0),[F,R]=C.useState(!1),[K,W]=C.useState(!1),[ee,Ce]=C.useState(null),[J,ne]=C.useState(null),[ce,ue]=C.useState(!1),[fe,de]=C.useState(!1),[Oe,pe]=C.useState(!1),[ae,Pe]=C.useState(!1),[ge,$]=C.useState(!1),[Te,te]=C.useState(null),[M,Q]=C.useState({email:!1,tel:!1});C.useEffect(()=>{if(r){const a=r.findIndex(h=>h.id===t);a===-1?c("/404"):g(r[a])}},[t]),C.useEffect(()=>{var a;if(i&&e){const h=e.findIndex(U=>U.id===i.sId);h===-1||x(e[h]),w(i.rating);const Y=[];(a=i.pricing)==null||a.forEach(U=>{var z;(z=U.images)==null||z.forEach(X=>{Y.push(X)})}),O(Y),u()}},[i]);const o=async()=>{if(n.type==="client"){if(N>0&&F===!1&&K===!1)try{R(!0);const a=await ie.post(`/user.api/rateSp/${t}/${N}`);a.status===200&&(w(a.data),p("Rate Sumbitted Successfully",{variant:"success"}),W(!0))}catch(a){console.log(a),a.response?console.log(a.response,a.message):a.request?a.request.status?console.error(a.message,a.request):console.log(a.request,a.message):console.log(a.message),p("Rating Failed",{variant:"error"}),R(!1)}}else p("Only Clients Can Rate Service Providers",{variant:"warning"}),p("Login As Client",{variant:"info"})},s=async()=>{if(n.type==="client")try{pe(!0);const a={type:"tel",time:new Date().toISOString()};(await ie.post(`/user.api/contactAttempt/${n.Uid}/${t}`,a)).status===200&&(p("Call Request Sumbitted Successfully",{variant:"success"}),Pe(!0))}catch(a){console.log(a),a.response?console.log(a.response,a.message):a.request?a.request.status?console.error(a.message,a.request):console.log(a.request,a.message):console.log(a.message),p("Call Request Failed",{variant:"error"}),pe(!1)}else p("Only Clients Can Request Calls",{variant:"warning"}),p("Login As Client",{variant:"info"})},u=async()=>{try{const a=await ie.get(`/user.api/fetchSpComments/${t}`);a.status===200&&Ce(a.data)}catch(a){console.log(a),a.response?console.log(a.response,a.message):a.request?a.request.status?console.error(a.message,a.request):console.log(a.request,a.message):console.log(a.message)}},f=async()=>{if((J==null?void 0:J.length)>3)if(n.type==="client")try{ue(!0);const a={comment:J};(await ie.post(`/user.api/commentOnsp/${n.Uid}/${t}`,a)).status===200&&(u(),p("Comment Sumbitted Successfully",{variant:"success"}),ne(""),de(!0))}catch(a){console.log(a),a.response?console.log(a.response,a.message):a.request?a.request.status?console.error(a.message,a.request):console.log(a.request,a.message):console.log(a.message),p("Commenting Failed",{variant:"error"})}finally{ue(!1)}else p("Only Clients Can Comment",{variant:"warning"}),p("Login As Client",{variant:"info"})},d=a=>{a===1?Q({...M,email:!0}):a===0&&Q({...M,tel:!0})},m=a=>{window.open(`tel:${a}`)},v=a=>{window.open(`mailto:${a}`)};return l(jt,{title:i==null?void 0:i.title,nav:!0,children:S(on,{children:[ge&&l(Vr,{open:ge,setOpen:$,url:Te}),l(Jt,{style:{width:"80%"},crumbs:[{name:"Home",link:"/home"},{name:y?`${y.name}`:"Service Providers",link:y?`/service/${y.id}`:""},{name:i==null?void 0:i.title,link:""}]}),S("div",{className:"wrapper",children:[S("div",{className:"row1",children:[l("h1",{className:"title",children:i==null?void 0:i.title}),l("div",{className:"desc",children:i==null?void 0:i.desc})]}),S("div",{className:"row2",children:[l("div",{className:"company_logo",children:l(Ie,{src:i==null?void 0:i.logo,style:{maxWidth:200,maxHeight:200}})}),S("div",{className:"details",children:[S("div",{className:"detail_item",children:[l(Vt,{}),"  ",M.email?[i==null?void 0:i.email].map((a,h)=>h===[i==null?void 0:i.email].length-1?S("span",{onClick:()=>v(a),children:[a,"."]},h):S("span",{onClick:()=>v(a),children:[a,", "]},h)):l("span",{onClick:()=>d(1),children:"Click to reveal email(s)"})]}),S("div",{className:"detail_item",children:[l(Ft,{}),"  ",M.tel?[i==null?void 0:i.tel].map((a,h)=>h===[i==null?void 0:i.tel].length-1?S("span",{onClick:()=>m(a),children:[a,"."]},h):S("span",{onClick:()=>m(a),children:[a,", "]},h)):l("span",{onClick:()=>d(0),children:"Click to reveal contact(s)"})]}),S("div",{className:"detail_item",children:[l(Gt,{}),"  ",i==null?void 0:i.location]}),D&&l("a",{href:"#rate_us",children:S("div",{className:"detail_item",children:[l(Ye,{valueIn:parseInt(D.value,10),readOnly:!0,input:!0})," (",D.reviews," Reviews)"]})}),l("div",{className:"detail_item",children:l(Xe,{variant:"outlined",color:"inherit",size:"large",startIcon:l(Ht,{}),onClick:()=>s(),disabled:ae||Oe,children:l(se,{variant:"h5",style:{color:"#aa0000"},children:"Request Call"})})})]})]}),l("div",{className:"row3",children:b==null?void 0:b.map((a,h)=>l("div",{className:"sp_img",children:l(Ie,{src:a,onClick:()=>{te(a),$(!0)}})},h))}),S("div",{className:"row4",children:[l("h3",{className:"sub_title",children:"Pricing"}),l(en,{data:i==null?void 0:i.pricing})]}),S("div",{className:"row5",children:[l("h3",{className:"sub_title",children:"Comments"}),ee?ee==null?void 0:ee.map((a,h)=>l(tn,{review:a,userId:n.type==="client"?n.Uid:"90923467",SPid:t,setComments:()=>u()},h)):l(se,{variant:"h5",children:"No Comments Yet"}),S(it,{style:{width:"100%"},children:[l(zt,{title:"Give Your Comment"}),l(st,{sx:{pt:0},children:l(at,{children:l(Ve,{container:!0,spacing:3,columns:12,children:S(Ve,{item:!0,xs:12,md:12,children:[l("br",{}),l(Yt,{fullWidth:!0,label:"Comment",helperText:"Not More than 200 words",multiline:!0,rows:6,disabled:ce||fe,onChange:a=>ne(a.target.value),value:J})]})})})}),l(It,{}),l(Xt,{sx:{justifyContent:"flex-end"},children:l(Xe,{variant:"outlined",color:"primary",endIcon:l(At,{size:"small",children:l(Kt,{})}),disabled:ce||fe,onClick:()=>f(),children:"Submit"})})]})]}),S("div",{className:"row6",id:"rate_us",children:[l("h3",{className:"sub_title",children:" Rate Us"}),l(Ye,{setValue:E,valueOut:N,disabled:K||F}),l(Jr,{variant:"contained",disabled:K||F,onClick:()=>o(),children:"SUBMIT RATING"})]})]})]})})},on=le.div`
  padding: 50px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .wrapper {
    width: 78%;
    height: 100%;
    margin-top: 18px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    gap: 25px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }

    .row1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title {
        text-align: center;
        font-size: 40px;
        margin-bottom: 16px;
        color: #aa0000;
      }
      .desc {
        text-align: center;
        font-size: 22px;
        color: #444;
        width: 80%;
      }
    }

    .row2 {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      .company_logo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-right: 40px; */
        overflow: hidden;
      }

      .details {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 10px;

        .detail_item {
          display: flex;
          align-items: center;
        }

        span {
          cursor: pointer;

          &:hover {
            color: #aa0000;
          }
        }

        svg {
          color: #aa0000;
        }
      }
    }

    .row3 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      .sp_img {
        width: 360px;
        height: 360px;
        border-radius: 6px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        overflow: hidden;

        img {
          object-fit: cover;
          border-radius: 6px;
          width: 100%;
          height: 100%;
        }
        &:hover {
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
        }
      }
    }

    .row4 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }

    .row5 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }

    .row6 {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      }

      .sub_title {
        font-size: 24px;
        color: #444;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      text-align: center;
    }

    .desc {
      width: 90%;
    }
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;export{Dn as default};
