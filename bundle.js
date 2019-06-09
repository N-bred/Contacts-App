var app=function(){"use strict";function e(){}const n=e=>e;function t(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(t)}function a(e){return"function"==typeof e}function o(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}const i="undefined"!=typeof window;let u=i?()=>window.performance.now():()=>Date.now(),l=i?requestAnimationFrame:e;const c=new Set;let m,d=!1;function g(){c.forEach(e=>{e[0](u())||(c.delete(e),e[1]())}),(d=c.size>0)&&l(g)}function f(e,n){e.appendChild(n)}function p(e,n,t){e.insertBefore(n,t||null)}function h(e){e.parentNode.removeChild(e)}function v(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function y(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function b(){return $(" ")}function _(){return $("")}function N(e,n,t,r){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t,r)}function A(e,n){n=""+n,e.data!==n&&(e.data=n)}let x,w=0,k={};function E(e,n,t,r,s,a,o,i=0){const u=16.666/r;let l="{\n";for(let e=0;e<=1;e+=u){const r=n+(t-n)*a(e);l+=100*e+`%{${o(r,1-r)}}\n`}const c=l+`100% {${o(t,1-t)}}\n}`,d=`__svelte_${function(e){let n=5381,t=e.length;for(;t--;)n=(n<<5)-n^e.charCodeAt(t);return n>>>0}(c)}_${i}`;if(!k[d]){if(!m){const e=y("style");document.head.appendChild(e),m=e.sheet}k[d]=!0,m.insertRule(`@keyframes ${d} ${c}`,m.cssRules.length)}const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${d} ${r}ms linear ${s}ms 1 both`,w+=1,d}function I(e,n){e.style.animation=(e.style.animation||"").split(", ").filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")).join(", "),n&&!--w&&l(()=>{if(w)return;let e=m.cssRules.length;for(;e--;)m.deleteRule(e);k={}})}function S(e){x=e}function M(){if(!x)throw new Error("Function called outside component initialization");return x}function C(e){M().$$.on_mount.push(e)}function R(e){M().$$.after_render.push(e)}const P=[],z=Promise.resolve();let L=!1;const j=[],T=[],q=[];function F(e){j.push(e)}function O(e){T.push(e)}function B(){const e=new Set;do{for(;P.length;){const e=P.shift();S(e),D(e.$$)}for(;j.length;)j.shift()();for(;T.length;){const n=T.pop();e.has(n)||(n(),e.add(n))}}while(P.length);for(;q.length;)q.pop()();L=!1}function D(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(O))}let H,W;function G(e,n,t){e.dispatchEvent(function(e,n){const t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,n),t}(`${n?"intro":"outro"}${t}`))}function J(){W={remaining:0,callbacks:[]}}function U(){W.remaining||s(W.callbacks)}function V(e){W.callbacks.push(e)}function Y(t,r,a,o){let i=r(t,a),m=o?0:1,f=null,p=null,h=null;function v(){h&&I(t,h)}function y(e,n){const t=e.b-m;return n*=Math.abs(t),{a:m,b:e.b,d:t,duration:n,start:e.start,end:e.start+n,group:e.group}}function $(r){const{delay:a=0,duration:o=300,easing:$=n,tick:b=e,css:_}=i,N={start:u()+a,b:r};r||(N.group=W,W.remaining+=1),f?p=N:(_&&(v(),h=E(t,m,r,o,a,$,_)),r&&b(0,1),f=y(N,o),O(()=>G(t,r,"start")),function(e){let n;d||(d=!0,l(g)),new Promise(t=>{c.add(n=[e,t])})}(e=>{if(p&&e>p.start&&(f=y(p,o),p=null,G(t,f.b,"start"),_&&(v(),h=E(t,m,f.b,f.duration,0,$,i.css))),f)if(e>=f.end)b(m=f.b,1-m),G(t,f.b,"end"),p||(f.b?v():--f.group.remaining||s(f.group.callbacks)),f=null;else if(e>=f.start){const n=e-f.start;m=f.a+f.d*$(n/f.duration),b(m,1-m)}return!(!f&&!p)}))}return{run(e){"function"==typeof i?(H||(H=Promise.resolve()).then(()=>{H=null}),H).then(()=>{i=i(),$(e)}):$(e)},end(){v(),f=p=null}}}function K(e,n,r){const{fragment:o,on_mount:i,on_destroy:u,after_render:l}=e.$$;o.m(n,r),O(()=>{const n=i.map(t).filter(a);u?u.push(...n):s(n),e.$$.on_mount=[]}),l.forEach(O)}function Q(e,n){e.$$.dirty||(P.push(e),L||(L=!0,z.then(B)),e.$$.dirty=r()),e.$$.dirty[n]=!0}function X(n,t,a,o,i,u){const l=x;S(n);const c=t.props||{},m=n.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var g;m.ctx=a?a(n,c,(e,t)=>{m.ctx&&i(m.ctx[e],m.ctx[e]=t)&&(m.bound[e]&&m.bound[e](t),d&&Q(n,e))}):c,m.update(),d=!0,s(m.before_render),m.fragment=o(m.ctx),t.target&&(t.hydrate?m.fragment.l((g=t.target,Array.from(g.childNodes))):m.fragment.c(),t.intro&&n.$$.fragment.i&&n.$$.fragment.i(),K(n,t.target,t.anchor),B()),S(l)}class Z{$destroy(){var n,t;t=!0,(n=this).$$&&(s(n.$$.on_destroy),n.$$.fragment.d(t),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(){}}function ee(e){const n=e-1;return n*n*n+1}function ne(e,{delay:n=0,duration:t=400}){const r=+getComputedStyle(e).opacity;return{delay:n,duration:t,css:e=>`opacity: ${e*r}`}}function te(e,{delay:n=0,duration:t=400,easing:r=ee,x:s=0,y:a=0,opacity:o=0}){const i=getComputedStyle(e),u=+i.opacity,l="none"===i.transform?"":i.transform,c=u*(1-o);return{delay:n,duration:t,easing:r,css:(e,n)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*s}px, ${(1-e)*a}px);\n\t\t\topacity: ${u-c*n}`}}function re(e,{delay:n=0,duration:t=400,easing:r=ee}){const s=getComputedStyle(e),a=+s.opacity,o=parseFloat(s.height),i=parseFloat(s.paddingTop),u=parseFloat(s.paddingBottom),l=parseFloat(s.marginTop),c=parseFloat(s.marginBottom),m=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth);return{delay:n,duration:t,easing:r,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*a};`+`height: ${e*o}px;`+`padding-top: ${e*i}px;`+`padding-bottom: ${e*u}px;`+`margin-top: ${e*l}px;`+`margin-bottom: ${e*c}px;`+`border-top-width: ${e*m}px;`+`border-bottom-width: ${e*d}px;`}}function se(e){var n,t,r,s,a,o,i,u,l,c,m,d,g,v,_,N,x,w,k,E,I,S,M,C,R,P,z,L,j,T,q,F,B;return{c(){n=y("div"),t=y("img"),s=b(),a=y("div"),o=y("ul"),i=y("li"),u=$("Name:\r\n            "),l=y("span"),c=$(e.name),m=b(),d=y("li"),g=$("Age:\r\n            "),v=y("span"),_=$(e.age),N=b(),x=y("li"),w=$("Region:\r\n            "),k=y("span"),E=$(e.region),I=b(),S=y("li"),M=$("Phone:\r\n            "),C=y("span"),R=$(e.phone),P=b(),z=y("li"),L=$("Email:\r\n            "),j=y("a"),T=$(e.email),t.className="user-photo-img svelte-15kc1zg",t.src=e.userImg,t.alt=e.name,n.className="user-photo svelte-15kc1zg",l.className="small-text svelte-15kc1zg",i.className="user-list-item svelte-15kc1zg",v.className="small-text svelte-15kc1zg",d.className="user-list-item svelte-15kc1zg",k.className="small-text svelte-15kc1zg",x.className="user-list-item svelte-15kc1zg",C.className="small-text svelte-15kc1zg",S.className="user-list-item svelte-15kc1zg",j.href=q="mailto:"+e.email,j.className="email svelte-15kc1zg",z.className="user-list-item svelte-15kc1zg",o.className="user-list-info svelte-15kc1zg",a.className="user-info svelte-15kc1zg"},m(e,r){p(e,n,r),f(n,t),p(e,s,r),p(e,a,r),f(a,o),f(o,i),f(i,u),f(i,l),f(l,c),f(o,m),f(o,d),f(d,g),f(d,v),f(v,_),f(o,N),f(o,x),f(x,w),f(x,k),f(k,E),f(o,I),f(o,S),f(S,M),f(S,C),f(C,R),f(o,P),f(o,z),f(z,L),f(z,j),f(j,T),B=!0},p(e,n){B&&!e.userImg||(t.src=n.userImg),B&&!e.name||(t.alt=n.name,A(c,n.name)),B&&!e.age||A(_,n.age),B&&!e.region||A(E,n.region),B&&!e.phone||A(R,n.phone),B&&!e.email||A(T,n.email),B&&!e.email||q===(q="mailto:"+n.email)||(j.href=q)},i(e){B||(O(()=>{r||(r=Y(n,ne,{duration:500},!0)),r.run(1)}),O(()=>{F||(F=Y(o,re,{duration:700},!0)),F.run(1)}),B=!0)},o(e){r||(r=Y(n,ne,{duration:500},!1)),r.run(0),F||(F=Y(o,re,{duration:700},!1)),F.run(0),B=!1},d(e){e&&(h(n),r&&r.end(),h(s),h(a),F&&F.end())}}}function ae(e){var n,t,r,s,a,o=e.fades&&se(e);return{c(){n=y("div"),(t=y("span")).textContent="☰",r=b(),s=y("div"),o&&o.c(),t.className="menu svelte-15kc1zg",s.className="user-detail svelte-15kc1zg",n.className="user-container toggle-sidebar svelte-15kc1zg"},m(i,u){p(i,n,u),f(n,t),F(()=>e.span_binding(t,null)),f(n,r),f(n,s),o&&o.m(s,null),F(()=>e.div1_binding(n,null)),a=!0},p(e,r){e.items&&(r.span_binding(null,t),r.span_binding(t,null)),r.fades?o?(o.p(e,r),o.i(1)):((o=se(r)).c(),o.i(1),o.m(s,null)):o&&(J(),V(()=>{o.d(1),o=null}),o.o(1),U()),e.items&&(r.div1_binding(null,n),r.div1_binding(n,null))},i(e){a||(o&&o.i(),a=!0)},o(e){o&&o.o(),a=!1},d(r){r&&h(n),e.span_binding(null,t),o&&o.d(),e.div1_binding(null,n)}}}function oe(e,n,t){let r,s,{userImg:a="https://uinames.com/api/photos/male/19.jpg",name:o="John Doe",age:i=26,region:u="United States",phone:l="555-2648",email:c="john-doe@contactApp.com"}=n,m=!1;return C(()=>{r.addEventListener("click",()=>{s.classList.toggle("toggle-sidebar")})}),R(()=>{t("fades",m=!0)}),e.$set=(e=>{"userImg"in e&&t("userImg",a=e.userImg),"name"in e&&t("name",o=e.name),"age"in e&&t("age",i=e.age),"region"in e&&t("region",u=e.region),"phone"in e&&t("phone",l=e.phone),"email"in e&&t("email",c=e.email)}),{userImg:a,name:o,age:i,region:u,phone:l,email:c,menu:r,container:s,fades:m,span_binding:function(e,n){t("menu",r=e)},div1_binding:function(e,n){t("container",s=e)}}}class ie extends Z{constructor(e){super(),X(this,e,oe,ae,o,["userImg","name","age","region","phone","email"])}}function ue(e){var n,t,r,s,a,o,i,u,l,c,m,d,g,v,_,N,x,w,k,E,I;return{c(){n=y("div"),t=y("div"),r=y("p"),s=$(e.userName),a=b(),o=y("p"),i=$(e.userSurName),u=b(),l=y("div"),c=y("p"),m=$(e.userRegion),d=b(),g=y("div"),v=y("p"),_=$("Phone: "),N=$(e.userPhone),x=b(),w=y("div"),k=y("p"),r.className="name",o.className="surname svelte-rffsug",t.className="contact-name svelte-rffsug",c.className="region",l.className="contact-region svelte-rffsug",v.className="phone",g.className="contact-phone svelte-rffsug",k.dataset.img=e.userImg,k.dataset.email=e.userEmail,k.dataset.age=e.userAge,w.className="extra-info svelte-rffsug",n.className="contact-card svelte-rffsug"},m(e,h){p(e,n,h),f(n,t),f(t,r),f(r,s),f(t,a),f(t,o),f(o,i),f(n,u),f(n,l),f(l,c),f(c,m),f(n,d),f(n,g),f(g,v),f(v,_),f(v,N),f(n,x),f(n,w),f(w,k),I=!0},p(e,n){I&&!e.userName||A(s,n.userName),I&&!e.userSurName||A(i,n.userSurName),I&&!e.userRegion||A(m,n.userRegion),I&&!e.userPhone||A(N,n.userPhone),I&&!e.userImg||(k.dataset.img=n.userImg),I&&!e.userEmail||(k.dataset.email=n.userEmail),I&&!e.userAge||(k.dataset.age=n.userAge)},i(e){I||(O(()=>{E||(E=Y(n,te,{y:500,duration:500},!0)),E.run(1)}),I=!0)},o(e){E||(E=Y(n,te,{y:500,duration:500},!1)),E.run(0),I=!1},d(e){e&&(h(n),E&&E.end())}}}function le(e){var n,t,r=e.show&&ue(e);return{c(){r&&r.c(),n=_()},m(e,s){r&&r.m(e,s),p(e,n,s),t=!0},p(e,t){t.show?r?(r.p(e,t),r.i(1)):((r=ue(t)).c(),r.i(1),r.m(n.parentNode,n)):r&&(J(),V(()=>{r.d(1),r=null}),r.o(1),U())},i(e){t||(r&&r.i(),t=!0)},o(e){r&&r.o(),t=!1},d(e){r&&r.d(e),e&&h(n)}}}function ce(e,n,t){let{userName:r="",userSurName:s="",userRegion:a="",userPhone:o="",userAge:i="",userEmail:u="",userImg:l=""}=n,c=!0;var m;return m=(()=>{t("show",c=!1)}),M().$$.on_destroy.push(m),e.$set=(e=>{"userName"in e&&t("userName",r=e.userName),"userSurName"in e&&t("userSurName",s=e.userSurName),"userRegion"in e&&t("userRegion",a=e.userRegion),"userPhone"in e&&t("userPhone",o=e.userPhone),"userAge"in e&&t("userAge",i=e.userAge),"userEmail"in e&&t("userEmail",u=e.userEmail),"userImg"in e&&t("userImg",l=e.userImg)}),{userName:r,userSurName:s,userRegion:a,userPhone:o,userAge:i,userEmail:u,userImg:l,show:c}}class me extends Z{constructor(e){super(),X(this,e,ce,le,o,["userName","userSurName","userRegion","userPhone","userAge","userEmail","userImg"])}}function de(e,n,t){const r=Object.create(e);return r.user=n[t],r}function ge(n){var t;return{c(){(t=y("div")).innerHTML='<p class="not-yet svelte-13wblns">Not users found</p>',t.className="contacts-list svelte-13wblns"},m(e,n){p(e,t,n)},p:e,i:e,o:e,d(e){e&&h(t)}}}function fe(e){var n,t,r,s,a=[he,pe],o=[];function i(e){return e.usersArray.length?1:0}return t=i(e),r=o[t]=a[t](e),{c(){n=y("div"),r.c(),n.className="contacts-list svelte-13wblns"},m(e,r){p(e,n,r),o[t].m(n,null),s=!0},p(e,s){var u=t;(t=i(s))===u?o[t].p(e,s):(J(),V(()=>{o[u].d(1),o[u]=null}),r.o(1),U(),(r=o[t])||(r=o[t]=a[t](s)).c(),r.i(1),r.m(n,null))},i(e){s||(r&&r.i(),s=!0)},o(e){r&&r.o(),s=!1},d(e){e&&h(n),o[t].d()}}}function pe(e){for(var n,t,r=e.usersArray,s=[],a=0;a<r.length;a+=1)s[a]=ve(de(e,r,a));function o(e,n,t){s[e]&&(n&&V(()=>{s[e].d(n),s[e]=null}),s[e].o(t))}return{c(){for(var e=0;e<s.length;e+=1)s[e].c();n=_()},m(e,r){for(var a=0;a<s.length;a+=1)s[a].m(e,r);p(e,n,r),t=!0},p(e,t){if(e.usersArray){r=t.usersArray;for(var a=0;a<r.length;a+=1){const o=de(t,r,a);s[a]?(s[a].p(e,o),s[a].i(1)):(s[a]=ve(o),s[a].c(),s[a].i(1),s[a].m(n.parentNode,n))}for(J();a<s.length;a+=1)o(a,1,1);U()}},i(e){if(!t){for(var n=0;n<r.length;n+=1)s[n].i();t=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)o(e,0);t=!1},d(e){v(s,e),e&&h(n)}}}function he(n){var t;return{c(){(t=y("p")).textContent="Not users loaded yet",t.className="not-yet svelte-13wblns"},m(e,n){p(e,t,n)},p:e,i:e,o:e,d(e){e&&h(t)}}}function ve(e){var n,t=new me({props:{userName:e.user.name,userSurName:e.user.surname,userRegion:e.user.region,userPhone:e.user.phone,userAge:e.user.age,userEmail:e.user.email,userImg:e.user.photo}});return{c(){t.$$.fragment.c()},m(e,r){K(t,e,r),n=!0},p(e,n){var r={};e.usersArray&&(r.userName=n.user.name),e.usersArray&&(r.userSurName=n.user.surname),e.usersArray&&(r.userRegion=n.user.region),e.usersArray&&(r.userPhone=n.user.phone),e.usersArray&&(r.userAge=n.user.age),e.usersArray&&(r.userEmail=n.user.email),e.usersArray&&(r.userImg=n.user.photo),t.$set(r)},i(e){n||(t.$$.fragment.i(e),n=!0)},o(e){t.$$.fragment.o(e),n=!1},d(e){t.$destroy(e)}}}function ye(e){var n,t,r,s,a=[fe,ge],o=[];function i(e){return e.found?0:1}return n=i(e),t=o[n]=a[n](e),{c(){t.c(),r=_()},m(e,t){o[n].m(e,t),p(e,r,t),s=!0},p(e,s){var u=n;(n=i(s))===u?o[n].p(e,s):(J(),V(()=>{o[u].d(1),o[u]=null}),t.o(1),U(),(t=o[n])||(t=o[n]=a[n](s)).c(),t.i(1),t.m(r.parentNode,r))},i(e){s||(t&&t.i(),s=!0)},o(e){t&&t.o(),s=!1},d(e){o[n].d(e),e&&h(r)}}}function $e(e,n,t){let{usersArray:r=[],found:s}=n;return e.$set=(e=>{"usersArray"in e&&t("usersArray",r=e.usersArray),"found"in e&&t("found",s=e.found)}),{usersArray:r,found:s}}class be extends Z{constructor(e){super(),X(this,e,$e,ye,o,["usersArray","found"])}}function _e(e,n,t){const r=Object.create(e);return r.region=n[t],r}function Ne(e,n,t){const r=Object.create(e);return r.region=n[t],r}function Ae(n){var t,r;return{c(){(t=y("a")).textContent="Reset",t.href="javascript:void(0)",t.className="reset svelte-1g4e3st",r=N(t,"click",n.resetList)},m(e,n){p(e,t,n)},p:e,d(e){e&&h(t),r()}}}function xe(e){for(var n,t=e.regionsArrayMod,r=[],s=0;s<t.length;s+=1)r[s]=ke(_e(e,t,s));return{c(){for(var e=0;e<r.length;e+=1)r[e].c();n=_()},m(e,t){for(var s=0;s<r.length;s+=1)r[s].m(e,t);p(e,n,t)},p(e,s){if(e.regionsArrayMod){t=s.regionsArrayMod;for(var a=0;a<t.length;a+=1){const o=_e(s,t,a);r[a]?r[a].p(e,o):(r[a]=ke(o),r[a].c(),r[a].m(n.parentNode,n))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(e){v(r,e),e&&h(n)}}}function we(e){for(var n,t=e.regionsArray,r=[],s=0;s<t.length;s+=1)r[s]=Ee(Ne(e,t,s));return{c(){for(var e=0;e<r.length;e+=1)r[e].c();n=_()},m(e,t){for(var s=0;s<r.length;s+=1)r[s].m(e,t);p(e,n,t)},p(e,s){if(e.regionsArray){t=s.regionsArray;for(var a=0;a<t.length;a+=1){const o=Ne(s,t,a);r[a]?r[a].p(e,o):(r[a]=Ee(o),r[a].c(),r[a].m(n.parentNode,n))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(e){v(r,e),e&&h(n)}}}function ke(e){var n,t,r,s=e.region;return{c(){n=y("option"),t=$(s),n.__value=r=e.region,n.value=n.__value},m(e,r){p(e,n,r),f(n,t)},p(e,a){e.regionsArrayMod&&s!==(s=a.region)&&A(t,s),e.regionsArrayMod&&r!==(r=a.region)&&(n.__value=r),n.value=n.__value},d(e){e&&h(n)}}}function Ee(e){var n,t,r,s=e.region;return{c(){n=y("option"),t=$(s),n.__value=r=e.region,n.value=n.__value},m(e,r){p(e,n,r),f(n,t)},p(e,a){e.regionsArray&&s!==(s=a.region)&&A(t,s),e.regionsArray&&r!==(r=a.region)&&(n.__value=r),n.value=n.__value},d(e){e&&h(n)}}}function Ie(e){var n,t=new be({props:{usersArray:e.usersArrayMod,found:e.found}});return{c(){t.$$.fragment.c()},m(e,r){K(t,e,r),n=!0},p(e,n){var r={};e.usersArrayMod&&(r.usersArray=n.usersArrayMod),e.found&&(r.found=n.found),t.$set(r)},i(e){n||(t.$$.fragment.i(e),n=!0)},o(e){t.$$.fragment.o(e),n=!1},d(e){t.$destroy(e)}}}function Se(e){var n,t=new be({props:{usersArray:e.usersArray,found:e.found}});return{c(){t.$$.fragment.c()},m(e,r){K(t,e,r),n=!0},p(e,n){var r={};e.usersArray&&(r.usersArray=n.usersArray),e.found&&(r.found=n.found),t.$set(r)},i(e){n||(t.$$.fragment.i(e),n=!0)},o(e){t.$$.fragment.o(e),n=!1},d(e){t.$destroy(e)}}}function Me(e){var n,t,r,a,o,i,u,l,c,m,d,g,v,$,_,A,x,w,k,E,I,S,M,C=new ie({props:{userImg:e.userImg,name:e.name,age:e.age,region:e.region,phone:e.phone,email:e.email}}),R=e.selected&&Ae(e);function P(e){return e.usersArrayMod.length?xe:we}var z=P(e),L=z(e),j=[Se,Ie],T=[];function q(e){return e.usersArrayMod.length?1:0}return E=q(e),I=T[E]=j[E](e),{c(){var s,f,p;n=y("main"),C.$$.fragment.c(),t=b(),r=y("div"),a=y("form"),o=y("input"),i=b(),(u=y("button")).innerHTML='<img class="search-img svelte-1g4e3st" src="./Vector_search_icon.svg.png" alt="Search">',l=b(),c=y("div"),(m=y("div")).innerHTML='<h3 class="contact-title-h3 svelte-1g4e3st">Contacts</h3>',d=b(),g=y("form"),R&&R.c(),v=b(),$=y("div"),(_=y("label")).textContent="Choose by region",A=b(),x=y("select"),L.c(),w=b(),k=y("div"),I.c(),o.className="search-input svelte-1g4e3st",s=o,f="type",null==(p="text")?s.removeAttribute(f):s.setAttribute(f,p),o.placeholder="Type a name",u.className="search-button svelte-1g4e3st",a.className="form svelte-1g4e3st",m.className="contact-title svelte-1g4e3st",_.className="contact-label svelte-1g4e3st",_.htmlFor="select-region",x.id="select-region",x.className="select-region svelte-1g4e3st",$.className="contact-form-region-container svelte-1g4e3st",g.className="contact-form svelte-1g4e3st",c.className="contact-info svelte-1g4e3st",k.className="contact-list-container svelte-1g4e3st",r.className="search-container svelte-1g4e3st",n.className="main svelte-1g4e3st",M=[N(o,"input",e.input_input_handler),N(o,"input",e.input_handler),N(a,"submit",Ce),N(x,"change",e.change_handler)]},m(s,h){p(s,n,h),K(C,n,null),f(n,t),f(n,r),f(r,a),f(a,o),o.value=e.search,f(a,i),f(a,u),f(r,l),f(r,c),f(c,m),f(c,d),f(c,g),R&&R.m(g,null),f(g,v),f(g,$),f($,_),f($,A),f($,x),L.m(x,null),f(r,w),f(r,k),T[E].m(k,null),F(()=>e.div3_binding(k,null)),S=!0},p(e,n){var t={};e.userImg&&(t.userImg=n.userImg),e.name&&(t.name=n.name),e.age&&(t.age=n.age),e.region&&(t.region=n.region),e.phone&&(t.phone=n.phone),e.email&&(t.email=n.email),C.$set(t),e.search&&o.value!==n.search&&(o.value=n.search),n.selected?R?R.p(e,n):((R=Ae(n)).c(),R.m(g,v)):R&&(R.d(1),R=null),z===(z=P(n))&&L?L.p(e,n):(L.d(1),(L=z(n))&&(L.c(),L.m(x,null)));var r=E;(E=q(n))===r?T[E].p(e,n):(J(),V(()=>{T[r].d(1),T[r]=null}),I.o(1),U(),(I=T[E])||(I=T[E]=j[E](n)).c(),I.i(1),I.m(k,null)),e.items&&(n.div3_binding(null,k),n.div3_binding(k,null))},i(e){S||(C.$$.fragment.i(e),I&&I.i(),S=!0)},o(e){C.$$.fragment.o(e),I&&I.o(),S=!1},d(t){t&&h(n),C.$destroy(),R&&R.d(),L.d(),T[E].d(),e.div3_binding(null,k),s(M)}}}function Ce(e){return e.preventDefault()}function Re(e,n,t){let r,s,a,o,i,u,l,c,m="",d=[],g=[],f=[],p=[],h=!0,v=!1;function y(e){if(e.length>=1){const n=d.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())||n.surname.toLowerCase().includes(e.toLowerCase()));t("usersArrayMod",g=n),g.length?t("found",h=!0):t("found",h=!1)}else t("usersArrayMod",g=[...d])}function $(e){t("selected",v=!0);const n=d.filter(n=>n.region.includes(e));t("usersArrayMod",g=n)}return C(()=>{(async function(e){const n=await fetch(e);return await n.json()})("./api.json").then(e=>{const n=d=e;return t("usersArray",d),n}).catch(e=>console.log(e))}),R(()=>{Array.from(c.children[0].children).forEach(e=>{e.addEventListener("click",function(){t("name",s=this.querySelector(".name").innerText+" "+this.querySelector(".surname").innerText),t("age",a=this.querySelector("[data-age]").getAttribute("data-age")),t("region",o=this.querySelector(".region").innerText),t("phone",i=this.querySelector(".phone").innerText),t("email",u=this.querySelector("[data-email]").getAttribute("data-email")),t("userImg",r=this.querySelector("[data-img]").getAttribute("data-img"))})}),function(e){const n=new Set;e.forEach(e=>{n.add(e.region)}),t("regionsArray",f=[...Array.from(n)])}(d),function(e){const n=new Set;e.forEach(e=>{n.add(e.region)}),t("regionsArrayMod",p=[...Array.from(n)])}(g)}),{userImg:r,name:s,age:a,region:o,phone:i,email:u,search:m,usersArray:d,usersArrayMod:g,regionsArray:f,regionsArrayMod:p,found:h,selectedRegion:l,selected:v,cards:c,makeSearchName:y,selectRegion:$,resetList:function(){t("usersArrayMod",g=[...d]),t("selected",v=!1)},input_input_handler:function(){m=this.value,t("search",m)},input_handler:function(){return y(m)},change_handler:function(){l=this.options[this.selectedIndex].value,t("selectedRegion",l),$(l)},div3_binding:function(e,n){t("cards",c=e)}}}class Pe extends Z{constructor(e){super(),X(this,e,Re,Me,o,[])}}function ze(n){var t,r,s,a,o,i=n.date.getFullYear();return{c(){t=y("div"),r=y("p"),s=$("Nbred © "),a=$(i),o=$(" - All rights reserved"),r.className="copy svelte-2m257q",t.className="footer svelte-2m257q"},m(e,n){p(e,t,n),f(t,r),f(r,s),f(r,a),f(r,o)},p:e,i:e,o:e,d(e){e&&h(t)}}}function Le(e){return{date:new Date}}class je extends Z{constructor(e){super(),X(this,e,Le,ze,o,[])}}function Te(e){var n,t,r,s,a,o,i,u,l,c,m=new Pe({}),d=new je({});return{c(){n=y("div"),(t=y("a")).textContent="R",r=b(),(s=y("a")).textContent="G",a=b(),(o=y("a")).textContent="P",i=b(),u=y("div"),m.$$.fragment.c(),l=b(),d.$$.fragment.c(),t.className="theme-red svelte-1kray17",t.href="javascript:void(0)",s.className="theme-green svelte-1kray17",s.href="javascript:void(0)",o.className="theme-purple svelte-1kray17",o.href="javascript:void(0)",n.className="theme svelte-1kray17",u.className="container svelte-1kray17"},m(g,h){p(g,n,h),f(n,t),F(()=>e.a0_binding(t,null)),f(n,r),f(n,s),F(()=>e.a1_binding(s,null)),f(n,a),f(n,o),F(()=>e.a2_binding(o,null)),p(g,i,h),p(g,u,h),K(m,u,null),p(g,l,h),K(d,g,h),c=!0},p(e,n){e.items&&(n.a0_binding(null,t),n.a0_binding(t,null)),e.items&&(n.a1_binding(null,s),n.a1_binding(s,null)),e.items&&(n.a2_binding(null,o),n.a2_binding(o,null))},i(e){c||(m.$$.fragment.i(e),d.$$.fragment.i(e),c=!0)},o(e){m.$$.fragment.o(e),d.$$.fragment.o(e),c=!1},d(r){r&&h(n),e.a0_binding(null,t),e.a1_binding(null,s),e.a2_binding(null,o),r&&(h(i),h(u)),m.$destroy(),r&&h(l),d.$destroy(r)}}}function qe(e,n,t){let r,s,a;const o=(e,n,t)=>{document.documentElement.style.setProperty("--primary-color",e),document.documentElement.style.setProperty("--primary-color-light",n),document.documentElement.style.setProperty("--primary-color-dark",t)};return C(()=>{r.addEventListener("click",()=>{o("#e74c3c","#e67e22","#c0392b")}),s.addEventListener("click",()=>{o("#1abc9c","#2ecc71","#16a085")}),a.addEventListener("click",()=>{o("#474787","#706fd3","#40407a")})}),{red_theme:r,green_theme:s,purple_theme:a,a0_binding:function(e,n){t("red_theme",r=e)},a1_binding:function(e,n){t("green_theme",s=e)},a2_binding:function(e,n){t("purple_theme",a=e)}}}return new class extends Z{constructor(e){super(),X(this,e,qe,Te,o,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
