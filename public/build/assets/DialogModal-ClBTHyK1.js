import{_ as r}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as c,j as d,a as t,q as s,b as m,w as l,c as _}from"./app-Df2toIYO.js";import{_ as p}from"./SecondaryButton.vue_vue_type_script_setup_true_lang-vAexeR6p.js";const h={},x={class:"flex justify-between md:col-span-1"},f={class:"px-4 sm:px-0"},g={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},u={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},y={class:"px-4 sm:px-0"};function $(e,o){return c(),d("div",x,[t("div",f,[t("h3",g,[s(e.$slots,"title")]),t("p",u,[s(e.$slots,"description")])]),t("div",y,[s(e.$slots,"aside")])])}const w=r(h,[["render",$]]),b={class:"md:grid md:grid-cols-3 md:gap-6"},v={class:"mt-5 md:col-span-2 md:mt-0"},k={class:"bg-white px-4 py-5 shadow dark:bg-gray-800 sm:rounded-lg sm:p-6"},A={__name:"ActionSection",setup(e){return(o,i)=>(c(),d("div",b,[m(w,null,{title:l(()=>[s(o.$slots,"title")]),description:l(()=>[s(o.$slots,"description")]),_:3}),t("div",v,[t("div",k,[s(o.$slots,"content")])])]))}},B={class:"px-6 py-4"},S={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},j={class:"mt-4 text-sm text-gray-600 dark:text-gray-400"},C={class:"flex flex-row justify-end bg-gray-100 px-6 py-4 text-end dark:bg-gray-800"},D={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const i=o,n=()=>{i("close")};return(a,N)=>(c(),_(p,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:n},{default:l(()=>[t("div",B,[t("div",S,[s(a.$slots,"title")]),t("div",j,[s(a.$slots,"content")])]),t("div",C,[s(a.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{A as _,D as a};
