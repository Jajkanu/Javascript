!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=70)}({2:function(e,t,r){"use strict";e.exports=r(51)},21:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var i in r=Object(arguments[u]))f.call(r,i)&&(o[i]=r[i]);if(c){n=c(r);for(var a=0;a<n.length;a++)l.call(r,n[a])&&(o[n[a]]=r[n[a]])}}return o}},3:function(e,t){e.exports=Roblox},5:function(e,t,r){e.exports=r(52)()},51:function(e,t,r){"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=r(21),n="function"==typeof Symbol&&Symbol.for,s=n?Symbol.for("react.element"):60103,p=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,y=n?Symbol.for("react.forward_ref"):60112,b=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental"),n&&Symbol.for("react.responder");var v="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function S(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||O}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||O}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!==f(e)&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=S.prototype;var E=_.prototype=new j;E.constructor=_,l(E,S.prototype),E.isPureReactComponent=!0;var P={current:null},k={suspense:null},x={current:null},C=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n=void 0,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,n)&&!R.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:s,type:e,key:u,ref:i,props:o,_owner:x.current}}function T(e){return"object"===f(e)&&null!==e&&e.$$typeof===s}var I=/\/+/g,$=[];function L(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,$.length<10&&$.push(e)}function N(e,t,r){return null==e?0:function e(t,r,n,o){var u=f(t);"undefined"!==u&&"boolean"!==u||(t=null);var i=!1;if(null===t)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case s:case p:i=!0}}if(i)return n(o,t,""===r?"."+D(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var c=r+D(u=t[a],a);i+=e(u,c,n,o)}else if("function"==typeof(c=null===t||"object"!==f(t)?null:"function"==typeof(c=v&&t[v]||t["@@iterator"])?c:null))for(t=c.call(t),a=0;!(u=t.next()).done;)i+=e(u=u.value,c=r+D(u,a++),n,o);else if("object"===u)throw n=""+t,g(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function D(e,t){return"object"===f(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,function(e){return e}):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(I,"$&/")+"/"),N(e,q,t=L(t,u,n,o)),M(t)}function V(){var e=P.current;if(null===e)throw g(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,U,t=L(null,null,t,r)),M(t)},count:function(e){return N(e,function(){return null},null)},toArray:function(e){var t=[];return F(e,t,null,function(e){return e}),t},only:function(e){if(!T(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:S,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,r){return V().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,r){return V().useReducer(e,t,r)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:o,Profiler:i,StrictMode:u,Suspense:b,unstable_SuspenseList:d,createElement:A,cloneElement:function(e,t,r){if(null==e)throw g(Error(267),e);var n=void 0,o=l({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,a=x.current),void 0!==t.key&&(u=""+t.key);var c=void 0;for(n in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)C.call(t,n)&&!R.hasOwnProperty(n)&&(o[n]=void 0===t[n]&&void 0!==c?c[n]:t[n])}if(1===(n=arguments.length-2))o.children=r;else if(1<n){c=Array(n);for(var f=0;f<n;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:s,type:e.type,key:u,ref:i,props:o,_owner:a}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:k,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:l}},H=B;e.exports=H.default||H},52:function(e,t,r){"use strict";var a=r(53);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,u){if(u!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r}},53:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},57:function(e,t,r){var n;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=c(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===n)for(var u in r)i.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===c(r(8))&&r(8)?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},70:function(e,t,r){"use strict";function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var n=r(2),b=r.n(n),o=r(5),a=r.n(o),c=r(57),d=r.n(c),f=function(e,t){console.warn("The following exception has been caught with the captured component stack:"),console.group(),console.info("".concat(e)),console.info("".concat(t.componentStack)),console.groupEnd()},l=function(u,e){var i=1<arguments.length&&void 0!==e?e:"withHOC";return function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=u.apply(void 0,[e].concat(r));return o.displayName=function(e,t){return"".concat(t,"(").concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e,i),o}};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=l(function(y){var e=function(){function n(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=(t=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}(this,v(n).call(this,e))).props.showAppOnInit;return t.state={isLoading:!r,hasError:!1,errorState:null},t.onLoadStart=t.onLoadStart.bind(g(t)),t.onLoadEnd=t.onLoadEnd.bind(g(t)),t.onError=t.onError.bind(g(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(n,b.a.Component),function(e,t,r){t&&p(e.prototype,t),r&&p(e,r)}(n,[{key:"onLoadStart",value:function(){this.setState({isLoading:!0})}},{key:"onLoadEnd",value:function(){this.setState({isLoading:!1})}},{key:"onError",value:function(e){this.setState({hasError:!0,errorState:e})}},{key:"componentDidCatch",value:function(e,t){f(e,t)}},{key:"render",value:function(){var e,t,r=this.props,n=(r.showAppOnInit,r.defaultMessage),o=r.errorStates,u=h(r,["showAppOnInit","defaultMessage","errorStates"]),i=this.state,a=i.isLoading,c=i.hasError,f=i.errorState;c?e=b.a.createElement("h3",null,o[f]?o[f]:n):(e=b.a.createElement("span",{className:"spinner spinner-default"}),t=b.a.createElement(y,m({},u,{onLoadStart:this.onLoadStart,onLoadEnd:this.onLoadEnd,onError:this.onError})));var l=c||a,s=d()("component-status-container",{hidden:!l}),p=d()("component-container",{hidden:l});return b.a.createElement("div",{className:"component-status"},b.a.createElement("div",{className:s},e),b.a.createElement("div",{className:p},t))}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0,errorState:null}}}]),n}();return e.defaultProps={showAppOnInit:!1,defaultMessage:"",errorStates:{}},e.propTypes={showAppOnInit:a.a.bool,defaultMessage:a.a.string,errorStates:a.a.objectOf(a.a.string)},e},"withComponentStatus"),w=r(3),S=2,j=["Common","CommonUI"];function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=window.RobloxError,P=function(e){return"string"!=typeof e?(new E("Invalid namespace name, required a string").throw(),null):e.split(".")};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=l(function(e,t){var a=function(e){var t=e.common,r=e.feature,n={};return!Array.isArray(t)||null!==r&&"string"!=typeof r?(new E("Invalid namespaces config!").throw(),n):Object.assign(n,{feature:r,common:t.filter(function(e){var t=P(e);if(Array.isArray(t)&&t.length===S){var r=_(t,1)[0];if(-1<j.indexOf(r))return!0;new E("Requested namespace ".concat(e," is not a common namespace!")).throw()}return!1})})}(t);return function(){function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=function(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?T(e):t}(this,A(i).call(this,e))).intl=new w.Intl,t.translate=t.translate.bind(T(t));var r=a.common,n=a.feature,o=new w.TranslationResourceProvider(t.intl),u=[].concat(C(r),[n]).filter(function(e){return!!e}).map(function(e){return o.getTranslationResource(e)});return t.state={languageResources:o.mergeTranslationResources.apply(o,C(u))},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,b.a.Component),function(e,t,r){t&&R(e.prototype,t),r&&R(e,r)}(i,[{key:"translate",value:function(e,t){return this.state.languageResources.get(e,t)}},{key:"render",value:function(){return b.a.createElement(e,x({},this.props,{translate:this.translate,intl:this.intl}))}}]),i}()},"withTranslations");window.ReactUtilities={makeActionCreator:function(r){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){i(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({type:r},o.reduce(function(e,t,r){return Object.assign(e,i({},t,n[r]))},{}))}},withComponentStatus:y,withTranslations:$}},8:function(t,e){(function(e){t.exports=e}).call(this,{})}});
//# sourceMappingURL=https://js.rbxcdn.com/123981c2c486df6e29a7-reactUtilities.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ReactUtilities");