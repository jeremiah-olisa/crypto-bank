import{o as n,j as l,b as i,w as e,i as k,a as o,m as x,O as h,T as V,y,Q as b,c as B,e as a,F as S,L as C,s as L,u as d,S as A,n as O,t as p}from"./app-Db3XvBrb.js";import{_ as $,a as H}from"./DialogModal-DaC5xtUM.js";import{_ as M}from"./InputError.vue_vue_type_script_setup_true_lang-BeqLquso.js";import{P as v}from"./PrimaryButton-Co83VAZZ.js";import{a as T}from"./SecondaryButton.vue_vue_type_script_setup_true_lang-B5qOTaRy.js";import{a as F}from"./TextInput.vue_vue_type_script_setup_true_lang-ChxhIRU2.js";const I={class:"text-sm text-gray-600 dark:text-gray-400"},N={__name:"ActionMessage",props:{on:Boolean},setup(m){return(u,c)=>(n(),l("div",null,[i(V,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:e(()=>[k(o("div",I,[x(u.$slots,"default")],512),[[h,m.on]])]),_:3})]))}},P={key:0,class:"mt-5 space-y-6"},j={key:0,class:"size-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},z={key:1,class:"size-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},D={class:"ms-3"},U={class:"text-sm text-gray-600 dark:text-gray-400"},E={class:"text-xs text-gray-500"},K={key:0,class:"font-semibold text-green-500"},Q={key:1},q={class:"mt-5 flex items-center"},G={class:"mt-4"},es={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(m){const u=y(!1),c=y(null),r=b({password:""}),g=()=>{u.value=!0,setTimeout(()=>c.value.focus(),250)},w=()=>{r.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>c.value.focus(),onFinish:()=>r.reset()})},f=()=>{u.value=!1,r.reset()};return(J,s)=>(n(),B($,null,{title:e(()=>s[1]||(s[1]=[a(" Browser Sessions ")])),description:e(()=>s[2]||(s[2]=[a(" Manage and log out your active sessions on other browsers and devices. ")])),content:e(()=>[s[11]||(s[11]=o("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1)),m.sessions.length>0?(n(),l("div",P,[(n(!0),l(S,null,C(m.sessions,(t,_)=>(n(),l("div",{key:_,class:"flex items-center"},[o("div",null,[t.agent.is_desktop?(n(),l("svg",j,s[3]||(s[3]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"},null,-1)]))):(n(),l("svg",z,s[4]||(s[4]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"},null,-1)])))]),o("div",D,[o("div",U,p(t.agent.platform?t.agent.platform:"Unknown")+" - "+p(t.agent.browser?t.agent.browser:"Unknown"),1),o("div",null,[o("div",E,[a(p(t.ip_address)+", ",1),t.is_current_device?(n(),l("span",K,"This device")):(n(),l("span",Q,"Last active "+p(t.last_active),1))])])])]))),128))])):L("",!0),o("div",q,[i(v,{onClick:g},{default:e(()=>s[5]||(s[5]=[a(" Log Out Other Browser Sessions ")])),_:1}),i(N,{on:d(r).recentlySuccessful,class:"ms-3"},{default:e(()=>s[6]||(s[6]=[a(" Done. ")])),_:1},8,["on"])]),i(H,{show:u.value,onClose:f},{title:e(()=>s[7]||(s[7]=[a(" Log Out Other Browser Sessions ")])),content:e(()=>[s[8]||(s[8]=a(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. ")),o("div",G,[i(F,{ref_key:"passwordInput",ref:c,modelValue:d(r).password,"onUpdate:modelValue":s[0]||(s[0]=t=>d(r).password=t),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:A(w,["enter"])},null,8,["modelValue"]),i(M,{message:d(r).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[i(T,{onClick:f},{default:e(()=>s[9]||(s[9]=[a(" Cancel ")])),_:1}),i(v,{class:O(["ms-3",{"opacity-25":d(r).processing}]),disabled:d(r).processing,onClick:w},{default:e(()=>s[10]||(s[10]=[a(" Log Out Other Browser Sessions ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{es as default};
