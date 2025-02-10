!function(){const e=(e,t)=>e===t,t=Symbol("solid-track"),n={equals:e};let r=$;const l=1,o=2,s={owned:null,cleanups:null,context:null,owner:null};var i=null;let u=null,a=null,c=null,f=null,d=0;function h(e,t){const n=a,r=i,l=0===e.length,o=void 0===t?r:t,u=l?s:{owned:null,cleanups:null,context:o?o.context:null,owner:o},c=l?e:()=>e((()=>g((()=>T(u)))));i=u,a=null;try{return C(c,!0)}finally{a=n,i=r}}function p(e,t){const r={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},n,t):n).equals||void 0};return[y.bind(r),e=>("function"==typeof e&&(e=e(r.value)),w(r,e))]}function b(e,t,n){m(A(e,t,!1,l))}function g(e){if(null===a)return e();const t=a;a=null;try{return e()}finally{a=t}}function v(e){return null===i||(null===i.cleanups?i.cleanups=[e]:i.cleanups.push(e)),e}function y(){if(this.sources&&this.state)if(this.state===l)m(this);else{const e=c;c=null,C((()=>x(this)),!1),c=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function w(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&C((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=u&&u.running;r&&u.disposed.has(n),(r?n.tState:n.state)||(n.pure?c.push(n):f.push(n),n.observers&&k(n)),r||(n.state=l)}if(c.length>1e6)throw c=[],new Error}),!1)),t}function m(e){if(!e.fn)return;T(e);const t=d;!function(e,t,n){let r;const o=i,s=a;a=i=e;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=l,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=n+1,E(t)}finally{a=s,i=o}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?w(e,r):e.value=r,e.updatedAt=n)}(e,e.value,t)}function A(e,t,n,r=l,o){const u={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:i,context:i?i.context:null,pure:n};return null===i||i!==s&&(i.owned?i.owned.push(u):i.owned=[u]),u}function S(e){if(0===e.state)return;if(e.state===o)return x(e);if(e.suspense&&g(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<d);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if((e=t[n]).state===l)m(e);else if(e.state===o){const n=c;c=null,C((()=>x(e,t[0])),!1),c=n}}function C(e,t){if(c)return e();let n=!1;t||(c=[]),f?n=!0:f=[],d++;try{const t=e();return function(e){if(c&&($(c),c=null),e)return;const t=f;f=null,t.length&&C((()=>r(t)),!1)}(n),t}catch(e){n||(f=null),c=null,E(e)}}function $(e){for(let t=0;t<e.length;t++)S(e[t])}function x(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const e=r.state;e===l?r!==t&&(!r.updatedAt||r.updatedAt<d)&&S(r):e===o&&x(r,t)}}}function k(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=o,n.pure?c.push(n):f.push(n),n.observers&&k(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),l=t.observerSlots.pop();n<r.length&&(e.sourceSlots[l]=n,r[n]=e,t.observerSlots[n]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)T(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function E(e,t=i){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}const N=Symbol("fallback");function B(e){for(let t=0;t<e.length;t++)e[t]()}function O(e,t){return g((()=>e(t||{})))}function M(e){const r="fallback"in e&&{fallback:()=>e.fallback};return function(e,t,r){r=r?Object.assign({},n,r):n;const l=A(e,void 0,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=r.equals||void 0,m(l),y.bind(l)}(function(e,n,r={}){let l=[],o=[],s=[],i=0,u=n.length>1?[]:null;return v((()=>B(s))),()=>{let a,c,f=e()||[],d=f.length;return f[t],g((()=>{let e,t,n,p,g,v,y,w,m;if(0===d)0!==i&&(B(s),s=[],l=[],o=[],i=0,u&&(u=[])),r.fallback&&(l=[N],o[0]=h((e=>(s[0]=e,r.fallback()))),i=1);else if(0===i){for(o=new Array(d),c=0;c<d;c++)l[c]=f[c],o[c]=h(b);i=d}else{for(n=new Array(d),p=new Array(d),u&&(g=new Array(d)),v=0,y=Math.min(i,d);v<y&&l[v]===f[v];v++);for(y=i-1,w=d-1;y>=v&&w>=v&&l[y]===f[w];y--,w--)n[w]=o[y],p[w]=s[y],u&&(g[w]=u[y]);for(e=new Map,t=new Array(w+1),c=w;c>=v;c--)m=f[c],a=e.get(m),t[c]=void 0===a?-1:a,e.set(m,c);for(a=v;a<=y;a++)m=l[a],c=e.get(m),void 0!==c&&-1!==c?(n[c]=o[a],p[c]=s[a],u&&(g[c]=u[a]),c=t[c],e.set(m,c)):s[a]();for(c=v;c<d;c++)c in n?(o[c]=n[c],s[c]=p[c],u&&(u[c]=g[c],u[c](c))):o[c]=h(b);o=o.slice(0,i=d),l=f.slice(0)}return o}));function b(e){if(s[c]=e,u){const[e,t]=p(c);return u[c]=t,n(f[c],e)}return n(f[c])}}}((()=>e.each),e.children,r||void 0))}const j="_$DX_DELEGATE";function _(e,t,n){let r;const l=()=>(r||(r=(()=>{const t=document.createElement("template");return t.innerHTML=e,t.content.firstChild})())).cloneNode(!0);return l.cloneNode=l,l}function q(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return z(e,t,r,n);b((r=>z(e,t(),r,n)),r)}function L(e){let t=e.target;const n=`$$${e.type}`,r=e.target,l=e.currentTarget,o=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),s=()=>{const r=t[n];if(r&&!t.disabled){const l=t[`${n}Data`];if(void 0!==l?r.call(t,l,e):r.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),e.composedPath){const n=e.composedPath();o(n[0]);for(let e=0;e<n.length-2&&(t=n[e],s());e++){if(t._$host){t=t._$host,i();break}if(t.parentNode===l)break}}else i();o(r)}function z(e,t,n,r,l){for(;"function"==typeof n;)n=n();if(t===n)return n;const o=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===o||"number"===o){if("number"===o&&(t=t.toString())===n)return n;if(s){let l=n[0];l&&3===l.nodeType?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=I(e,n,r,l)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===o)n=I(e,n,r);else{if("function"===o)return b((()=>{let l=t();for(;"function"==typeof l;)l=l();n=z(e,l,n,r)})),()=>n;if(Array.isArray(t)){const o=[],i=n&&Array.isArray(n);if(D(o,t,n,l))return b((()=>n=z(e,o,n,r,!0))),()=>n;if(0===o.length){if(n=I(e,n,r),s)return n}else i?0===n.length?P(e,o,r):function(e,t,n){let r=n.length,l=t.length,o=r,s=0,i=0,u=t[l-1].nextSibling,a=null;for(;s<l||i<o;)if(t[s]!==n[i]){for(;t[l-1]===n[o-1];)l--,o--;if(l===s){const t=o<r?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],t)}else if(o===i)for(;s<l;)a&&a.has(t[s])||t[s].remove(),s++;else if(t[s]===n[o-1]&&n[i]===t[l-1]){const r=t[--l].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--o],r),t[l]=n[o]}else{if(!a){a=new Map;let e=i;for(;e<o;)a.set(n[e],e++)}const r=a.get(t[s]);if(null!=r)if(i<r&&r<o){let u,c=s,f=1;for(;++c<l&&c<o&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-i){const l=t[s];for(;i<r;)e.insertBefore(n[i++],l)}else e.replaceChild(n[i++],t[s++])}else s++;else t[s++].remove()}}else s++,i++}(e,n,o):(n&&I(e),P(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=I(e,n,r,t);I(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function D(e,t,n,r){let l=!1;for(let o=0,s=t.length;o<s;o++){let s,i=t[o],u=n&&n[e.length];if(null==i||!0===i||!1===i);else if("object"==(s=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))l=D(e,i,u)||l;else if("function"===s)if(r){for(;"function"==typeof i;)i=i();l=D(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||l}else e.push(i),l=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return l}function P(e,t,n=null){for(let r=0,l=t.length;r<l;r++)e.insertBefore(t[r],n)}function I(e,t,n,r){if(void 0===n)return e.textContent="";const l=r||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(l!==s){const t=s.parentNode===e;r||o?t&&s.remove():t?e.replaceChild(l,s):e.insertBefore(l,n)}else r=!0}}else e.insertBefore(l,n);return[l]}var U=_('<div class="col-sm-6 smallpad"><button class="btn btn-primary btn-block"type=button>'),F=_('<div class=container><div class=jumbotron><div class=row><div class=col-md-6><h1>Solid</div><div class=col-md-6><div class=row></div></div></div></div><table class="table table-hover table-striped test-data"><tbody></table><span class="preloadicon glyphicon glyphicon-remove"aria-hidden=true>'),G=_('<tr><td class=col-md-1></td><td class=col-md-4><a> </a></td><td class=col-md-1><a><span class="glyphicon glyphicon-remove"aria-hidden=true></a></td><td class=col-md-6>');const H=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],R=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],X=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],J=e=>Math.round(1e3*Math.random())%e;let K=1;const Q=e=>{let t=new Array(e);for(let n=0;n<e;n++){const[e,r]=p(`${H[J(H.length)]} ${R[J(R.length)]} ${X[J(X.length)]}`);t[n]={id:K++,label:e,setLabel:r}}return t},V=([e,t,n])=>{return r=i=(s=U()).firstChild,l="click",o=n,Array.isArray(o)?(r[`$$${l}`]=o[0],r[`$$${l}Data`]=o[1]):r[`$$${l}`]=o,i.id=e,q(i,t),s;var r,l,o,s,i};!function(e,t,n,r={}){let l;h((r=>{l=r,t===document?e():q(t,e(),t.firstChild?null:void 0,n)}),r.owner)}((()=>{const[t,n]=p([]),[r,o]=p(null),s=function(t,n=e){const r=new Map,o=A((e=>{const o=t();for(const[t,s]of r.entries())if(n(t,o)!==n(t,e))for(const e of s.values())e.state=l,e.pure?c.push(e):f.push(e);return o}),void 0,!0,l);return m(o),e=>{const t=a;if(t){let n;(n=r.get(e))?n.add(t):r.set(e,n=new Set([t])),v((()=>{n.delete(t),!n.size&&r.delete(e)}))}return n(e,o.value)}}(r);return d=(u=(i=F()).firstChild).firstChild.firstChild.nextSibling.firstChild,h=u.nextSibling.firstChild,q(d,O(V,["run","Create 1,000 rows",()=>n(Q(1e3))]),null),q(d,O(V,["runlots","Create 10,000 rows",()=>n(Q(1e4))]),null),q(d,O(V,["add","Append 1,000 rows",()=>n((e=>[...e,...Q(1e3)]))]),null),q(d,O(V,["update","Update every 10th row",()=>C((()=>{for(let e=0,n=t(),r=n.length;e<r;e+=10)n[e].setLabel((e=>e+" !!!"))}),!1)]),null),q(d,O(V,["clear","Clear",()=>n([])]),null),q(d,O(V,["swaprows","Swap Rows",()=>{const e=t().slice();if(e.length>998){let t=e[1];e[1]=e[998],e[998]=t,n(e)}}]),null),q(h,O(M,{get each(){return t()},children:e=>{let t=e.id;return u=(i=(l=(r=G()).firstChild).nextSibling).firstChild,a=u.firstChild,c=i.nextSibling.firstChild,l.textContent=t,u.$$click=()=>o(t),c.$$click=()=>n((e=>e.toSpliced(e.findIndex((e=>e.id===t)),1))),b((n=>{var l,o,i=s(t)?"danger":"",u=e.label();return i!==n.e&&(l=r,null==(o=n.e=i)?l.removeAttribute("class"):l.className=o),u!==n.t&&(a.data=n.t=u),n}),{e:void 0,t:void 0}),r;var r,l,i,u,a,c}})),i;var i,u,d,h}),document.getElementById("main")),function(e,t=window.document){const n=t[j]||(t[j]=new Set);for(let r=0,l=e.length;r<l;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,L))}}(["click"])}();
