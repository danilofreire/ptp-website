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

/* (c) 2008-2014 AddThis, Inc */
var addthis_conf = { ver:250 };
!function t(e,s,i){function r(a,o){if(!s[a]){if(!e[a]){var c="function"==typeof require&&require;if(!o&&c)return c(a,!0);if(n)return n(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=s[a]={exports:{}};e[a][0].call(u.exports,function(t){var s=e[a][1][t];return r(s?s:t)},u,u.exports,t,e,s,i)}return s[a].exports}for(var n="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(t,e){var s=t("../business/getPostLoadOps");e.exports=function(t){s().push(t)}},{"../business/getPostLoadOps":2}],2:[function(t,e){var s,i=window;e.exports=function(){return s||(i.addthis?(i.addthis.plo||(i.addthis.plo=[]),s=i.addthis.plo):"undefined"!=typeof _ate&&(_ate.plo||(_ate.plo=[]),s=_ate.plo)),s}},{}],3:[function(t,e){var s=t("../util/domEvents").listen,i={};e.exports=function(t){function e(e,s){return function(){var i,r,n=Array.prototype.slice.call(arguments,0),c=n[n.length-1];c&&c.constructor===Function&&(r=n.pop(),i=a++,o[e]?o[e][i]=r:(o[e]={},o[e][i]=r)),t.contentWindow.postMessage(JSON.stringify({type:"api.request",api:e,method:s,args:n,id:i}),t.src)}}function r(e){c[e]?n(this,e,c[e]):(u[e]?u[e].push(this):u[e]=[this],t.contentWindow.postMessage(JSON.stringify({type:"api.info.request",api:e}),"*")),this.addReadyListener=function(t){c[e]?t():d[e]?d[e].push(t):d[e]=[t]}}function n(t,s,i){var r,n;for(r=0;r<i.length;r++)n=i[r],t[n]=e(s,n)}if(t.__apiID&&i[t.__apiID])return i[t.__apiID];t.__apiID=String(Math.random());var a=0,o={},c={},d={},u={};return s(window,"message",function(e){var s,i,r=e.data,a=e.source;if(a===t.contentWindow){try{r=JSON.parse(r)}catch(l){r=r||{}}if("api.response"===r.type)o[r.api]&&o[r.api][r.id]&&(o[r.api][r.id].call(this,r.result),delete o[r.api][r.id]);else if("api.info"===r.type){for(s=u[r.api],c[r.api]=r.methods;s&&s.length;)n(s.pop(),r.api,c[r.api]);for(;d[r.api]&&d[r.api].length;)(i=d[r.api].pop())()}}}),i[t.__apiID]=r,r}},{"../util/domEvents":6}],4:[function(t){!function(){function e(t,e,s,i){return function(){this.qs||(this.qs=0),_atc.qs++,this.qs++>0&&i||_atc.qs>1e3||!p.addthis||c({call:t,args:arguments,ns:e,ctx:s})}}function s(t){var e=this,s=this.queue=[];this.name=t,this.call=function(){s.push(arguments)},this.call.queuer=this,this.flush=function(t,i){this.flushed=1;for(var r=0;r<s.length;r++)t.apply(i||e,s[r]);return t}}function i(t){t&&!(t.data||{}).addthisxf&&p.addthis&&(addthis._pmh.flushed?_ate.pmh(t):addthis._pmh.call(t))}var r,n=t("../util/getScriptTagParams"),a=t("../makeAPIFrame"),o=t("../util/onePixelPosition"),c=t("../business/addPostLoadOp"),d=t("../constructor/ClientAPI"),u=t("../util/domEvents").listen,l=t("../util/each"),p=window,h=document;(p._atc||{}).ver||(p._atd="www.addthis.com/",p._euc=encodeURIComponent,p._duc=decodeURIComponent,p._atc={dbg:0,rev:"18.0-edge",dr:0,ver:250,loc:0,enote:"",cwait:500,bamp:.25,camp:1,csmp:1e-4,damp:1,famp:1,pamp:.1,abmp:.5,sfmp:-1,tamp:1,plmp:1,stmp:0,vamp:1,cscs:1,dtt:.1,ohmp:0,ltj:1,xamp:1,abf:!!p.addthis_do_ab,qs:0,cdn:0,rsrcs:{bookmark:"static/r07/bookmark049.html",atimg:"static/r07/atimg049.html",countercss:"static/r07/plugins/counter015.css",counterIE67css:"plugins/static/r07/counterIE67004.css",counter:"static/r07/plugins/counter020.js",core:"static/r07/core201.js",wombat:"static/r07/bar.js",wombatcss:"static/r07/bar.css",qbarcss:"bannerQuirks.css",fltcss:"static/r07/floating010.css",barcss:"static/r07/banner006.css",barjs:"static/r07/banner004.js",contentcss:"static/r07/content009.css",contentjs:"static/r07/content023.js",layersjs:"static/r07/plugins/layers099.js",layerscss:"static/r07/plugins/layers077.css",layersiecss:"static/r07/plugins/layersIE6009.css",layersdroidcss:"static/r07/plugins/layersdroid006.css",warning:"static/r07/warning000.html",ssojs:"static/r07/ssi005.js",ssocss:"static/r07/ssi004.css",peekaboocss:"static/r07/peekaboo002.css",overlayjs:"static/r07/overlay005.js",widgetWhite32CSS:"static/r07/widget/css/widget015.white.32.css",widgetIE67css:"static/r07/widgetIE67008.css",widgetpng:"//web.archive.org/web/20150222130918/http://s7.addthis.com/",widgetOldCSS:"static/r07/widget/css/widget015.old.css",widgetOld16CSS:"static/r07/widget/css/widget015.old.16.css",widgetOld20CSS:"static/r07/widget/css/widget015.old.20.css",widgetOld32CSS:"static/r07/widget/css/widget015.old.32.css",widgetSVGCSS:"static/r07/widget/css/widget015.svg.css",widgetSVGTopCSS:"static/r07/widget/css/widget015.top.svg.css",widgetWhite32IconsPNG:"static/r07/widget/img/widget015.white.32.icons.png",embed:"static/r07/embed010.js",embedcss:"static/r07/embed004.css",lightbox:"static/r07/lightbox000.js",lightboxcss:"static/r07/lightbox001.css",link:"static/r07/link005.html",pinit:"static/r07/pinit022.html",linkedin:"static/r07/linkedin025.html",fbshare:"static/r07/fbshare004.html",tweet:"static/r07/tweet029.html",menujs:"static/r07/menu174.js",sh:"static/r07/sh200.html"},imgs:"static/r07/plugins/images006/"}),p._atr=p._atc.edge?"//web.archive.org/web/20150222130918/http://edge.addthis.com/cachefly/":"//web.archive.org/web/20150222130918/http://s7.addthis.com/",l(p._atc.rsrcs,function(t,e){-1===e.indexOf(_atr)&&(p._atc.rsrcs[t]=_atr+e)});var g,f,m,v="https:"===p.location.protocol,w=h.body||h.getElementsByTagName("head")[0];if(!p.addthis||p.addthis.nodeType!==r){try{g=p.navigator?navigator.userLanguage||navigator.language:"",f=g.split("-").pop().toLowerCase(),m=g.substring(0,2)}catch(y){}p.addthis={ost:0,cache:{},plo:[],links:[],ems:[],timer:{load:(new Date).getTime()},_Queuer:s,_queueFor:e,data:{getShareCount:e("getShareCount","data")},bar:{show:e("show","bar"),initialize:e("initialize","bar")},layers:e("layers"),login:{initialize:e("initialize","login"),connect:e("connect","login")},configure:function(t){p.addthis_config||(p.addthis_config={}),p.addthis_share||(p.addthis_share={});for(var e in t)if("share"==e&&"object"==typeof t[e])for(var s in t[e])t[e].hasOwnProperty(s)&&(addthis.ost?addthis.update("share",s,t[e][s]):p.addthis_share[s]=t[e][s]);else t.hasOwnProperty(e)&&(addthis.ost?addthis.update("config",e,t[e]):p.addthis_config[e]=t[e])},box:e("box"),button:e("button"),counter:e("counter"),count:e("count"),lightbox:e("lightbox"),toolbox:e("toolbox"),update:e("update"),init:e("init"),ad:{menu:e("menu","ad","ad"),event:e("event","ad"),getPixels:e("getPixels","ad")},util:{getServiceName:e("getServiceName")},ready:e("ready"),addEventListener:e("addEventListener","ed","ed"),removeEventListener:e("removeEventListener","ed","ed"),user:{getID:e("getID","user"),getGeolocation:e("getGeolocation","user",null,!0),getPreferredServices:e("getPreferredServices","user",null,!0),getServiceShareHistory:e("getServiceShareHistory","user",null,!0),ready:e("ready","user"),isReturning:e("isReturning","user"),isOptedOut:e("isOptedOut","user"),isUserOf:e("isUserOf","user"),hasInterest:e("hasInterest","user"),isLocatedIn:e("isLocatedIn","user"),interests:e("getInterests","user"),services:e("getServices","user"),location:e("getLocation","user")},session:{source:e("getSource","session"),isSocial:e("isSocial","session"),isSearch:e("isSearch","session")},_pmh:new s("pmh"),_pml:[]};var _=n("addthis_widget");if(_.headless){var b=a(_),x=d(b);w.appendChild(b),_.userapi&&(p.addthis.UserAPI=new x("user")),_.provider&&(p.addthis.ProviderAPI=new x("provider"))}else{if(-1===h.location.href.indexOf(_atr)){var S=h.getElementById("_atssh");if(S||(S=h.createElement("div"),S.style.visibility="hidden",S.id="_atssh",o(S),w.appendChild(S)),p.postMessage&&(u(p,"message",i),addthis._pml.push(i)),!S.firstChild){var P,I=Math.floor(1e3*Math.random());P=h.createElement("iframe"),P.id="_atssh"+I,P.title="AddThis utility frame",S.appendChild(P),o(P),P.frameborder=P.style.border=0,P.style.top=P.style.left=0,_atc._atf=P}}var O=h.createElement("script");O.type="text/javascript",O.src=(v?"https:":"http:")+_atc.rsrcs.core,w.appendChild(O);var E=1e4;setTimeout(function(){p.addthis.timer.core||Math.random()<_atc.ohmp&&((new Image).src="//web.archive.org/web/20150222130918/http://m.addthisedge.com/live/t00/oh.gif?"+Math.floor(4294967295*Math.random()).toString(36)+"&cdn="+_atc.cdn+"&sr="+_atc.ohmp+"&rev="+_atc.rrev+"&to="+E)},E)}}}()},{"../business/addPostLoadOp":1,"../constructor/ClientAPI":3,"../makeAPIFrame":5,"../util/domEvents":6,"../util/each":7,"../util/getScriptTagParams":12,"../util/onePixelPosition":13}],5:[function(t,e){{var s=t("./util/toKV");t("./util/onePixelPosition")}e.exports=function(t){var e=document.createElement("iframe");return t=t||{},e.src="//web.archive.org/web/20150222130918/http://s7.addthis.com/static/r07/api000.html#"+s(t),e.style.display="none",e}},{"./util/onePixelPosition":13,"./util/toKV":16}],6:[function(t,e){function s(t,e,s,i){e&&(e.attachEvent?e[(t?"detach":"attach")+"Event"]("on"+s,i):e[(t?"remove":"add")+"EventListener"](s,i,!1))}function i(t,e,i){s(0,t,e,i)}function r(t,e,i){s(1,t,e,i)}e.exports={listen:i,unlisten:r}},{}],7:[function(t,e){e.exports=function(t,e,s){var i,r;if(s=s||this,t&&e)for(i in t)if(t.hasOwnProperty instanceof Function){if(t.hasOwnProperty(i)&&(r=e.call(s,i,t[i],t),r===!1))break}else if(r=e.call(s,i,t[i],t),r===!1)break}},{}],8:[function(t,e){var s=t("./strip"),i=t("./reduce"),s=t("./strip");e.exports=function(t,e){return e=void 0!==e?e:"&",t=void 0!==t?t:"",i(t.split(e),function(t,e){try{var i=e.split("="),r=s(window.decodeURIComponent(i[0])),n=s(window.decodeURIComponent(i.slice(1).join("=")));r&&(t[r]=n)}catch(a){}return t},{})}},{"./reduce":14,"./strip":15}],9:[function(t,e){var s=t("./fromKV");e.exports=function(t){var e,i=t.indexOf("#");return e=-1!==i?t.substring(i):"",s(e.replace(/^[^\#]+\#?|^\#?/,""))}},{"./fromKV":8}],10:[function(t,e){var s=t("./fromKV");e.exports=function(t){var e,i=t.indexOf("?");return e=-1!==i?t.substring(i):"",s(e.replace(/^[^\?]+\??|^\??/,""))}},{"./fromKV":8}],11:[function(t,e){e.exports=function(t){for(var e=document.getElementsByTagName("script"),s=0;s<e.length;s++)if(-1!==e[s].src.indexOf(t))return e[s]}},{}],12:[function(t,e){var s=t("./getHashParams"),i=t("./getQueryParams"),r=t("./getScriptTag");e.exports=function(t){var e=r(t);return e&&e.src?e.src.indexOf("#")>-1?s(e.src):i(e.src):{}}},{"./getHashParams":9,"./getQueryParams":10,"./getScriptTag":11}],13:[function(t,e){e.exports=function(t){t.style&&(t.style.width=t.style.height="1px",t.style.position="absolute",t.style.top="-9999px",t.style.zIndex=1e5)}},{}],14:[function(t,e){e.exports=function(t,e,s,i){if(!t)return s;if(t instanceof Array)for(var r=0,n=t.length,a=t[0];n>r;a=t[++r])s=e.call(i||t,s,a,r,t);else for(var o in t)t.hasOwnProperty(o)&&(s=e.call(i||t,s,t[o],o,t));return s}},{}],15:[function(t,e){e.exports=function(t){return t+="",t.replace(/(^\s+|\s+$)/g,"")}},{}],16:[function(t,e){var s=t("./reduce"),i=t("./strip");e.exports=function(t,e){return e=void 0!==e?e:"&",s(t,function(t,e,s){return s=i(s),s&&t.push(window.encodeURIComponent(s)+"="+window.encodeURIComponent(i(e))),t},[]).join(e)}},{"./reduce":14,"./strip":15}]},{},[4]);

}
/*
     FILE ARCHIVED ON 13:09:18 Feb 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:55:00 Dec 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.008
  cdx.remote: 21.095
  LoadShardBlock: 415.96 (6)
  PetaboxLoader3.datanode: 178.257 (8)
  PetaboxLoader3.resolve: 238.534 (3)
  load_resource: 186.467 (2)
*/