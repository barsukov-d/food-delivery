import{_ as e}from"./index.46815d5f.js";function u(t){switch(t){case"../modules/banners/fixtures/banners.json":return e(()=>import("./banners.813cf5ff.js"),[]);case"../modules/categories/fixtures/categories.json":return e(()=>import("./categories.19ef8061.js"),[]);case"../modules/products/fixtures/products.json":return e(()=>import("./products.e5277c42.js"),[]);case"../modules/sliders/fixtures/sliders.json":return e(()=>import("./sliders.8397e6b0.js"),[]);case"../modules/users/fixtures/users.json":return e(()=>import("./users.608066d2.js"),[]);case"../modules/__test__/fixtures/test-table.json":return e(()=>import("./test-table.8696e3ae.js"),[]);default:return new Promise(function(r,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}async function n(t,r,s){await t.createObjectStore(r,Object.values(s));const o=Object.values(s).map(async i=>{await t.putFixture(r,i,(await u(`../modules/${r}/fixtures/${i}.json`)).default)});await Promise.all(o)}export{n as i};
