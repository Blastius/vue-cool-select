(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DevExample2"],{1064:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-page-wrap"},[n("div",[n("h1",{staticStyle:{"text-align":"center"}},[t._v("Usage Example 2")]),n("p",[t._v("\n      This example shows how to work with asynchronous data through REST API.\n    ")]),t.selected?n("div",[n("img",{attrs:{src:t.selected.logo,alt:"Logo"}}),n("ul",[n("li",[t._v("Name: "+t._s(t.selected.name))]),n("li",[t._v("Domain: "+t._s(t.selected.domain))])])]):t._e(),n("br"),n("b",[t._v("Loading:")]),t._v(" "+t._s(t.loading)+".\n    "),n("br"),n("br"),n("cool-select",{attrs:{items:t.items,loading:t.loading,placeholder:"Search","item-text":"name","disable-filtering-by-search":""},on:{search:t.onSearch},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("img",{staticClass:"logo",attrs:{src:r.logo}}),n("div",[n("span",{staticClass:"item-name"},[t._v("\n              "+t._s(r.name)+"\n            ")]),n("br"),n("span",{staticClass:"item-domain"},[t._v("\n              "+t._s(r.domain)+"\n            ")])])])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("template",{slot:"no-data"},[t._v("\n        "+t._s(t.noData?"No information found by request.":"We need at least 2 letters to search.")+"\n      ")])],2)],1)])},o=[],i=(n("96cf"),n("795b")),a=n.n(i);function c(t,e,n,r,o,i,c){try{var s=t[i](c),u=s.value}catch(f){return void n(f)}s.done?e(u):a.a.resolve(u).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new a.a(function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)})}}var u=n("56d7"),f={components:{CoolSelect:u["a"]},data:function(){return{selected:null,items:[],loading:!1,timeoutId:null,noData:!1}},methods:{onSearch:function(){var t=s(regeneratorRuntime.mark(function t(e){var n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=2,this.noData=!1,!(e.length<n)){t.next=6;break}return this.items=[],this.loading=!1,t.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(s(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch('https://autocomplete.clearbit.com/v1/companies/suggest?query="'.concat(e,'"'));case 2:return n=t.sent,t.next=5,n.json();case 5:r.items=t.sent,r.loading=!1,r.items.length||(r.noData=!0),console.log(r.items);case 9:case"end":return t.stop()}},t)})),500);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},l=f,h=(n("bc67"),n("2877")),v=Object(h["a"])(l,r,o,!1,null,"ab8e7414",null);e["default"]=v.exports},1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"24c5":function(t,e,n){"use strict";var r,o,i,a,c=n("b8e3"),s=n("e53d"),u=n("d864"),f=n("40c3"),l=n("63b6"),h=n("f772"),v=n("79aa"),p=n("1173"),d=n("a22a"),m=n("f201"),y=n("4178").set,g=n("aba2")(),w=n("656e"),_=n("4439"),x=n("bc13"),b=n("cd78"),E="Promise",L=s.TypeError,j=s.process,P=j&&j.versions,k=P&&P.v8||"",S=s[E],T="process"==f(j),O=function(){},R=o=w.f,N=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(O,O)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},C=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,f=e.domain;try{c?(o||(2==t._h&&D(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),a=!0)),n===e.promise?u(L("Promise-chain cycle")):(i=F(n))?i.call(n,s,u):s(n)):u(r)}catch(l){f&&!a&&f.exit(),u(l)}};while(n.length>i)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&G(t)})}},G=function(t){y.call(s,function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=_(function(){T?j.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=T||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){y.call(s,function(){var e;T?j.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},M=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),C(e,!0))},A=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw L("Promise can't be resolved itself");(e=F(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,u(A,r,1),u(M,r,1))}catch(o){M.call(r,o)}}):(n._v=t,n._s=1,C(n,!1))}catch(r){M.call({_w:n,_d:!1},r)}}};N||(S=function(t){p(this,S,E,"_h"),v(t),r.call(this);try{t(u(A,this,1),u(M,this,1))}catch(e){M.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("5c95")(S.prototype,{then:function(t,e){var n=R(m(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&C(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(A,t,1),this.reject=u(M,t,1)},w.f=R=function(t){return t===S||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!N,{Promise:S}),n("45f2")(S,E),n("4c95")(E),a=n("584a")[E],l(l.S+l.F*!N,E,{reject:function(t){var e=R(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(c||!N),E,{resolve:function(t){return b(c&&this===a?S:this,t)}}),l(l.S+l.F*!(N&&n("4ee1")(function(t){S.all(t)["catch"](O)})),E,{all:function(t){var e=this,n=R(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,a=1;d(t,!1,function(t){var c=i++,s=!1;n.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,n[c]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=R(e),r=n.reject,o=_(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"3c11":function(t,e,n){"use strict";var r=n("63b6"),o=n("584a"),i=n("e53d"),a=n("f201"),c=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},4178:function(t,e,n){var r,o,i,a=n("d864"),c=n("3024"),s=n("32fc"),u=n("1ec9"),f=n("e53d"),l=f.process,h=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,m=0,y={},g="onreadystatechange",w=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},_=function(t){w.call(t.data)};h&&v||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return y[++m]=function(){c("function"==typeof t?t:Function(t),e)},r(m),m},v=function(t){delete y[t]},"process"==n("6b4c")(l)?r=function(t){l.nextTick(a(w,t,1))}:d&&d.now?r=function(t){d.now(a(w,t,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=_,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=g in u("script")?function(t){s.appendChild(u("script"))[g]=function(){s.removeChild(this),w.call(t)}}:function(t){setTimeout(a(w,t,1),0)}),t.exports={set:h,clear:v}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),o=n("656e"),i=n("4439");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"4c95":function(t,e,n){"use strict";var r=n("e53d"),o=n("584a"),i=n("d9f6"),a=n("8e60"),c=n("5168")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},"656e":function(t,e,n){"use strict";var r=n("79aa");function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=_;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==r&&o.call(g,a)&&(m=g);var w=L.prototype=b.prototype=Object.create(m);E.prototype=w.constructor=L,L.constructor=E,L[s]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},j(P.prototype),P.prototype[c]=function(){return this},f.AsyncIterator=P,f.async=function(t,e,n,r){var o=new P(_(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=N,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function _(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=k(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function b(){}function E(){}function L(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=l;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return F()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a22a:function(t,e,n){var r=n("d864"),o=n("b0dc"),i=n("3702"),a=n("e4ae"),c=n("b447"),s=n("7cd6"),u={},f={};e=t.exports=function(t,e,n,l,h){var v,p,d,m,y=h?function(){return t}:s(t),g=r(n,l,e?2:1),w=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=c(t.length);v>w;w++)if(m=e?g(a(p=t[w])[0],p[1]):g(t[w]),m===u||m===f)return m}else for(d=y.call(t);!(p=d.next()).done;)if(m=o(d,g,p.value,e),m===u||m===f)return m};e.BREAK=u,e.RETURN=f},aba2:function(t,e,n){var r=n("e53d"),o=n("4178").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,s="process"==n("6b4c")(a);t.exports=function(){var t,e,n,u=function(){var r,o;s&&(r=a.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=void 0,i}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(u)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(u)}}else n=function(){o.call(r,u)};else{var l=!0,h=document.createTextNode("");new i(u).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},bc13:function(t,e,n){var r=n("e53d"),o=r.navigator;t.exports=o&&o.userAgent||""},bc67:function(t,e,n){"use strict";var r=n("fd3f"),o=n.n(r);o.a},c207:function(t,e){},cd78:function(t,e,n){var r=n("e4ae"),o=n("f772"),i=n("656e");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),a=n.resolve;return a(e),n.promise}},e2e7:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".item-name[data-v-ab8e7414]{font-size:25px}.item-domain[data-v-ab8e7414]{color:grey}.logo[data-v-ab8e7414]{max-width:60px;margin-right:10px;border:1px solid #eaecf0}",""])},f201:function(t,e,n){var r=n("e4ae"),o=n("79aa"),i=n("5168")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},fd3f:function(t,e,n){var r=n("e2e7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("0f586361",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=DevExample2.1703c665.js.map