var profile;(()=>{"use strict";var e,t,r,n={7038:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=function(){},t.mount=function({container:e,base:t}){const r=(0,f.createBrowserRouter)(c.default,{basename:t});s=(0,a.createRoot)(e),s.render(l.createElement(l.StrictMode,null,l.createElement((()=>l.createElement(f.RouterProvider,{router:r})),null)))},t.unmount=function(){null==s||s.unmount()};const l=u(r(2155)),a=r(8997),c=i(r(9980)),f=r(6679);let s=null},3140:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=u(r(2155));t.default=({children:e})=>(i.useEffect((()=>()=>{const e=new CustomEvent("beforeRouteLeave");window.dispatchEvent(e)}),[]),i.createElement(i.Fragment,null,e))},9980:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=u(r(2155)),a=i(r(6102)),c=i(r(3140)),f=i(r(6309)),s=[{path:"/",element:l.createElement(c.default,null,l.createElement(a.default,null))},{path:"/about",element:l.createElement(f.default,null)}];t.default=s},2041:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.users=void 0;const n=r(8422);var o;t.users=(o=(0,n.useService)({baseURL:"//localhost:10086/api/users"}),{get:()=>o.get("/",{signal:(0,n.useSignal)()}).then((e=>e.data))})},8422:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useSignal=t.useService=void 0;const o=n(r(3217));t.useService=(e={})=>o.default.create(Object.assign({timeout:1e4},e)),t.useSignal=(()=>{let e=[];return window.addEventListener("beforeRouteLeave",(()=>{e.forEach((e=>{e()})),e=[]}),!1),()=>{const t=new AbortController;return e.push((()=>{t.abort()})),t.signal}})()},6309:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=u(r(2155));t.default=()=>i.createElement("section",null,"Hello world!")},6102:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=u(r(2155)),l=r(5922),a=r(2493),c=r(2041),f=r(6679);t.default=()=>{const e=(0,f.useNavigate)(),t=()=>{e("/about")},[r,n]=i.useState(""),[o,u]=i.useState([]),s=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"操作",render:()=>i.createElement(l.Button,{onClick:t,type:"link"},"详情")}];return i.useEffect((()=>{c.users.get().then((e=>{u(e)}))}),[]),i.createElement("section",null,i.createElement(l.Form,null,i.createElement(l.Form.Item,{label:"名称"},i.createElement(l.Input,{value:r,onChange:e=>n(e.target.value)})),i.createElement(l.Form.Item,null,i.createElement(l.Space,null,i.createElement(l.Button,{type:"primary",icon:i.createElement(a.SearchOutlined,null)},"查询"),i.createElement(l.Button,{onClick:t},"跳转")))),i.createElement(l.Table,{dataSource:o,columns:s}))}}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,u),r.exports}u.m=n,e=[],u.O=(t,r,n,o)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],l=!0,a=0;a<r.length;a++)(!1&o||i>=o)&&Object.keys(u.O).every((e=>u.O[e](r[a])))?r.splice(a--,1):(l=!1,o<i&&(i=o));if(l){e.splice(f--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,u.d(o,i),o},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};u.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,a]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)u.o(l,n)&&(u.m[n]=l[n]);if(a)var f=a(u)}for(t&&t(r);c<i.length;c++)o=i[c],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(f)},r=self.webpackChunkprofile=self.webpackChunkprofile||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=u.O(void 0,[121],(()=>u(7038)));i=u.O(i),profile=i})();