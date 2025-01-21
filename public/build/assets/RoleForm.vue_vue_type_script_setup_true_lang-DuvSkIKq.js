import{d as A,h as N,o as d,j as _,a as c,b as e,u as a,w as r,e as n,F as g,y as C,f as V,t as b,p as B,s as D,c as F,k as S}from"./app-OujeMPKJ.js";import{_ as $,b as M,a as P}from"./TextField.vue_vue_type_script_setup_true_lang-D0uCcfmF.js";import{_ as T}from"./InputError.vue_vue_type_script_setup_true_lang-BBBI-OAI.js";import{_ as j}from"./Button.vue_vue_type_script_setup_true_lang-DjIfUhW-.js";import{_ as z}from"./Switch.vue_vue_type_script_setup_true_lang-Ag_rRfbT.js";import{a as L,b as h,e as k,c as G,_ as H,d as x}from"./TableHeader.vue_vue_type_script_setup_true_lang-BTncHTpA.js";import{t as I,p as J}from"./BaseLayout.vue_vue_type_script_setup_true_lang-Cys1emLE.js";import{u as K}from"./useTokenedForm-DszL-CYS.js";import{c as O,a as w,d as Q}from"./index.esm-BnMIBz-S.js";const W={class:"col-span-2 flex flex-col gap-3"},X={class:"overflow-x-auto"},te=A({__name:"RoleForm",props:{role:{}},setup(v){const t=v,y=N(()=>!!(t!=null&&t.role)),m=[{id:1,name:"View Users",description:"Allows viewing the user list."},{id:2,name:"Edit Users",description:"Allows editing user details."},{id:3,name:"Delete Users",description:"Allows deleting user accounts."},{id:4,name:"Manage Roles",description:"Allows managing roles and permissions."}],E=O({name:w().required("Role Name is required"),description:w().required("Role Description is required"),permissions:Q().required("Role Permission is required")}),s=K({name:"",description:"",permissions:m.map(f=>({id:f.id,granted:!1}))},E),R=()=>{s.validate(),!s.hasErrors&&s.post("/roles",{onSuccess:()=>{s.reset(),B.success("Role created successfully")},onError:I,onErrors:J})};return(f,i)=>(d(),_(g,null,[c("form",{id:"role-form",onSubmit:V(R,["prevent"]),class:"mb-4 grid grid-cols-2 gap-x-5 gap-y-5"},[e($,{id:"name",name:"name",label:"Role Name",placeholder:"Enter role name","error-message":a(s).errors.name},null,8,["error-message"]),e($,{id:"description",name:"description",label:"Role Description",placeholder:"Enter role description","error-message":a(s).errors.description},null,8,["error-message"]),c("div",W,[e(a(M),{class:"mb-2 block text-base font-medium"},{default:r(()=>i[0]||(i[0]=[n("Permissions")])),_:1}),c("div",X,[e(H,null,{default:r(()=>[e(L,{class:"bg-primary-foreground"},{default:r(()=>[e(h,null,{default:r(()=>[e(k,{class:"text-left"},{default:r(()=>i[1]||(i[1]=[n("Permission")])),_:1}),e(k,{class:"text-left"},{default:r(()=>i[2]||(i[2]=[n("Action")])),_:1})]),_:1})]),_:1}),e(G,null,{default:r(()=>[(d(),_(g,null,C(m,(o,U)=>e(h,{key:o.id,class:D(U%2===0?"bg-secondary dark:bg-hover":"")},{default:r(()=>[e(x,{class:"flex gap-3"},{default:r(()=>[n(b(o.name)+" ",1),o.description?(d(),F(P,{key:0,align:"end",description:o.description},null,8,["description"])):S("",!0)]),_:2},1024),e(x,null,{default:r(()=>{var p;return[e(a(z),{id:`permission-${o.id}`,checked:(p=a(s).permissions.find(l=>l.id===o.id))==null?void 0:p.granted,"onUpdate:checked":l=>{const u=a(s).permissions.find(q=>q.id===o.id);u&&(u.granted=l)}},null,8,["id","checked","onUpdate:checked"])]}),_:2},1024)]),_:2},1032,["class"])),64)),e(T,{message:a(s).errors.permissions},null,8,["message"])]),_:1})]),_:1})])])],32),e(j,{type:"submit",form:"role-form",loading:a(s).processing,disabled:a(s).processing},{default:r(()=>[n(b(y.value?"Update":"Create")+" Role ",1)]),_:1},8,["loading","disabled"])],64))}});export{te as _};
