var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-supports-svgclippaths-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?b.className.baseVal=n:b.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",p=i("div"),d=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function h(e,n,o,s){function a(){c&&(delete q.style,delete q.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,h,g=["modernizr","tspan","samp"];!q.style&&g.length;)c=!0,q.modElem=i(g.shift()),q.style=q.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],h=q.style[m],u(m,"-")&&(m=f(m)),q.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{q.style[m]=o}catch(y){}if(q.style[m]!=h)return a(),"pfx"==n?m:!0}return a(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+A.join(i+" ")+i).split(" "),p(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var S=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",_||x);var b=n.documentElement,T="svg"===b.nodeName.toLowerCase(),P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P;var z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(z.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var E=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(r,function(e){t=9===e.offsetTop})}return t});var N="Moz O ms Webkit",j=w._config.usePrefixes?N.split(" "):[];w._cssomPrefixes=j;var A=w._config.usePrefixes?N.toLowerCase().split(" "):[];w._domPrefixes=A;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var q={style:k.elem.style};Modernizr._q.unshift(function(){delete q.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),o(),s(S),delete w.addTest,delete w.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.8';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');
/*! formstone v1.4.15 [core.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(w){"use strict";function e(){this.Version="@version",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=w(i),this.document=r,this.$document=w(r),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}}var t,n,s,i="undefined"!=typeof window?window:this,r=i.document,o={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(e){p[e]=!0,w.isEmptyObject(p)||h||(t.length?t.attr("content",s):t=w("head").append('<meta name="viewport" content="'+s+'">'),c.$body.on(u.gestureChange,o.killGesture).on(u.gestureStart,o.killGesture).on(u.gestureEnd,o.killGesture),h=!0)},unlockViewport:function(e){"undefined"!==w.type(p[e])&&delete p[e],w.isEmptyObject(p)&&h&&(t.length&&(n?t.attr("content",n):t.remove()),c.$body.off(u.gestureChange).off(u.gestureStart).off(u.gestureEnd),h=!1)},startTimer:function(e,t,n,s){return o.clearTimer(e),s?setInterval(n,t):setTimeout(n,t)},clearTimer:function(e,t){e&&(t?clearInterval(e):clearTimeout(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=c.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),s=0;s<n.length;s++){var i=n[s].split("=");t[i[0]]=i[1]}return t}},c=new e,a=w.Deferred(),l={base:"{ns}",element:"{ns}-element"},u={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},d=null,f=20,p=[],h=!1;function m(e,t,n,s){var i,r={raw:{}};for(i in s=s||{})s.hasOwnProperty(i)&&("classes"===e?(r.raw[s[i]]=t+"-"+s[i],r[s[i]]="."+t+"-"+s[i]):(r.raw[i]=s[i],r[i]=s[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(r.raw[i]=n[i].replace(/{ns}/g,t),r[i]=n[i].replace(/{ns}/g,"."+t)):(r.raw[i]=n[i].replace(/.{ns}/g,""),r[i]=n[i].replace(/{ns}/g,t)));return r}function g(){c.windowWidth=c.$window.width(),c.windowHeight=c.$window.height(),d=o.startTimer(d,f,y)}function y(){for(var e in c.ResizeHandlers)c.ResizeHandlers.hasOwnProperty(e)&&c.ResizeHandlers[e].callback.call(window,c.windowWidth,c.windowHeight)}function v(e,t){return parseInt(e.priority)-parseInt(t.priority)}return e.prototype.NoConflict=function(){for(var e in c.DontConflict=!0,c.Plugins)c.Plugins.hasOwnProperty(e)&&(w[e]=c.Conflicts[e],w.fn[e]=c.Conflicts.fn[e])},e.prototype.Ready=function(e){"complete"===c.document.readyState||"loading"!==c.document.readyState&&!c.document.documentElement.doScroll?e():c.document.addEventListener("DOMContentLoaded",e)},e.prototype.Plugin=function(e,t){function d(e){return e.data(h)}var f,p,n,h;return c.Plugins[e]=(p=t,n="fs-"+(f=e),h="fs"+f.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()}),p.initialized=!1,p.priority=p.priority||10,p.classes=m("classes",n,l,p.classes),p.events=m("events",f,u,p.events),p.functions=w.extend({getData:d,iterate:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0,s=this.length;n<s;n++){var i=this.eq(n),r=d(i)||{};"undefined"!==w.type(r.$el)&&e.apply(i,[r].concat(t))}return this}},o,p.functions),p.methods=w.extend(!0,{_construct:w.noop,_postConstruct:w.noop,_destruct:w.noop,_resize:!1,destroy:function(e){p.functions.iterate.apply(this,[p.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(p.classes.raw.element).removeData(h)}},p.methods),p.utilities=w.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(e){p.defaults=w.extend(!0,p.defaults,e||{})}},p.utilities),p.widget&&(c.Conflicts.fn[f]=w.fn[f],w.fn[h]=function(e){if(this instanceof w){var t=p.methods[e];if("object"===w.type(e)||!e)return function(e){var t,n,s,i="object"===w.type(e),r=Array.prototype.slice.call(arguments,i?1:0),o=w();for(e=w.extend(!0,{},p.defaults||{},i?e:{}),n=0,s=this.length;n<s;n++)if(!d(t=this.eq(n))){p.guid++;var a="__"+p.guid,c=p.classes.raw.base+a,l=t.data(f+"-options"),u=w.extend(!0,{$el:t,guid:a,numGuid:p.guid,rawGuid:c,dotGuid:"."+c},e,"object"===w.type(l)?l:{});t.addClass(p.classes.raw.element).data(h,u),p.methods._construct.apply(t,[u].concat(r)),o=o.add(t)}for(n=0,s=o.length;n<s;n++)t=o.eq(n),p.methods._postConstruct.apply(t,[d(t)]);return this}.apply(this,arguments);if(t&&0!==e.indexOf("_")){var n=[t].concat(Array.prototype.slice.call(arguments,1));return p.functions.iterate.apply(this,n)}return this}},c.DontConflict||(w.fn[f]=w.fn[h])),c.Conflicts[f]=w[f],w[h]=p.utilities._delegate||function(e){var t=p.utilities[e]||p.utilities._initialize||!1;if(t){var n=Array.prototype.slice.call(arguments,"object"===w.type(e)?0:1);return t.apply(window,n)}},c.DontConflict||(w[f]=w[h]),p.namespace=f,p.namespaceClean=h,p.guid=0,p.methods._resize&&(c.ResizeHandlers.push({namespace:f,priority:p.priority,callback:p.methods._resize}),c.ResizeHandlers.sort(v)),p.methods._raf&&(c.RAFHandlers.push({namespace:f,priority:p.priority,callback:p.methods._raf}),c.RAFHandlers.sort(v)),p),c.Plugins[e]},c.$window.on("resize.fs",g),g(),function e(){if(c.support.raf)for(var t in c.window.requestAnimationFrame(e),c.RAFHandlers)c.RAFHandlers.hasOwnProperty(t)&&c.RAFHandlers[t].callback.call(window)}(),c.Ready(function(){c.$body=w("body"),w("html").addClass(c.support.touch?"touchevents":"no-touchevents"),t=w('meta[name="viewport"]'),n=!!t.length&&t.attr("content"),s="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",a.resolve()}),u.clickTouchStart=u.click+" "+u.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],s={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",r="",o="",a=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in a.style){i=t[e],c.support.transition=!0;break}for(e in u.transitionEnd=i+".{ns}",n)if(n.hasOwnProperty(e)&&n[e]in a.style){r=n[e];break}for(e in c.transition=r,s)if(s.hasOwnProperty(e)&&s[e]in a.style){c.support.transform=!0,o=s[e];break}c.transform=o}(),window.Formstone=c});
/*! formstone v1.4.15 [mediaquery.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function o(){!function(){for(var e in r={unit:s.unit},u)if(u.hasOwnProperty(e))for(var t in l[e])if(l[e].hasOwnProperty(t)){var n="Infinity"===t?1/0:parseInt(t,10),i=-1<e.indexOf("max");l[e][t].matches&&(i?(!r[e]||n<r[e])&&(r[e]=n):(!r[e]||n>r[e])&&(r[e]=n))}}(),n.trigger(c.mqChange,[r])}function h(e){var t=m(e.media),n=d[t],i=e.matches,r=i?c.enter:c.leave;if(n&&(n.active||!n.active&&i)){for(var a in n[r])n[r].hasOwnProperty(a)&&n[r][a].apply(n.mq);n.active=!0}}function m(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var t=e.Plugin("mediaquery",{utilities:{_initialize:function(e){for(var t in e=e||{},u)u.hasOwnProperty(t)&&(s[t]=e[t]?a.merge(e[t],s[t]):s[t]);for(var n in(s=a.extend(s,e)).minWidth.sort(v.sortDesc),s.maxWidth.sort(v.sortAsc),s.minHeight.sort(v.sortDesc),s.maxHeight.sort(v.sortAsc),u)if(u.hasOwnProperty(n))for(var i in l[n]={},s[n])if(s[n].hasOwnProperty(i)){var r=window.matchMedia("("+u[n]+": "+(s[n][i]===1/0?1e5:s[n][i])+s.unit+")");r.addListener(o),l[n][s[n][i]]=r}o()},state:function(){return r},bind:function(e,t,n){var i=f.matchMedia(t),r=m(i.media);for(var a in d[r]||(d[r]={mq:i,active:!0,enter:{},leave:{}},d[r].mq.addListener(h)),n)n.hasOwnProperty(a)&&d[r].hasOwnProperty(a)&&(d[r][a][e]=n[a]);var o=d[r],s=i.matches;s&&o[c.enter].hasOwnProperty(e)?(o[c.enter][e].apply(i),o.active=!0):!s&&o[c.leave].hasOwnProperty(e)&&(o[c.leave][e].apply(i),o.active=!1)},unbind:function(e,t){if(e)if(t){var n=m(t);d[n]&&(d[n].enter[e]&&delete d[n].enter[e],d[n].leave[e]&&delete d[n].leave[e])}else for(var i in d)d.hasOwnProperty(i)&&(d[i].enter[e]&&delete d[i].enter[e],d[i].leave[e]&&delete d[i].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},c=a.extend(t.events,{enter:"enter",leave:"leave"}),n=e.$window,f=n[0],v=t.functions,r=null,d=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});
/*! formstone v1.4.15 [analytics.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(c,l){"use strict";function t(){p.scrollDepth&&o()}function n(){var e,t=c(this),n="undefined"!==c.type(t[0].href)?t[0].href:"",i=document.domain.split(".").reverse(),a=null!==n.match(i[1]+"."+i[0]);if(n.match(/^mailto\:/i))e="Email, Click, "+n.replace(/^mailto\:/i,"");else if(n.match(/^tel\:/i))e="Telephone, Click, "+n.replace(/^tel\:/i,"");else if(n.match(p.fileTypes)){e="File, Download:"+(/[.]/.exec(n)?/[^.]+$/.exec(n):void 0)[0]+", "+n.replace(/ /g,"-")}else a||(e="ExternalLink, Click, "+n);e&&t.attr(w,e)}function i(e){v.startTimer(T,250,a)}function a(){for(var e,t=u.scrollTop()+l.windowHeight,n=1/p.scrollStops,i=n,a=1;a<=p.scrollStops;a++){if(e=Math.round(100*i).toString(),!x[k][e].passed&&t>x[k][e].edge)x[k][e].passed=!0,s(c.extend(p.scrollFields,{eventCategory:"ScrollDepth",eventAction:k,eventLabel:e,nonInteraction:!0}));i+=n}}function o(){var e,t=c.mediaquery("state"),n=h.outerHeight(),i={},a=1/p.scrollStops,l=a,o=0;t.minWidth&&(k="MinWidth:"+t.minWidth+"px");for(var r=1;r<=p.scrollStops;r++)o=parseInt(n*l),i[e=Math.round(100*l).toString()]={edge:"100"===e?o-10:o,passsed:!(!x[k]||!x[k][e])&&x[k][e].passed},l+=a;x[k]=i}function r(e){var t=c(this),n=t.attr("href"),i=t.data(g).split(",");for(var a in p.eventCallback&&e.preventDefault(),i)i.hasOwnProperty(a)&&(i[a]=c.trim(i[a]));s({eventCategory:i[0],eventAction:i[1],eventLabel:i[2]||n,eventValue:i[3],nonInteraction:i[4]},t)}function s(e,t){d.location;var n=c.extend({hitType:"event"},e);if("undefined"!==c.type(t)&&!t.attr("data-analytics-stop")){var i="undefined"!==c.type(t[0].href)?t[0].href:"",a=!i.match(/^mailto\:/i)&&!i.match(/^tel\:/i)&&i.indexOf(":")<0?d.location.protocol+"//"+d.location.hostname+"/"+i:i;if(""!==a){var l=t.attr("target");if(l)d.open(a,l);else if(p.eventCallback){var o="hitCallback";n[o]=function(){b&&(v.clearTimer(b),function(e){document.location=e}(a))},b=v.startTimer(b,p.eventTimeout,n[o])}}}f(n)}function f(e){if("function"===c.type(d.ga)&&"function"===c.type(d.ga.getAll))for(var t=d.ga.getAll(),n=0,i=t.length;n<i;n++)d.ga(t[n].get("name")+".send",e)}var e=l.Plugin("analytics",{methods:{_resize:t},utilities:{_delegate:function(){if(arguments.length&&"object"!==c.type(arguments[0]))if("destroy"===arguments[0])(function(){y&&h&&h.length&&(u.off(m.namespace),h.off(m.namespace),y=!1)}).apply(this);else{var e=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":(function(e){f(c.extend({hitType:"pageview"},e))}).apply(this,e);break;case"event":s.apply(this,e)}}else(function(e){!y&&h&&h.length&&(y=!0,(p=c.extend(p,e||{})).autoEvents&&h.find("a").not("["+w+"]").each(n),p.scrollDepth&&(o(),u.on(m.scroll,i).one(m.load,t)),h.on(m.click,"*["+w+"]",r))}).apply(this,arguments);return null}}}),p={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},d=l.window,u=l.$window,h=null,v=e.functions,m=e.events,y=!1,g="analytics-event",w="data-"+g,x={},T=null,k="Site",b=null;l.Ready(function(){h=l.$body})});
/*! formstone v1.4.15 [background.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(u,t){"use strict";function e(){(Y=$.scrollTop()+t.windowHeight)<0&&(Y=0),T.iterate.call(j,s)}function i(){C=u(m.base),j=u(m.lazy),T.iterate.call(j,r)}function o(e){if(e.visible){var i=e.source;e.source=null,a(e,i,!0)}}function a(e,i,o){if(i!==e.source&&e.visible){if(e.source=i,e.responsive=!1,e.isYouTube=!1,"object"===u.type(i)&&"string"===u.type(i.video)){var t=i.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);t&&1<=t.length&&(e.isYouTube=!0,e.videoId=t[1])}var a=!e.isYouTube&&"object"===u.type(i)&&(i.hasOwnProperty("mp4")||i.hasOwnProperty("ogg")||i.hasOwnProperty("webm"));if(e.video=e.isYouTube||a,e.playing=!1,e.isYouTube)e.playerReady=!1,e.posterLoaded=!1,p(e,i,o);else if("object"===u.type(i)&&i.hasOwnProperty("poster"))!function(i,e,o){i.source&&i.source.poster&&(c(i,i.source.poster,!0,!0),o=!1);var t='<div class="'+[b.media,b.video,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';t+="<video playsinline",i.loop&&(t+=" loop");i.mute&&(t+=" muted");i.autoPlay&&(t+=" autoplay");t+=">",i.source.webm&&(t+='<source src="'+i.source.webm+'" type="video/webm" />');i.source.mp4&&(t+='<source src="'+i.source.mp4+'" type="video/mp4" />');i.source.ogg&&(t+='<source src="'+i.source.ogg+'" type="video/ogg" />');t+="</video>";var a=u(t+="</div>");a.find("video").one(w.loadedMetaData,function(e){a.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded),i.autoPlay&&f(i)}),i.$container.append(a)}(e,0,o);else{var n=i;if("object"===u.type(i)){var r,s=[],d=[];for(r in i)i.hasOwnProperty(r)&&d.push(r);for(r in d.sort(T.sortAsc),d)d.hasOwnProperty(r)&&s.push({width:parseInt(d[r]),url:i[d[r]],mq:P.matchMedia("(min-width: "+parseInt(d[r])+"px)")});e.responsive=!0,e.sources=s,n=l(e)}c(e,n,!1,o)}}else e.$el.trigger(w.loaded)}function l(e){var i=e.source;if(e.responsive)for(var o in i=e.sources[0].url,e.sources)e.sources.hasOwnProperty(o)&&(t.support.matchMedia?e.sources[o].mq.matches&&(i=e.sources[o].url):e.sources[o].width<t.fallbackWidth&&(i=e.sources[o].url));return i}function c(e,i,o,t){var a=[b.media,b.image,!0!==t?b.animated:""].join(" "),n=u('<div class="'+a+'" aria-hidden="true"><img alt="'+e.alt+'"></div>'),r=n.find("img"),s=i;r.one(w.load,function(){I&&n.addClass(b.native).css({backgroundImage:"url('"+s+"')"}),n.fsTransition({property:"opacity"},function(){o||y(e)}).css({opacity:1}),h(e),o&&!t||e.$el.trigger(w.loaded)}).one(w.error,e,d).attr("src",s),e.responsive&&n.addClass(b.responsive),e.$container.append(n),!r[0].complete&&4!==r[0].readyState||r.trigger(w.load),e.currentSource=s}function p(i,e,o){if(!i.videoId){var t=e.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);i.videoId=t[1]}if(i.posterLoaded||(i.source.poster||(i.source.poster="//web.archive.org/web/20240517225521/https://img.youtube.com/vi/"+i.videoId+"/0.jpg"),i.posterLoaded=!0,c(i,i.source.poster,!0,o),o=!1),u("script[src*='youtube.com/iframe_api']").length||u("head").append('<script src="//web.archive.org/web/20240517225521/https://www.youtube.com/iframe_api"><\/script>'),R){var a=i.guid+"_"+i.youTubeGuid++,n='<div class="'+[b.media,b.embed,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';n+='<div id="'+a+'"></div>';var r=u(n+="</div>"),s=u.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:a,loop:i.loop?1:0,autoplay:1,mute:1,origin:P.location.protocol+"//"+P.location.host},i.youtubeOptions);s.autoplay=1,i.$container.append(r),i.player&&(i.oldPlayer=i.player,i.player=null),i.player=new P.YT.Player(a,{videoId:i.videoId,playerVars:s,events:{onReady:function(e){i.playerReady=!0,i.mute&&i.player.mute(),i.autoPlay?i.player.playVideo():i.player.pauseVideo()},onStateChange:function(e){i.playing||e.data!==P.YT.PlayerState.PLAYING?i.loop&&i.playing&&e.data===P.YT.PlayerState.ENDED&&i.player.playVideo():(i.playing=!0,r.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded)),i.$el.find(m.embed).addClass(b.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){d({data:i})},onApiChange:function(e){}}}),h(i)}else z.push({data:i,source:e})}function y(e){var i=e.$container.find(m.media);1<=i.length&&(i.not(":last").remove(),e.oldPlayer=null)}function d(e){e.data.$el.trigger(w.error)}function f(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function n(e){if(e.visible)if(e.responsive){var i=l(e);i!==e.currentSource?c(e,i,!1,!0):h(e)}else h(e)}function h(e){for(var i=e.$container.find(m.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!=n||!I)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=v(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function r(e){e.scrollTop=e.$el.offset().top}function s(e){!e.visible&&e.scrollTop<Y+e.lazyEdge&&(e.visible=!0,o(e))}function v(e,i){if(e.isYouTube)return{height:500,width:500/e.embedRatio};if(i.is("img")){var o=i[0];if("undefined"!==u.type(o.naturalHeight))return{height:o.naturalHeight,width:o.naturalWidth};var t=new Image;return t.src=o.src,{height:t.height,width:t.width}}return{height:i[0].videoHeight,width:i[0].videoWidth}}var g=t.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(e){e.youTubeGuid=0,e.$container=u('<div class="'+b.container+'"></div>').appendTo(this),e.thisClasses=[b.base,e.customClass],e.visible=!0,e.lazy&&(e.visible=!1,e.thisClasses.push(b.lazy)),this.addClass(e.thisClasses.join(" ")),i(),e.lazy?(r(e),s(e)):o(e)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(w.namespace),i()},_resize:function(){T.iterate.call(C,n),T.iterate.call(j,r),T.iterate.call(j,s)},play:f,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:h,load:a,unload:function(e){var i=e.$container.find(m.media);1<=i.length&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),m=g.classes,b=m.raw,w=g.events,T=g.functions,P=t.window,$=t.$window,Y=0,C=[],j=[],I="backgroundSize"in t.document.documentElement.style,R=!1,z=[];t.Ready(function(){e(),$.on("scroll",e)}),P.onYouTubeIframeAPIReady=function(){for(var e in R=!0,z)z.hasOwnProperty(e)&&p(z[e].data,z[e].source);z=[]}});
/*! formstone v1.4.15 [carousel.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(u,m){"use strict";function g(){L=u(k.base)}function p(e){e.enabled&&(y.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(j.update),this.removeClass([q.enabled,q.animated].join(" ")).off(j.namespace),e.$canister.fsTouch("destroy").off(j.namespace).attr("style","").css(H,"none"),e.$items.css({width:"",height:""}).removeClass([q.visible,k.item_previous,k.item_next].join(" ")),e.$images.off(j.namespace),e.$controlItems.off(j.namespace),e.$pagination.html("").off(j.namespace),$(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(X,""),e.index=0)}function h(e){e.enabled||(e.enabled=!0,this.addClass(q.enabled),e.$controlItems.on(j.click,e,o),e.$pagination.on(j.click,k.page,e,r),e.$items.on(j.click,e,x),e.$subordinate.on(j.update,e,T),T({data:e},0),e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(j.panStart,e,l).on(j.pan,e,c).on(j.panEnd,e,d).on(j.swipe,e,b).on(j.focusIn,e,w).css(H,""),f(e),e.$images.on(j.load,e,s),e.autoAdvance&&(e.autoTimer=y.startTimer(e.autoTimer,e.autoTime,function(){!function(e){var t=e.index+1;t>=e.pageCount&&(t=0);v(e,t)}(e)},!0)),i.call(this,e))}function i(e){if(e.enabled){var t,i,a,n,s;if(e.count=e.$items.length,e.count<1)return $(e),void e.$canister.css({height:""});if(this.removeClass(q.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=function(e){var t=1;{if(e.single)return t;if("array"===u.type(e.show))for(var i in e.show)e.show.hasOwnProperty(i)&&(m.support.matchMedia?e.show[i].mq.matches&&(t=e.show[i].count):e.show[i].width<m.fallbackWidth&&(t=e.show[i].count));else t=e.show}return e.fill&&e.count<t?e.count:t}(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.matchWidth)e.canisterWidth=e.single?e.containerWidth:(e.itemWidth+e.itemMargin)*e.count;else for(e.canisterWidth=0,e.$canister.css({width:1e6}),t=0;t<e.count;t++)e.canisterWidth+=e.$items.eq(t).outerWidth(!0);e.$canister.css({width:e.canisterWidth,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([q.visible,q.item_previous,q.item_next].join(" ")),e.pages=[],e.items=[];var o,r=0,l=0,c=0;for(n=a=0,i=u(),t=0;t<e.count;t++)o=e.$items.eq(t),r=e.matchWidth?e.itemWidth+e.itemMargin:o.outerWidth(!0),l=o.outerHeight(),c=o.position().left,e.items.push({$el:o,width:r,left:e.rtl?c-(e.canisterWidth-r):c}),(i.length&&a+r>e.containerWidth+e.itemMargin||e.paged&&0<t)&&(s=(e.rtl?i.eq(i.length-1):i.eq(0)).position().left,e.pages.push({left:e.rtl?s-(e.canisterWidth-a):s,height:n,width:a,$items:i}),i=u(),a=n=0),i=i.add(o),a+=r,r,n<l&&(n=l),n>e.itemHeight&&(e.itemHeight=n);e.rtl?i.eq(i.length-1):i.eq(0),s=e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight),e.pages.push({left:e.rtl?-s:s,height:n,width:a,$items:i}),e.pageCount=e.pages.length,e.paged&&(e.pageCount-=e.count%e.visible),e.pageCount<=0&&(e.pageCount=1),e.maxMove=-e.pages[e.pageCount-1].left,e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var d="";for(t=0;t<e.pageCount;t++)d+='<button type="button" class="'+q.page+'">'+(t+1)+"</button>";e.$pagination.html(d),e.pageCount<=1?$(e):function(e){e.$controls.addClass(q.visible),e.$controlItems.addClass(q.visible),e.$pagination.addClass(q.visible)}(e),e.$paginationItems=e.$pagination.find(k.page),v(e,e.index,!1),setTimeout(function(){e.$el.addClass(q.animated)},5)}}function f(e){e.$items=e.$canister.children().not(":hidden").addClass(q.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function t(e,t){e.$images.off(j.namespace),!1!==t&&e.$canister.html(t),e.index=0,f(e),i.call(this,e)}function e(e,t,i,a,n){e.enabled&&(y.clearTimer(e.autoTimer),void 0===n&&(n=!0),v(e,t-1,n,i,a))}function a(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),v(e,t)}function n(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),v(e,t)}function s(e){var t=e.data;t.resizeTimer=y.startTimer(t.resizeTimer,1,function(){i.call(t.$el,t)})}function o(e){y.killEvent(e);var t=e.data,i=t.index+(u(e.currentTarget).hasClass(q.control_next)?1:-1);y.clearTimer(t.autoTimer),v(t,i)}function r(e){y.killEvent(e);var t=e.data,i=t.$paginationItems.index(u(e.currentTarget));y.clearTimer(t.autoTimer),v(t,i)}function v(e,t,i,a,n){if(t<0&&(t=e.infinite?e.pageCount-1:0),t>=e.pageCount&&(t=e.infinite?0:e.pageCount-1),!(e.count<1)){if(e.pages[t]&&(e.leftPosition=-e.pages[t].left),e.leftPosition=P(e,e.leftPosition),e.useMargin?e.$canister.css({marginLeft:e.leftPosition}):!1===i?(e.$canister.css(H,"none").css(X,"translateX("+e.leftPosition+"px)"),setTimeout(function(){e.$canister.css(H,"")},5)):e.$canister.css(X,"translateX("+e.leftPosition+"px)"),e.$items.removeClass([q.visible,q.item_previous,q.item_next].join(" ")),e.single)for(var s=0,o=e.pages.length;s<o;s++)s===t?e.pages[s].$items.addClass(q.visible).attr("aria-hidden","false"):e.pages[s].$items.not(e.pages[t].$items).addClass(s<t?q.item_previous:q.item_next).attr("aria-hidden","true");else for(s=0;s<e.count;s++){var r=e.rtl?-1:1,l=e.leftPosition*r+e.items[s].left*r,c=l+e.items[s].width,d=e.containerWidth+e.itemMargin+1;-1<=l&&c<=d?e.items[s].$el.addClass(q.visible).attr("aria-hidden","false"):l<0?e.items[s].$el.addClass(q.item_previous).attr("aria-hidden","false"):e.items[s].$el.addClass(q.item_next).attr("aria-hidden","false")}e.autoHeight&&e.$canister.css({height:e.pages[t].height}),!1!==i&&!0!==a&&t!==e.index&&(e.infinite||-1<t&&t<e.pageCount)&&e.$el.trigger(j.update,[t]),e.index=t,e.linked&&!0!==n&&u(e.linked).not(e.$el)[_]("jumpPage",e.index+1,!0,!0),function(e){e.$paginationItems.removeClass(q.active).eq(e.index).addClass(q.active),e.infinite?e.$controlItems.addClass(q.visible):e.pageCount<1?e.$controlItems.removeClass(q.visible):(e.$controlItems.addClass(q.visible),e.index<=0?e.$controlPrevious.removeClass(q.visible):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&e.$controlNext.removeClass(q.visible))}(e)}}function $(e){e.$controls.removeClass(q.visible),e.$controlItems.removeClass(q.visible),e.$pagination.removeClass(q.visible)}function l(e,t){var i=e.data;if(y.clearTimer(i.autoTimer),!i.single){if(i.useMargin)i.leftPosition=parseInt(i.$canister.css("marginLeft"));else{var a=i.$canister.css(X).split(",");i.leftPosition=parseInt(a[4])}if(i.$canister.css(H,"none").css("will-change","transform"),c(e),i.linked&&!0!==t){var n=e.deltaX/i.pageWidth;i.rtl&&(n*=-1),u(i.linked).not(i.$el)[_]("panStart",n)}}i.isTouching=!0}function c(e,t){var i=e.data;if(!i.single&&(i.touchLeft=P(i,i.leftPosition+e.deltaX),i.useMargin?i.$canister.css({marginLeft:i.touchLeft}):i.$canister.css(X,"translateX("+i.touchLeft+"px)"),i.linked&&!0!==t)){var a=e.deltaX/i.pageWidth;i.rtl&&(a*=-1),u(i.linked).not(i.$el)[_]("pan",a)}}function d(e,t){var i=e.data,a=Math.abs(e.deltaX),n=W(i,e),s=!1;if(i.didPan=!1,0==n)s=i.index;else{if(!i.single){var o,r,l=Math.abs(i.touchLeft),c=!1,d=i.rtl?"right":"left";if(e.directionX===d)for(o=0,r=i.pages.length;o<r;o++)c=i.pages[o],l>Math.abs(c.left)+20&&(s=o+1);else for(o=i.pages.length-1,r=0;r<=o;o--)c=i.pages[o],l<Math.abs(c.left)&&(s=o-1)}!1===s&&(s=a<50?i.index:i.index+n)}s!==i.index&&(i.didPan=!0),i.linked&&!0!==t&&u(i.linked).not(i.$el)[_]("panEnd",s),C(i,s)}function b(e,t){var i=e.data,a=W(i,e),n=i.index+a;i.linked&&!0!==t&&u(i.linked).not(i.$el)[_]("swipe",e.directionX),C(i,n)}function C(e,t){e.$canister.css(H,"").css("will-change",""),v(e,t),e.isTouching=!1}function x(e){var t=e.data,i=u(e.currentTarget);if(!t.didPan&&(i.trigger(j.itemClick),t.controller)){var a=t.$items.index(i);T(e,a),t.$subordinate[_]("jumpPage",a+1,!0)}}function w(e){var t=e.data;if(t.enabled&&!t.isTouching){y.clearTimer(t.autoTimer),t.$container.scrollLeft(0);var i,a=u(e.target);a.hasClass(q.item)?i=a:a.parents(k.item).length&&(i=a.parents(k.item).eq(0));for(var n=0;n<t.pageCount;n++)if(t.pages[n].$items.is(i)){v(t,n);break}}}function T(e,t){var i=e.data;if(i.controller){var a=i.$items.eq(t);i.$items.removeClass(q.active),a.addClass(q.active);for(var n=0;n<i.pageCount;n++)if(i.pages[n].$items.is(a)){v(i,n,!0,!0);break}}}function P(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),0<t&&(t=0)),t}function W(e,t){return Math.abs(t.deltaX)<Math.abs(t.deltaY)?0:e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var M=m.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous",controls:"Carousel {guid} Controls",pagination:"Carousel {guid} Pagination"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(e){var t;e.didPan=!1,e.carouselClasses=[q.base,e.theme,e.customClass,e.rtl?q.rtl:q.ltr],e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.customControls="object"===u.type(e.controls)&&e.controls.previous&&e.controls.next,e.customPagination="string"===u.type(e.pagination),e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),m.support.transform||(e.useMargin=!0);var i="",a="",n=[q.control,q.control_previous].join(" "),s=[q.control,q.control_next].join(" ");e.controls&&!e.customControls&&(e.labels.controls=e.labels.controls.replace("{guid}",e.numGuid),i+='<div class="'+q.controls+'" aria-label="'+e.labels.controls+'" aria-controls="'+e.ariaId+'">',i+='<button type="button" class="'+n+'" aria-label="'+e.labels.previous+'">'+e.labels.previous+"</button>",i+='<button type="button" class="'+s+'" aria-label="'+e.labels.next+'">'+e.labels.next+"</button>",i+="</div>"),e.pagination&&!e.customPagination&&(e.labels.pagination=e.labels.pagination.replace("{guid}",e.numGuid),a+='<div class="'+q.pagination+'" aria-label="'+e.labels.pagination+'" aria-controls="'+e.ariaId+'" role="navigation">',a+="</div>"),e.autoHeight&&e.carouselClasses.push(q.auto_height),e.contained&&e.carouselClasses.push(q.contained),e.single&&e.carouselClasses.push(q.single),this.addClass(e.carouselClasses.join(" ")).wrapInner('<div class="'+q.wrapper+'" aria-live="polite"><div class="'+q.container+'"><div class="'+q.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+q.viewport+'"></div>').append(a),e.$viewport=this.find(k.viewport).eq(0),e.$container=this.find(k.container).eq(0),e.$canister=this.find(k.canister).eq(0),e.$pagination=this.find(k.pagination).eq(0),e.$controlPrevious=e.$controlNext=u(""),e.customControls?(e.$controls=u(e.controls.container).addClass([q.controls,q.controls_custom].join(" ")),e.$controlPrevious=u(e.controls.previous).addClass(n),e.$controlNext=u(e.controls.next).addClass(s)):(e.$controls=this.find(k.controls).eq(0),e.$controlPrevious=e.$controls.find(k.control_previous),e.$controlNext=e.$controls.find(k.control_next)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.customPagination&&(e.$pagination=u(e.pagination).addClass([q.pagination])),e.$paginationItems=e.$pagination.find(k.page),e.index=0,e.enabled=!1,e.leftPosition=0,e.autoTimer=null,e.resizeTimer=null;var o=this.data(I+"-linked");e.linked=!!o&&"[data-"+I+'-linked="'+o+'"]',e.linked&&(e.paged=!0);var r=this.data(I+"-controller-for")||"";if(e.$subordinate=u(r),e.$subordinate.length&&(e.controller=!0),"object"===u.type(e.show)){var l=e.show,c=[],d=[];for(t in l)l.hasOwnProperty(t)&&d.push(t);for(t in d.sort(y.sortAsc),d)d.hasOwnProperty(t)&&c.push({width:parseInt(d[t]),count:l[d[t]],mq:window.matchMedia("(min-width: "+parseInt(d[t])+"px)")});e.show=c}f(e),u.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){h.call(e.$el,e)},leave:function(){p.call(e.$el,e)}}),g(),e.carouselClasses.push(q.enabled),e.carouselClasses.push(q.animated)},_destruct:function(e){y.clearTimer(e.autoTimer),y.clearTimer(e.resizeTimer),p.call(this,e),u.fsMediaquery("unbind",e.rawGuid),e.id!==e.ariaId&&this.removeAttr("id"),e.$controlItems.removeClass([k.control,q.control_previous,k.control_next,k.visible].join(" ")).off(j.namespace),e.$images.off(j.namespace),e.$canister.fsTouch("destroy"),e.$items.removeClass([q.item,q.visible,k.item_previous,k.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),e.controls&&!e.customControls&&e.$controls.remove(),e.customControls&&e.$controls.removeClass([q.controls,q.controls_custom,q.visible].join(" ")),e.pagination&&!e.customPagination&&e.$pagination.remove(),e.customPagination&&e.$pagination.html("").removeClass([q.pagination,q.visible].join(" ")),this.removeClass(e.carouselClasses.join(" ")),g()},_resize:function(e){y.iterate.call(L,i)},disable:p,enable:h,jump:e,previous:a,next:n,jumpPage:e,previousPage:a,nextPage:n,jumpItem:function(e,t,i,a,n){if(e.enabled){y.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===n&&(n=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){v(e,o,n,i,a);break}}},reset:function(e){e.enabled&&t.call(this,e,!1)},resize:i,update:t,panStart:function(e,t){if(y.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(X).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(H,"none"),c({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=P(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(X,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){C(e,t)},swipe:function(e,t){b({data:e,directionX:t},!0)}}}),I=M.namespace,_=M.namespaceClean,k=M.classes,q=k.raw,j=M.events,y=M.functions,L=[],X=m.transform,H=m.transition});
/*! formstone v1.4.15 [cookie.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function i(e,n,t){var i=!1,r=new Date;t.expires&&"number"===a.type(t.expires)&&(r.setTime(r.getTime()+t.expires),i=r.toGMTString());var u=t.domain?"; domain="+t.domain:"",o=i?"; expires="+i:"",l=i?"; max-age="+t.expires/1e3:"",s=t.path?"; path="+t.path:"",f=t.secure?"; secure":"";c.cookie=e+"="+n+o+l+u+s+f}e.Plugin("cookie",{utilities:{_delegate:function(e,n,t){if("object"===a.type(e))r=a.extend(r,e);else if(t=a.extend({},r,t||{}),"undefined"!==a.type(e)){if("undefined"===a.type(n))return function(e){for(var n=e+"=",t=c.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}(e);null===n?function(e,n){i(e,"",a.extend({},n,{expires:-6048e5}))}(e,t):i(e,n,t)}return null}}});var r={domain:null,expires:6048e5,path:null,secure:null},c=e.document});
/*! formstone v1.4.15 [equalize.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(t,e){"use strict";function n(){u=t(d.element)}function i(e){if(e.data&&(e=e.data),e.enabled)for(var t,n,i,r=0;r<e.target.length;r++){n=t=0,(i=e.$el.find(e.target[r])).css(e.property,"");for(var a=0;a<i.length;a++)t<(n=i.eq(a)[e.type]())&&(t=n);i.css(e.property,t)}}function r(e){for(var t=0;t<e.target.length;t++)e.$el.find(e.target[t]).css(e.property,"");e.$el.find("img").off(o.namespace)}var a=e.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:function(e){e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.type="height"===e.property?"outerHeight":"outerWidth",e.target?t.isArray(e.target)||(e.target=[e.target]):e.target=["> *"],n(),t.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){(function(e){if(!e.enabled){e.enabled=!0;var t=e.$el.find("img");t.length&&t.on(o.load,e,i),i(e)}}).call(e.$el,e)},leave:function(){(function(e){e.enabled&&(e.enabled=!1,r(e))}).call(e.$el,e)}})},_destruct:function(e){r(e),t.fsMediaquery("unbind",e.rawGuid),n()},_resize:function(e){f.iterate.call(u,i)},resize:i}}),d=a.classes,o=(d.raw,a.events),f=a.functions,u=[]});
/*! formstone v1.4.15 [swap.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(e,a){if(e.enabled&&!e.active){e.group&&!a&&s(e.group).not(e.$el).not(e.linked)[c.namespaceClean]("deactivate",!0);var t=e.group?s(e.group).index(e.$el):null;e.$swaps.addClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("activate",!0),this.trigger(o.activate,[t]),e.active=!0}}function i(e,a){e.enabled&&e.active&&(e.$swaps.removeClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),e.active=!1)}function a(e,a){e.enabled||(e.enabled=!0,e.$swaps.addClass(e.classes.raw.enabled),a||s(e.linked).not(e.$el)[c.namespaceClean]("enable"),this.trigger(o.enable),e.onEnable?(e.active=!1,t.call(this,e)):(e.active=!0,i.call(this,e)))}function n(e,a){e.enabled&&(e.enabled=!1,e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")),a||s(e.linked).not(e.$el)[c.namespaceClean]("disable"),this.trigger(o.disable))}function l(e){u.killEvent(e);var a=e.data;a.active&&a.collapse?i.call(a.$el,a):t.call(a.$el,a)}var c=e.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(e){e.enabled=!1,e.active=!1,e.classes=s.extend(!0,{},r,e.classes),e.target=this.data(d+"-target"),e.$target=s(e.target).addClass(e.classes.raw.target),e.mq="(max-width:"+(e.maxWidth===1/0?"100000px":e.maxWidth)+")";var a=this.data(d+"-linked");e.linked=!!a&&"[data-"+d+'-linked="'+a+'"]';var t=this.data(d+"-group");e.group=!!t&&"[data-"+d+'-group="'+t+'"]',e.$swaps=s().add(this).add(e.$target),this.on(o.click+e.dotGuid,e,l)},_postConstruct:function(e){e.collapse||!e.group||s(e.group).filter("[data-"+d+"-active]").length||s(e.group).eq(0).attr("data-"+d+"-active","true"),e.onEnable=this.data(d+"-active")||!1,s.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e,!0)},leave:function(){n.call(e.$el,e,!0)}})},_destruct:function(e){s.fsMediaquery("unbind",e.rawGuid),e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")).off(o.namespace)},activate:t,deactivate:i,enable:a,disable:n}}),d=c.namespace,r=c.classes,o=c.events,u=c.functions});
/*! formstone v1.4.15 [touch.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(X,s){"use strict";function o(e){e.preventManipulation&&e.preventManipulation();var t=e.data,a=e.originalEvent;if(a.type.match(/(up|end|cancel)$/i))d(e);else{if(a.pointerId){var n=!1;for(var i in t.touches)t.touches[i].id===a.pointerId&&(n=!0,t.touches[i].pageX=a.pageX,t.touches[i].pageY=a.pageY);n||t.touches.push({id:a.pointerId,pageX:a.pageX,pageY:a.pageY})}else t.touches=a.touches;a.type.match(/(down|start)$/i)?Y(e):a.type.match(/move$/i)&&p(e)}}function Y(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null;a&&t.$el.off(w.mouseDown),t.touching||(t.startE=e.originalEvent,t.startX=a?a.pageX:e.pageX,t.startY=a?a.pageY:e.pageY,t.startT=(new Date).getTime(),t.scaleD=1,t.passedAxis=!1),t.$links&&t.$links.off(w.click);var n=x(t.scale?w.scaleStart:w.panStart,e,t.startX,t.startY,t.scaleD,0,0,"","");if(t.scale&&t.touches&&2<=t.touches.length){var i=t.touches;t.pinch={startX:f(i[0].pageX,i[1].pageX),startY:f(i[0].pageY,i[1].pageY),startD:m(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},n.pageX=t.startX=t.pinch.startX,n.pageY=t.startY=t.pinch.startY}t.touching||(t.touching=!0,t.pan&&!a&&D.on(w.mouseMove,t,p).on(w.mouseUp,t,d),s.support.pointer?D.on([w.pointerMove,w.pointerUp,w.pointerCancel].join(" "),t,o):D.on([w.touchMove,w.touchEnd,w.touchCancel].join(" "),t,o),t.$el.trigger(n))}function p(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,p=0<s?"right":"left",c=0<o?"down":"up",r=Math.abs(s)>t.threshold,l=Math.abs(o)>t.threshold;if(!t.passedAxis&&t.axis&&(t.axisX&&l||t.axisY&&r))d(e);else{!t.passedAxis&&(!t.axis||t.axis&&t.axisX&&r||t.axisY&&l)&&(t.passedAxis=!0),t.passedAxis&&(M.killEvent(e),M.killEvent(t.startE));var u=!0,h=x(t.scale?w.scale:w.pan,e,n,i,t.scaleD,s,o,p,c);if(t.scale)if(t.touches&&2<=t.touches.length){var g=t.touches;t.pinch.endX=f(g[0].pageX,g[1].pageX),t.pinch.endY=f(g[0].pageY,g[1].pageY),t.pinch.endD=m(g[1].pageX-g[0].pageX,g[1].pageY-g[0].pageY),t.scaleD=t.pinch.endD/t.pinch.startD,h.pageX=t.pinch.endX,h.pageY=t.pinch.endY,h.scale=t.scaleD,h.deltaX=t.pinch.endX-t.pinch.startX,h.deltaY=t.pinch.endY-t.pinch.startY}else t.pan||(u=!1);u&&t.$el.trigger(h)}}function d(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,p=(new Date).getTime(),c=t.scale?w.scaleEnd:w.panEnd,r=0<s?"right":"left",l=0<o?"down":"up",u=1<Math.abs(s),h=1<Math.abs(o);if(t.swipe&&p-t.startT<t.time&&Math.abs(s)>t.threshold&&(c=w.swipe),t.axis&&(t.axisX&&h||t.axisY&&u)||u||h){t.$links=t.$el.find("a");for(var g=0,d=t.$links.length;g<d;g++)v(t.$links.eq(g),t)}var f=x(c,e,n,i,t.scaleD,s,o,r,l);D.off([w.touchMove,w.touchEnd,w.touchCancel,w.mouseMove,w.mouseUp,w.pointerMove,w.pointerUp,w.pointerCancel].join(" ")),t.$el.trigger(f),t.touches=[],t.scale,a&&(t.touchTimer=M.startTimer(t.touchTimer,5,function(){t.$el.on(w.mouseDown,t,Y)})),t.touching=!1}function v(e,t){e.on(w.click,t,n);var a=X._data(e[0],"events").click;a.unshift(a.pop())}function n(e){M.killEvent(e,!0),e.data.$links.off(w.click)}function x(e,t,a,n,i,s,o,p,c){return X.Event(e,{originalEvent:t,bubbles:!0,pageX:a,pageY:n,scale:i,deltaX:s,deltaY:o,directionX:p,directionY:c})}function f(e,t){return(e+t)/2}function m(e,t){return Math.sqrt(e*e+t*t)}function a(e,t){e.css({"-ms-touch-action":t,"touch-action":t})}var e=!s.window.PointerEvent,t=s.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1,threshold:10,time:50},methods:{_construct:function(e){if(e.touches=[],e.touching=!1,this.on(w.dragStart,M.killEvent),e.swipe&&(e.pan=!0),e.scale&&(e.axis=!1),e.axisX="x"===e.axis,e.axisY="y"===e.axis,s.support.pointer){var t="";!e.axis||e.axisX&&e.axisY?t="none":(e.axisX&&(t+=" pan-y"),e.axisY&&(t+=" pan-x")),a(this,t),this.on(w.pointerDown,e,o)}else this.on(w.touchStart,e,o).on(w.mouseDown,e,Y)},_destruct:function(e){this.off(w.namespace),a(this,"")}},events:{pointerDown:e?"MSPointerDown":"pointerdown",pointerUp:e?"MSPointerUp":"pointerup",pointerMove:e?"MSPointerMove":"pointermove",pointerCancel:e?"MSPointerCancel":"pointercancel"}}),w=t.events,M=t.functions,D=s.$window;w.pan="pan",w.panStart="panstart",w.panEnd="panend",w.scale="scale",w.scaleStart="scalestart",w.scaleEnd="scaleend",w.swipe="swipe"});
/*! formstone v1.4.15 [transition.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(s,a){"use strict";function i(t){t.stopPropagation(),t.preventDefault();var e=t.data,r=t.originalEvent,n=e.target?e.$target:e.$el;e.property&&r.propertyName!==e.property||!s(r.target).is(n)||o(e)}function o(t){t.always||t.$el[e.namespaceClean]("destroy"),t.callback.apply(t.$el)}function c(t){var e,r,n,a={};if(t instanceof s&&(t=t[0]),f.getComputedStyle)for(var i=0,o=(e=f.getComputedStyle(t,null)).length;i<o;i++)r=e[i],n=e.getPropertyValue(r),a[r]=n;else if(t.currentStyle)for(r in e=t.currentStyle)a[r]=e[r];return a}var e=a.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(t,e){if(e){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=e,t.styles=c(t.$check),t.timer=null;var r=t.$check.css(a.transition+"-duration"),n=parseFloat(r);a.support.transition&&r&&n?this.on(l.transitionEnd,t,i):t.timer=u.startTimer(t.timer,50,function(){!function(t){var e=c(t.$check);!function(t,e){if(s.type(t)!==s.type(e))return!1;for(var r in t){if(!t.hasOwnProperty(r))return!1;if(!t.hasOwnProperty(r)||!e.hasOwnProperty(r)||t[r]!==e[r])return!1}return!0}(t.styles,e)&&o(t);t.styles=e}(t)},!0)}},_destruct:function(t){u.clearTimer(t.timer,!0),this.off(l.namespace)},resolve:o}}),l=e.events,u=e.functions,f=a.window});
/*! formstone v1.4.15 [viewer.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],t):t(jQuery,Formstone)}(function(s,n){"use strict";function t(){Z.scrollTop()+n.windowHeight<0&&0}function l(){(E=s(I.base)).length?j.lockViewport(z):j.unlockViewport(z)}function c(t,e){t.isAnimating||(t.isAnimating=!0,t.$container=s('<div class="'+y.container+'"><img></div>'),t.$image=t.$container.find("img"),t.$viewport.append(t.$container),t.$image.one(b.load,function(){!function(t){(function(t){var e=function(t){var e=t[0],i=new Image;{if(void 0!==e.naturalHeight)return{naturalHeight:e.naturalHeight,naturalWidth:e.naturalWidth};if("img"===e.tagName.toLowerCase())return i.src=e.src,{naturalHeight:i.height,naturalWidth:i.width}}return!1}(t.$image);t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.ratioHorizontal=t.naturalHeight/t.naturalWidth,t.ratioVertical=t.naturalWidth/t.naturalHeight,t.isWide=t.naturalWidth>t.naturalHeight})(t),o(t),t.containerTop=t.viewportHeight/2,t.containerLeft=t.viewportWidth/2,r(t),t.imageHeight=t.naturalHeight,t.imageWidth=t.naturalWidth,function(t){t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth}(t),a(t),g(t),m(t),d(t);var e={containerTop:t.containerTop,containerLeft:t.containerLeft,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTop:t.imageTop,imageLeft:t.imageLeft};H(t,e),t.isRendering=!0}(t),t.isAnimating=!1,t.$container.fsTransition({property:"opacity"},function(){}),t.$el.removeClass(y.loading),t.$container.fsTouch({pan:!0,scale:!0}).on(b.scaleStart,t,v).on(b.scaleEnd,t,T).on(b.scale,t,W),t.$el.trigger(b.loaded)}).one(b.error,t,i).attr("src",e).addClass(y.image),!t.$image[0].complete&&4!==t.$image[0].readyState||t.$image.trigger(b.load),t.source=e)}function i(t){t.data.$el.trigger(b.error)}function o(t){t.viewportHeight=t.$viewport.outerHeight(),t.viewportWidth=t.$viewport.outerWidth()}function a(t){t.imageHeight<=t.viewportHeight?(t.containerMinTop=t.viewportHeight/2,t.containerMaxTop=t.viewportHeight/2):(t.containerMinTop=t.viewportHeight-t.imageHeight/2,t.containerMaxTop=t.imageHeight/2),t.imageWidth<=t.viewportWidth?(t.containerMinLeft=t.viewportWidth/2,t.containerMaxLeft=t.viewportWidth/2):(t.containerMinLeft=t.viewportWidth-t.imageWidth/2,t.containerMaxLeft=t.imageWidth/2)}function r(t){t.isWide?(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal,t.imageMinHeight>t.viewportHeight&&(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical)):(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical,t.imageMinWidth>t.viewportWidth&&(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal)),(t.imageMinWidth>t.naturalWidth||t.imageMinHeight>t.naturalHeight)&&(t.imageMinHeight=t.naturalHeight,t.imageMinWidth=t.naturalWidth),t.imageMaxHeight=t.naturalHeight,t.imageMaxWidth=t.naturalWidth}function g(t){t.imageTop=-t.imageHeight/2,t.imageLeft=-t.imageWidth/2}function m(t){t.lastContainerTop=t.containerTop,t.lastContainerLeft=t.containerLeft,t.lastImageHeight=t.imageHeight,t.lastImageWidth=t.imageWidth,t.lastImageTop=t.imageTop,t.lastImageLeft=t.imageLeft}function d(t){t.renderContainerTop=t.lastContainerTop,t.renderContainerLeft=t.lastContainerLeft,t.renderImageTop=t.lastImageTop,t.renderImageLeft=t.lastImageLeft,t.renderImageHeight=t.lastImageHeight,t.renderImageWidth=t.lastImageWidth}function h(t){t.imageHeight<t.imageMinHeight&&(t.imageHeight=t.imageMinHeight),t.imageHeight>t.imageMaxHeight&&(t.imageHeight=t.imageMaxHeight),t.imageWidth<t.imageMinWidth&&(t.imageWidth=t.imageMinWidth),t.imageWidth>t.imageMaxWidth&&(t.imageWidth=t.imageMaxWidth)}function u(t){t.containerTop<t.containerMinTop&&(t.containerTop=t.containerMinTop),t.containerTop>t.containerMaxTop&&(t.containerTop=t.containerMaxTop),t.containerLeft<t.containerMinLeft&&(t.containerLeft=t.containerMinLeft),t.containerLeft>t.containerMaxLeft&&(t.containerLeft=t.containerMaxLeft)}function f(t){null===t.tapTimer?t.tapTimer=j.startTimer(t.tapTimer,500,function(){p(t)}):(p(t),function(t){var e=t.imageHeight>t.imageMinHeight+1;t.isZooming=!0,m(t),d(t),e?(t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth):(t.imageHeight=t.imageMaxHeight,t.imageWidth=t.imageMaxWidth);a(t),u(t),g(t),t.isRendering=!0}(t))}function p(t){j.clearTimer(t.tapTimer),t.tapTimer=null}function H(t,e){if(n.transform){var i=e.imageWidth/t.naturalWidth,o=e.imageHeight/t.naturalHeight;t.$container.css(n.transform,"translate3d("+e.containerLeft+"px, "+e.containerTop+"px, 0)"),t.$image.css(n.transform,"translate3d(-50%, -50%, 0) scale("+i+","+o+")")}else t.$container.css({top:e.containerTop,left:e.containerLeft}),t.$image.css({height:e.imageHeight,width:e.imageWidth,top:e.imageTop,left:e.imageLeft})}function v(t){var e=t.data;f(e),m(e)}function W(t){var e=t.data;p(e),e.isRendering=!1,e.isZooming=!1;e.imageHeight,e.imageMinHeight;e.containerTop=e.lastContainerTop+t.deltaY,e.containerLeft=e.lastContainerLeft+t.deltaX,e.imageHeight=e.lastImageHeight*t.scale,e.imageWidth=e.lastImageWidth*t.scale,a(e),u(e),h(e),g(e),H(e,{containerTop:e.containerTop,containerLeft:e.containerLeft,imageHeight:e.imageHeight,imageWidth:e.imageWidth,imageTop:e.imageTop,imageLeft:e.imageLeft})}function T(t){var e=t.data;e.isZooming||(m(e),d(e),e.isRendering=!0)}function $(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data;"out"==(e.hasClass(y.control_zoom_out)?"out":"in")?function(t){t.keyDownTime=1,t.action="zoom_out"}(i):function(t){t.keyDownTime=1,t.action="zoom_in"}(i)}function M(t){t.data.action=!1}function e(t){if(t.isRendering){if(t.action){t.keyDownTime+=t.zoomIncrement;var e=("zoom_out"===t.action?-1:1)*Math.round(t.imageWidth*t.keyDownTime-t.imageWidth);e>t.zoomDelta&&(e=t.zoomDelta),t.isWide?(t.imageWidth+=e,t.imageHeight=Math.round(t.imageWidth/t.ratioVertical)):(t.imageHeight+=e,t.imageWidth=Math.round(t.imageHeight/t.ratioHorizontal)),h(t),g(t),a(t),u(t)}t.renderContainerTop+=Math.round((t.containerTop-t.renderContainerTop)*t.zoomEnertia),t.renderContainerLeft+=Math.round((t.containerLeft-t.renderContainerLeft)*t.zoomEnertia),t.renderImageTop+=Math.round((t.imageTop-t.renderImageTop)*t.zoomEnertia),t.renderImageLeft+=Math.round((t.imageLeft-t.renderImageLeft)*t.zoomEnertia),t.renderImageHeight+=Math.round((t.imageHeight-t.renderImageHeight)*t.zoomEnertia),t.renderImageWidth+=Math.round((t.imageWidth-t.renderImageWidth)*t.zoomEnertia),H(t,{containerTop:t.renderContainerTop,containerLeft:t.renderContainerLeft,imageHeight:t.renderImageHeight,imageWidth:t.renderImageWidth,imageTop:t.renderImageTop,imageLeft:t.renderImageLeft})}}function w(t,e){t.isAnimating||(p(t),t.isAnimating=!0,t.isRendering=!1,t.isZooming=!1,function(t){t.$container&&t.$container.length&&t.$container.fsTouch("destroy").off(b.scaleStart,v).off(b.scaleEnd,T).off(b.scale,W)}(t),t.$container.fsTransition({property:"opacity"},function(){t.isAnimating=!1,t.$container.remove(),"function"==typeof e&&e.call(window,t)}),t.$el.addClass(y.loading))}function _(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data,o=i.index+(e.hasClass(y.control_next)?1:-1);i.isAnimating||(o<0&&(o=0),o>i.total&&(o=i.total),o!==i.index&&(i.index=o,w(i,function(){c(i,i.images[i.index])})),C(i))}function C(t){t.$controlItems.removeClass(y.control_disabled),0===t.index&&t.$controlPrevious.addClass(y.control_disabled),t.index===t.images.length-1&&t.$controlNext.addClass(y.control_disabled)}function L(t){o(t),a(t),r(t),g(t),a(t),u(t),h(t)}var x=n.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_construct:function(t){var e,i="",o=[y.control,y.control_previous].join(" "),n=[y.control,y.control_next].join(" "),a=[y.control,y.control_zoom_in].join(" "),r=[y.control,y.control_zoom_out].join(" ");t.thisClasses=[y.base,y.loading,t.customClass,t.theme],t.images=[],t.source=!1,t.gallery=!1,t.tapTimer=null,t.action=!1,t.isRendering=!1,t.isZooming=!1,t.isAnimating=!1,t.keyDownTime=1,t.$images=this.find("img").addClass(y.source),t.index=0,t.total=t.$images.length-1,t.customControls="object"===s.type(t.controls)&&t.controls.zoom_in&&t.controls.zoom_out,1<t.$images.length&&(t.gallery=!0,t.thisClasses.push(y.gallery),!t.customControls||t.controls.previous&&t.controls.next||(t.customControls=!1));for(var g=0;g<t.$images.length;g++)e=t.$images.eq(g),t.images.push(e.attr("src"));i+='<div class="'+y.wrapper+'">',i+='<div class="'+y.loading_icon+'"></div>',i+='<div class="'+y.viewport+'"></div>',i+="</div>",t.controls&&!t.customControls&&(i+='<div class="'+y.controls+'">',i+='<button type="button" class="'+o+'">'+t.labels.previous+"</button>",i+='<button type="button" class="'+r+'">'+t.labels.zoom_out+"</button>",i+='<button type="button" class="'+a+'">'+t.labels.zoom_in+"</button>",i+='<button type="button" class="'+n+'">'+t.labels.next+"</button>",i+="</div>"),this.addClass(t.thisClasses.join(" ")).prepend(i),t.$wrapper=this.find(I.wrapper),t.$viewport=this.find(I.viewport),t.customControls?(t.$controls=s(t.controls.container).addClass([y.controls,y.controls_custom].join(" ")),t.$controlPrevious=s(t.controls.previous).addClass(o),t.$controlNext=s(t.controls.next).addClass(n),t.$controlZoomIn=s(t.controls.zoom_in).addClass(a),t.$controlZoomOut=s(t.controls.zoom_out).addClass(r)):(t.$controls=this.find(I.controls),t.$controlPrevious=this.find(I.control_previous),t.$controlNext=this.find(I.control_next),t.$controlZoomIn=this.find(I.control_zoom_in),t.$controlZoomOut=this.find(I.control_zoom_out)),t.$controlItems=t.$controlPrevious.add(t.$controlNext),t.$controlZooms=t.$controlZoomIn.add(t.$controlZoomOut),l(),t.$controlItems.on(b.click,t,_),t.$controlZooms.on([b.touchStart,b.mouseDown].join(" "),t,$).on([b.touchEnd,b.mouseUp].join(" "),t,M),c(t,t.images[t.index],!0),C(t)},_destruct:function(t){t.$wrapper.remove(),t.$image.removeClass(y.source),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&(t.$controls.removeClass([y.controls,y.controls_custom].join(" ")),t.$controlItems.off(b.click).removeClass([y.control,y.control_previous,y.control_next].join(" ")),t.$controlZooms.off([b.touchStart,b.mouseDown].join(" ")).off([b.touchStart,b.mouseDown].join(" ")).off([b.touchEnd,b.mouseUp].join(" ")).removeClass([y.control,y.control_zoom_in,y.control_zoom_out].join(" "))),this.removeClass(t.thisClasses.join(" ")).off(b.namespace),l()},_resize:function(){j.iterate.call(E,L)},_raf:function(){j.iterate.call(E,e)},resize:L,load:function(t,e){t.index=0,"string"==typeof e?(t.total=0,t.images=[e],t.gallery=!1,t.$el.removeClass(y.gallery)):(t.total=e.length-1,1<(t.images=e).length&&(t.gallery=!0,t.$el.addClass(y.gallery)),e=t.images[t.index]),w(t,function(){c(t,e)})},unload:function(t){w(t)}}}),z=x.namespace,I=x.classes,y=I.raw,b=x.events,j=x.functions,Z=(n.window,n.$window),E=[];n.Ready(function(){t(),Z.on("scroll",t),n.$body})});
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for sessionStorage support
	  // then check for session variables and use if available
	  try {
	    if (window.sessionStorage.getItem('what-input')) {
	      currentInput = window.sessionStorage.getItem('what-input');
	    }

	    if (window.sessionStorage.getItem('what-intent')) {
	      currentIntent = window.sessionStorage.getItem('what-intent');
	    }
	  } catch (e) {}

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput);
	      window.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput);
	      window.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput);
	      window.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput);
	    window.addEventListener('keyup', setInput);

	    // focus events
	    window.addEventListener('focusin', setElement);
	    window.addEventListener('focusout', clearElement);
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      try {
	        window.sessionStorage.setItem('what-input', currentInput);
	      } catch (e) {}

	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        try {
	          window.sessionStorage.setItem('what-intent', currentIntent);
	        } catch (e) {}

	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      try {
	        window.sessionStorage.setItem('what-intent', currentIntent);
	      } catch (e) {}

	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
/*-------------------------------------------
	Site
-------------------------------------------*/

	// !Site
	var Site = (function($, window) {

		if (STATIC_ROOT == null || STATIC_ROOT == undefined) {
			var STATIC_ROOT = "/themes/custom/brown/static/";
		}

		// !BaseController
		var BaseController = function() {
			this.namespace = "";

			this.minWidth = 320;

			this.window = null;
			this.doc = null;

			this.$window = null;
			this.$doc = null;
			this.$body = null;

			this.touch = false;

			// Public modules
			this.modules = [];

			this.onInit = [];
			this.onRespond = [];
			this.onResize = [];
			this.onScroll = [];

			this.minXS = "320";
			this.minSM = "500";
			this.minMD = "740";
			this.minLG = "980";
			this.minXL = "1220";
			this.minXXL = "1330";
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window = window;
				this.doc = document;
				this.$window = $(window);
				this.$doc = $(document);
				this.$body = $("body");
				this.touch = $("html").hasClass("touchevents");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [
							this.minXS,
							this.minSM,
							this.minMD,
							this.minLG,
							this.minXL,
							this.minXXL
						]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window
					.on("mqchange.mediaquery", onRespond)
					.on(Controller.ns("resize"), onResize)
					.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			},
			// Returns icon markup
			icon: function(icon) {
				var markup = '<svg class="icon icon_' + icon + '">';
				var ua = window.navigator.userAgent;
    		var msie = ua.indexOf("MSIE ");

				if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					markup += '<use xlink:href="#' + icon + '">';
					
					$(".logo_link_icon")[0].innerHTML = '<img class="icon icon_logo" src="' + STATIC_ROOT + 'images/logo.png" alt="Brown University Logo" />';
				} else {
					markup += '<use xlink:href="' + STATIC_ROOT + 'images/icons.svg#' + icon + '">';
				}

				return markup + '</use></svg>';
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	jQuery(document).ready(function() {
		Site.init("@namespace");
	});

/*-------------------------------------------
	Cover
-------------------------------------------*/

Site.modules.Cover = (function($, Site) {

	var coverBody;
	var breadcrumb;

	function init() {
		if ($(".js-cover").length) {
			coverBody = 0;
			breadcrumb = 0;

			bindUI();
		}
	}

	function bindUI() {
		Site.onResize.push(resizeCover);

		if ($(".video_cover_play").length) {
			$(".video_cover_play").on("click", playVideo);
		}
	}

	function resizeCover() {
		if ($(".js-cover-body").length) {
			coverBody = $(".js-cover-body").innerHeight();
		}

		if ($(".breadcrumb_nav").length) {
			breadcrumb = ($(".breadcrumb_nav").innerHeight() / 2) + 2;
		}

		if ($(window).innerWidth() * 0.56 + $(".header").innerHeight() > $(window).innerHeight() && $(".header").innerHeight() + coverBody < $(window).innerHeight()) {
			var height = 0;

			if ($(".js-cover-background").parent().hasClass("page_header_slim")) {
				height = 400;
			} else {
				height = $(window).innerHeight() - $(".header").innerHeight() + breadcrumb;
			}

			$(".js-cover-background").css({
				"height": height,
				"padding-bottom": 0
			});
		} else {
			$(".js-cover-background").css({
				"height": "",
				"padding-bottom": ""
			});
		}

		if ($(".news_cover").length) {
			var posterHeight = $(".js-cover-body").innerHeight() + $(".component_peak_details").innerHeight();

			$.mediaquery("bind", "mq-key", "(min-width: 740px)", {
				enter: function() {
					if (posterHeight > $(".js-cover").innerHeight()) {
						$(".js-cover-background").css({
							"height": posterHeight + 100,
							"padding-bottom": 0
						});
					}
				},
				leave: function() {
					if (posterHeight > $(".js-cover").innerHeight()) {
						$(".js-cover-background").css({
							"height": posterHeight - $(".news_cover_body").innerHeight(),
							"padding-bottom": 0
						});
					}
				}
			});
		}
	}

	function playVideo() {
		$(".video_cover_background").background("play");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Filter
-------------------------------------------*/

Site.modules.Filter = (function($, Site) {

	function init() {
		if ($(".filter").length) {
			if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

			} else {
				checkQueryString();
			}
		}
	}

	function checkQueryString() {
    url = new URL(window.location.href);

    if (url.search.indexOf("keyword") > -1) {
      $('html, body').animate({
        scrollTop: $(".page_content").offset().top - $(".header").innerHeight()
      });
    }
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	ForYou
-------------------------------------------*/

Site.modules.ForYou = (function($, Site) {

	function init() {
		if ($(".flyout_for_you_select").length) {
			bindUI();
		}
	}

	function bindUI() {
		$(".flyout_for_you_select").on("change", function() {
			changeSelectedSet($(this));
		});
	}

	function changeSelectedSet(set) {
		var optionSelected = $(set).find("option:selected");

		$(set).closest(".flyout_for_you").find(".flyout_bookmarks_content").removeClass("fs-swap-active");
		$(set).closest(".flyout_for_you").find(".flyout_bookmarks_content").eq(optionSelected.val()).addClass("fs-swap-active");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Formstone
-------------------------------------------*/

Site.modules.Formstone = (function($, Site) {

	var backgroundsLoaded = false;
	var prev_icon = "chevron_left";
	var next_icon = "chevron_right";
	var lightboxOptions = {
		theme: "fs-light",
		videoWidth: 1000,
		labels: {
			close: "<span class='fs-lightbox-icon-close'>" + Site.icon("close") + "</span>",
			previous: "<span class='fs-lightbox-icon-previous'>" + Site.icon(prev_icon) + "</span>",
			count: "<span class='fs-lightbox-meta-divider'></span>",
			next: "<span class='fs-lightbox-icon-next'>" + Site.icon(next_icon) + "</span>"
		}
	};

	function init() {
		$(".js-background").on("loaded.background", function() {
			$(this).addClass("fs-background-loaded");

			if ($(this).closest(".js-cover").length) {
				$("body").addClass("cover-loaded");
			}
		}).background();
		$(".js-carousel").carousel();
		$(".js-equalize").equalize();
		$(".js-swap").swap();

		bindUI();
		carouselPagination($(".js-carousel"));
	}

	function bindUI() {}

	function carouselPagination($element) {
		$element.each(function() {
			var $previous_button = $(this).find(".fs-carousel-control_previous");
			var previous_text = $previous_button.text();
			var $next_button = $(this).find(".fs-carousel-control_next");
			var next_text = $next_button.text();

			$previous_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(prev_icon) + "</span><span class='fs-carousel-control-label'>" + previous_text + "</span>");
			$next_button.html("<span class='fs-carousel-control-icon'>" + Site.icon(next_icon) + "</span><span class='fs-carousel-control-label'>" + next_text + "</span>");
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Gallery
-------------------------------------------*/

Site.modules.Gallery = (function($, Site) {

	var $Gallery;
	var $GalleryCarousel;
	var Counter;
	var CounterLabel;
	var ItemCount;
	var ImageCount;
	var VideoCount;

	function init() {
		$Gallery = $(".js-gallery");

		if ($Gallery.length) {
			$GalleryCarousel = $Gallery.find(".js-carousel");
			CounterLabel = "of";
			ItemCount = 0;
			ImageCount = 0;
			VideoCount = 0;

			setup();
			bindUI();
		}
	}

	function setup() {
		$Gallery.each(function() {
			$Gallery.find(".gallery_item").each(function() {
				ItemCount++;

				if ($(this).hasClass("gallery_item_video")) {
					VideoCount++;
				} else {
					ImageCount++;
				}
			});

			ItemCount = ItemCount < 10 ? "0" + ItemCount : ItemCount;

			Counter =
				"<span class='gallery_counter_number'>01</span>" +
				"<span class='gallery_counter_label'>" + CounterLabel + "</span>" +
				"<span class='gallery_counter_number'>" + ItemCount + "</span>";

			if ($(this).find(".js-gallery-video-counter").length) {
				$(this).find(".js-gallery-video-counter").html(VideoCount + (VideoCount == 1 ? " Video" : " Videos"));
			}

			if ($(this).find(".js-gallery-photo-counter").length) {
				$(this).find(".js-gallery-photo-counter").html(ImageCount + (ImageCount == 1 ? " Photo" : " Photos"));
			}
			
			if ($(this).find(".js-gallery-counter").length) {
				$(this).find(".js-gallery-counter").append(Counter);
			}
		});
	}

	function bindUI() {
		$GalleryCarousel.on("update.carousel", onCarouselUpdate);

		Site.onResize.push(resizeCarousel);
	}

	function onCarouselUpdate() {
		var activeIndex = $GalleryCarousel.find(".fs-carousel-visible").index() + 1;
		activeIndex = activeIndex < 10 ? "0" + activeIndex : activeIndex;

		$(".gallery_counter_number:first-of-type").text(activeIndex);
	}

	function resizeCarousel() {
		$(".gallery_body").each(function() {
			$(this).css("margin-right", ($(window).innerWidth() - $(".in_content_callouts")[0].getBoundingClientRect().right) * -1);
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

// /*-------------------------------------------
// 	History - OUC REMOVED THIS FROM THEME FILES
// -------------------------------------------*/
//
// Site.modules.History = (function($, Site) {
//
// 	var $History;
//
// 	function init() {
// 		$History = $(".flyout_bookmarks_content_history");
// 		EmptyMessage = "Any pages you visit will show up here for you to check back on later.";
//
// 		testStorage();
// 		bindUI();
// 		scanPage();
// 		buildHistory();
// 		sectionHistory();
// 	}
//
// 	function testStorage() {
// 		if (!localStorage.getItem("history")) {
// 			localStorage.setItem("history", "[]");
// 		}
// 	}
//
// 	function bindUI() {
// 		$History.on("click", function(e) {
// 			if ($(e.target).hasClass("component_peak_bookmark")) {
// 				var $component = $(e.target).closest(".js-component");
//
// 				if ($component.hasClass("favorited")) {
// 					$component.removeClass("favorited");
// 					Site.modules.Favorites.removeFavorite($component);
// 				} else {
// 					$component.addClass("favorited");
// 					Site.modules.Favorites.addFavorite($component, "base");
// 				}
//
// 				Site.modules.Favorites.buildFavorites();
// 			}
// 		});
// 	}
//
// 	function scanPage() {
// 		var dataToCheck = JSON.parse(localStorage.getItem("history"));
// 		var idToCompare = $(".page_component .js-component").data("id");
//
// 		if (dataToCheck[dataToCheck.length - 1] !== undefined) {
// 			if (dataToCheck[dataToCheck.length - 1].id !== idToCompare) {
// 				Site.modules.Favorites.addFavorite($(".page_component .js-component"), "history");
// 			}
// 		} else {
// 			Site.modules.Favorites.addFavorite($(".page_component .js-component"), "history");
// 		}
// 	}
//
// 	function buildHistory() {
// 		$History.html("");
//
// 		var data = JSON.parse(localStorage.getItem("history"));
//
// 		if (data.length <= 0) {
// 			$History.append('<p class="flyout_bookmarks_hint">' + EmptyMessage + '</p>');
// 		}
//
// 		for (var y = 0; y < data.length; y++) {
// 			$History.prepend(data[y].html);
// 		}
//
// 		Site.modules.Peak.resizePeak();
//
// 		$(".flyout_bookmarks_content_history .js-background").background();
// 	}
//
// 	function sectionHistory() {
// 		var historySize = $(".flyout_bookmarks_content_history > .component_item").length;
//
// 		$(".flyout_bookmarks_content_history > .component_item:nth-child(-n+4)").wrapAll('<div class="flyout_bookmarks_history_section"><div class="flyout_bookmarks_history_section_body"></div></div>');
//
// 		if (historySize >= 5) {
// 			$(".flyout_bookmarks_content_history > .component_item:nth-child(n+2)").wrapAll('<div class="flyout_bookmarks_history_section"><div class="flyout_bookmarks_history_section_body"></div></div>');
// 		}
//
// 		$(".flyout_bookmarks_history_section:first-child").prepend('<h2 class="flyout_bookmarks_history_section_title">Most Recently Viewed</h2>');
//
// 		if (historySize >= 5) {
// 			$(".flyout_bookmarks_history_section:last-child").prepend('<h2 class="flyout_bookmarks_history_section_title">Older</h2>');
// 		}
// 	}
//
// 	Site.onInit.push(init);
//
// 	return {};
//
// })(jQuery, Site);

// /*-------------------------------------------
// 	Favorites - OUC REMOVED THIS FROM THEME FILES
// -------------------------------------------*/
//
// Site.modules.Favorites = (function($, Site) {
//
// 	var $Results;
// 	var EmptyMessage;
//
// 	function init() {
// 		$Results = $(".flyout_bookmarks_content_favorites");
// 		EmptyMessage = "Favorite them on the site, and they’ll show up here for easy access.";
//
// 		testStorage();
// 		scanPage();
// 		buildFavorites();
// 		bindUI();
// 	}
//
// 	function testStorage() {
// 		if (!localStorage.getItem("base")) {
// 			localStorage.setItem("base", "[]");
// 		}
// 	}
//
// 	function scanPage() {
// 		$(".js-component").removeClass("favorited");
//
// 		var data = JSON.parse(localStorage.getItem("base"));
//
// 		for (var y = 0; y < data.length; y++) {
// 			$(".js-component").each(function() {
// 				if ($(this).data("id") == data[y].id) {
// 					$(this).addClass("favorited");
// 				}
//
// 				if ($(".page_component .js-component").data("id") == data[y].id) {
// 					favoriteAction(".bookmark_action");
// 				}
// 			});
// 		}
//
// 		$(".bookmark_action").addClass("visible");
// 	}
//
// 	function bindUI() {
// 		$(".bookmark_action").on("click", function() {
// 			var $component = $(".page_component .js-component");
//
// 			if ($component.hasClass("favorited")) {
// 				unfavoriteAction($(this));
// 				unflashBookmark();
// 				removeFavorite($component);
// 			} else {
// 				favoriteAction($(this));
// 				flashBookmark();
// 				addFavorite($component, "base");
// 			}
//
// 			buildFavorites();
// 			scanPage();
// 		});
//
// 		$(".page_wrapper .component_peak_bookmark").on("click", function() {
// 			var $component = $(this).closest(".js-component");
//
// 			if ($component.hasClass("favorited")) {
// 				removeFavorite($component);
// 			} else {
// 				addFavorite($component, "base");
// 			}
//
// 			buildFavorites();
// 			scanPage();
// 		});
//
// 		$Results.on("click", function(e) {
// 			if ($(e.target).hasClass("component_peak_bookmark")) {
// 				removeFavorite($(e.target).closest(".js-component"));
// 				buildFavorites();
// 				scanPage();
// 			}
// 		});
// 	}
//
// 	function unfavoriteAction(item) {
// 		$(item).removeClass("favorited");
// 		$(item).find(".bookmark_action_icon").html(Site.icon("bookmark"));
// 		$(item).find(".bookmark_action_label").html("Bookmark this Page");
// 	}
//
// 	function favoriteAction(item) {
// 		$(item).addClass("favorited");
// 		$(item).find(".bookmark_action_icon").html(Site.icon("delete"));
// 		$(item).find(".bookmark_action_label").html("Remove Bookmark");
// 	}
//
// 	function unflashBookmark() {
// 		$(".js-flyout-bookmarks-handle").removeClass("flash");
// 	}
//
// 	function flashBookmark() {
// 		$(".js-flyout-bookmarks-handle").addClass("flash");
// 	}
//
// 	function buildFavorites() {
// 		$Results.html("");
//
// 		var data = JSON.parse(localStorage.getItem("base"));
//
// 		if (data.length <= 0) {
// 			$Results.append('<p class="flyout_bookmarks_hint">' + EmptyMessage + '</p>');
// 		}
//
// 		for (var y = 0; y < data.length; y++) {
// 			$Results.append(data[y].html);
// 		}
//
// 		Site.modules.Peak.resizePeak();
//
// 		$(".flyout_bookmarks_content_favorites .js-background").background();
// 	}
//
// 	function generateContent(data) {
// 		return data.html;
// 	}
//
// 	function addFavorite(item, type) {
// 		var data = JSON.parse(localStorage.getItem(type));
// 		var $clone = $(item).parent().clone();
//
// 		$clone.css("width", "");
// 		$clone.removeClass("card poster").addClass("list in-view");
// 		$clone.find(".js-component").removeClass("fs-swap-active");
// 		$clone.find(".component_peak_background").remove();
// 		$clone.find(".component_peak_details").remove();
// 		$clone.find(".component_peak_trigger").remove();
// 		$clone.find(".component_peak_bookmark_icon").html(Site.icon("delete"));
//
// 		if (type == "history") {
// 			$clone.find(".component_peak_tools").remove();
// 		}
//
// 		data.push({
// 			id: $clone.find(".js-component").data("id"),
// 			html: $clone[0].outerHTML
// 		});
//
// 		localStorage.setItem(type, JSON.stringify(data));
// 	}
//
// 	function removeFavorite(item) {
// 		var data = JSON.parse(localStorage.getItem("base"));
//
// 		for (var x = 0; x < data.length; x++) {
// 			if (data[x].id == $(item).data("id")) {
// 				data.splice(x, 1);
//
// 				x--;
// 			}
// 		}
//
// 		localStorage.setItem("base", JSON.stringify(data));
// 	}
//
// 	Site.onInit.push(init);
//
// 	return {
// 		buildFavorites: buildFavorites,
// 		generateContent: generateContent,
// 		addFavorite: addFavorite,
// 		removeFavorite: removeFavorite
// 	};
//
// })(jQuery, Site);

/*-------------------------------------------
	Menu
-------------------------------------------*/

Site.modules.Menu = (function($, Site) {

	var $Menu,
	$MenuHandle,
	$MenuClose,
	LockClass;

	function init() {
		$Menu = $(".js-menu");
		if ($Menu.length) {
			// $MenuClose = $(".js-menu-close");
			LockClass = "fs-navigation-lock fs-page-lock";

			bindUI();
		}
	}

	function bindUI() {
		createSiteButtons($(".js-menu-handle"));
		$MenuHandle = $(".js-menu-handle");
		Site.modules.Page.ariaHide($Menu);
		Site.$doc.on("click", onDocumentClick);
		// $MenuClose.on("keydown", onCloseKeydown);
		$Menu.attr("tabindex", "0")
			.on("keydown", onMenuKeydown)
			.on("keyup", onMenuKeyup);
	}

	function onDocumentClick(e) {
		if ($("body").hasClass(LockClass)) {
			if (!$(e.target).closest(".js-menu").length) {
				$MenuHandle.swap("deactivate");
			}
		}
	}

	function onMenuSwapActivate(affectMenu) {
		Site.$body.addClass("fs-navigation-lock fs-page-lock");

		if (affectMenu) {
			Site.modules.Page.ariaShow($Menu);
		}

		$(".header, .page_inner, .footer").css("padding-right", Site.modules.Page.getScrollbarWidth());

		if (affectMenu) {
			$(".menu").css("margin-right", "");
			$(".menu").css("width", "");
		}

    setTimeout(function() {
      $(".logo_link").last().focus();
    }, 600);
	}

	function onMenuSwapDeactivate(affectMenu) {
		Site.$body.removeClass("fs-navigation-lock fs-page-lock");

		if (affectMenu) {
			Site.modules.Page.ariaHide($Menu);
		}

		$(".header, .page_inner, .footer").css("padding-right", "");

		if (affectMenu) {
			$(".menu").css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
			$(".menu").css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");
		}
	}

	// function onCloseKeydown(e) {
	// 	if(e.keyCode === 9) { // tab
	// 		if(!(e.shiftKey)) {
	// 			$Menu.focus();
	// 		}
	// 	}
	// }

	function onMenuKeydown(e) {
		if ($Menu.is(":focus")) {
			if(e.keyCode === 9) { // tab
				if(e.shiftKey) {
					e.preventDefault();
					// $MenuClose.focus();
				}
			}
		}
	}

	function onMenuKeyup(e) {
		if (e.keyCode === 27) { // escape
			$MenuHandle.swap("deactivate");
		}
	}

	function createSiteButtons($element) {
		$this = $element;
		$this.each(function() {
			var attributes = $this.prop("attributes");
			$this.swap("destroy")
				.wrapInner("<button />");
			$.each(attributes, function() {
				$this.find("button")
					.attr(this.name, this.value);
			});
			$this.find("button")
				.unwrap()
				.removeAttr("href")
				.swap()
				.on("activate.swap", onMenuSwapActivate)
				.on("deactivate.swap", onMenuSwapDeactivate);
		});
	}

	Site.onInit.push(init);

	return {
		onMenuSwapActivate: onMenuSwapActivate,
		onMenuSwapDeactivate: onMenuSwapDeactivate,
	};

})(jQuery, Site);

/*-------------------------------------------
	Navigation
-------------------------------------------*/

Site.modules.Navigation = (function($, Site) {

	function init() {
		if ($(".main_nav").length) {
			Site.modules.Page.ariaHide($(".js-main-nav-children"));
			$(".main_nav_link").attr("aria-expanded", "false");
			$(".js-sub-nav-handle, .js-anchor-nav-handle")
				.attr("aria-expanded", "false")
				.attr("aria-haspopup", "true");


			bindUI();
		}
	}

	function bindUI() {
		$(".js-main-nav-toggle")
			.on("activate.swap", onMainSwapActivate)
			.on("deactivate.swap", onMainSwapDeactivate);
		$(".js-sub-nav-handle")
			.on("activate.swap", onSubSwapActivate)
			.on("deactivate.swap", onSubSwapDeactivate)
			.on("enable.swap", onSubSwapEnable)
			.on("disable.swap", onSubSwapDisable);
    $(".js-anchor-nav-handle")
      .on("activate.swap", onAnchorSwapActivate)
      .on("deactivate.swap", onAnchorSwapDeactivate)
      .on("enable.swap", onAnchorSwapEnable)
      .on("disable.swap", onAnchorSwapDisable);

		$(".js-main-nav-lg a")
			.hover(function() {
				$(this).attr("aria-expanded", "true");
				Site.modules.Page.ariaShow(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
			}, function() {
				$(this).attr("aria-expanded", "false");
				Site.modules.Page.ariaHide(
					$(this).closest(".main_nav_item")
						.find(".js-main-nav-children")
				);
		});

		$(".js-main-nav-lg .main_nav_item").hover(function() {
			$(this).find(".js-main-nav-children-background:not(.fs-background-element)").background();
		});

		$.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
			enter: function() {
				Site.modules.Page.ariaShow($(".js-sub-nav-list"));
				$(".js-sub-nav-handle")
					.removeAttr("aria-expanded")
					.removeAttr("aria-haspopup");
			},
			leave: function() {
				Site.modules.Page.ariaHide($(".js-sub-nav-list"));
				$(".js-sub-nav-handle")
					.attr("aria-expanded", "false")
					.attr("aria-haspopup", "true");
			}
		});

    $.mediaquery("bind", "mq-key", "(min-width: " + Site.minLG + "px)", {
      enter: function() {
        Site.modules.Page.ariaShow($(".js-anchor-nav-list"));
        $(".js-anchor-nav-handle")
          .removeAttr("aria-expanded")
          .removeAttr("aria-haspopup");
      },
      leave: function() {
        Site.modules.Page.ariaHide($(".js-anchor-nav-list"));
        $(".js-anchor-nav-handle")
          .attr("aria-expanded", "false")
          .attr("aria-haspopup", "true");
      }
    });
	}

	function onMainSwapActivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "true");
		Site.modules.Page.ariaShow(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
			);
	}

	function onMainSwapDeactivate() {
		$(this).closest(".main_nav_item")
			.find(".main_nav_link")
			.attr("aria-expanded", "false");
		Site.modules.Page.ariaHide(
			$(this).closest(".main_nav_item")
				.find(".js-main-nav-children")
		);
	}

	function onSubSwapActivate() {
		$(this).attr("aria-expanded", "true")
			.find(".sub_nav_handle_label")
			.text("Close");
		Site.modules.Page.ariaShow($(".js-sub-nav-list"));
	}

  function onAnchorSwapActivate() {
    $(this).attr("aria-expanded", "true")
      .find(".anchor_nav_handle_label")
      .text("Close");
    Site.modules.Page.ariaShow($(".js-anchor-nav-list"));
  }

	function onSubSwapDeactivate() {
		$(this).attr("aria-expanded", "false")
			.find(".sub_nav_handle_label")
			.text($(this).data("swap-title"));
		Site.modules.Page.ariaHide($(".js-sub-nav-list"));
	}

  function onAnchorSwapDeactivate() {
    $(this).attr("aria-expanded", "false")
      .find(".anchor_nav_handle_label")
      .text($(this).data("swap-title"));
    Site.modules.Page.ariaHide($(".js-anchor-nav-list"));
  }

	function onSubSwapEnable() {
		Site.modules.Page.ariaHide($(".js-sub-nav-list"));
	}

  function onAnchorSwapEnable() {
    Site.modules.Page.ariaHide($(".js-anchor-nav-list"));
  }

	function onSubSwapDisable() {
		Site.modules.Page.ariaShow($(".js-sub-nav-list"));
	}

  function onAnchorSwapDisable() {
    Site.modules.Page.ariaShow($(".js-anchor-nav-list"));
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	News
-------------------------------------------*/

Site.modules.News = (function($, Site) {

	function init() {
		if ($(".news_selector").length) {
			bindUI();
		}
	}

	function bindUI() {
		Site.onResize.push(resizeItems);

		$(".news_selector_select_set").on("change", function() {
			scrollBackUp($(this));
			changeSelectedSet($(this));
		});

		$(".news_selector_select_standalone").on("change", function() {
			scrollBackUp($(this));
			changeSelectedItem($(this));
		});

		$(".news_selector_choice").on("click", function() {
			scrollBackUp($(this));
		});
	}

	function resizeItems() {
		$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
			enter: function() {
				$(".news_selector_items").each(function() {
					var tallest = 0;

					$(this).find(".news_selector_item").each(function() {
						if ($(this).innerHeight() > tallest) {
							tallest = $(this).find(".component_items").innerHeight();
						}
					});

					$(this).find(".news_selector_item").css("min-height", tallest);
				});
			},
			leave: function() {
				$(".news_selector_item").css("min-height", "");
			}
		});
	}

	function scrollBackUp(item) {
		$('html, body').animate({
			scrollTop: $(item).closest(".news_selector_header").offset().top - $(".header").innerHeight()
		});
	}

	function changeSelectedSet(set) {
		var optionSelected = $(set).find("option:selected");

		$(set).closest(".news_selector").find(".news_selector_group").removeClass("active");
		$(set).closest(".news_selector").find(".news_selector_group").eq(optionSelected.val()).addClass("active");
		$(set).closest(".news_selector").find(".news_selector_group").eq(optionSelected.val()).find(".news_selector_choice:first-child").trigger("click");
	}

	function changeSelectedItem(item) {
		var optionSelected = $(item).find("option:selected");

		if ($(item).closest(".news_selector_group").length) {
			$(item).closest(".news_selector_group").find(".news_selector_choice").eq(optionSelected.val()).trigger("click");
		} else {
			$(item).closest(".news_selector_header_inner").find(".news_selector_choice").eq(optionSelected.val()).trigger("click");
		}
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Page
-------------------------------------------*/

Site.modules.Page = (function($, Site) {

	var $fixed_header = $(".header");
	var fixed_header_height = null;
	var scrollYPosition = 0;

	if (STATIC_ROOT == null || STATIC_ROOT == undefined) {
    var STATIC_ROOT = "/themes/custom/brown/static/";
	}

	function init() {
		bindUI();
		bindGenericUI();
		fixIEsvg();
		responsiveVideo();
		tableOverflowPrep();
		tableOverflow();
		gridFix();
		checkSidebar();
		pongSidebar();
		pongBreadcrumb();
		pinHeader();
		pinAside();
		//setupItems();
		transitionItems();

		Site.onScroll.push(scroll);
		Site.onResize.push(resize);
		Site.onRespond.push(respond);

		Formstone.Ready(pageLoad);
	}

	function checkSidebar() {
		if (!$(".filter").length) {
			if ($(".page_aside_inner").innerHeight() + $(".header").innerHeight() + 40 < $(window).innerHeight()) {
				$("body").addClass("sticky-sidebar");
			} else {
				$("body").removeClass("sticky-sidebar");
			}
		}
	}

	function pongSidebar() {
		if (!$(".filter").length && !$(".sub_nav").length && !$(".anchor_nav").length) {
			$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
				enter: function() {
					$(".page_aside_inner").appendTo($(".page_aside"));
				},
				leave: function() {
					$(".page_aside_inner").appendTo($(".page_content"));
				}
			});
		}
	}

	function pongBreadcrumb() {
		if ($(".page_theme_overflow").length) {
			$(".page_inner .page_content").before($(".breadcrumb_wrapper"));
		}
	}

	function gridOffset() {
		var xOffset = $(".logo")[0].getBoundingClientRect().left;

		return xOffset;
	}

	function gridFix() {
		$(".component_block").each(function() {
			$(this).addClass("size_" + $(this).find(".component_item").length);
		});
	}

	function bindUI() {
		$(".js-flyout-search-handle").on("click", function() {
			setTimeout(function() {
				$(".flyout_search_input").focus();
			}, 350);
		});

		$(".flyout_close_trigger").on("click", function() {
			$(".flyout_search_input").blur();
      $(".header_tools .flyout_search_handle").focus();
		});

		$(".js-flyout-for-you-handle").on("click", function() {
			Site.modules.Menu.onMenuSwapActivate(false);

			$(".flyout_for_you").css("margin-right", "");
			$(".flyout_for_you").css("width", "");
		});

		$(".js-flyout-bookmarks-handle").on("click", function() {
			Site.modules.Menu.onMenuSwapActivate(false);

			setTimeout(function() {
				$(".flyout_bookmarks_switch:first-child").focus();
			}, 350);

			$(".flyout_bookmarks").css("margin-right", "");
			$(".flyout_bookmarks").css("width", "");
		});

		$(".flyout_close_trigger").on("click", function() {
			Site.modules.Menu.onMenuSwapDeactivate(false);

			$(this).closest(".flyout_menu").css("margin-right", Site.modules.Page.getScrollbarWidth() * -1);
			$(this).closest(".flyout_menu").css("width", "calc(100% + " + Site.modules.Page.getScrollbarWidth() + "px)");
		});
	}

	function scroll() {
		pinHeader();
		transitionItems();
	}

	function resize() {
		pinAside();
		tableOverflow();
		fixedHeader($fixed_header);
		checkSidebar();
	}

	function respond() {}

	function pageLoad() {
		$("body").removeClass("preload");

		$(window).trigger("resize");

		if (window.location.hash) {
			var id = window.location.hash;

			scrollToElement(id);
		}
	}

	function pinHeader() {
		if ($(window).scrollTop() > 260) {
			$("body").addClass("pinned-header");
		} else {
			$("body").removeClass("pinned-header");
		}
	}

	function setupItems() {
		$(".component_items").each(function() {
			var delay = 0;

			$(this).find(".component_item").each(function() {
				$(this).css("transition-delay", delay + "s");

				if ($(this).find(".component_figure").length) {
					$(this).find(".component_figure").css("transition-delay", delay + "s");
				}

				if ($(this).find(".component_body").length) {
					$(this).find(".component_body").css("transition-delay", delay + "s");
				}

				delay += 0.05;
			});
		});
	}

	function pinAside() {
		$.mediaquery("bind", "mq-key", "(min-width: 980px)", {
			enter: function() {
				if ($(".filter").length) {
					if ($(window).innerHeight() > $(".filter").innerHeight()) {
						$(".page_aside_inner").addClass("sticky");
					} else {
						$(".page_aside_inner").removeClass("sticky");
					}
				}
			},
			leave: function() {
				$(".page_aside_inner").removeClass("sticky");
			}
		});
	}

	function transitionItems() {
		$(".component_item").each(function() {
			if ($(this)[0].getBoundingClientRect().top < $(window).innerHeight()) {
				$(this).addClass("in-view");
			}
		});
	}

	function onScrollTo(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
		id = $target.attr("href");

		scrollToElement(id);
	}

	function scrollToElement(id) {
		var $to = $(id);

		if ($to.length) {
			var offset = $to.offset();

			scrollToPosition(offset.top);
		}
	}

	function scrollToPosition(top) {
		$("html, body").animate({
			scrollTop: top - fixed_header_height
		});
	}

	function onToggleClick(e) {
		Site.killEvent(e);

		var $target = $(e.delegateTarget),
			activeClass = "js-toggle-active";

		if ($target.hasClass(activeClass)) {
			$target.removeClass(activeClass);
		} else {
			$target.addClass(activeClass);
		}
	}

	function bindGenericUI() {
		$(".js-toggle")
			.not(".js-bound")
			.on("click", ".js-toggle-handle", onToggleClick)
			.addClass("js-bound");

		$(".js-scroll-to")
			.not(".js-bound")
			.on("click", onScrollTo)
			.addClass("js-bound");
	}

	function responsiveVideo() {
		$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']", ".typography").each(function() {
			$(this).wrap('<div class="video_frame"></div>');
		});
	}

	function tableOverflowPrep() {
		$(".typography table")
			.wrap('<div class="table_wrapper"><div class="table_wrapper_inner"></div></div>');
	}

	function tableOverflow() {
		$(".table_wrapper").each(function() {
			if ($(this).find("table").outerWidth() > $(this).width() + 1) {
				$(this).addClass("table_wrapper_overflow");
			} else {
				$(this).removeClass("table_wrapper_overflow");
			}
		});
	}

	function ariaHide($element) {
		$element.attr("aria-hidden", "true")
			.attr("hidden", "");
	}

	function ariaShow($element) {
		$element.attr("aria-hidden", "false")
			.removeAttr("hidden");
	}

	function fixedHeader($header) {
		if (typeof $fixed_header !== "undefined") {
			fixed_header_height = $header.outerHeight();
			bt_bar_height = $("#bigtree_bar").outerHeight();
			wp_bar_height = $("#wpadminbar").outerHeight();
			d_bar_height = $("#toolbar-bar").outerHeight();

			if (bt_bar_height > 0) {
				$header.css("top", bt_bar_height);

				fixed_header_height = fixed_header_height + bt_bar_height;
			} else if (wp_bar_height > 0) {
				$header.css("top", wp_bar_height);

				fixed_header_height = fixed_header_height + wp_bar_height;
			} else if (d_bar_height > 0) {
				$header.css("top", d_bar_height);

				fixed_header_height = fixed_header_height + d_bar_height;
			}
		}
	}

	function saveScrollYPosition() {
		scrollYPosition = window.pageYOffset;

		$("body").css({
			"width": "100%",
			"position": "fixed",
			"top": (scrollYPosition * -1)
		});
	}

	function restoreScrollYPosition() {
		$("body").css({
			"width": "",
			"position": "",
			"top": ""
		});

		$("html, body").scrollTop(scrollYPosition);
	}

	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar";

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";

		// add innerdiv
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		var result = widthNoScroll - widthWithScroll;

		return result;
	}

	function fixIEsvg() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$("html").addClass("is-ie");

			$.get(STATIC_ROOT + "images/icons.svg", function(data) {
				var div = document.createElement("div");
				$(div).hide();
				div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
				document.body.insertBefore(div, document.body.childNodes[0]);

				$("svg use").each(function() {
					var parts = $(this).attr("xlink:href").split("#");
					$(this).attr("xlink:href", "#" + parts[1]);
				});
			});
		}
	}

	Site.onInit.push(init);

	return {
		ariaHide: ariaHide,
		ariaShow: ariaShow,
		getScrollbarWidth: getScrollbarWidth,
		saveScrollYPosition: saveScrollYPosition,
		restoreScrollYPosition: restoreScrollYPosition,
		gridOffset: gridOffset
	};

})(jQuery, Site);

/*-------------------------------------------
	Paulau
-------------------------------------------*/

Site.modules.Paulay = (function($, Site) {

	function init() {
		if ($(".page_header_video").length || $(".spotlight").length) {
      bindUI();
      videoControl();
		}
	}

	function bindUI() {
    $(".page_header_paulay").on("click", function() {
      paulayVideo();
    });
  }

	function paulayVideo() {
    if ($(".page_header").length) {
      if (!($(".page_header").hasClass("paused"))) {
        $(".page_header_video").background("pause");
        $(".page_header, .ambient_video_item").addClass("paused");
        sessionStorage.setItem("global-video-pause", true);
      } else {
        $(".page_header_video").background("play");
        $(".page_header, .ambient_video_item").removeClass("paused");
        sessionStorage.removeItem("global-video-pause");
      }
    } else {
      if (!($(".spotlight").hasClass("paused"))) {
        $(".spotlight_article_background_lg").background("pause");
        $(".spotlight").addClass("paused");
        sessionStorage.setItem("global-video-pause", true);
      } else {
        $(".spotlight_article_background_lg").background("play");
        $(".spotlight").removeClass("paused");
        sessionStorage.removeItem("global-video-pause");
      }
    }
	}

  function videoControl() {
    if (sessionStorage.getItem("global-video-pause")) {
      setTimeout(function(){ sessionChange(); }, 700);
    }
  }

  function sessionChange() {
    var video = document.querySelector("video");
    if (!video.paused) {
      video.pause();
    }
    updateClasses();
  }

  function updateClasses() {
    if ($(".page_header").length) {
      $(".page_header_video").background("pause");
      $(".page_header, .ambient_video_item").addClass("paused");
    } else {
      $(".spotlight_article_background_lg").background("pause");
      $(".spotlight").addClass("paused");
    } 
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Peak
-------------------------------------------*/

Site.modules.Peak = (function($, Site) {

	function init() {
		if ($(".js-component").length) {
			bindUI();
		}
	}

	function bindUI() {
		Site.onResize.push(resizePeak);

		$(".component_peak_trigger").on("click", triggerPeak);
		$(".component_block_expander").on("click", triggerExpanderCompletion);
		$(".layout_expander .component_peak_trigger").on("click", triggerExpander);
	}

	function resizePeak() {
		$(".component_content").each(function() {
			var $component = $(this).closest(".component_item");

			if ($component.hasClass("list")) {
				$(this).closest(".component").css("min-height", $component.find(".component_figure").innerHeight() + parseInt($(this).parent().css("padding-top").replace("px", "")) + parseInt($(this).parent().css("padding-bottom").replace("px", "")));
			}
		});

		$(".page_inner .card .component_peak_details_inner").each(function() {
			if ($(this).innerHeight() > (280 - 34)) {
				$(this).parent().addClass("scrollable");
			} else {
				$(this).parent().removeClass("scrollable");
			}
		});
		
		$(".component_peak_background").each(function() {
			var $component = $(this).closest(".component_item");
			var $figure = $component.find(".component_figure");
			var $poster = $component.find(".component_poster_background");
			var $content = $component.find(".component_body");
			var $details = $component.find(".component_peak_details");
			var total;

			if ($figure.length) {
				if ($component.hasClass("card")) {
					total = $figure.outerHeight(true) + $content.innerHeight() + $details.outerHeight(true);
				} else {
					total = $content.innerHeight() + $details.innerHeight();
				}
			} else {
				total = $content.innerHeight() + $details.innerHeight();
			}

			if ($poster.length) {
				total += $poster.outerHeight(true);
			}

			total += 20;

			$(this).css("height", total);
		});

		$(".poster .component_content_group").each(function() {
			$(this).css("transform", 'translate(0, -' + $(this).parent().next(".component_peak_details").innerHeight() + 'px)');
		});

		$(".component_block.layout_expander .component_items").each(function() {
			var itemsHeight = 0;

			$(this).find(".component_item").each(function() {
				itemsHeight += $(this).innerHeight();
			});

			itemsHeight += $(this).find(".component_item:last-child .component_peak_background").innerHeight();
			itemsHeight += 28 * 2;

			$(this).css("max-height", itemsHeight);
		});

		$(".component_items.js-carousel").each(function() {
			$(this).find(".fs-carousel-container").css("min-height", $(this).innerHeight());
		});
	}

	function triggerPeak() {
		setTimeout(function() {
			$(".component_peak_details").scrollTop(0);
		}, 350);

		if ($(this).closest(".component_items").hasClass("js-carousel")) {
			if ($(this).hasClass("fs-swap-active")) {
				$(this).closest(".fs-carousel-container").css("min-height", $(this).closest(".component_item").find(".component_peak_background").innerHeight() + 40);
			} else {
				$(this).closest(".fs-carousel-container").css("min-height", $(this).closest(".component_item").innerHeight());
			}
		}
	}

	function triggerExpander() {
		if (!$(this).closest(".layout_expander").hasClass("fs-swap-active")) {
			$(this).closest(".layout_expander").find(".component_block_expander").trigger("click");

			var $item = $(this);

			setTimeout(function() {
				$item.closest(".layout_expander").addClass("completed");
			}, 1000);
		}
	}

	function triggerExpanderCompletion() {
		var $item = $(this);

		setTimeout(function() {
			$item.closest(".layout_expander").addClass("completed");
		}, 1000);
	}

	Site.onInit.push(init);

	return {
		resizePeak: resizePeak
	};

})(jQuery, Site);

/*-------------------------------------------
	Person
-------------------------------------------*/

Site.modules.Person = (function($, Site) {

	function init() {
		if ($(".person_item").length) {
			setup();
			bindUI();
		}
	}

	function setup() {
		$(".swipe_items").each(function() {
			if ($(this).find(".person_item")) {
				$(this).find(".swipe_item").eq(0).find(".person_item").addClass("interested");

				$(this).find(".person_item").each(function() {
					$(this).hover(function() {
						$(".person_item").removeClass("interested");
						$(this).addClass("interested");
					});
				});
			}
		});
	}

	function bindUI() {
		$(".js-video-close").on("click", removeVideo);
		$(".person_item_play").on("focus", targetInterest);
	}

	function removeVideo() {
		$(this).parent().removeClass("js-video-playing");
		
		if ($(this).parent().find("iframe").length) {
			$(this).parent().find("iframe").remove();
		}
	}

	function targetInterest() {
		$(".person_item").removeClass("interested");
		$(this).closest(".person_item").addClass("interested");
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Profiles
-------------------------------------------*/

Site.modules.Profiles = (function($, Site) {

	var profileChecker;

	function init() {
		if ($(".profiles_block").length) {
			profileChecker = setInterval(checkProfiles, 100);

			resizeProfiles();
			bindUI();
		}
	}

	function bindUI() {
		Site.onResize.push(resizeProfiles);
	}

	function resizeProfiles() {
		$.mediaquery("bind", "mq-key", "(min-width: 740px)", {
			enter: function() {
				$(".profiles_block_body").css("padding-top", $(".person_item").innerHeight() + 45 - $(".profiles_block_body").height());
			},
			leave: function() {
				$(".profiles_block_body").css("padding-top", "");
			}
		});
	}

	function checkProfiles() {
		$(".profile_switch.fs-swap-active").trigger("click");

		$(".person_item").each(function() {
			if ($(this).hasClass("fs-swap-active")) {
				clearInterval(profileChecker);
			}
		});
	}
	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Search
-------------------------------------------*/

Site.modules.Search = (function($, Site) {

	var markupTest;
	var $componentBlock;

	function init() {
		if ($(".site_search_results").length) {
			markupTest = setInterval(testForMarkup, 100);
			inputTest = setInterval(testForInput, 100);
			$componentBlock = $(".full_width_callouts .component_block");

			setup();
			bindUI();
			testActive();
		}
	}

	function setup() {
		$(".page_content > .fs-row").appendTo($(".full_width_callouts"));
	}

	function bindUI() {
		if ($componentBlock.length) {
			Site.onResize.push(testExpander);
		}
	}

	function testForMarkup() {
		if ($(".gsc-results-wrapper-visible").length) {
			$(".site_search_results").addClass("visible");
			$(".gsc-control-cse").removeClass("gsc-control-cse");
			
			if ($componentBlock.length) {
				$componentBlock.insertBefore($(".gsc-results-wrapper-nooverlay"));
				$(".site_search_results_expander").prependTo($(".gsc-results-wrapper-nooverlay"));

				Site.modules.Peak.resizePeak();

				testExpander();
			}

			clearInterval(markupTest);
		}
	}

	function testForInput() {
		if ($(".gsc-input-box input.gsc-input").length) {
			$(".gsc-input-box input.gsc-input").on("keyup", testSubmit);

			clearInterval(inputTest);
		}
	}

	function testExpander() {
		if ($componentBlock.innerHeight() > 700 && $componentBlock.find(".component_item").length > 4) {
			$componentBlock.css("margin-bottom", ($componentBlock.innerHeight() * 0.715) * -1);
		} else {
			$(".site_search_results").addClass("fs-swap-active");
		}
	}

	function testSubmit(e) {
		if (e.key == "Enter") {
			var searchParams = new URLSearchParams(window.location.search);
			searchParams.set("q", e.currentTarget.value);
			window.location.search = searchParams.toString();
		}
	}

	function testActive() {
		$(".site_search_results_switch").each(function() {
			if ($(this).hasClass("fs-swap-active")) {
				$($(this).data("search-target")).addClass("fs-swap-active");
			}
		});
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Share Tools
-------------------------------------------*/

Site.modules.ShareTools = (function($, Site) {

	var $Tools;
	var Url;
	var PageTitle;

	function init() {
		$Tools = $(".js-share-tools");

		if ($Tools.length) {
			Url = window.location.href;
			PageTitle = encodeURIComponent(Site.$doc.find("title").text());

			createLinks();
		}
	}

	function createLinks() {
		$(".js-share-facebook").attr("href", "https://web.archive.org/web/20240517225521/https://www.facebook.com/sharer/sharer.php?u=" + Url);
		$(".js-share-twitter_x").attr("href", "https://web.archive.org/web/20240517225521/https://twitter.com/intent/tweet?text=" + PageTitle + "&url=" + Url);
		$(".js-share-linkedin").attr("href", "https://web.archive.org/web/20240517225521/https://www.linkedin.com/shareArticle?mini=true&url=" + Url + "&title=" + PageTitle);
		$(".js-share-google").attr("href", "https://web.archive.org/web/20240517225521/https://plus.google.com/share?url=" + Url);
		$(".js-share-email").attr("href", "mailto:?&subject=" + PageTitle + "&body=" + Url);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Spotlight
-------------------------------------------*/

Site.modules.Spotlight = (function($, Site) {

	var $block;
	var loadTimer = setInterval(checkLoad, 50);

	function init() {
		if ($(".spotlight#page_main_content").length) {
			$block = $(".spotlight#page_main_content");

			pinCaption();
			bindUI();
		}
	}

	function bindUI() {
		Site.onScroll.push(pinCaption);
		Site.onResize.push(pinCaption);
	}

	function checkLoad() {
		if ($(".spotlight_article_feature .spotlight_article_background_sm").hasClass("fs-background-loaded")) {
			$("body").addClass("spotlight-loaded");

			clearInterval(loadTimer);
		}
	}

	function pinCaption() {
		var dim = $block[0].getBoundingClientRect();

		if (dim.bottom <= $(window).innerHeight()) {
			if (!($block.hasClass("pinned"))) {
				$block.addClass("pinned");
			}
		} else {
			if ($block.hasClass("pinned")) {
				$block.removeClass("pinned");
			}
		}

		if (dim.bottom <= 0) {
			if (!($block.hasClass("away"))) {
				$block.addClass("away");
			}
		} else {
			if ($block.hasClass("away")) {
				$block.removeClass("away");
			}
		}
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Standouts
-------------------------------------------*/

Site.modules.Standouts = (function($, Site) {

	var $block;
	var $item;

	function init() {
		if ($(".standouts_block").length) {
			$block = $(".standouts_block");
			$item = $(".standout_background_item");

			bindUI();
		}
	}

	function bindUI() {
		$(".standout").hover(function() {
			$block.addClass("interested");
			$item.eq($(this).index()).addClass("active");
		}, function() {
			$block.removeClass("interested");
			$item.eq($(this).index()).removeClass("active");
		});

		Site.onScroll.push(pinStandout);
	}

	function pinStandout() {
		if ($block[0].getBoundingClientRect().bottom <= $(window).innerHeight()) {
			if (!($block.hasClass("pinned"))) {
				$block.addClass("pinned");
			}
		} else {
			if ($block.hasClass("pinned")) {
				$block.removeClass("pinned");
			}
		}
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Swipe
-------------------------------------------*/

Site.modules.Swipe = (function($, Site) {

	function init() {
		if ($(".swipe_block").length) {
			testItems();
			setup();
			bindUI();
		}
	}

	function setup() {
		$(".swipe_block").each(function() {
			$(this).find(".swipe_item").each(function() {
				if ($(this).index() == 0) {
					$(this).addClass("current");
				}

				$(this).addClass('swipe_item_' + $(this).index());
			});
		});
	}

	function bindUI() {
		Site.onResize.push(testItems);

		$(".swipe_block").each(function() {
			var hammertime = new Hammer(this);

			hammertime.on('swipe', function(e) {
				assignItems(e);
				deleteVideos();
			});
		});
	}

	function testItems() {
		$.mediaquery("bind", "mq-key", "(min-width: 740px)", {
			enter: function() {
				$(".swipe_items").each(function() {
					$(this).css("height", "");
				});
			},
			leave: function() {
				$(".swipe_items").each(function() {
					var height = 0;
		
					$(this).find(".swipe_item > *").each(function() {
						if ($(this).innerHeight() > height) {
							height = $(this).innerHeight();
						}
					});

					$(this).css("height", height + 30);
				});
			}
		});
	}

	function assignItems(e) {
		var $block = $(e.target).closest(".swipe_block");
		
		$block.find(".swipe_item").eq(0).addClass("moving");

		var moving = setTimeout(function() {
			$block.find(".moving").appendTo($block.find(".swipe_items"));
			$block.find(".moving").addClass("moving-back");
			$block.find(".moving").removeClass("moving");

			$block.find(".current").removeClass("current");
			$block.find(".swipe_item").eq(0).addClass("current");
		}, 350);

		var movingBack = setTimeout(function() {
			$block.find(".moving-back").removeClass("moving-back");
		}, 400);
	}

	function deleteVideos() {
		var deleting = setTimeout(function() {
			if ($(".video_item_iframe").length) {
				$(".video_item_iframe").each(function() {
					$(this).remove();
				});
			}
		}, 350);
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);

/*-------------------------------------------
	Video Appender
-------------------------------------------*/

Site.modules.VideoAppender = (function($, Site) {

	var $Video;
	var YoutubeRegExp;
	var VimeoRegExp;

	function init() {
		if ($(".js-video-appender").length) {
			$Video = $(".js-video-appender");
			YoutubeRegExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
			VimeoRegExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;

			bindUI();
		}
	}

	function bindUI() {
		$Video.on("click", function(e) {
			e.preventDefault();
			removeActiveVideo();
			insertVideo($(this));
		});

		$Video.each(function() {
			var $carousel = $(this).closest(".js-carousel");

			$carousel.on("update.carousel", removeActiveVideo);
		});
	}

	function bindNewUI() {
		$(".video_item_iframe").on("load", confirmLoad);
		$(".js-video-close").on("click", removeVideo);
	}

	function insertVideo(item) {
		var href = $(item).attr("href");
		var content = "<div class='video_item_iframe_wrapper'>";
		var id = "";

		if (href.indexOf("youtu") > -1) {
			id = href.match(YoutubeRegExp)[1];

			content += "<iframe class='video_item_iframe js-video-item-iframe js-video-item-youtube' tabindex='-1' src='https://web.archive.org/web/20240517225521/https://www.youtube-nocookie.com/embed/" + id + "?rel=0&controls=1&showinfo=0&autoplay=1&playsinline=1&enablejsapi=1' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
		} else if (href.indexOf("vimeo") > -1) {
			id = href.match(VimeoRegExp)[5];

			content += "<iframe class='video_item_iframe js-video-item-iframe js-video-item-vimeo' tabindex='-1' src='https://web.archive.org/web/20240517225521/https://player.vimeo.com/video/" + id + "?api=1&autoplay=1&title=0&byline=0&portrait=0' style='position:absolute;top:0;left:0;width:100%;height:100%;' allow='autoplay' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src='https://web.archive.org/web/20240517225521/https://player.vimeo.com/api/player.js'></script>";
		}

		content += 
			"<button class='js-video-close video_item_close'>" + Site.icon("close") +  "</button>" +
		"</div>";

		if ($(item).closest(".js-video-appender-wrapper").length) {
			$(item).closest(".js-video-appender-wrapper").append(content)
				.attr("tabindex", "-1");
		} else {
			$(item).after(content)
				.attr("tabindex", "-1")
				.siblings(".js-video-item-iframe").focus();
		}

		bindNewUI();
	}

	function confirmLoad() {
		$(this).parent().addClass("loaded-media");
	}

	function removeVideo() {
		var $video = $(this);

		$video.parent().removeClass("loaded-media");
		
		setTimeout(function() {
			$video.parent().remove();
		}, 350);
	}

	function removeActiveVideo() {
		var $video = $(".loaded-media");

		$video.removeClass("loaded-media");

		setTimeout(function() {
			$video.remove();
		}, 350);
	}

	function playVideos() {
		$(".js-video-item-youtube").each(function() {
			$(this)[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args": ""}', '*');
		});

		$(".js-video-item-vimeo").each(function() {
			$(this)[0].contentWindow.postMessage({
				"method": "play"
			}, $(this)[0].src);
		});
	}

	function pauseVideos() {
		$(".js-video-item-youtube").each(function() {
			$(this)[0].contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
		});

		$(".js-video-item-vimeo").each(function() {
			$(this)[0].contentWindow.postMessage({
				"method": "pause"
			}, $(this)[0].src);
		});
	}

	Site.onInit.push(init);

	return {
		pauseVideos: pauseVideos
	};

})(jQuery, Site);
;
!function(o){function a(e,t,n){var a=e.offset().top;e.parent(".tabpane").length&&o("html, body").animate({scrollTop:a-t},n)}function s(e){e.focus()}function i(e,t){var n="vertical"==e.closest(".tabs").find(".tabpane").attr("aria-orientation"),a=e.prev(),e=e.next();n?(38===t&&(event.preventDefault(),a.prev().focus()),40===t&&(event.preventDefault(),e.next().focus())):(37===t&&s(a),39===t&&s(e))}o(".tabs").each(function(){var e=o(this),t=o(window);e.find('[role="tab"]:first-child').addClass("selected-btn").attr("aria-selected","true").removeAttr("tabindex"),e.find('[role="tabpanel"]').first().addClass("selected-pane"),e.find('[role="tabpanel"]').slice(1).attr("hidden","hidden"),e.closest(".school_academics").length?(t.width()<=979&&o(".tabpane").attr("aria-orientation","vertical"),980<=t.width()&&o(".tabpane").attr("aria-orientation","horizontal")):(t.width()<=739&&o(".tabpane").attr("aria-orientation","vertical"),740<=t.width()&&o(".tabpane").attr("aria-orientation","horizontal"))}),o(".tabs").on("click",'[role="tab"]',function(){var e,t,n;e=o(this),t=e.closest(".tabs"),n=e.attr("id"),t.find('[role="tab"]').attr("aria-selected","false").removeClass("selected-btn").attr("tabindex","-1"),t.find('[role="tab"]#'+n).attr("aria-selected","true").addClass("selected-btn").removeAttr("tabindex"),function(e,t){var n=t.find('[role="tabpanel"]'),e=e.attr("aria-controls"),e=t.find('[role="tabpanel"]#'+e);n.attr("hidden","hidden").removeClass("selected-pane"),e.removeAttr("hidden").addClass("selected-pane")}(e,t),o(this).closest(".school_academics").length?a(o(this),110,800):a(o(this),80,800)}),o(".tabs").on("keydown keyup",'[role="tab"]',function(){var e=o(this),t=event.which;("keydown"==event.type?function(e,t){var n=e.closest(".tabs"),a=n.find('[role="tab"]:first-child'),o=n.find('[role="tab"]:last-child');switch(t){case 35:event.preventDefault(),s(o);break;case 36:event.preventDefault(),s(a);break;case 38:case 40:i(e,t)}}:function(e,t){switch(t){case 37:case 39:i(e,t)}})(e,t)}),0<o(".tabs").length&&o(window).resize(function(){var e=o(window);o(".tabs").closest(".school_academics").length?(e.width()<=979&&o(".tabpane").attr("aria-orientation","vertical"),980<=e.width()&&o(".tabpane").attr("aria-orientation","horizontal")):(e.width()<=739&&o(".tabpane").attr("aria-orientation","vertical"),740<=e.width()&&o(".tabpane").attr("aria-orientation","horizontal"))})}(jQuery),function(e){e(".accordion_trigger").on("click",function(){return e(this).next(".accordion_body").slideToggle("fast"),!1})}(jQuery),function(e){function t(){980<=document.body.clientWidth&&0==e(".msg--menuheight").length&&90<e(".header_overflow_inner > .main_nav_lg .main_nav_list").outerHeight()&&e("body").append("<div class='alert--menuheight'><p><span class='menuheight-header'><b>!</b> Warning</span><span class='menuheight-msg'>Your site's main navigation may be truncated. Consider removing items from the main menu, or shortening the names of current menu items, to ensure every item is visible.</span></p></div>")}0<e("#toolbar-administration").length&&(e(window).resize(function(){t()}),t()),setTimeout(function(){e("body:not(.path-user) .page_wrapper.node--unpublished").length&&e("#block-brown-local-tasks, #block-brown-site-local-tasks, #block-brown-engin-local-tasks, #block-brown-medical-local-tasks, #block-brown-professional-local-tasks, #block-brown-advancement-local-tasks, #block-brown-precollege-local-tasks, #block-brown-watson-local-tasks, #block-brown-sph-local-tasks, #block-brown-masters-local-tasks, #block-brown-research-local-tasks").after("<div class='msg--unpublished'><p>Unpublished</p></div>")},500)}(jQuery),function(n){n(".page_header_media .page_header_video, .ambient_video_item .page_header_video, .spotlight_article_background_lg").each(function(){var e=n(this),t=e.prev();document.body.clientWidth<=979&&(e.detach(),t.addClass("video-removed"))})}(jQuery),function(t){var e;function n(e){e.matches?t(".photo_img_med").css({height:"600px","padding-bottom":0}):t(".photo_img_med").removeAttr("style")}matchMedia&&((e=window.matchMedia("(min-width: 1300px)")).addListener(n),n(e))}(jQuery),function(a){a(".js-component").length&&a(".component_peak_trigger").on("click",function(){var e=a(this).find(".component_peak_trigger_label"),t=e.text().replace("Open ","Close "),n=e.text().replace("Close ","Open ");a(this).hasClass("fs-swap-open")?a(this).hasClass("fs-swap-open")&&(a(this).removeClass("fs-swap-open"),e.text(n),a(this).prop("title",e.text()).attr("aria-expanded","false")):(a(this).addClass("fs-swap-open"),e.text(t),a(this).prop("title",e.text()).attr("aria-expanded","true"))})}(jQuery),function(e){setTimeout(function(){e(".lw_accordions").length&&(e(".js-lw-event-toggle").on("click",function(){return e(this).next(".component_additional_info").slideToggle("fast"),e(this).attr("title","Show event information"==e(this).attr("title")?"Hide event information":"Show event information"),e(this).attr("aria-expanded","false"==e(this).attr("aria-expanded")?"true":"false"),!1}),e(".lw_calendar_link a").addClass("action_link fullcal_event_link").text("View Full Calendar").wrapInner("<span class='action_label'></span>"))},800),setTimeout(function(){e(".lw_dreact").length&&(e(".lw_dreact"+" .component_item").each(function(){e(this)[0].getBoundingClientRect().top<e(window).innerHeight()&&e(this).addClass("in-view")}),e(".lw_dreact .js-lw-event-toggle").on("click",function(){return e(this).toggleClass("fs-swap-active"),!1}))},1e3)}(jQuery),function(e){e("body").is(".page-node-type-flex-item")&&e(window).width()<980?e(".page_details").appendTo(e(".page_main_content")):e("body").is(".page-node-type-flex-item")&&979<e(window).width()&&e(".page_details").appendTo(e(".page_aside_inner"))}(jQuery),function(o){var e=o.getElementsByClassName("highcharts");e.length&&["highcharts.js","accessibility.js"].map(function(e){var t,n,a;t="/themes/custom/brown/custom/js/hc/",n=e,a=o.getElementsByTagName("head")[0],(e=o.createElement("script")).type="text/javascript",e.src=t+n,a.appendChild(e)})}(document),function(e){var t=e.querySelector("body").classList,n=e.querySelector(".page_details"),e=Array.from(e.querySelectorAll(".anchor_header"));(t.contains("page-node-type-jump-page")||t.contains("page-node-type-unit-site"))&&e.length&&(e.forEach(function(e){e.id||(e.id=e.textContent.trim().replace(/\W+/g,"-").toLowerCase())}),n.innerHTML="<nav class='anchor_nav' id='anchor_nav' aria-labelledby='anchornav_heading_block-sidebar-navigation' itemscope itemtype='https://web.archive.org/web/20240517225521/http://schema.org/SiteNavigationElement'><div class='anchor_nav_header'><h2 id='anchornav_heading_block-sidebar-navigation' class='sub_nav_title'>Navigate This Page</h2><button class='js-swap js-anchor-nav-handle anchor_nav_handle fs-swap-element' data-swap-target='.anchor_nav_list' data-swap-title='Navigate This Page'><span class='anchor_nav_handle_icon'><svg class='icon icon_chevron_down'><use xlink:href='/themes/custom/brown/static/images/icons.svg#chevron_down'></use></svg></span><span class='anchor_nav_handle_label'>Navigate This Page</span></button></div><ul class='js-anchor-nav-list anchor_nav_list fs-swap-target' aria-labelledby='anchornav_heading_block-sidebar-navigation'>"+e.map(function(e){return"<li class='anchor_nav_item'><a class='anchor_nav_link' href='#"+e.id+"' itemprop='url'><span class='anchor_nav_link_label'>"+e.textContent+"</span><span class='anchor_arrow'></span></a></li>"}).join("")+"</ul></nav>")}(document),function(n){var a,e=n(".anchor_nav_list"),o=e.outerHeight()+15,s=e.find("a"),i=s.map(function(){var e=n(n(this).attr("href"));if(e.length)return e});n(window).scroll(function(){var e=n(this).scrollTop()+o,t=i.map(function(){if(n(this).offset().top<e)return this}),t=(t=t[t.length-1])&&t.length?t[0].id:"";a!==t&&(a=t,s.parent().removeClass("active").end().filter("[href='#"+t+"']").parent().addClass("active"))}),n(".anchor_top").on("click",function(){var e=n("#anchor_nav").offset();n("html,body").animate({scrollTop:e.top-110},"fast")})}(jQuery),function(t){var e=t(".util_for_you .handle"),n=t(".util_for_you .handle .handle_label").text(),a=t(".header_group .flyout_for_you_handle, .header_tools .flyout_for_you_handle"),o=t(".header_group .flyout_for_you_handle_label, .header_tools .flyout_for_you_handle_label");t(".secondary_nav_lg .secondary_nav_item.util_for_you").length?(e.css("z-index","45"),o.text(n)):a.remove(),t(".flyout_for_you_handle").length&&(t('<button class="js-swap foryou_toggle fs-swap-element fs-swap-enabled" data-swap-target=".flyout_for_your_dropdown" data-swap-group="flyout_for_your_dropdown"><span class="foryou_toggle_icon"><svg class="icon icon_chevron_down"><use xlink:href="/themes/custom/brown/static/images/icons.svg#chevron_down"></use></svg></span></button>').insertBefore(".flyout_for_your_dropdown"),t(".flyout_for_you_handle").each(function(){var e=t(this).find(".flyout_for_you_handle_label").text();t(this).find("button").attr("aria-label",e+" Submenu")}),t(".foryou_toggle").on("click",function(){t(this).parent().toggleClass("focused")}))}(jQuery),function(e){e(".secondary_nav_sm .secondary_nav_item.util_for_you").remove();var t,n,a=e("#menu [href], #menu button");a.length&&(t=a.first(),n=a.last()),e("#menu").length&&(t.on("keydown",function(e){"Tab"===e.key&&e.shiftKey&&(e.preventDefault(),n.focus())}),n.on("keydown",function(e){"Tab"!==e.key||e.shiftKey||(e.preventDefault(),t.focus())}))}(jQuery),function(e){var t,n,a=e("#flyout_search [href], #flyout_search input, #flyout_search button");a.length&&(t=a.first(),n=a.last()),e("#flyout_search").length&&(t.on("keydown",function(e){"Tab"===e.key&&e.shiftKey&&(e.preventDefault(),n.focus())}),n.on("keydown",function(e){"Tab"!==e.key||e.shiftKey||(e.preventDefault(),t.focus())})),e(".flyout_close_trigger").on("click",function(){window.matchMedia("(min-width: 980px)").matches&&e(".header_overflow .flyout_search_handle, .header_ribbon .header_tools .flyout_search_handle, .header_ribbon .header_tools.header_tools_alternate .flyout_search_handle, .header_ribbon .header_group_aside > .flyout_search_handle").focus()})}(jQuery),function(e){e(".sub_nav_child_link").hasClass("active")&&e(".sub_nav_link").removeClass("active")}(jQuery),function(o){var t,e,s,i;o("body").hasClass("page-node-type-policy")&&(t=o("#policy_content .policy_components_top .policy_primary").length,e=o(".policy_components_bottom .policy_primary"),s=o(".component_title span:first-of-type"),i=o(".policy_sub_2").length,e.each(function(e){o(this).find(s).text(t+(e+1)+".0");e=o(this).find(s).text();o(this).find(s).attr("id",e)}),o(".policy_components_bottom .policy_secondary").each(function(e,t){var n=o(".policy_main_1 .component_title span:first-of-type").text().slice(0,-2),a=o(".policy_main_2 .component_title span:first-of-type").text().slice(0,-2);o(this).hasClass("policy_sub")?(o(this).find(s).text(n+"."+(e+1)),n=o(this).find(s).text(),o(this).find(s).attr("id",n)):(o(this).find(s).text(a+"."+(e-i+1)),e=o(this).find(s).text(),o(this).find(s).attr("id",e))}))}(jQuery),function(t){t("ol").each(function(){var e=1;t(this).attr("start")&&(e=t(this).attr("start"),e="li "+(e-=1),t(this).css("counter-increment",e))})}(jQuery),function(e){e(".sph10").length&&setTimeout(function(){sessionStorage.setItem("sph10-btn-played",!0)},2e3),sessionStorage.getItem("sph10-btn-played")&&e("body").addClass("sph10-btn-played")}(jQuery),function(e){e("body").is(".page_theme_engin, .page_theme_med, .page_theme_sps, .page_theme_adv, .page_theme_precollege, .page_theme_watson, .page_theme_sph, .page_theme_masters, .page_theme_research")&&e(window).width()<980?e("body").addClass("school_logo_white"):e("body").is(".page_theme_engin, .page_theme_med, .page_theme_sps, .page_theme_adv, .page_theme_precollege, .page_theme_watson, .page_theme_sph, .page_theme_masters, .page_theme_research")&&979<e(window).width()&&e("body").removeClass("page_theme_alternate"),e(".page_theme_overflow .main_nav_list .home .main_nav_link").prepend('<span class="home_icon"><svg class="icon icon_home"><use xlink:href="/themes/custom/brown/static/images/icons.svg#home"></use></svg></span>')}(jQuery),function(e){e("body").is(".path-user")&&(e("#user-login-form").length?(e("main").addClass("anon-contain"),e(".anon").addClass("visible")):e("body").is(".toolbar-fixed")?(e(".page_header").addClass("auth-role-contain page_header_media"),e(".auth-role").addClass("visible"),e("table").addClass("stripe-tbl")):(e("main").addClass("auth-norole-contain"),e(".auth-norole").addClass("visible")))}(jQuery),function(e){var t,n,a,o,s,i,l,r,c,h,d,_,p,u,f,g,m,b,v,w,y;e(".link_all").prepend('<span class="link_all_icon"><svg class="icon icon_arrow_left"><use xlink:href="/themes/custom/brown/static/images/icons.svg#arrow_left"></use></svg></span>'),e(".link_util").append('<span class="link_util_icon" aria-hidden="true"><span class="link_util_icon_default"><svg class="icon icon_arrow_right"><use xlink:href="/themes/custom/brown/static/images/icons.svg#arrow_right"></use></svg></span><span class="link_util_icon_action"><svg class="icon icon_link"><use xlink:href="/themes/custom/brown/static/images/icons.svg#link"></use></svg></span></span>'),e(".elink").append('<span class="elink_icon" aria-hidden="true"><span class="elink_icon_default"><svg class="icon icon_arrow_right"><use xlink:href="/themes/custom/brown/static/images/icons.svg#arrow_right"></use></svg></span><span class="elink_icon_action"><svg class="icon icon_link"><use xlink:href="/themes/custom/brown/static/images/icons.svg#link"></use></svg></span></span>'),a=".wysiwyg_block",o=".in_content_callouts",s=".full_width_callouts",i=(n="#page_main_content")+" "+(t=["#block-brown-content","#block-brown-site-content","#block-brown-medical-content","#block-brown-engin-content","#block-brown-advancement-content","#block-brown-professional-content","#block-brown-precollege-content","#block-brown-watson-content","#block-brown-sph-content","#block-brown-masters-content","#block-brown-research-content"])[0]+" "+(y="article")+" "+(w="div:last-child"),l=n+" "+t[0]+" "+y,r=n+" "+t[1]+" "+y+" "+w,c=n+" "+t[1]+" "+y,h=n+" "+t[2]+" "+y+" "+w,d=n+" "+t[2]+" "+y,_=n+" "+t[3]+" "+y+" "+w,p=n+" "+t[3]+" "+y,u=n+" "+t[4]+" "+y+" "+w,f=n+" "+t[4]+" "+y,g=n+" "+t[5]+" "+y+" "+w,m=n+" "+t[5]+" "+y,b=n+" "+t[6]+" "+y+" "+w,v=n+" "+t[6]+" "+y,w=n+" "+t[7]+" "+y+" "+w,y=n+" "+t[7]+" "+y,e(".page_content").length&&(0==e(i).children().length&&e(l).closest(a).remove(),0==e(r).children().length&&e(c).closest(a).remove(),0==e(h).children().length&&e(d).closest(a).remove(),0==e(_).children().length&&e(p).closest(a).remove(),0==e(u).children().length&&e(f).closest(a).remove(),0==e(g).children().length&&e(m).closest(a).remove(),0==e(b).children().length&&e(v).closest(a).remove(),0==e(w).children().length&&e(y).closest(a).remove(),0==e(o).children().length&&e(o).remove(),0==e(s).children().length&&e(s).remove(),0==e(".breadcrumb_wrapper .fs-row .fs-cell").children().length&&e(".breadcrumb_wrapper").remove())}(jQuery);;


}
/*
     FILE ARCHIVED ON 22:55:21 May 17, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:55:38 Dec 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.795
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.012
  esindex: 0.016
  cdx.remote: 8.342
  LoadShardBlock: 179.624 (3)
  PetaboxLoader3.datanode: 159.501 (5)
  PetaboxLoader3.resolve: 85.751 (2)
  load_resource: 97.61 (2)
*/