import{_ as b}from"./Checkbox.vue_vue_type_script_setup_true_lang-Dpd90J-u.js";import{c as y,a as d,b as h,_ as m}from"./index.esm-DJ469StR.js";import{_ as v}from"./Button.vue_vue_type_script_setup_true_lang-B3IF-MuA.js";import{b as _,_ as x}from"./index-ZNn1yWl4.js";import{t as E,p as $}from"./index-BYcfy21X.js";import{d as k,r as u,c as V,w as i,o as q,a as t,b as o,e as n,u as s,P as p,p as I,G as P}from"./app-Db3XvBrb.js";const C={class:"space-y-5"},S={class:"mt-3 flex justify-between"},A={class:"flex flex-col gap-2"},B={class:"flex items-center gap-2"},J=k({__name:"Login",props:{canResetPassword:{type:Boolean},status:{}},setup(L){const f=y({email:d().email("Invalid email").required("Email is required"),password:d().min(6,"Password must be at least 6 characters").required("Password is required"),remember:h().required()}),e=_({email:"",password:"",remember:!1},{schema:f}),c=()=>{e.validate(),!e.hasErrors&&e.post(route("login"),{onSuccess:()=>{e.reset("password"),I.success("Login successful"),P.visit(route("dashboard"))},onError:E,onErrors:$})};return(l,r)=>{const g=u("Head"),w=u("InputError");return q(),V(x,{"form-title":"Sign In",title:"Welcome Back to the Future of Crypto Trading!",subtitle:"Your Digital Assets Are Just a Click Away",description:"Sign in to access your crypto portfolio and start trading with ease. Our platform offers secure, fast, and transparent exchanges, providing you with everything you need to manage your digital assets efficiently. Join a community of like-minded traders and enjoy the power of seamless transactions. Let’s continue shaping the future of crypto, one trade at a time."},{"form-action":i(()=>[r[5]||(r[5]=t("p",{class:"text-muted"},"New user?",-1)),o(s(p),{prefetch:"",href:l.route("register"),class:"text-primary underline underline-offset-2"},{default:i(()=>r[4]||(r[4]=[n(" Create an Account ")])),_:1},8,["href"])]),default:i(()=>[o(g,{title:"Log in"}),t("form",{onSubmit:c},[t("div",C,[o(m,{id:"email",name:"email",label:"Email",placeholder:"Enter email",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=a=>s(e).email=a),"error-message":s(e).errors.email,required:"",autofocus:"",autocomplete:"username",onInput:r[1]||(r[1]=a=>s(e).validate("email"))},null,8,["modelValue","error-message"]),o(m,{id:"password",type:"password",name:"password",label:"Password",placeholder:"Enter password",required:"",autofocus:"",autocomplete:"current-password",modelValue:s(e).password,"onUpdate:modelValue":r[2]||(r[2]=a=>s(e).password=a),"error-message":s(e).errors.password,onInput:r[3]||(r[3]=a=>s(e).validate("password"))},null,8,["modelValue","error-message"])]),t("div",S,[t("div",A,[t("div",B,[o(b,{id:"remember",class:"h-4 w-4 rounded border",checked:s(e).remember,"onUpdate:checked":a=>{s(e).validate("remember"),s(e).remember=a}},null,8,["checked","onUpdate:checked"]),r[6]||(r[6]=t("label",{for:"remember",class:"text-sm font-medium leading-none"},"Remember me",-1))]),o(w,{message:s(e).errors.remember},null,8,["message"])]),o(s(p),{prefetch:"",href:l.route("password.request"),class:"text-sm text-primary underline-offset-2 transition-all hover:underline"},{default:i(()=>r[7]||(r[7]=[n(" Forget Password? ")])),_:1},8,["href"])]),o(v,{disabled:s(e).processing,loading:s(e).processing,type:"submit",class:"!mt-8 w-full"},{default:i(()=>r[8]||(r[8]=[n("Sign In")])),_:1},8,["disabled","loading"])],32)]),_:1})}}});export{J as default};
