import{d as g,r as d,h as w,b as o,w as n,F as b,o as _,a,u as r,P as u,e as i,f as y}from"./app-2Gy4-EAX.js";import{_ as x}from"./Checkbox.vue_vue_type_script_setup_true_lang-BRMmcXpu.js";import{_ as p}from"./TextField.vue_vue_type_script_setup_true_lang-B4UpJ2CZ.js";import{_ as h}from"./Button.vue_vue_type_script_setup_true_lang-DhVz6_Q1.js";import{u as v}from"./index-DZS1BOIp.js";import{_ as V}from"./AuthLayout.vue_vue_type_script_setup_true_lang-C-RQjEpI.js";import"./Input.vue_vue_type_script_setup_true_lang-I1VmrTnK.js";import"./BaseLayout.vue_vue_type_script_setup_true_lang-DcgM3a9P.js";import"./InputError.vue_vue_type_script_setup_true_lang-nq1FJVQp.js";import"./circle-help-CCG8ssW3.js";const k={class:"space-y-5"},C={class:"mt-3 flex justify-between"},E={class:"flex flex-col gap-2"},B={class:"flex items-center gap-2"},R=g({__name:"Login",props:{canResetPassword:{type:Boolean},status:{}},setup(F){const{form:s,submit:l}=v();return(m,e)=>{const f=d("Head"),c=d("InputError");return _(),w(b,null,[o(f,{title:"Log in"}),o(V,{"form-title":"Sign In",title:"Welcome Back to the Future of Crypto Trading!",subtitle:"Your Digital Assets Are Just a Click Away",description:"Sign in to access your crypto portfolio and start trading with ease. Our platform offers secure, fast, and transparent exchanges, providing you with everything you need to manage your digital assets efficiently. "},{"form-action":n(()=>[e[4]||(e[4]=a("p",{class:"text-muted"},"New user?",-1)),o(r(u),{href:m.route("register"),class:"text-primary underline underline-offset-2"},{default:n(()=>e[3]||(e[3]=[i(" Create an Account ")])),_:1},8,["href"])]),default:n(()=>[a("form",{onSubmit:e[2]||(e[2]=y((...t)=>r(l)&&r(l)(...t),["prevent"]))},[a("div",k,[o(p,{id:"email",name:"email",label:"Email",placeholder:"Enter email",modelValue:r(s).email,"onUpdate:modelValue":e[0]||(e[0]=t=>r(s).email=t),"error-message":r(s).errors.email,required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue","error-message"]),o(p,{id:"password",type:"password",name:"password",label:"Password",placeholder:"Enter password",required:"",autofocus:"",autocomplete:"current-password",modelValue:r(s).password,"onUpdate:modelValue":e[1]||(e[1]=t=>r(s).password=t),"error-message":r(s).errors.password},null,8,["modelValue","error-message"])]),a("div",C,[a("div",E,[a("div",B,[o(x,{id:"remember",class:"h-4 w-4 rounded border",checked:r(s).remember,"onUpdate:checked":t=>{r(s).remember=t}},null,8,["checked","onUpdate:checked"]),e[5]||(e[5]=a("label",{for:"remember",class:"text-sm font-medium leading-none"},"Remember me",-1))]),o(c,{message:r(s).errors.remember},null,8,["message"])]),o(r(u),{href:m.route("password.request"),class:"text-sm text-primary underline-offset-2 transition-all hover:underline"},{default:n(()=>e[6]||(e[6]=[i(" Forget Password? ")])),_:1},8,["href"])]),o(h,{disabled:r(s).processing,loading:r(s).processing,type:"submit",class:"!mt-8 w-full"},{default:n(()=>e[7]||(e[7]=[i("Sign In")])),_:1},8,["disabled","loading"])],32)]),_:1})],64)}}});export{R as default};
