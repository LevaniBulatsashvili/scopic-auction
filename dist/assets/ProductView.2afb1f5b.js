import{G as A,i as v,n as g,H as q,I as it,J as F,K as ce,L as pe,P as D,F as ne,M as C,k as fe,N as oe,O as Y,Q as re,R as U,S as he,T as Ie,U as W,V as Ae,W as z,x as I,s as L,X as H,Y as st,r as Ne,Z as N,e as E,_ as Ve,$ as ee,a0 as ut,y as dt,a1 as Q,a2 as be,a3 as M,a4 as ct,a5 as pt,a6 as ft,a7 as He,a8 as vt,a9 as X,aa as mt,a as gt,u as ht,ab as bt,o as te,c as ae,b as p,t as K,A as j,D as V,g as se,ac as yt,d as De,E as ye,w as wt,v as xt}from"./index.bbd0cb57.js";import{u as _t,r as St,a as Et,b as Pt}from"./index.esm.2aa746b4.js";function Ge(e={},t=null,l=[]){for(let[a,r]of Object.entries(e))Ue(l,Me(t,a),r);return l}function Me(e,t){return e?e+"["+t+"]":t}function Ue(e,t,l){if(Array.isArray(l))for(let[a,r]of l.entries())Ue(e,Me(t,a.toString()),r);else l instanceof Date?e.push([t,l.toISOString()]):typeof l=="boolean"?e.push([t,l?"1":"0"]):typeof l=="string"?e.push([t,l]):typeof l=="number"?e.push([t,`${l}`]):l==null?e.push([t,""]):Ge(l,t,e)}function Tt(e){var t;let l=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(l){for(let a of l.elements)if(a.tagName==="INPUT"&&a.type==="submit"||a.tagName==="BUTTON"&&a.type==="submit"||a.nodeName==="INPUT"&&a.type==="image"){a.click();return}}}var qe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(qe||{});let le=Object.assign(A({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:a}){let r=v(null);a({el:r,$el:r});let n=g(()=>q(r));kt({ownerDocument:n},g(()=>Boolean(e.features&16)));let o=Bt({ownerDocument:n,container:r,initialFocus:g(()=>e.initialFocus)},g(()=>Boolean(e.features&2)));$t({ownerDocument:n,container:r,containers:e.containers,previousActiveElement:o},g(()=>Boolean(e.features&8)));let i=it();function s(){let d=Y(r);!d||W(i.value,{[Ae.Forwards]:()=>re(d,U.First),[Ae.Backwards]:()=>re(d,U.Last)})}return()=>{let d={},c={ref:r},{features:f,initialFocus:S,containers:u,...m}=e;return F(ne,[Boolean(f&4)&&F(ce,{as:"button",type:"button",onFocus:s,features:pe.Focusable}),D({ourProps:c,theirProps:{...t,...m},slot:d,attrs:t,slots:l,name:"FocusTrap"}),Boolean(f&4)&&F(ce,{as:"button",type:"button",onFocus:s,features:pe.Focusable})])}}}),{features:qe});function kt({ownerDocument:e},t){let l=v(null),a={value:!1};C(()=>{fe(t,(r,n)=>{var o;r!==n&&(!t.value||(a.value=!0,l.value||(l.value=(o=e.value)==null?void 0:o.activeElement)))},{immediate:!0}),fe(t,(r,n,o)=>{r!==n&&(!t.value||o(()=>{a.value!==!1&&(a.value=!1,oe(l.value),l.value=null)}))},{immediate:!0})})}function Bt({ownerDocument:e,container:t,initialFocus:l},a){let r=v(null);return C(()=>{fe([t,l,a],(n,o)=>{if(n.every((s,d)=>(o==null?void 0:o[d])===s)||!a.value)return;let i=Y(t);!i||requestAnimationFrame(()=>{var s,d;let c=Y(l),f=(s=e.value)==null?void 0:s.activeElement;if(c){if(c===f){r.value=f;return}}else if(i.contains(f)){r.value=f;return}c?oe(c):re(i,U.First|U.NoScroll)===he.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function $t({ownerDocument:e,container:t,containers:l,previousActiveElement:a},r){var n;Ie((n=e.value)==null?void 0:n.defaultView,"focus",o=>{if(!r.value)return;let i=new Set(l==null?void 0:l.value);i.add(t);let s=a.value;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Ft(i,d)?(a.value=d,oe(d)):(o.preventDefault(),o.stopPropagation(),oe(s)):oe(a.value)},!0)}function Ft(e,t){var l;for(let a of e)if((l=a.value)!=null&&l.contains(t))return!0;return!1}let Ce="body > *",Z=new Set,G=new Map;function Oe(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Le(e){let t=G.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Rt(e,t=v(!0)){z(l=>{if(!t.value||!e.value)return;let a=e.value,r=q(a);if(r){Z.add(a);for(let n of G.keys())n.contains(a)&&(Le(n),G.delete(n));r.querySelectorAll(Ce).forEach(n=>{if(n instanceof HTMLElement){for(let o of Z)if(n.contains(o))return;Z.size===1&&(G.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),Oe(n))}}),l(()=>{if(Z.delete(a),Z.size>0)r.querySelectorAll(Ce).forEach(n=>{if(n instanceof HTMLElement&&!G.has(n)){for(let o of Z)if(n.contains(o))return;G.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),Oe(n)}});else for(let n of G.keys())Le(n),G.delete(n)})}})}let We=Symbol("ForcePortalRootContext");function At(){return L(We,!1)}let we=A({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return I(We,e.force),()=>{let{force:a,...r}=e;return D({theirProps:r,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}});function Dt(e){let t=q(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}let Ye=A({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let a=v(null),r=g(()=>q(a)),n=At(),o=L(ze,null),i=v(n===!0||o==null?Dt(a.value):o.resolveTarget());return z(()=>{n||o!=null&&(i.value=o.resolveTarget())}),H(()=>{var s,d;let c=(s=r.value)==null?void 0:s.getElementById("headlessui-portal-root");!c||i.value===c&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:a,"data-headlessui-portal":""};return F(st,{to:i.value},D({ourProps:s,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),ze=Symbol("PortalGroupContext"),Ct=A({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let a=Ne({resolveTarget(){return e.target}});return I(ze,a),()=>{let{target:r,...n}=e;return D({theirProps:n,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}}),Ke=Symbol("StackContext");var xe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(xe||{});function Ot(){return L(Ke,()=>{})}function Lt({type:e,element:t,onUpdate:l}){let a=Ot();function r(...n){l==null||l(...n),a(...n)}C(()=>{r(0,e,t),H(()=>{r(1,e,t)})}),I(Ke,r)}let Je=Symbol("DescriptionContext");function jt(){let e=L(Je,null);if(e===null)throw new Error("Missing parent");return e}function Pe({slot:e=v({}),name:t="Description",props:l={}}={}){let a=v([]);function r(n){return a.value.push(n),()=>{let o=a.value.indexOf(n);o!==-1&&a.value.splice(o,1)}}return I(Je,{register:r,slot:e,name:t,props:l}),g(()=>a.value.length>0?a.value.join(" "):void 0)}let It=A({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:t,slots:l}){let a=jt(),r=`headlessui-description-${N()}`;return C(()=>H(a.register(r))),()=>{let{name:n="Description",slot:o=v({}),props:i={}}=a,s=e,d={...Object.entries(i).reduce((c,[f,S])=>Object.assign(c,{[f]:E(S)}),{}),id:r};return D({ourProps:d,theirProps:s,slot:o.value,attrs:t,slots:l,name:n})}}});var Nt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Nt||{});let _e=Symbol("DialogContext");function ie(e){let t=L(_e,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ie),l}return t}let ue="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Vt=A({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ue},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:a,expose:r}){var n;let o=v(!1);C(()=>{o.value=!0});let i=v(0),s=Ve(),d=g(()=>e.open===ue&&s!==null?W(s.value,{[ee.Open]:!0,[ee.Closed]:!1}):e.open),c=v(new Set),f=v(null),S=v(null),u=g(()=>q(f));if(r({el:f,$el:f}),!(e.open!==ue||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof d.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value===ue?void 0:e.open}`);let m=g(()=>o.value&&d.value?0:1),h=g(()=>m.value===0),w=g(()=>i.value>1),P=L(_e,null)!==null,$=g(()=>w.value?"parent":"leaf");Rt(f,g(()=>w.value?h.value:!1)),Lt({type:"Dialog",element:f,onUpdate:(_,x,k)=>{if(x==="Dialog")return W(_,{[xe.Add](){c.value.add(k),i.value+=1},[xe.Remove](){c.value.delete(k),i.value-=1}})}});let B=Pe({name:"DialogDescription",slot:g(()=>({open:d.value}))}),T=`headlessui-dialog-${N()}`,y=v(null),R={titleId:y,panelRef:v(null),dialogState:m,setTitleId(_){y.value!==_&&(y.value=_)},close(){t("close",!1)}};return I(_e,R),ut(()=>{var _,x,k;return[...Array.from((x=(_=u.value)==null?void 0:_.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?x:[]).filter(b=>!(!(b instanceof HTMLElement)||b.contains(Y(S))||R.panelRef.value&&b.contains(R.panelRef.value))),(k=R.panelRef.value)!=null?k:f.value]},(_,x)=>{R.close(),dt(()=>x==null?void 0:x.focus())},g(()=>m.value===0&&!w.value)),Ie((n=u.value)==null?void 0:n.defaultView,"keydown",_=>{_.defaultPrevented||_.key===Q.Escape&&m.value===0&&(w.value||(_.preventDefault(),_.stopPropagation(),R.close()))}),z(_=>{var x;if(m.value!==0||P)return;let k=u.value;if(!k)return;let b=k==null?void 0:k.documentElement,O=(x=k.defaultView)!=null?x:window,Be=b.style.overflow,$e=b.style.paddingRight,me=O.innerWidth-b.clientWidth;if(b.style.overflow="hidden",me>0){let Fe=b.clientWidth-b.offsetWidth,Re=me-Fe;b.style.paddingRight=`${Re}px`}_(()=>{b.style.overflow=Be,b.style.paddingRight=$e})}),z(_=>{if(m.value!==0)return;let x=Y(f);if(!x)return;let k=new IntersectionObserver(b=>{for(let O of b)O.boundingClientRect.x===0&&O.boundingClientRect.y===0&&O.boundingClientRect.width===0&&O.boundingClientRect.height===0&&R.close()});k.observe(x),_(()=>k.disconnect())}),()=>{let _={...l,ref:f,id:T,role:"dialog","aria-modal":m.value===0?!0:void 0,"aria-labelledby":y.value,"aria-describedby":B.value},{open:x,initialFocus:k,...b}=e,O={open:m.value===0};return F(we,{force:!0},()=>[F(Ye,()=>F(Ct,{target:f.value},()=>F(we,{force:!1},()=>F(le,{initialFocus:k,containers:c,features:h.value?W($.value,{parent:le.features.RestoreFocus,leaf:le.features.All&~le.features.FocusLock}):le.features.None},()=>D({ourProps:_,theirProps:b,slot:O,attrs:l,slots:a,visible:m.value===0,features:be.RenderStrategy|be.Static,name:"Dialog"}))))),F(ce,{features:pe.Hidden,ref:S})])}}}),Ht=A({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:l}){let a=ie("DialogOverlay"),r=`headlessui-dialog-overlay-${N()}`;function n(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),a.close())}return()=>D({ourProps:{id:r,"aria-hidden":!0,onClick:n},theirProps:e,slot:{open:a.dialogState.value===0},attrs:t,slots:l,name:"DialogOverlay"})}});A({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:a}){let r=ie("DialogBackdrop"),n=`headlessui-dialog-backdrop-${N()}`,o=v(null);return a({el:o,$el:o}),C(()=>{if(r.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let i=e,s={id:n,ref:o,"aria-hidden":!0};return F(we,{force:!0},()=>F(Ye,()=>D({ourProps:s,theirProps:{...t,...i},slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogBackdrop"})))}}});A({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:l,expose:a}){let r=ie("DialogPanel"),n=`headlessui-dialog-panel-${N()}`;a({el:r.panelRef,$el:r.panelRef});function o(i){i.stopPropagation()}return()=>{let i={id:n,ref:r.panelRef,onClick:o};return D({ourProps:i,theirProps:e,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}});let Gt=A({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:l}){let a=ie("DialogTitle"),r=`headlessui-dialog-title-${N()}`;return C(()=>{a.setTitleId(r),H(()=>a.setTitleId(null))}),()=>D({ourProps:{id:r},theirProps:e,slot:{open:a.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}),Qe=Symbol("LabelContext");function Xe(){let e=L(Qe,null);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Xe),t}return e}function Ze({slot:e={},name:t="Label",props:l={}}={}){let a=v([]);function r(n){return a.value.push(n),()=>{let o=a.value.indexOf(n);o!==-1&&a.value.splice(o,1)}}return I(Qe,{register:r,slot:e,name:t,props:l}),g(()=>a.value.length>0?a.value.join(" "):void 0)}let Mt=A({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:l}){let a=Xe(),r=`headlessui-label-${N()}`;return C(()=>H(a.register(r))),()=>{let{name:n="Label",slot:o={},props:i={}}=a,{passive:s,...d}=e,c={...Object.entries(i).reduce((f,[S,u])=>Object.assign(f,{[S]:E(u)}),{}),id:r};return s&&(delete c.onClick,delete d.onClick),D({ourProps:c,theirProps:d,slot:o,attrs:l,slots:t,name:n})}}}),et=Symbol("RadioGroupContext");function tt(e){let t=L(et,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,tt),l}return t}let Ut=A({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]},name:{type:String,optional:!0}},inheritAttrs:!1,setup(e,{emit:t,attrs:l,slots:a,expose:r}){let n=v(null),o=v([]),i=Ze({name:"RadioGroupLabel"}),s=Pe({name:"RadioGroupDescription"});r({el:n,$el:n});let d=g(()=>e.modelValue),c={options:o,value:d,disabled:g(()=>e.disabled),firstOption:g(()=>o.value.find(u=>!u.propsRef.disabled)),containsCheckedOption:g(()=>o.value.some(u=>c.compare(M(u.propsRef.value),M(e.modelValue)))),compare(u,m){return u===m},change(u){var m;if(e.disabled||c.compare(M(d.value),M(u)))return!1;let h=(m=o.value.find(w=>c.compare(M(w.propsRef.value),M(u))))==null?void 0:m.propsRef;return h!=null&&h.disabled?!1:(t("update:modelValue",u),!0)},registerOption(u){o.value.push(u),o.value=ct(o.value,m=>m.element)},unregisterOption(u){let m=o.value.findIndex(h=>h.id===u);m!==-1&&o.value.splice(m,1)}};I(et,c),pt({container:g(()=>Y(n)),accept(u){return u.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function f(u){if(!n.value||!n.value.contains(u.target))return;let m=o.value.filter(h=>h.propsRef.disabled===!1).map(h=>h.element);switch(u.key){case Q.Enter:Tt(u.currentTarget);break;case Q.ArrowLeft:case Q.ArrowUp:if(u.preventDefault(),u.stopPropagation(),re(m,U.Previous|U.WrapAround)===he.Success){let h=o.value.find(w=>{var P;return w.element===((P=q(n))==null?void 0:P.activeElement)});h&&c.change(h.propsRef.value)}break;case Q.ArrowRight:case Q.ArrowDown:if(u.preventDefault(),u.stopPropagation(),re(m,U.Next|U.WrapAround)===he.Success){let h=o.value.find(w=>{var P;return w.element===((P=q(w.element))==null?void 0:P.activeElement)});h&&c.change(h.propsRef.value)}break;case Q.Space:{u.preventDefault(),u.stopPropagation();let h=o.value.find(w=>{var P;return w.element===((P=q(w.element))==null?void 0:P.activeElement)});h&&c.change(h.propsRef.value)}break}}let S=`headlessui-radiogroup-${N()}`;return()=>{let{modelValue:u,disabled:m,name:h,...w}=e,P={ref:n,id:S,role:"radiogroup","aria-labelledby":i.value,"aria-describedby":s.value,onKeydown:f};return F(ne,[...h!=null&&u!=null?Ge({[h]:u}).map(([$,B])=>F(ce,ft({features:pe.Hidden,key:$,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:$,value:B}))):[],D({ourProps:P,theirProps:{...l,...w},slot:{},attrs:l,slots:a,name:"RadioGroup"})])}}});var qt=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(qt||{});let Wt=A({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:l,expose:a}){let r=tt("RadioGroupOption"),n=`headlessui-radiogroup-option-${N()}`,o=Ze({name:"RadioGroupLabel"}),i=Pe({name:"RadioGroupDescription"}),s=v(null),d=g(()=>({value:e.value,disabled:e.disabled})),c=v(1);a({el:s,$el:s}),C(()=>r.registerOption({id:n,element:s,propsRef:d})),H(()=>r.unregisterOption(n));let f=g(()=>{var $;return(($=r.firstOption.value)==null?void 0:$.id)===n}),S=g(()=>r.disabled.value||e.disabled),u=g(()=>r.compare(M(r.value.value),M(e.value))),m=g(()=>S.value?-1:u.value||!r.containsCheckedOption.value&&f.value?0:-1);function h(){var $;!r.change(e.value)||(c.value|=2,($=s.value)==null||$.focus())}function w(){c.value|=2}function P(){c.value&=-3}return()=>{let $=He(e,["value","disabled"]),B={checked:u.value,disabled:S.value,active:Boolean(c.value&2)},T={id:n,ref:s,role:"radio","aria-checked":u.value?"true":"false","aria-labelledby":o.value,"aria-describedby":i.value,"aria-disabled":S.value?!0:void 0,tabIndex:m.value,onClick:S.value?void 0:h,onFocus:S.value?void 0:w,onBlur:S.value?void 0:P};return D({ourProps:T,theirProps:$,slot:B,attrs:t,slots:l,name:"RadioGroupOption"})}}}),Yt=Mt,zt=It;function Kt(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function at(){let e=[],t=[],l={enqueue(a){t.push(a)},requestAnimationFrame(...a){let r=requestAnimationFrame(...a);l.add(()=>cancelAnimationFrame(r))},nextFrame(...a){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...a)})},setTimeout(...a){let r=setTimeout(...a);l.add(()=>clearTimeout(r))},add(a){e.push(a)},dispose(){for(let a of e.splice(0))a()},async workQueue(){for(let a of t.splice(0))await a()}};return l}function ge(e,...t){e&&t.length>0&&e.classList.add(...t)}function de(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Se=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Se||{});function Jt(e,t){let l=at();if(!e)return l.dispose;let{transitionDuration:a,transitionDelay:r}=getComputedStyle(e),[n,o]=[a,r].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,c)=>c-d);return s});return n!==0?l.setTimeout(()=>t("finished"),n+o):t("finished"),l.add(()=>t("cancelled")),l.dispose}function je(e,t,l,a,r,n){let o=at(),i=n!==void 0?Kt(n):()=>{};return de(e,...r),ge(e,...t,...l),o.nextFrame(()=>{de(e,...l),ge(e,...a),o.add(Jt(e,s=>(de(e,...a,...t),ge(e,...r),i(s))))}),o.add(()=>de(e,...t,...l,...a,...r)),o.add(()=>i("cancelled")),o.dispose}function J(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Te=Symbol("TransitionContext");var Qt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Qt||{});function Xt(){return L(Te,null)!==null}function Zt(){let e=L(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ea(){let e=L(ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let ke=Symbol("NestingContext");function ve(e){return"children"in e?ve(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function lt(e){let t=v([]),l=v(!1);C(()=>l.value=!0),H(()=>l.value=!1);function a(n,o=X.Hidden){let i=t.value.findIndex(({id:s})=>s===n);i!==-1&&(W(o,{[X.Unmount](){t.value.splice(i,1)},[X.Hidden](){t.value[i].state="hidden"}}),!ve(t)&&l.value&&(e==null||e()))}function r(n){let o=t.value.find(({id:i})=>i===n);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:n,state:"visible"}),()=>a(n,X.Unmount)}return{children:t,register:r,unregister:a}}let nt=be.RenderStrategy,Ee=A({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:a,expose:r}){if(!Xt()&&vt())return()=>F(ot,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},a);let n=v(null),o=v("visible"),i=g(()=>e.unmount?X.Unmount:X.Hidden);r({el:n,$el:n});let{show:s,appear:d}=Zt(),{register:c,unregister:f}=ea(),S={value:!0},u=N(),m={value:!1},h=lt(()=>{m.value||(o.value="hidden",f(u),t("afterLeave"))});C(()=>{let x=c(u);H(x)}),z(()=>{if(i.value===X.Hidden&&!!u){if(s&&o.value!=="visible"){o.value="visible";return}W(o.value,{hidden:()=>f(u),visible:()=>c(u)})}});let w=J(e.enter),P=J(e.enterFrom),$=J(e.enterTo),B=J(e.entered),T=J(e.leave),y=J(e.leaveFrom),R=J(e.leaveTo);C(()=>{z(()=>{if(o.value==="visible"){let x=Y(n);if(x instanceof Comment&&x.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function _(x){let k=S.value&&!d.value,b=Y(n);!b||!(b instanceof HTMLElement)||k||(m.value=!0,s.value&&t("beforeEnter"),s.value||t("beforeLeave"),x(s.value?je(b,w,P,$,B,O=>{m.value=!1,O===Se.Finished&&t("afterEnter")}):je(b,T,y,R,B,O=>{m.value=!1,O===Se.Finished&&(ve(h)||(o.value="hidden",f(u),t("afterLeave")))})))}return C(()=>{fe([s],(x,k,b)=>{_(b),S.value=!1},{immediate:!0})}),I(ke,h),mt(g(()=>W(o.value,{visible:ee.Open,hidden:ee.Closed}))),()=>{let{appear:x,show:k,enter:b,enterFrom:O,enterTo:Be,entered:$e,leave:me,leaveFrom:Fe,leaveTo:Re,...rt}=e;return D({theirProps:rt,ourProps:{ref:n},slot:{},slots:a,attrs:l,features:nt,visible:o.value==="visible",name:"TransitionChild"})}}}),ta=Ee,ot=A({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:a}){let r=Ve(),n=g(()=>e.show===null&&r!==null?W(r.value,{[ee.Open]:!0,[ee.Closed]:!1}):e.show);z(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(n.value?"visible":"hidden"),i=lt(()=>{o.value="hidden"}),s=v(!0),d={show:n,appear:g(()=>e.appear||!s.value)};return C(()=>{z(()=>{s.value=!1,n.value?o.value="visible":ve(i)||(o.value="hidden")})}),I(ke,i),I(Te,d),()=>{let c=He(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),f={unmount:e.unmount};return D({ourProps:{...f,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[F(ta,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...f,...c},a.default)]},attrs:{},features:nt,visible:o.value==="visible",name:"Transition"})}}});const aa={class:"bg-white"},la={class:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8"},na={class:"lg:max-w-lg lg:self-end"},oa={class:"mt-4"},ra={class:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},ia={"aria-labelledby":"information-heading",class:"mt-4"},sa=p("h2",{id:"information-heading",class:"sr-only"},"Product information",-1),ua={class:"flex items-center"},da={class:"text-lg text-gray-900 sm:text-xl"},ca={class:"mt-4 space-y-6"},pa={class:"text-base text-gray-500 break-words"},fa={class:"mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center"},va={class:"aspect-w-1 aspect-h-1 rounded-lg overflow-hidden"},ma=["src","title"],ga={class:"mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start"},ha={"aria-labelledby":"options-heading"},ba=p("h2",{id:"options-heading",class:"sr-only"},"Product options",-1),ya={class:"mt-1 flex justify-between gap-4"},wa={class:"relative block p-2 focus:outline-none"},xa={class:"mt-10"},_a=["onClick","disabled"],Sa={class:"mt-5"},Ea=["onClick"],Pa={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},Ta=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),ka={class:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},Ba={class:"mt-3 text-center sm:mt-5"},$a=ye(" Bidding "),Fa=p("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"USD",-1),Ra={class:"mt-1"},Aa=["hidden"],Da={class:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},Ca=["onClick"],Oa=["onClick"],Ia={__name:"ProductView",setup(e){const t=gt(),l=ht(),a=l.currentProduct,r=new bt,n=v(!1),o=v(a.price),i=v(a.endsIn),s=v("-- : -- : --");v(a.price+1);const d=v(!1),c=[{name:"Last bid made",description:o},{name:"Time Left",description:s}],f=Ne({outBidBy:a.price+1}),S=g(()=>({outBidBy:{required:St,minValue:Et(a.price+1),maxValue:Pt(1e5)}})),u=_t(S,f),m=async()=>{const B=await u.value.$validate();if(l.user.name===a.highestBidder){r.error("You are the highest bidder"),n.value=!1;return}B&&(d.value=!0,setTimeout(()=>d.value=!1,300),l.bidOnCurrentProduct(f.outBidBy),n.value=!1,o.value=a.price,i.value=a.endsIn,r.success("Bid was succesfull"))},h=()=>{n.value=!n.value},w=()=>{const B=i.value-Date.now();if(B>0){let T=new Date(B).getHours()-4,y=new Date(B).getMinutes(),R=new Date(B).getSeconds();T<10&&(T="0"+T),y<10&&(y="0"+y),R<10&&(R="0"+R),s.value=`${T}:${y}:${R}`}else s.value="expired",l.changeToInactive(),clearInterval(P)},P=setInterval(w,1e3);w();const $=()=>{t.push("/administration/edit")};return H(()=>clearInterval(P)),(B,T)=>(te(),ae(ne,null,[p("div",aa,[p("div",la,[p("div",na,[p("div",oa,[p("h1",ra,K(E(a).name),1)]),p("section",ia,[sa,p("div",ua,[p("p",da,"$"+K(E(a).price),1)]),p("div",ca,[p("p",pa,K(E(a).description),1)])])]),p("div",fa,[p("div",va,[p("img",{src:E(a).imageUrl,title:E(a).name,class:"w-full h-full object-center object-cover"},null,8,ma)])]),p("div",ga,[p("section",ha,[ba,p("form",null,[p("div",null,[p("span",null,"Highest Bidder: "+K(E(a).highestBidder===""?"None":E(l).currentProduct.highestBidder),1)]),p("div",null,[j(E(Ut),null,{default:V(()=>[p("div",ya,[(te(),ae(ne,null,De(c,y=>j(E(Wt),{as:"template",key:y.name,value:y},{default:V(({active:R,checked:_})=>[p("div",wa,[j(E(Yt),{as:"p",class:"text-base font-medium text-gray-900"},{default:V(()=>[ye(K(y.name),1)]),_:2},1024),j(E(zt),{as:"p",class:"mt-1 text-sm text-gray-500"},{default:V(()=>[ye(K(y.description),1)]),_:2},1024)])]),_:2},1032,["value"])),64))])]),_:1})]),p("div",xa,[p("button",{onClick:se(h,["prevent"]),disabled:s.value==="expired",class:"w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"},"Place a bid",8,_a)]),p("div",Sa,[E(l).user.isAdmin?(te(),ae("button",{key:0,onClick:se($,["prevent"]),class:"w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"},"Edit",8,Ea)):yt("",!0)])])])])])]),j(E(ot),{as:"template",show:n.value},{default:V(()=>[j(E(Vt),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:T[3]||(T[3]=y=>n.value=!1)},{default:V(()=>[p("div",Pa,[j(E(Ee),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:V(()=>[j(E(Ht),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),Ta,j(E(Ee),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:V(()=>[p("div",ka,[p("div",null,[p("div",Ba,[j(E(Gt),{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:V(()=>[$a]),_:1}),p("div",null,[Fa,p("div",Ra,[wt(p("input",{"onUpdate:modelValue":T[0]||(T[0]=y=>f.outBidBy=y),type:"number",name:"price",id:"price",class:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"},null,512),[[xt,f.outBidBy]])]),(te(!0),ae(ne,null,De(E(u).outBidBy.$errors,y=>(te(),ae("span",{hidden:d.value,key:y.$uid,class:"text-red-500"},K(y.$message),9,Aa))),128))])])]),p("div",Da,[p("button",{onClick:[se(m,["prevent"]),T[1]||(T[1]=y=>B.open=!1)],type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"},"Place Bid",8,Ca),p("button",{onClick:[se(h,["prevent"]),T[2]||(T[2]=y=>B.open=!1)],type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",ref:"cancelButtonRef"},"Cancel",8,Oa)])])]),_:1})])]),_:1})]),_:1},8,["show"])],64))}};export{Ia as default};