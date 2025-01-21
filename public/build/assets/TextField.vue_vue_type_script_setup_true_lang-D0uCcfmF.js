import{_ as D}from"./Input.vue_vue_type_script_setup_true_lang-CLC0zMod.js";import{c as b,O as v,x as h,b as w,H as k,d as z,f as T,g as P,a as H}from"./BaseLayout.vue_vue_type_script_setup_true_lang-Cys1emLE.js";import{d as m,h as B,o as r,c as d,w as l,q as c,D as $,u as a,A as _,B as y,b as u,j as C,t as V,k as g,e as O,x as M}from"./app-OujeMPKJ.js";import{_ as N}from"./InputError.vue_vue_type_script_setup_true_lang-BBBI-OAI.js";import{C as F}from"./circle-help-nC0T16_c.js";const K=m({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,s=B(()=>{const{class:i,...n}=e;return n});return(i,n)=>(r(),d(a(v),$(s.value,{class:a(b)("leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:l(()=>[c(i.$slots,"default")]),_:3},16,["class"]))}}),L=m({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){const n=h(t,e);return(o,p)=>(r(),d(a(w),_(y(a(n))),{default:l(()=>[c(o.$slots,"default")]),_:3},16))}}),j=m({inheritAttrs:!1,__name:"TooltipContent",props:{forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},class:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:e}){const s=t,i=e,n=B(()=>{const{class:p,...f}=s;return f}),o=h(n,i);return(p,f)=>(r(),d(a(z),null,{default:l(()=>[u(a(k),$({...a(o),...p.$attrs},{class:a(b)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s.class)}),{default:l(()=>[c(p.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),x=m({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(t){const e=t;return(s,i)=>(r(),d(a(T),_(y(e)),{default:l(()=>[c(s.$slots,"default")]),_:3},16))}}),A=m({__name:"TooltipTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return(s,i)=>(r(),d(a(P),_(y(e)),{default:l(()=>[c(s.$slots,"default")]),_:3},16))}}),R={key:0},S=m({__name:"FormHelpDescription",props:{description:{},size:{},align:{}},setup(t){return(e,s)=>(r(),d(a(x),null,{default:l(()=>[u(a(L),null,{default:l(()=>[u(a(A),null,{default:l(()=>[u(a(F),{size:e.size??12},null,8,["size"])]),_:1}),u(a(j),{align:e.align,class:"max-w-[300px]"},{default:l(()=>[e.description?(r(),C("p",R,V(e.description),1)):g("",!0),c(e.$slots,"default")]),_:3},8,["align"])]),_:3})]),_:3}))}}),I=m({__name:"TextField",props:{id:{},name:{},label:{},min:{},max:{},placeholder:{},disabled:{type:Boolean,default:!1},errorMessage:{},type:{default:"text"},modelValue:{},defaultValue:{},helpDescription:{}},emits:["update:modelValue"],setup(t,{emit:e}){const s=t,n=H(s,"modelValue",e,{passive:!0,defaultValue:s.defaultValue});return(o,p)=>(r(),C("div",null,[o.label?(r(),d(a(K),{key:0,for:o.id,class:"mb-3 flex gap-3 text-sm font-medium"},{default:l(()=>[O(V(o.label)+" ",1),o.helpDescription?(r(),d(S,{key:0,description:o.helpDescription},null,8,["description"])):g("",!0)]),_:1},8,["for"])):g("",!0),u(a(D),{id:o.id,step:"0.01",type:o.type,modelValue:a(n),"onUpdate:modelValue":p[0]||(p[0]=f=>M(n)?n.value=f:null),disabled:o.disabled,error:!!o.errorMessage,placeholder:o.placeholder,max:o.max,min:o.min},null,8,["id","type","modelValue","disabled","error","placeholder","max","min"]),u(N,{message:o.errorMessage},null,8,["message"])]))}});export{I as _,S as a,K as b};
