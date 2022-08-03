import{o,z as g,A as r,B as y,a as k,u as C,i as B,C as $,c as i,b as e,e as t,w as z,v as P,F as x,d as f,t as h,D as w,E as M}from"./index.fab6f324.js";function N(u,a){return o(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])}function V(u,a){return o(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])}function j(u,a){return o(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])}const S={class:"bg-white"},D={class:"mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8"},L={class:"space-y-12"},A={class:"w-full"},E=e("label",{for:"search",class:"sr-only"},"Search",-1),F={class:"relative"},I={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"},R={role:"list",class:"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"},T={class:"space-y-4"},U={class:"aspect-w-3 aspect-h-2"},H=["src"],q={class:"space-y-2"},G={class:"flex justify-between items-center text-lg leading-6 font-medium space-y-1"},J=["title"],K=e("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"},"Bid now",-1),O={class:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-[20px]"},Q={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},W=e("div",null,null,-1),X={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},Y=["disabled"],Z=e("span",{class:"sr-only"},"Previous",-1),ee=["disabled"],te=e("span",{class:"sr-only"},"Next",-1),re={__name:"HomeView",setup(u){const a=y(),_=k(),p=C(),m=B(""),d=p.products,l=Number(a.params.id),b=()=>{d.value=p.filterProducts(m.value)};return(se,n)=>{const v=$("router-link");return o(),i("div",S,[e("div",D,[e("div",L,[e("div",A,[E,e("div",F,[e("div",I,[r(t(j),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})]),z(e("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>m.value=s),onInput:b,id:"search",name:"search",class:"block w-full border-[whitesmoke] border-[3px] focus:border-white rounded-md py-2 pl-10 pr-3 text-sm sm:text-sm",placeholder:"Search",type:"search"},null,544),[[P,m.value]])])]),e("ul",R,[(o(!0),i(x,null,f(t(d)[t(l)-1],s=>(o(),i("li",{key:s.id},[e("div",T,[e("div",U,[e("img",{class:"object-cover shadow-lg rounded-lg",src:s.imageUrl,alt:""},null,8,H)]),e("div",q,[e("div",G,[e("div",null,[e("h3",null,h(s.name),1),e("p",{title:s.summary,class:"text-indigo-600 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[250px]"},h(s.summary),9,J)]),r(v,{onClick:c=>t(p).setCurrentProduct(s),to:"/product"},{default:w(()=>[K]),_:2},1032,["onClick"])])])])]))),128))])]),e("div",O,[e("div",Q,[W,e("div",null,[e("nav",X,[e("button",{onClick:n[1]||(n[1]=s=>t(_).push(`/home/page/${t(l)-1}`)),disabled:t(l)===1,class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[Z,r(t(N),{class:"h-5 w-5","aria-hidden":"true"})],8,Y),(o(!0),i(x,null,f(t(d),(s,c)=>(o(),i("div",{key:c},[r(v,{to:`/home/page/${c+1}`,"aria-current":"page",class:"z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"},{default:w(()=>[M(h(c+1),1)]),_:2},1032,["to"])]))),128)),e("button",{onClick:n[2]||(n[2]=s=>t(_).push(`/home/page/${t(l)+1}`)),disabled:t(l)===t(d).length,class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[te,r(t(V),{class:"h-5 w-5","aria-hidden":"true"})],8,ee)])])])])])])}}};export{re as default};