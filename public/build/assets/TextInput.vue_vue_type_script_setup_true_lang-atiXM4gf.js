import{d as t,L as n,l,n as i,j as c,M as f,h as m,o as p}from"./app-Cwyhr4wB.js";const k=t({__name:"TextInput",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(u,{expose:s}){const a=n(u,"modelValue"),r=l(null);return i(()=>{var e,o;(e=r.value)!=null&&e.hasAttribute("autofocus")&&((o=r.value)==null||o.focus())}),s({focus:()=>{var e;return(e=r.value)==null?void 0:e.focus()}}),(e,o)=>c((p(),m("input",{class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600","onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d),ref_key:"input",ref:r},null,512)),[[f,a.value]])}});export{k as _};
