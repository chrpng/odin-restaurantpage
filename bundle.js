!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function s(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(h(r.parts[i],e))}else{for(var c=[];i<r.parts.length;i++)c.push(h(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function m(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,b=0;function h(n,e){var t,r,o;if(e.singleton){var a=b++;t=f||(f=l(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=l(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=c(n,e);return s(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var i=t[a],l=o[i.id];l&&(l.refs--,r.push(l))}n&&s(c(n,e),e);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n    vertical-align: baseline;\r\n    box-sizing: border-box;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style-position: outside;\r\n\tlist-style-type: dot;\r\n}\r\nli {\r\n\tdisplay: inline-block;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""])},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'body {\r\n    font-family: \'Solway\', serif;\r\n}\r\n\r\n.logo-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n    margin-top: 10px;\r\n}\r\n.logo-img {\r\n    width: 50px;\r\n}\r\nh1 {\r\n    font-weight: 700;\r\n    font-size: 2rem;\r\n}\r\n.tag-line {\r\n    text-align: right;\r\n}\r\n.tab-bar {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin: 0 50px;\r\n    margin-bottom: 24px;\r\n}\r\n.tab-bar [class*="-tab"] {\r\n    border-bottom: 1px solid #efedef;\r\n    padding: 20px 0;\r\n    /* background: green; */\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    transition: border-color 0.5s;\r\n    /* box-sizing: content-box; */\r\n}\r\n\r\n.tab-bar [class*="-tab"]:hover {\r\n    border-bottom: 1px solid #ff0015;\r\n}\r\n\r\n.tab-bar [class*="-tab"].active {\r\n    color: #ff0015;\r\n    border-bottom: 2px solid #ff0015;\r\n    position: relative;\r\n}\r\n\r\n.tab-bar [class*="-tab"].active:after {\r\n    /* border-bottom: 2px solid #ff0015; */\r\n    content: "";\r\n    display: block;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 6px 10px 0 10px;\r\n    border-style: solid;\r\n    border-color: #ff0015 transparent;\r\n    left: 50%;\r\n    bottom: 0;\r\n    transform: translate(-50%, 100%);\r\n}\r\n\r\n/* ============\r\n    Generic main\r\n   ============ */\r\n\r\nmain {\r\n    width: 66%;\r\n    margin: 0 auto;\r\n}\r\nmain li {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* ============\r\n    Home\r\n   ============ */\r\n.home-img {\r\n    float: left;\r\n    width: 40%;\r\n    height: 300px;\r\n    object-fit: cover;\r\n}\r\n.splash {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 24px;\r\n}\r\n.lunch-menu {\r\n    padding: 24px;\r\n}\r\n\r\n/* ============\r\n    Contact\r\n   ============ */\r\n\r\n.contact-item {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n/* ============\r\n    Menu\r\n   ============ */\r\n\r\nh2 {\r\n    font-size: 1.4rem;\r\n    margin-bottom: 12px;\r\n}\r\n.menu ul {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n/* ============\r\n    Footer\r\n   ============ */\r\nfooter {\r\n    font-size: 0.8rem;\r\n    text-align: center;\r\n}\r\n\r\n/* ============\r\n    Button\r\n   ============ */\r\nbutton {\r\n    font-family: \'Solway\', serif;\r\n    color: white;\r\n    background: #ff0015;\r\n    border: none;\r\n    padding: 10px 14px;\r\n    border-radius: 2px;\r\n}',""])},function(n,e,t){"use strict";t.r(e);t(2),t(4);var r=t.p+"images/35bbac1f081121e7e0bc227dc5075aa0.svg",o=t.p+"images/2adf184d859d09720729812367d23efe.jpg";var a=function(){const n=document.createElement("div"),e=document.createElement("div");e.classList.add("splash");const t=document.createElement("img");t.setAttribute("src",o),t.classList.add("home-img"),e.append(t);const r=document.createElement("div");r.classList.add("lunch-menu");const a=document.createElement("h2");a.classList.add("lunch-menu-promotion"),a.innerText="Check out our new lunch specials!",r.append(a);const i=document.createElement("button");i.innerText="Order now",r.append(i),e.append(r);const c=document.createElement("main");c.classList.add("home");const s=document.createElement("footer");return s.innerText="© Copyright 2019 by Joy Food Kitchen",s.classList.add("hero"),c.append(s),n.append(e,c),n};var i=function(n){const e=document.createElement("li");e.classList.add("contact-item");const t=document.createElement("div");t.innerText=n.field;const r=document.createElement("div");return r.innerText=n.content,e.append(t),e.append(r),e};var c=function(){const n=document.createElement("main");return document.createElement("ul"),[{field:"Address:",content:"4000 Forbes Ave, Pittsburgh, PA 15213"},{field:"Phone:",content:"(555) 555-5555"},{field:"Email:",content:"joyfoodkitchen@email.com"}].forEach(e=>{n.append(i(e))}),n};var s=function(n){const e=document.createElement("li");e.classList.add("menu-item");const t=document.createElement("div");t.innerText=n.name;const r=document.createElement("div");return r.innerText=`$${n.price}`,e.append(t),e.append(r),e};var l=function(){const n=document.createElement("main");return n.classList.add("menu"),[{name:"Appetizers",items:[{name:"Egg Roll (1)",price:"1.25"},{name:"Crab Rangoon (6)",price:"4.50"},{name:"Fried Chicken Wings (6)",price:"4.95"}]},{name:"Soups",items:[{name:"Egg Drop Soup",price:"2.95"},{name:"Hot & Sour Soup",price:"2.95"},{name:"Wonton Soup",price:"2.95"}]}].forEach(e=>{const t=document.createElement("h2"),r=document.createElement("ul");t.innerText=e.name,e.items.forEach(n=>{r.append(s(n))}),n.append(t),n.append(r)}),n};var d=function(){const n=document.getElementById("content"),e=document.createElement("ul");e.classList.add("tab-bar");const t=document.createElement("li");t.classList.add("home-tab"),t.classList.add("active"),t.innerText="Home";const r=document.createElement("li");r.classList.add("menu-tab"),r.innerText="Menu";const o=document.createElement("li");o.classList.add("contact-tab"),o.innerText="Contact";const i=(e,t)=>{(()=>{const n=document.getElementsByClassName("active");n.length>0&&n[0].classList.remove("active")})(),console.log(e.target),e.target.classList.add("active"),(()=>n.lastChild.remove())(),n.append(t)};return t.addEventListener("click",n=>i(n,a())),r.addEventListener("click",n=>i(n,l())),o.addEventListener("click",n=>i(n,c())),e.append(t,r,o),e};const u=document.getElementById("content"),p=document.createElement("div");p.classList.add("logo-container");const m=document.createElement("img");m.src=r,m.classList.add("logo-img");const f=document.createElement("div"),b=document.createElement("h1");b.innerText="Joy Food Kitchen";const h=document.createElement("h3");h.innerText="Eat happy.",h.classList.add("tag-line"),f.append(b,h),p.append(m,f),document.body.prepend(d()),document.body.prepend(p),u.append(a())}]);