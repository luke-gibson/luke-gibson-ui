import{u as e}from"./useSupabaseClient-CpQTzLKO.mjs";import{d as s,f as t,M as r,I as a,N as o,u as n}from"../routes/renderer.mjs";import"./server.mjs";import"../runtime.mjs";const u=s({__name:"account",__ssrInlineRender:!0,async setup(s){let t,u;e();const i=([t,u]=r((()=>(async()=>{const s=e(),{data:t}=await s.auth.getUser(),{data:r}=await s.from("profile").select("*").eq("id",t.user.id).single();return{user:t.user,profile:r}})())),t=await t,u(),t);return(e,s,t,r)=>{s(`<p${a(r)}>You&#39;re logged in as <strong>${o(n(i).user.email)}</strong> click to <button class="font-bold">Sign out</button></p>`)}}}),i=u.setup;u.setup=(e,s)=>{const r=t();return(r.modules||(r.modules=new Set)).add("pages/account.vue"),i?i(e,s):void 0};export{u as default};
//# sourceMappingURL=account-Dnxkg10Z.mjs.map
