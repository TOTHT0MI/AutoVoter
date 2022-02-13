var app=function(){"use strict";function e(){}function r(e){return e()}function s(){return Object.create(null)}function t(e){e.forEach(r)}function n(e){return"function"==typeof e}function a(e,r){return e!=e?r==r:e!==r||e&&"object"==typeof e||"function"==typeof e}function o(e,r){e.appendChild(r)}function g(e){e.parentNode.removeChild(e)}function i(e){return document.createElement(e)}function m(){return e=" ",document.createTextNode(e);var e}function l(e,r,s,t){return e.addEventListener(r,s,t),()=>e.removeEventListener(r,s,t)}function A(e,r,s){null==s?e.removeAttribute(r):e.getAttribute(r)!==s&&e.setAttribute(r,s)}function c(e,r){e.value=null==r?"":r}function x(e,r,s,t){null===s?e.style.removeProperty(r):e.style.setProperty(r,s,t?"important":"")}let u;function d(e){u=e}function f(e){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(e)}const p=[],h=[],b=[],v=[],y=Promise.resolve();let w=!1;function k(e){b.push(e)}const $=new Set;let C=0;function T(){const e=u;do{for(;C<p.length;){const e=p[C];C++,d(e),P(e.$$)}for(d(null),p.length=0,C=0;h.length;)h.pop()();for(let e=0;e<b.length;e+=1){const r=b[e];$.has(r)||($.add(r),r())}b.length=0}while(p.length);for(;v.length;)v.pop()();w=!1,$.clear(),d(e)}function P(e){if(null!==e.fragment){e.update(),t(e.before_update);const r=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,r),e.after_update.forEach(k)}}const E=new Set;function _(e,r){-1===e.$$.dirty[0]&&(p.push(e),w||(w=!0,y.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[r/31|0]|=1<<r%31}function j(a,o,i,m,l,A,c,x=[-1]){const f=u;d(a);const p=a.$$={fragment:null,ctx:null,props:A,update:e,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:s(),dirty:x,skip_bound:!1,root:o.target||f.$$.root};c&&c(p.root);let h=!1;if(p.ctx=i?i(a,o.props||{},((e,r,...s)=>{const t=s.length?s[0]:r;return p.ctx&&l(p.ctx[e],p.ctx[e]=t)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](t),h&&_(a,e)),r})):[],p.update(),h=!0,t(p.before_update),p.fragment=!!m&&m(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(g)}else p.fragment&&p.fragment.c();o.intro&&((b=a.$$.fragment)&&b.i&&(E.delete(b),b.i(v))),function(e,s,a,o){const{fragment:g,on_mount:i,on_destroy:m,after_update:l}=e.$$;g&&g.m(s,a),o||k((()=>{const s=i.map(r).filter(n);m?m.push(...s):t(s),e.$$.on_mount=[]})),l.forEach(k)}(a,o.target,o.anchor,o.customElement),T()}var b,v;d(f)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var M,N,S=(M=function(e,r){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,function(e){if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",t=e=>{const t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(t).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=e=>e&&"object"==typeof e&&"function"==typeof e.then,o=(r,s)=>(...t)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||t.length<=1&&!1!==s.singleCallbackArg?r.resolve(t[0]):r.resolve(t)},g=e=>1==e?"argument":"arguments",i=(e,r)=>function(s,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise(((n,a)=>{if(r.fallbackToNoCallback)try{s[e](...t,o({resolve:n,reject:a},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),s[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,n()}else r.noCallback?(s[e](...t),n()):s[e](...t,o({resolve:n,reject:a},r))}))},m=(e,r,s)=>new Proxy(r,{apply:(r,t,n)=>s.call(t,e,...n)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const A=(e,r={},s={})=>{let t=Object.create(null),n={has:(r,s)=>s in e||s in t,get(n,a,o){if(a in t)return t[a];if(!(a in e))return;let g=e[a];if("function"==typeof g)if("function"==typeof r[a])g=m(e,e[a],r[a]);else if(l(s,a)){let r=i(a,s[a]);g=m(e,e[a],r)}else g=g.bind(e);else if("object"==typeof g&&null!==g&&(l(r,a)||l(s,a)))g=A(g,r[a],s[a]);else{if(!l(s,"*"))return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:()=>e[a],set(r){e[a]=r}}),g;g=A(g,r[a],s["*"])}return t[a]=g,g},set:(r,s,n,a)=>(s in t?t[s]=n:e[s]=n,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(t,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)},a=Object.create(e);return new Proxy(a,n)},c=e=>({addListener(r,s,...t){r.addListener(e.get(s),...t)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),x=new n((e=>"function"!=typeof e?e:function(r){const s=A(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)}));let u=!1;const d=new n((e=>"function"!=typeof e?e:function(r,t,n){let o,g,i=!1,m=new Promise((e=>{o=function(r){u||(console.warn(s,(new Error).stack),u=!0),i=!0,e(r)}}));try{g=e(r,t,o)}catch(e){g=Promise.reject(e)}const l=!0!==g&&a(g);if(!0!==g&&!l&&!i)return!1;const A=e=>{e.then((e=>{n(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return A(l?g:m),!0})),f=({reject:s,resolve:t},n)=>{e.runtime.lastError?e.runtime.lastError.message===r?t():s(new Error(e.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?s(new Error(n.message)):t(n)},p=(e,r,s,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise(((e,r)=>{const n=f.bind(null,{resolve:e,reject:r});t.push(n),s.sendMessage(...t)}))},h={devtools:{network:{onRequestFinished:c(x)}},runtime:{onMessage:c(d),onMessageExternal:c(d),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},A(e,h,t)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=t(chrome)}else e.exports=browser}(e)},M(N={exports:{}},N.exports),N.exports);function L(r){let s,n,a,u,d,f,p,h,b,v,y,w,k,$,C,T,P,E,_,j,M,N,S,L,I,O,B,F;return{c(){s=i("main"),n=i("div"),a=i("div"),a.innerHTML='<div class="top svelte-18o12wg"><h2 style="margin-left: 5px;" class="svelte-18o12wg">AutoVoter</h2></div>',u=m(),d=i("div"),f=i("div"),p=i("label"),h=i("input"),b=m(),v=i("span"),y=m(),w=i("div"),k=i("div"),$=m(),C=i("div"),T=i("label"),T.textContent="IGN:",P=m(),E=i("input"),_=m(),j=i("button"),j.textContent="Change IGN",M=m(),N=i("div"),S=m(),L=i("div"),L.innerHTML='<div class="col-xs-1"></div> \n\t\t<div class="col-xs-8" style="text-align: left;"><h3>Prefrences (Soon...)</h3> \n\t\t\t<label class="pure-material-checkbox" title="Close the page automatically after a successful vote."><input type="checkbox" disabled=""/> \n\t\t\t\t<span>Auto-close page</span></label> \n\n\t\t\t<label class="pure-material-checkbox" title="Click CAPTCHA automatically (You will still need to complete it, there&#39;s no AI magic here)."><input type="checkbox" disabled=""/> \n\t\t\t\t<span>Auto CAPTCHA</span></label> \n\n\t\t\t<label class="pure-material-checkbox" title="The extension will press the submit/vote button for you automatically."><input type="checkbox" disabled=""/> \n\t\t\t\t<span>Auto submit</span></label></div> \n\t\t<div class="col-xs-2"></div>',I=m(),O=i("div"),O.innerHTML='<div class="row svelte-18o12wg"><div class="col-xs-2"></div> \n\t\t\t<div class="col-xs-8" style="text-align: center;"><p>Made by TOTHTOMI with ♥</p></div> \n\t\t\t<div class="col-xs-2"></div></div>',A(a,"class","col-xs-8"),A(h,"type","checkbox"),A(v,"class","slider round"),A(p,"class","switch"),A(f,"class","switch-holder"),x(f,"margin-top","-1rem"),x(f,"float","right"),x(f,"margin-right","1rem"),A(d,"class","col-xs-4"),A(n,"class","row middle-xs svelte-18o12wg"),x(n,"margin-bottom","3rem"),A(k,"class","col-xs-2"),A(T,"for","ign"),A(E,"id","ign"),A(E,"type","text"),x(j,"margin-top","10px"),A(C,"class","col-xs-8"),x(C,"text-align","center"),A(N,"class","col-xs-2"),A(w,"class","row svelte-18o12wg"),A(L,"class","row svelte-18o12wg"),A(O,"class","footer"),A(s,"class","main svelte-18o12wg")},m(e,t){!function(e,r,s){e.insertBefore(r,s||null)}(e,s,t),o(s,n),o(n,a),o(n,u),o(n,d),o(d,f),o(f,p),o(p,h),h.checked=r[1],o(p,b),o(p,v),o(s,y),o(s,w),o(w,k),o(w,$),o(w,C),o(C,T),o(C,P),o(C,E),c(E,r[0]),o(C,_),o(C,j),o(w,M),o(w,N),o(s,S),o(s,L),o(s,I),o(s,O),B||(F=[l(h,"click",r[3]),l(h,"change",r[4]),l(E,"input",r[5]),l(j,"click",r[2])],B=!0)},p(e,[r]){2&r&&(h.checked=e[1]),1&r&&E.value!==e[0]&&c(E,e[0])},i:e,o:e,d(e){e&&g(s),B=!1,t(F)}}}function I(e,r,s){let t,n=!1;return f((()=>{S.storage.local.get(["av-ign","av-enabled"]).then((e=>{s(0,t=e["av-ign"]),s(1,n=e["av-enabled"]),void 0===n&&(s(1,n=!0),S.storage.local.set({"av-enabled":n}))}))})),[t,n,function(){S.storage.local.set({"av-ign":t})},function(){s(1,n=!n),S.storage.local.set({"av-enabled":n})},function(){n=this.checked,s(1,n)},function(){t=this.value,s(0,t)}]}return new class extends class{$destroy(){!function(e,r){const s=e.$$;null!==s.fragment&&(t(s.on_destroy),s.fragment&&s.fragment.d(r),s.on_destroy=s.fragment=null,s.ctx=[])}(this,1),this.$destroy=e}$on(e,r){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(r),()=>{const e=s.indexOf(r);-1!==e&&s.splice(e,1)}}$set(e){var r;this.$$set&&(r=e,0!==Object.keys(r).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),j(this,e,I,L,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
