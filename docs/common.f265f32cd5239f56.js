"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(C,_,l)=>{l.d(_,{c:()=>c});var a=l(2361),m=l(7683),u=l(3139);const c=(i,n)=>{let t,e;const o=(d,v,f)=>{if("undefined"==typeof document)return;const h=document.elementFromPoint(d,v);h&&n(h)?h!==t&&(g(),s(h,f)):g()},s=(d,v)=>{t=d,e||(e=t);const f=t;(0,a.c)(()=>f.classList.add("ion-activated")),v()},g=(d=!1)=>{if(!t)return;const v=t;(0,a.c)(()=>v.classList.remove("ion-activated")),d&&e!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>o(d.currentX,d.currentY,m.a),onMove:d=>o(d.currentX,d.currentY,m.b),onEnd:()=>{g(!0),(0,m.h)(),e=void 0}})}},8685:(C,_,l)=>{l.d(_,{g:()=>a});const a=(n,t,e,o,s)=>u(n[1],t[1],e[1],o[1],s).map(g=>m(n[0],t[0],e[0],o[0],g)),m=(n,t,e,o,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+o*s))-n*Math.pow(s-1,3),u=(n,t,e,o,s)=>i((o-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(d=>d>=0&&d<=1),i=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const s=(3*(e/=n)-(t/=n)*t)/3,g=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===s)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-s),-Math.sqrt(-s)];const d=Math.pow(g/2,2)+Math.pow(s/3,3);if(0===d)return[Math.pow(g/2,.5)-t/3];if(d>0)return[Math.pow(-g/2+Math.sqrt(d),1/3)-Math.pow(g/2+Math.sqrt(d),1/3)-t/3];const v=Math.sqrt(Math.pow(-s/3,3)),f=Math.acos(-g/(2*Math.sqrt(Math.pow(-s/3,3)))),h=2*Math.pow(v,1/3);return[h*Math.cos(f/3)-t/3,h*Math.cos((f+2*Math.PI)/3)-t/3,h*Math.cos((f+4*Math.PI)/3)-t/3]}},5062:(C,_,l)=>{l.d(_,{i:()=>a});const a=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(C,_,l)=>{l.r(_),l.d(_,{startFocusVisible:()=>c});const a="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,o=i||document.body,s=p=>{n.forEach(w=>w.classList.remove(a)),p.forEach(w=>w.classList.add(a)),n=p},g=()=>{t=!1,s([])},d=p=>{t=u.includes(p.key),t||s([])},v=p=>{if(t&&p.composedPath){const w=p.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));s(w)}},f=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",d),e.addEventListener("focusin",v),e.addEventListener("focusout",f),e.addEventListener("touchstart",g),e.addEventListener("mousedown",g),{destroy:()=>{e.removeEventListener("keydown",d),e.removeEventListener("focusin",v),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g)},setFocus:s}}},4118:(C,_,l)=>{l.d(_,{C:()=>i,a:()=>u,d:()=>c});var a=l(5861),m=l(1643);const u=function(){var n=(0,a.Z)(function*(t,e,o,s,g,d){var v;if(t)return t.attachViewToDom(e,o,g,s);if(!(d||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof o?null===(v=e.ownerDocument)||void 0===v?void 0:v.createElement(o):o;return s&&s.forEach(h=>f.classList.add(h)),g&&Object.assign(f,g),e.appendChild(f),yield new Promise(h=>(0,m.c)(f,h)),f});return function(e,o,s,g,d,v){return n.apply(this,arguments)}}(),c=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},i=()=>{let n,t;return{attachViewToDom:function(){var s=(0,a.Z)(function*(g,d,v={},f=[]){var h,p;if(n=g,d){const E="string"==typeof d?null===(h=n.ownerDocument)||void 0===h?void 0:h.createElement(d):d;f.forEach(r=>E.classList.add(r)),Object.assign(E,v),n.appendChild(E),yield new Promise(r=>(0,m.c)(E,r))}else if(n.children.length>0){const E=null===(p=n.ownerDocument)||void 0===p?void 0:p.createElement("div");f.forEach(r=>E.classList.add(r)),E.append(...n.children),n.appendChild(E)}const w=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),w.appendChild(n),n});return function(d,v){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(C,_,l)=>{l.d(_,{a:()=>u,b:()=>c,c:()=>m,d:()=>n,h:()=>i});const a={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>{a.selection()},u=()=>{a.selectionStart()},c=()=>{a.selectionChanged()},i=()=>{a.selectionEnd()},n=t=>{a.impact(t)}},1473:(C,_,l)=>{l.d(_,{a:()=>s,b:()=>v,f:()=>g,g:()=>o,p:()=>f,s:()=>d});var a=l(5861),m=l(1643),u=l(7208);const i="ion-content",n=".ion-content-scroll-host",t=`${i}, ${n}`,e=h=>h&&"ION-CONTENT"===h.tagName,o=function(){var h=(0,a.Z)(function*(p){return e(p)?(yield new Promise(w=>(0,m.c)(p,w)),p.getScrollElement()):p});return function(w){return h.apply(this,arguments)}}(),s=h=>h.querySelector(n)||h.querySelector(t),g=h=>h.closest(t),d=(h,p)=>e(h)?h.scrollToTop(p):Promise.resolve(h.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),v=(h,p,w,E)=>e(h)?h.scrollByPoint(p,w,E):Promise.resolve(h.scrollBy({top:w,left:p,behavior:E>0?"smooth":"auto"})),f=h=>(0,u.a)(h,i)},7208:(C,_,l)=>{l.d(_,{a:()=>u,b:()=>m,p:()=>a});const a=c=>console.warn(`[Ionic Warning]: ${c}`),m=(c,...i)=>console.error(`[Ionic Error]: ${c}`,...i),u=(c,...i)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${i.join(" or ")}.`)},8439:(C,_,l)=>{l.d(_,{s:()=>a});const a=e=>{try{if(e instanceof class t{constructor(o){this.value=o}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=e,n.forEach(f=>{const h=o.querySelectorAll(f);for(let p=h.length-1;p>=0;p--){const w=h[p];w.parentNode?w.parentNode.removeChild(w):o.removeChild(w);const E=u(w);for(let r=0;r<E.length;r++)m(E[r])}});const g=u(o);for(let f=0;f<g.length;f++)m(g[f]);const d=document.createElement("div");d.appendChild(o);const v=d.querySelector("div");return null!==v?v.innerHTML:d.innerHTML}catch(o){return console.error(o),""}},m=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const g=e.attributes.item(s),d=g.name;if(!i.includes(d.toLowerCase())){e.removeAttribute(d);continue}const v=g.value;null!=v&&v.toLowerCase().includes("javascript:")&&e.removeAttribute(d)}const o=u(e);for(let s=0;s<o.length;s++)m(o[s])},u=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const o=window,s=null===(e=null==o?void 0:o.Ionic)||void 0===e?void 0:e.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},i=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},6401:(C,_,l)=>{l.d(_,{a:()=>a,b:()=>g,c:()=>n,d:()=>d,e:()=>r,f:()=>u,g:()=>m,h:()=>w,i:()=>t,j:()=>o,k:()=>v,l:()=>e,m:()=>i,n:()=>c,o:()=>s,p:()=>f,q:()=>h,r:()=>p,s:()=>E});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(C,_,l)=>{l.r(_),l.d(_,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>E,keyboardDidClose:()=>f,keyboardDidOpen:()=>d,keyboardDidResize:()=>v,resetKeyboardAssist:()=>t,setKeyboardClose:()=>g,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>w});const a="ionKeyboardDidShow",m="ionKeyboardDidHide";let c={},i={},n=!1;const t=()=>{c={},i={},n=!1},e=r=>{o(r),r.visualViewport&&(i=E(r.visualViewport),r.visualViewport.onresize=()=>{w(r),d()||v(r)?s(r):f(r)&&g(r)})},o=r=>{r.addEventListener("keyboardDidShow",y=>s(r,y)),r.addEventListener("keyboardDidHide",()=>g(r))},s=(r,y)=>{h(r,y),n=!0},g=r=>{p(r),n=!1},d=()=>!n&&c.width===i.width&&(c.height-i.height)*i.scale>150,v=r=>n&&!f(r),f=r=>n&&i.height===r.innerHeight,h=(r,y)=>{const D=new CustomEvent(a,{detail:{keyboardHeight:y?y.keyboardHeight:r.innerHeight-i.height}});r.dispatchEvent(D)},p=r=>{const y=new CustomEvent(m);r.dispatchEvent(y)},w=r=>{c=Object.assign({},i),i=E(r.visualViewport)},E=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},7741:(C,_,l)=>{l.d(_,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(u,c,i)=>{const n=u*c/i-u+"ms",t=2*Math.PI*c/i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,c,i)=>{const n=c/i,t=u*n-u+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":u*c/i-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":u*c/i-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/i-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/i-u+"ms"}})}}},5713:(C,_,l)=>{l.r(_),l.d(_,{createSwipeBackGesture:()=>i});var a=l(1643),m=l(5062),u=l(3139);l(3509);const i=(n,t,e,o,s)=>{const g=n.ownerDocument.defaultView,d=(0,m.i)(n),f=r=>d?-r.deltaX:r.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:M}=r;return d?M>=g.innerWidth-50:M<=50})(r)&&t(),onStart:e,onMove:r=>{const M=f(r)/g.innerWidth;o(M)},onEnd:r=>{const y=f(r),M=g.innerWidth,D=y/M,O=(r=>d?-r.velocityX:r.velocityX)(r),x=O>=0&&(O>.2||y>M/2),L=(x?1-D:D)*M;let T=0;if(L>5){const k=L/Math.abs(O);T=Math.min(k,540)}s(x,D<=0?.01:(0,a.k)(0,D,.9999),T)}})}},2854:(C,_,l)=>{l.d(_,{c:()=>u,g:()=>i,h:()=>m,o:()=>t});var a=l(5861);const m=(e,o)=>null!==o.closest(e),u=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,i=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>o[s]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,a.Z)(function*(o,s,g,d){if(null!=o&&"#"!==o[0]&&!n.test(o)){const v=document.querySelector("ion-router");if(v)return null!=s&&s.preventDefault(),v.push(o,g,d)}return!1});return function(s,g,d,v){return e.apply(this,arguments)}}()},3646:(C,_,l)=>{l.d(_,{G:()=>n});var a=l(5e3),m=l(7041),u=l(3950),c=l(9808);function i(t,e){if(1&t){const o=a.EpF();a.TgZ(0,"div",4)(1,"ion-icon",5),a.NdJ("click",function(){return a.CHM(o),a.oxw().goToBack()}),a.qZA()()}}let n=(()=>{class t{constructor(o,s){this.router=o,this.navCtrl=s,this.isSedePage="/sedes"==this.router.url}ngOnInit(){}goToBack(){this.router.navigate(["sedes"])}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(m.F0),a.Y36(u.SH))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-header"]],decls:5,vars:1,consts:[["color","primary"],["class","icon",4,"ngIf"],[2,"width","100%","text-align","center"],["src","assets/img/FERREACERO-5-LOGO-1.png"],[1,"icon"],["name","chevron-back-outline",1,"back",3,"click"]],template:function(o,s){1&o&&(a.TgZ(0,"ion-header")(1,"ion-toolbar",0),a.YNc(2,i,2,0,"div",1),a.TgZ(3,"ion-title",2),a._UZ(4,"img",3),a.qZA()()()),2&o&&(a.xp6(2),a.Q6J("ngIf",!s.isSedePage))},directives:[u.Gu,u.sr,c.O5,u.gu,u.wd],styles:[".icon[_ngcontent-%COMP%]{color:#fff}.icon[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-secondary);border-radius:100%;opacity:1;z-index:9999;left:14px;top:20px;position:absolute;font-size:22px;padding:3px}"]}),t})()},7466:(C,_,l)=>{l.d(_,{Q$:()=>u,bd:()=>c,Bx:()=>i});var a=l(6727);const m=n=>n.categorias,u=(0,a.P1)(m,n=>n.items),c=(0,a.P1)(m,n=>n.loading),i=(0,a.P1)(m,n=>({categoriaId:n.categoriaId,categoriaSlug:n.categoriaSlug,categoriaBanner:n.categoriaBanner,cabeceras:n.cabeceras}))},7917:(C,_,l)=>{l.d(_,{z0:()=>u,pH:()=>c,eJ:()=>i});var a=l(6727);const m=n=>n.sedes,u=(0,a.P1)(m,n=>n.items),c=(0,a.P1)(m,n=>n.loading),i=(0,a.P1)(m,n=>n.sedeId)}}]);