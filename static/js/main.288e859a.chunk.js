(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(14),a(2)),i=a(5),s=a(1),u=Object(n.createContext)({}),d={settings:[{name:"Easy",field:5,delay:2e3,id:0},{name:"Normal",field:10,delay:1e3,id:1},{name:"Hard",field:15,delay:900,id:2}],setting:{name:"",field:0,delay:0,id:0},userName:"",board:[],start:!1,end:!1,score:{pc:0,player:0},winner:{time:"",name:""},history:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME/SET_SETTING":return Object(s.a)(Object(s.a)({},e),{},{setting:t.payload});case"GAME/SET_USER_NAME":return Object(s.a)(Object(s.a)({},e),{},{userName:t.payload});case"GAME/SET_GAME_BOARD":return Object(s.a)(Object(s.a)({},e),{},{board:Object(i.a)(new Array(t.payload).fill(0).map((function(){return new Array(t.payload).fill(0)})))});case"GAME/SET_GAME_START":return Object(s.a)(Object(s.a)({},e),{},{start:t.payload});case"GAME/SET_GAME_END":return Object(s.a)(Object(s.a)({},e),{},{end:t.payload});case"GAME/SET_SCORE_PC":return Object(s.a)(Object(s.a)({},e),{},{score:Object(s.a)(Object(s.a)({},e.score),{},{pc:e.score.pc+1})});case"GAME/SET_SCORE_PLAYER":return Object(s.a)(Object(s.a)({},e),{},{score:Object(s.a)(Object(s.a)({},e.score),{},{player:e.score.player+1})});case"GAME/SET_WINNER":return Object(s.a)(Object(s.a)({},e),{},{winner:t.payload});case"GAME/ADD_TO_HISTORY":return Object(s.a)(Object(s.a)({},e),{},{history:[].concat(Object(i.a)(e.history),[t.payload])});case"GAME/CLEAR_SCORE":return Object(s.a)(Object(s.a)({},e),{},{score:{player:0,pc:0}});case"GAME/SET_COL":return Object(s.a)(Object(s.a)({},e),{},{board:e.board.map((function(e,a){return a===t.payload.y?e.map((function(e,a){return a===t.payload.x?t.payload.value:e})):e}))});default:return e}},f=function(e){return{type:"GAME/SET_GAME_BOARD",payload:e}},m=function(e){return{type:"GAME/SET_GAME_START",payload:e}},p=function(e){return{type:"GAME/SET_GAME_END",payload:e}},y=function(e){return{type:"GAME/SET_COL",payload:{x:e.x,y:e.y,value:e.value}}},b=a(8),v=a.n(b),h=function(){return r.a.createElement("h1",{className:"flex align-items-center justify-content-center logo-header h1"},r.a.createElement("img",{src:v.a,className:"logo",alt:"logo"}),"Pick a square (Game)")},O=function(){var e=Object(n.useContext)(u),t=e.state,a=t.settings,c=t.start,o=e.dispatch;return r.a.createElement("select",{className:"select",disabled:c,onChange:function(e){var t=e.currentTarget.value,n=a[Number(t)];o(function(e){return{type:"GAME/SET_SETTING",payload:e}}(n)),o(f(n.field))},defaultValue:"-"},r.a.createElement("option",{disabled:!0,value:"-"},"Select game mode"),a.map((function(e){var t=e.name,a=e.id;return r.a.createElement("option",{value:a,key:a},t)})))},g=function(){var e=Object(n.useContext)(u),t=e.state,a=t.userName,c=t.start,o=e.dispatch;return r.a.createElement("input",{type:"text",placeholder:"Enter User name",name:"user-name",className:"input",value:a,onChange:function(e){var t=e.currentTarget.value;o({type:"GAME/SET_USER_NAME",payload:t})},disabled:c})},j=function(){var e=Object(n.useContext)(u),t=e.state,a=t.userName,c=t.setting,o=t.end,i=t.start,s=e.dispatch,d=Object(n.useState)("Play"),E=Object(l.a)(d,2),y=E[0],b=E[1],v=Object(n.useState)(!0),h=Object(l.a)(v,2),O=h[0],g=h[1];Object(n.useEffect)((function(){a.length>1&&Object.keys(c).length>0?g(!1):g(!0),b(o?"Play again":"Play"),i&&g(!0)}),[a,c,i,o]);return r.a.createElement("button",{disabled:O,onClick:function(){s(m(!0)),s(p(!1)),c.field&&s(f(c.field))},className:"button ".concat(O?"danger":"success"," ")},y)},A=function(){return r.a.createElement("div",{className:"game-setting"},r.a.createElement("h2",null,"- Game setting - "),r.a.createElement("div",{className:"flex justify-content-around"},r.a.createElement(O,null),r.a.createElement(g,null),r.a.createElement(j,null)))},_=function(){var e=Object(n.useContext)(u),t=e.state,a=t.board,c=t.setting,o=t.score,i=t.userName,s=e.dispatch,d=Object(n.useRef)([]),E=Object(n.useState)({}),f=Object(l.a)(E,2),b=f[0],v=f[1];Object(n.useEffect)((function(){var e=setInterval((function(){var e=function(e,t){for(var a=!0,n=[Math.floor(Math.random()*e),Math.floor(Math.random()*e)],r=n[0],c=n[1];a;)t[c][r]?(r=Math.floor(Math.random()*e),c=Math.floor(Math.random()*e)):a=!1;return[r,c]}(c.field,d.current),t=Object(l.a)(e,2),a=t[0],n=t[1];v({x:a,y:n}),s(y({x:a,y:n,value:1}))}),c.delay);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){a.forEach((function(e,t){return e.forEach((function(e,a){1===e&&(s(y({x:a,y:t,value:3})),s({type:"GAME/SET_SCORE_PC"}))}))}))}),[b]),Object(n.useEffect)((function(){var e=Math.floor(c.field*c.field/2),t=o.pc,n=o.player,r=new Date,l="".concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds());t>=e&&h({name:"Computer",time:l});n>=e&&h({name:i,time:l});d.current=a}),[a]);var h=function(e){s(p(!0)),s(m(!1)),s(function(e){return{type:"GAME/SET_WINNER",payload:e}}(e)),s(function(e){return{type:"GAME/ADD_TO_HISTORY",payload:e}}(e)),s({type:"GAME/CLEAR_SCORE"})};return r.a.createElement(r.a.Fragment,null)},S=function(e){var t=e.name;return r.a.createElement("div",{className:"winner"},"Winner is: ",t)},M=function(e){var t=e.value,a=e.x,n=e.y,c=r.a.useContext(u),o=c.state.start,l=c.dispatch,i=function(e){switch(e){case 1:return"blue";case 2:return"green";case 3:return"red";default:return""}}(t);return r.a.createElement("div",{className:"board__col ".concat(i),onClick:function(){1===t&&o&&(l({type:"GAME/SET_SCORE_PLAYER"}),l(y({x:a,y:n,value:2})))}})},N=function(e){var t=e.fields,a=e.y;return r.a.createElement("div",{className:"board__row"},t.map((function(e,t){return r.a.createElement(M,{x:t,y:a,value:e,key:t})})))},w=function(e){var t=e.board;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(N,{fields:e,y:t,key:t})})))},T=function(e){var t=e.history;return r.a.createElement("div",{className:"history"},r.a.createElement("h2",{className:"history__header"},"Leader Board"),t.map((function(e){var t=e.name,a=e.time;return r.a.createElement("div",{className:"history__item"},r.a.createElement("div",null,t),r.a.createElement("div",null,a))})))},G=function(){var e=Object(n.useContext)(u).state,t=e.board,a=e.history;return r.a.createElement("div",{className:"game-desk"},r.a.createElement(w,{board:t}),a.length>0&&r.a.createElement(T,{history:a}))},C=function(){var e=Object(n.useReducer)(E,d),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(u.Provider,{value:{state:a,dispatch:c}},r.a.createElement(A,null),a.end&&r.a.createElement(S,{name:a.winner.name}),a.start&&r.a.createElement(_,null),a.board.length>0&&r.a.createElement(G,null)))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Pick-a-square",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Pick-a-square","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.288e859a.chunk.js.map