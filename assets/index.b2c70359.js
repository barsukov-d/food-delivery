import{l as O}from"./client.ab89f6f5.js";import{i as l}from"./init-model.2e8eddbb.js";import{S as i}from"./status-codes.44acab52.js";import{R as f}from"./reason-phrases.476018da.js";import"./index.46815d5f.js";var u=(r=>(r.BANNERS="banners",r))(u||{}),p=(r,e,n=0)=>({fetchBanners:async(o,a,t)=>{const s=await r.getAll(e,u.BANNERS);return s?a(t.delay(n),t.status(i.OK),t.json(s)):a(t.delay(n),t.status(i.NOT_FOUND),t.text(f.NOT_FOUND))},getBanner:async(o,a,t)=>{const s=Number(o.params.id),N=await r.get(e,u.BANNERS,s);return N?a(t.delay(n),t.status(i.OK),t.json(N)):a(t.delay(n),t.status(i.NOT_FOUND),t.text(f.NOT_FOUND))}}),A=async(r,e,n,o=0)=>{const a=`${e}/${n}`;await l(r,n,u);const{fetchBanners:t,getBanner:s}=p(r,n,o);return[O.rest.get(a,t),O.rest.get(`${a}/:id`,s)]};export{A as default};
