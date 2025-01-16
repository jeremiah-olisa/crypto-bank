import{d as f,n as w,c as g,w as i,o as y,a as t,b as a,e as m,u as r,P as b,g as v,f as h,p as _,G as k}from"./app-DFljYMZa.js";import{_ as x}from"./AuthLayout.vue_vue_type_script_setup_true_lang-t7Qr3zJJ.js";import{_ as V}from"./Checkbox.vue_vue_type_script_setup_true_lang-CIIp30CN.js";import{_ as q}from"./InputError.vue_vue_type_script_setup_true_lang-0D3gaG7R.js";import{c as E,a as n,b as $,_ as l}from"./index.esm-CZRU5z98.js";import{_ as P}from"./Button.vue_vue_type_script_setup_true_lang-Ddf2tJX1.js";import{t as U,p as T}from"./index-C-oBn6or.js";import{b as S}from"./index-0KUYRswL.js";import"./BaseLayout.vue_vue_type_script_setup_true_lang-CgdvRZSa.js";import"./Input.vue_vue_type_script_setup_true_lang-CnpJgNNp.js";import"./circle-help-C9pxtJqD.js";const A={class:"space-y-5"},I={class:"flex flex-col gap-2"},N={class:"mt-4 flex items-center gap-2"},z=f({__name:"Register",setup(Y){const u=E({_token:n().required("Token is required"),name:n().required("Name is required"),email:n().email("Invalid email").required("Email is required"),password:n().min(6,"Password must be at least 6 characters").required("Password is required"),password_confirmation:n().min(6,"Password must be at least 6 characters").test("passwordMatch","Password do not match",function(d){return this.parent.password===d}),terms:$().not([!0],"You must accept the terms").required("Terms acceptance is required")}),p=w(),e=S({_token:p.props.csrf_token,name:"",email:"",password:"",password_confirmation:"",terms:!1},{schema:u}),c=()=>{e.validate(),!e.hasErrors&&e.post(route("register"),{onSuccess:()=>{e.reset(),_.success("User registered successfully"),k.visit(route("dashboard"))},onError:U,onErrors:T})};return(d,s)=>(y(),g(x,{"form-title":"Start Trading Crypto Today",title:"Welcome to the Future of Digital Trading!",subtitle:"Secure. Fast. Transparent.",description:"Experience seamless crypto swaps on our platform, where users enjoy a secure, fast, and intuitive exchange environment. With industry-leading security protocols and real-time market insights, you can trade digital assets with confidence. Whether you're an experienced trader or new to the crypto space, our platform ensures smooth transactions and offers you full control over your crypto portfolio. Join a thriving community of traders and unlock endless possibilities in the world of cryptocurrency."},{"form-action":i(()=>[s[9]||(s[9]=t("p",{class:"text-muted"},"Already have an account?",-1)),a(r(b),{href:d.route("login"),class:"text-primary underline underline-offset-2"},{default:i(()=>s[8]||(s[8]=[m(" Login ")])),_:1},8,["href"])]),default:i(()=>[a(r(v),{title:"Register"}),t("form",{onSubmit:h(c,["prevent"])},[t("div",A,[a(l,{id:"name",type:"text",label:"Full Name",name:"name",placeholder:"Enter Your Full name",class:"mt-1 block w-full",modelValue:r(e).name,"onUpdate:modelValue":s[0]||(s[0]=o=>r(e).name=o),required:"",autofocus:"",autocomplete:"name","error-message":r(e).errors.name,onInput:s[1]||(s[1]=o=>r(e).validate("name"))},null,8,["modelValue","error-message"]),a(l,{id:"email",type:"email",label:"Email Address",name:"email",placeholder:"Enter Your Email Address",class:"mt-1 block w-full",modelValue:r(e).email,"onUpdate:modelValue":s[2]||(s[2]=o=>r(e).email=o),required:"",autocomplete:"username","error-message":r(e).errors.email,onInput:s[3]||(s[3]=o=>r(e).validate("email"))},null,8,["modelValue","error-message"]),a(l,{id:"password",type:"password",label:"Password",name:"password",placeholder:"Enter Your Password",class:"mt-1 block w-full",modelValue:r(e).password,"onUpdate:modelValue":s[4]||(s[4]=o=>r(e).password=o),required:"",autocomplete:"new-password","error-message":r(e).errors.password,onInput:s[5]||(s[5]=o=>r(e).validate("password"))},null,8,["modelValue","error-message"]),a(l,{id:"password_confirmation",type:"password",label:"Confirm Password",name:"password_confirmation",placeholder:"Enter Your Password Again",class:"mt-1 block w-full",modelValue:r(e).password_confirmation,"onUpdate:modelValue":s[6]||(s[6]=o=>r(e).password_confirmation=o),required:"",autocomplete:"new-password","error-message":r(e).errors.password_confirmation,onInput:s[7]||(s[7]=o=>r(e).validate("password_confirmation"))},null,8,["modelValue","error-message"])]),t("div",I,[t("div",N,[a(V,{id:"terms",class:"h-4 w-4 rounded border",checked:r(e).terms,"onUpdate:checked":o=>{r(e).validate("terms"),r(e).terms=o}},null,8,["checked","onUpdate:checked"]),s[10]||(s[10]=t("label",{for:"terms",class:"text-[13px] font-medium leading-none"}," By registering you agree to our terms and condition ",-1))]),a(q,{message:r(e).errors.terms},null,8,["message"])]),a(r(P),{disabled:r(e).processing,loading:r(e).processing,type:"submit",class:"!mt-8 w-full"},{default:i(()=>s[11]||(s[11]=[m("Sign Up")])),_:1},8,["disabled","loading"])],32)]),_:1}))}});export{z as default};
