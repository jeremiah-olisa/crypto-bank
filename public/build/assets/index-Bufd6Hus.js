import{p as f}from"./BaseLayout.vue_vue_type_script_setup_true_lang-Btoraezn.js";import{C as m,p as y}from"./app-BoAkCg1G.js";function u(r){const{defaultValues:c,route:t,method:a="post",messages:e={pending:"Processing your request...",success:"Operation successful",error:"An error occurred"},meta:i,onSuccess:l,onError:d,manuallyHandleErrors:g=!1}=r,s=m(c);return{form:s,submit:()=>{if(s.hasErrors)return;const n=y.promise(String(e==null?void 0:e.pending)),o=i?i(n):{onSuccess:()=>{s.reset(),n.resolve(String(e==null?void 0:e.success)),l&&l()},onError:p=>{n.reject(String(e==null?void 0:e.error)),g||f(p,c),d&&d(p)},showProgress:!0};switch(a){case"post":s.post(t,o);break;case"get":s.get(t,o);break;case"put":s.put(t,o);break;case"delete":s.delete(t,o);break;default:throw new Error(`Invalid HTTP Method '${a}'`)}}}}const C=()=>u({defaultValues:{email:"",password:"",remember:!1},route:route("login"),messages:{pending:"Please wait while we log you in",success:"Login successful",error:"Error logging in"}}),F=()=>u({defaultValues:{name:"",email:"",password:"",password_confirmation:"",terms:!1},route:route("register"),messages:{pending:"Please wait while we create an account for you",success:"User registered successfully",error:"Error registering user"}}),N=(r={name:"",code:"",category:"",rate:NaN,image_url:"",is_published:!0})=>u({defaultValues:r,route:route("currency.store"),messages:{pending:"Adding New Currency",success:"New Currency listed successfully",error:"Failed to add new currency"}}),P=r=>u({defaultValues:r,route:route("currency.update",{currencyId:r.id}),method:"put",messages:{pending:"Updating Currency",success:"Currency updated successfully",error:"Failed to update currency"}});export{F as a,P as b,N as c,C as u};
