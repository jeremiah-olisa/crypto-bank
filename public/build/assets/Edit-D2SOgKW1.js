import{A as D}from"./ApplicationLogo-DY2_XmlS.js";import{d as f,m as E,K as M,j as y,y as B,h as m,e,D as g,k as $,a2 as C,a as o,w as a,af as N,o as d,n as u,c as _,u as h,P as b,t as x,i as P,f as l,H as V,b as j}from"./app-KYtJ4ur7.js";import{_ as z}from"./DeleteUserForm.vue_vue_type_script_setup_true_lang-CfEq7pZt.js";import{_ as S}from"./UpdatePasswordForm.vue_vue_type_script_setup_true_lang-B9uJEkjg.js";import{_ as A}from"./UpdateProfileInformationForm.vue_vue_type_script_setup_true_lang-BJyRYBbu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DangerButton-BF6XNjHY.js";import"./TextInput.vue_vue_type_script_setup_true_lang-BnnrFm8l.js";import"./InputLabel.vue_vue_type_script_setup_true_lang-DPDZvKNk.js";import"./SecondaryButton.vue_vue_type_script_setup_true_lang-Iuv9f7eI.js";import"./PrimaryButton-jIlRGxZA.js";const O={class:"relative"},T=f({__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:"py-1 bg-white dark:bg-gray-700"}},setup(n){const r=n,t=p=>{i.value&&p.key==="Escape"&&(i.value=!1)};E(()=>document.addEventListener("keydown",t)),M(()=>document.removeEventListener("keydown",t));const s=y(()=>({48:"w-48"})[r.width.toString()]),v=y(()=>r.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":r.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),i=B(!1);return(p,c)=>(d(),m("div",O,[e("div",{onClick:c[0]||(c[0]=w=>i.value=!i.value)},[g(p.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:c[1]||(c[1]=w=>i.value=!1)},null,512),[[C,i.value]]),o(N,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:a(()=>[$(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[s.value,v.value]]),style:{display:"none"},onClick:c[2]||(c[2]=w=>i.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",p.contentClasses])},[g(p.$slots,"content")],2)],2),[[C,i.value]])]),_:3})]))}}),L=f({__name:"DropdownLink",props:{href:{}},setup(n){return(r,t)=>(d(),_(h(b),{href:r.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"},{default:a(()=>[g(r.$slots,"default")]),_:3},8,["href"]))}}),F=f({__name:"NavLink",props:{href:{},active:{type:Boolean}},setup(n){const r=n,t=y(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(s,v)=>(d(),_(h(b),{href:s.href,class:u(t.value)},{default:a(()=>[g(s.$slots,"default")]),_:3},8,["href","class"]))}}),k=f({__name:"ResponsiveNavLink",props:{href:{},active:{type:Boolean}},setup(n){const r=n,t=y(()=>r.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(s,v)=>(d(),_(h(b),{href:s.href,class:u(t.value)},{default:a(()=>[g(s.$slots,"default")]),_:3},8,["href","class"]))}}),H={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},K={class:"border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800"},R={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},U={class:"flex h-16 justify-between"},q={class:"flex"},G={class:"flex shrink-0 items-center"},I={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},J={class:"hidden sm:ms-6 sm:flex sm:items-center"},Q={class:"relative ms-3"},W={class:"inline-flex rounded-md"},X={type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"},Y={class:"-me-2 flex items-center sm:hidden"},Z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ee={class:"space-y-1 pb-3 pt-2"},te={class:"border-t border-gray-200 pb-1 pt-4 dark:border-gray-600"},se={class:"px-4"},re={class:"text-base font-medium text-gray-800 dark:text-gray-200"},oe={class:"text-sm font-medium text-gray-500"},ae={class:"mt-3 space-y-1"},ne={key:0,class:"bg-white shadow dark:bg-gray-800"},ie={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},de=f({__name:"AuthenticatedLayout",setup(n){const r=B(!1);return(t,s)=>(d(),m("div",null,[e("div",H,[e("nav",K,[e("div",R,[e("div",U,[e("div",q,[e("div",G,[o(h(b),{href:t.route("dashboard")},{default:a(()=>[o(D,{class:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})]),_:1},8,["href"])]),e("div",I,[o(F,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>s[1]||(s[1]=[l(" Dashboard ")])),_:1},8,["href","active"])])]),e("div",J,[e("div",Q,[o(T,{align:"right",width:"48"},{trigger:a(()=>[e("span",W,[e("button",X,[l(x(t.$page.props.auth.user.name)+" ",1),s[2]||(s[2]=e("svg",{class:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:a(()=>[o(L,{href:t.route("profile.edit")},{default:a(()=>s[3]||(s[3]=[l(" Profile ")])),_:1},8,["href"]),o(L,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>s[4]||(s[4]=[l(" Log Out ")])),_:1},8,["href"])]),_:1})])]),e("div",Y,[e("button",{onClick:s[0]||(s[0]=v=>r.value=!r.value),class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"},[(d(),m("svg",Z,[e("path",{class:u({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",ee,[o(k,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>s[5]||(s[5]=[l(" Dashboard ")])),_:1},8,["href","active"])]),e("div",te,[e("div",se,[e("div",re,x(t.$page.props.auth.user.name),1),e("div",oe,x(t.$page.props.auth.user.email),1)]),e("div",ae,[o(k,{href:t.route("profile.edit")},{default:a(()=>s[6]||(s[6]=[l(" Profile ")])),_:1},8,["href"]),o(k,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>s[7]||(s[7]=[l(" Log Out ")])),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),m("header",ne,[e("div",ie,[g(t.$slots,"header")])])):P("",!0),e("main",null,[g(t.$slots,"default")])])]))}}),le={class:"py-12"},ue={class:"mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"},ge={class:"bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"},ce={class:"bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"},fe={class:"bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"},Ce=f({__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{}},setup(n){return(r,t)=>(d(),m(V,null,[o(h(j),{title:"Profile"}),o(de,null,{header:a(()=>t[0]||(t[0]=[e("h2",{class:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"}," Profile ",-1)])),default:a(()=>[e("div",le,[e("div",ue,[e("div",ge,[o(A,{"must-verify-email":r.mustVerifyEmail,status:r.status,class:"max-w-xl"},null,8,["must-verify-email","status"])]),e("div",ce,[o(S,{class:"max-w-xl"})]),e("div",fe,[o(z,{class:"max-w-xl"})])])])]),_:1})],64))}});export{Ce as default};
