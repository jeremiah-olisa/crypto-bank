import{_ as g}from"./Button.vue_vue_type_script_setup_true_lang-DjIfUhW-.js";import{_ as w}from"./Input.vue_vue_type_script_setup_true_lang-CLC0zMod.js";import{s as P,_ as V,a as p}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-BgZwA7jb.js";import{d as k,o,c,w as t,b as s,u as e,j as b,y as x,F as $,a as m,e as i,k as y,t as d,z as h,g as N,G as B}from"./app-OujeMPKJ.js";import{_ as C}from"./index-k1XJJ573.js";import{_ as z}from"./Card.vue_vue_type_script_setup_true_lang-D3la7IQq.js";import{_ as D,a as F,b as f,c as U,d as u,e as j}from"./TableHeader.vue_vue_type_script_setup_true_lang-BTncHTpA.js";import"./BaseLayout.vue_vue_type_script_setup_true_lang-Cys1emLE.js";import"./wallet-17B2j0Co.js";import"./circle-help-nC0T16_c.js";const A={class:"font-medium"},E=k({__name:"PermissionList",setup(v){const r=[{id:1,name:"View Dashboard",rolesCount:5,usersCount:15},{id:2,name:"Manage Users",rolesCount:3,usersCount:8},{id:3,name:"Edit Permissions",rolesCount:2,usersCount:4},{id:4,name:"Delete Records",rolesCount:1,usersCount:2}],_=["Permission Name","Roles","Users"];return(a,l)=>(o(),c(e(z),{class:"mb-6"},{default:t(()=>[s(e(P),null,{default:t(()=>[s(e(D),{class:"min-w-[800px]"},{default:t(()=>[s(e(F),null,{default:t(()=>[s(e(f),null,{default:t(()=>[(o(),b($,null,x(_,n=>s(e(j),{key:n,class:"px-8 py-5"},{default:t(()=>[i(d(n),1)]),_:2},1024)),64))]),_:1})]),_:1}),s(e(U),null,{default:t(()=>[r.length===0?(o(),c(e(f),{key:0},{default:t(()=>[s(e(u),{colspan:"4",class:"m-4 bg-slate-200/20 py-24 text-center"},{default:t(()=>[l[1]||(l[1]=m("p",{class:"mb-4 text-2xl"}," No permissions available ",-1)),s(e(g),{variant:"outline",class:"rounded-full"},{default:t(()=>l[0]||(l[0]=[i(" Add a Permission ")])),_:1})]),_:1})]),_:1})):y("",!0),r.length>0?(o(),b($,{key:1},x(r,n=>s(e(f),{key:n.id,class:"[&>td]:border-b [&>td]:border-border [&>td]:font-normal"},{default:t(()=>[s(e(u),null,{default:t(()=>[m("p",A,d(n.name),1)]),_:2},1024),s(e(u),null,{default:t(()=>[s(e(C),{variant:"secondary"},{default:t(()=>[i(d(n.rolesCount),1)]),_:2},1024)]),_:2},1024),s(e(u),null,{default:t(()=>[s(e(C),{variant:"secondary"},{default:t(()=>[i(d(n.usersCount),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)):y("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}}),G={class:"mb-6 mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center"},L={class:"flex flex-col items-center gap-3 md:w-3/4 md:flex-row lg:w-2/4"},R={class:"relative w-full"},Q=k({__name:"Index",setup(v){const r=h({filters:{search:""}});return(_,a)=>(o(),c(V,null,{default:t(()=>[s(e(N),{title:"Permissions"}),m("div",G,[m("div",L,[m("div",R,[s(e(w),{modelValue:r.filters.search,"onUpdate:modelValue":a[0]||(a[0]=l=>r.filters.search=l),type:"search",placeholder:"Find Permission",class:"rounded-lg ps-9"},null,8,["modelValue"]),s(p,{size:18,name:"Search",strokeWidth:2,class:"absolute inset-y-0 start-3 my-auto text-muted"})])]),s(e(g),{onClick:a[1]||(a[1]=l=>e(B).visit(_.route("user-management.permissions")))},{default:t(()=>[s(p,{name:"Plus",strokeWidth:2,size:18,class:"me-2"}),a[2]||(a[2]=i(" Add Permission "))]),_:1})]),s(E)]),_:1}))}});export{Q as default};
