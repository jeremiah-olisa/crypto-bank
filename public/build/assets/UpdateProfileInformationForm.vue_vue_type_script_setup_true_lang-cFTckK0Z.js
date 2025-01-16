import{d as y,J as v,D as x,j as l,a as s,b as r,u as t,e as m,w as d,i as k,I as _,k as f,T as V,f as b,o as u,P as h}from"./app-D1226zYi.js";import{_ as p}from"./InputError.vue_vue_type_script_setup_true_lang-Cg-c6W6B.js";import{_ as c}from"./InputLabel.vue_vue_type_script_setup_true_lang-DGjr9BgZ.js";import{P as w}from"./PrimaryButton-D5gkPpUn.js";import{_ as g}from"./TextInput.vue_vue_type_script_setup_true_lang-sW_XHWBq.js";const P={key:0},C={class:"mt-2 text-sm text-gray-800 dark:text-gray-200"},N={class:"mt-2 text-sm font-medium text-green-600 dark:text-green-400"},S={class:"flex items-center gap-4"},B={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},D=y({__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{},status:{}},setup(E){const n=v().props.auth.user,a=x({name:n.name,email:n.email});return(o,e)=>(u(),l("section",null,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Profile Information "),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1)),s("form",{onSubmit:e[2]||(e[2]=b(i=>t(a).patch(o.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[r(c,{for:"name",value:"Name"}),r(g,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(a).name,"onUpdate:modelValue":e[0]||(e[0]=i=>t(a).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),r(p,{class:"mt-2",message:t(a).errors.name},null,8,["message"])]),s("div",null,[r(c,{for:"email",value:"Email"}),r(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(a).email,"onUpdate:modelValue":e[1]||(e[1]=i=>t(a).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),r(p,{class:"mt-2",message:t(a).errors.email},null,8,["message"])]),o.mustVerifyEmail&&t(n).email_verified_at===null?(u(),l("div",P,[s("p",C,[e[4]||(e[4]=m(" Your email address is unverified. ")),r(t(h),{href:o.route("verification.send"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"},{default:d(()=>e[3]||(e[3]=[m(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),k(s("div",N," A new verification link has been sent to your email address. ",512),[[_,o.status==="verification-link-sent"]])])):f("",!0),s("div",S,[r(w,{disabled:t(a).processing},{default:d(()=>e[5]||(e[5]=[m("Save")])),_:1},8,["disabled"]),r(V,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:d(()=>[t(a).recentlySuccessful?(u(),l("p",B," Saved. ")):f("",!0)]),_:1})])],32)]))}});export{D as _};
