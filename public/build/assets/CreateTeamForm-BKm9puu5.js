import{T as d,c as u,w as t,o as _,f as m,a as s,b as o,t as i,u as r,n as f}from"./app-BL-vyfWz.js";import{_ as g}from"./FormSection-La5E8Qcb.js";import{_ as h,a as v}from"./TextInput-C3Hyj0EG.js";import{_ as n}from"./InputLabel-B8x0cNqI.js";import{_ as $}from"./PrimaryButton-COmV8SrF.js";import"./SectionTitle-CMuR80YO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={class:"col-span-6"},b={class:"flex items-center mt-2"},w=["src","alt"],x={class:"ms-4 leading-tight"},y={class:"text-gray-900 dark:text-white"},V={class:"text-sm text-gray-700 dark:text-gray-300"},k={class:"col-span-6 sm:col-span-4"},O={__name:"CreateTeamForm",setup(C){const a=d({name:""}),p=()=>{a.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(l,e)=>(_(),u(g,{onSubmitted:p},{title:t(()=>e[1]||(e[1]=[m(" Team Details ")])),description:t(()=>e[2]||(e[2]=[m(" Create a new team to collaborate with others on projects. ")])),form:t(()=>[s("div",T,[o(n,{value:"Team Owner"}),s("div",b,[s("img",{class:"object-cover size-12 rounded-full",src:l.$page.props.auth.user.profile_photo_url,alt:l.$page.props.auth.user.name},null,8,w),s("div",x,[s("div",y,i(l.$page.props.auth.user.name),1),s("div",V,i(l.$page.props.auth.user.email),1)])])]),s("div",k,[o(n,{for:"name",value:"Team Name"}),o(h,{id:"name",modelValue:r(a).name,"onUpdate:modelValue":e[0]||(e[0]=c=>r(a).name=c),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o(v,{message:r(a).errors.name,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[o($,{class:f({"opacity-25":r(a).processing}),disabled:r(a).processing},{default:t(()=>e[3]||(e[3]=[m(" Create ")])),_:1},8,["class","disabled"])]),_:1}))}};export{O as default};
