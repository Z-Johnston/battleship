(()=>{"use strict";var t={426:(t,e,a)=>{a.d(e,{Z:()=>s});var r=a(81),n=a.n(r),o=a(645),i=a.n(o)()(n());i.push([t.id,'* {\n    background-color: blue;\n    padding: 0rem;\n    justify-content: center;\n}\n\n.board {\n    display: grid;\n    grid-template: repeat(10, 2rem) / 20rem;\n    align-content: start;\n    margin: 3rem;\n}\n\n.dom-row {\n    display: grid;\n    grid-template: 2rem / repeat(10, 2rem);\n    align-content: start;\n}\n\n[data-stat="water"] {\n    background-color: rgb(255, 255, 255);\n    border: solid .05rem black;\n}\n\n[data-stat="ship"] {\n    background-color: black;\n}\n\n[data-stat="hit-ship"] {\n    background-color: rgb(201, 21, 21);\n    border: solid .05rem black;\n}\n\n[data-stat="hit-water"] {\n    background-color: rgb(121, 116, 116);\n    border: solid .05rem black;\n}',""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a="",r=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),r&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=t(e),r&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(t,a,r,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function a(t){for(var a=-1,r=0;r<e.length;r++)if(e[r].identifier===t){a=r;break}return a}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=a(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=n(h,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function n(t,e){var a=e.domAPI(e);return a.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;a.update(t=e)}else a.remove()}}t.exports=function(t,n){var o=r(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=a(o[i]);e[s].references--}for(var c=r(t,n),d=0;d<o.length;d++){var l=a(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,a){var r=function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,a)=>{t.exports=function(t){var e=a.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(a){!function(t,e,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,n&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,a)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,a),o.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.nc=void 0,(()=>{const t=()=>{const t=(()=>{const t=[];for(let e=0;e<10;e++){const e=[];for(let t=0;t<10;t++)e.push({hasShip:!1,isHit:!1});t.push(e)}return t})(),e=[];return{board:t,isPlacementValid:e=>{const a=e.location[e.getLength()-1];return!(Math.max(...a)>9||Math.min(...a)<0||e.location.some((e=>t[e[0]][e[1]].hasShip)))},placeShip:a=>{for(let e=0;e<a.getLength();e++){const r=a.location[e];t[r[0]][r[1]].hasShip=!0}e.push(a)},recieveAttack:a=>{t[a[0]][a[1]].hasShip&&e.forEach(((t,r)=>{t.location.findIndex((t=>t.includes(a)))&&e[r].hit(a)})),t[a[0]][a[1]].isHit=!0},gameOver:()=>e.forEach((t=>t.isSunk())),fleet:e}},e=e=>({isHuman:"human"===e,takeShot:t=>t,gameboard:t()}),r=(t,e,a,r)=>{const n=()=>r,o=[];(()=>{if("vertical"===a)for(let a=0;a<r;a++)o.push([t-a,e]);else{if("horizontal"!==a)return"select correct ship orientation";for(let a=0;a<r;a++)o.push([t,e+a])}})();const i=[];return{getLength:n,location:o,hit:t=>{i.push(t)},isSunk:()=>i.length===n(),hits:i}};var n=a(379),o=a.n(n),i=a(795),s=a.n(i),c=a(569),d=a.n(c),l=a(565),u=a.n(l),p=a(216),h=a.n(p),m=a(589),f=a.n(m),v=a(426),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=h(),o()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,(()=>{const t=(()=>{const t=document.querySelector(".computer-board"),e=document.querySelector(".human-board");let a;return{renderBoard:r=>{r.gameboard.board.forEach(((n,o)=>{const i=document.createElement("div");i.classList.add("dom-row"),n.forEach(((t,e)=>{const r=document.createElement("div");r.classList.add("loc"),t.hasShip&&t.isHit?r.dataset.stat="hit-ship":t.hasShip?r.dataset.stat="ship":t.isHit?r.dataset.stat="hit-water":r.dataset.stat="water",r.dataset.row=o,r.dataset.col=e,r.onclick=()=>a=r,i.appendChild(r)})),r.isHuman?e.appendChild(i):t.appendChild(i)}))},updateBoard:a=>{a.gameboard.board.forEach(((r,n)=>{r.forEach(((r,o)=>{const i=(a.isHuman?e:t).querySelector(`[data-row="${n}"][data-col="${o}"]`);r.hasShip&&r.isHit?i.dataset.stat="hit-ship":r.hasShip?i.dataset.stat="ship":r.isHit?i.dataset.stat="hit-water":i.dataset.stat="water"}))}))},getSpotInfo:t=>t.dataset,pickedSpot:a}})(),a=e("human"),n=e("computer");for(let t=2;t<=6;t++){const e=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),o=Math.random()>=.5?"vertical":"horizontal",i=r(e,a,o,t);n.gameboard.isPlacementValid(i)?n.gameboard.placeShip(i):t--}t.renderBoard(a);for(let e=2;e<=6;e++){const n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),i=Math.random()>=.5?"vertical":"horizontal",s=r(n,o,i,e);a.gameboard.isPlacementValid(s)?(a.gameboard.placeShip(s),t.updateBoard(a)):e--}t.renderBoard(n);let o=a;for(;!o.gameboard.gameOver();){let e=o.isHuman?n:a,r=[Math.floor(10*Math.random()),Math.floor(10*Math.random())];o.takeShot(r),e.gameboard.recieveAttack(r),setTimeout((()=>{t.updateBoard(e)}),250),o=o.isHuman?n:a}})()})()})();