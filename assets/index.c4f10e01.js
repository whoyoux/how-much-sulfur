import{c as e,o as t,a,b as n,r as i,d as s,t as l,w as r,v as c,e as u,F as o,V as m,f as d}from"./vendor.2c1e1cbc.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var p="/how-much-sulfur/assets/sulfur_logo.5901da6f.webp";const h={},y=[a(" This site is not affiliated with, nor endorsed by "),n("a",{href:"https://facepunch.com/",target:"_blank"},"Facepunch Studios LTD",-1),a(" . All trademarks belong to their respective owners and are used for information only. ")];h.render=function(a,n,i,s,l,r){return t(),e("footer",null,y)};const g={mounted(){document.querySelector("#theme_toggle").checked=!0,document.body.setAttribute("data-theme","dark"),this.setThemeButton()},methods:{setThemeButton(){}}},b=[n("div",{class:"logo-wrapper"},[n("img",{src:p,alt:"logo",width:"50",height:"32.5"}),n("h1",null,"How much sulfur for raid?")],-1),n("div",{class:"theme"},[n("h4",null,"Theme switch"),n("label",{class:"switch"},[n("input",{type:"checkbox",id:"theme_toggle"}),n("span",{class:"slider round"})])],-1)];g.render=function(a,n,i,s,l,r){return t(),e("header",null,b)};const q={components:{Header:g,Footer:h},data:()=>({hasMixingTable:!1,finalArray:[],c4:{name:"C4",quantity:0,img:"c4.webp",cost:[{name:"Tech Trash",quantity:2},{name:"Explosives",quantity:20},{name:"Cloth",quantity:5}]},rocket:{name:"Rocket",quantity:0,img:"rocket.webp",cost:[{name:"Metal Pipe",quantity:2},{name:"Gun Powder",quantity:150},{name:"Explosives",quantity:10}]},beancan_grenade:{name:"B. Grenade",quantity:0,img:"beancan_grenade.webp",cost:[{name:"Metal Fragments",quantity:20},{name:"Gun Powder",quantity:60}]},explo_ammo:{name:"Exp. Ammo",quantity:0,img:"explosive_ammo.webp",cost:[{name:"Metal Fragments",quantity:10},{name:"Gun Powder",quantity:20},{name:"Sulfur",quantity:10}]},explosives:{name:"Explosives",quantity:0,img:"explosives.webp",cost:[{name:"Gun Powder",quantity:50},{name:"Low Grade Fuel",quantity:3},{name:"Sulfur",quantity:10},{name:"Metal Fragments",quantity:10}]},satchel_charge:{name:"Satchel Charge",quantity:0,img:"satchel_charge.webp",cost:[{name:"Rope",quantity:1},{name:"Beancan Grenade",quantity:4},{name:"Small Stash",quantity:1}]}}),watch:{c4:{handler(){this.calculateItems()},deep:!0},rocket:{handler(){this.calculateItems()},deep:!0},beancan_grenade:{handler(){this.calculateItems()},deep:!0},explo_ammo:{handler(){this.calculateItems()},deep:!0},explosives:{handler(){this.calculateItems()},deep:!0},satchel_charge:{handler(){this.calculateItems()},deep:!0}},methods:{getImg:e=>new URL({"./assets/beancan_grenade.webp":"/how-much-sulfur/assets/beancan_grenade.aaaf64a4.webp","./assets/c4.webp":"/how-much-sulfur/assets/c4.2147e766.webp","./assets/explosives.webp":"/how-much-sulfur/assets/explosives.73e316a1.webp","./assets/explosive_ammo.webp":"/how-much-sulfur/assets/explosive_ammo.dc227a87.webp","./assets/explosive_ammo_old.webp":"/how-much-sulfur/assets/explosive_ammo_old.ba1b4604.webp","./assets/favicon.ico":"/how-much-sulfur/assets/favicon.400bdadd.ico","./assets/mixingtable.png":"/how-much-sulfur/assets/mixingtable.2e63b92e.png","./assets/rocket.webp":"/how-much-sulfur/assets/rocket.c28bc202.webp","./assets/satchel_charge.webp":"data:image/webp;base64,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","./assets/sulfur.webp":"/how-much-sulfur/assets/sulfur.72abb208.webp","./assets/sulfur_logo.webp":p}[`./assets/${e}`],window.location).href,addToArray(e){e.forEach((e=>{this.finalArray.find((t=>t.name===e.name))?this.finalArray.find((t=>t.name===e.name)).quantity+=e.quantity:this.finalArray.push(e)}))},calculateItems(){this.finalArray=[];let e=[],t=[],a=[],n=[],i=[],s=[];this.c4.quantity>0&&(e=this.c4.cost.map((e=>({name:e.name,quantity:e.quantity*this.c4.quantity}))),this.addToArray(e)),this.rocket.quantity>0&&(t=this.beancan_grenade.cost.map((e=>({name:e.name,quantity:e.quantity*this.rocket.quantity}))),this.addToArray(t)),this.beancan_grenade.quantity>0&&(a=this.beancan_grenade.cost.map((e=>({name:e.name,quantity:e.quantity*this.beancan_grenade.quantity}))),this.addToArray(a)),this.explo_ammo.quantity>0&&(n=this.explo_ammo.cost.map((e=>({name:e.name,quantity:e.quantity*this.explo_ammo.quantity}))),this.addToArray(n)),this.explosives.quantity>0&&(i=this.explosives.cost.map((e=>({name:e.name,quantity:e.quantity*this.explosives.quantity}))),this.addToArray(i)),this.satchel_charge.quantity>0&&(s=this.satchel_charge.cost.map((e=>({name:e.name,quantity:e.quantity*this.satchel_charge.quantity}))),this.addToArray(s)),console.log(this.finalArray)}}},f={class:"item-carousel-wrapper"},v={class:"item-carousel"},A={class:"item-card"},w=["src","alt"],x={class:"item-card-name"},k={class:"item-card-input-div"},C={class:"item-card"},Q=["src","alt"],T={class:"item-card-name"},_={class:"item-card-input-div"},L={class:"item-card"},F=["src","alt"],G={class:"item-card-name"},I={class:"item-card-input-div"},P={class:"item-card"},S=["src","alt"],M={class:"item-card-name"},V={class:"item-card-input-div"},j={class:"item-card"},B=["src","alt"],H={class:"item-card-name"},R={class:"item-card-input-div"},D={class:"item-card"},U=["src","alt"],O={class:"item-card-name"},W={class:"item-card-input-div"},Z=n("p",null,[a(" Use "),n("kbd",null,"SHIFT"),a(" + "),n("kbd",null,"SCROLL"),a(" or "),n("kbd",null,"DRAG"),a(" to find your item ")],-1),z={class:"mixing-table"},Y=n("p",null,"Are you using Mixing Table?",-1),J={class:"switch"},E=n("span",{class:"slider round"},null,-1),K=n("div",{class:"items-info"},[n("div",{class:"items-info-details"},[n("h2",null,"Sulfur:"),n("h2",null,"Sulfur:")]),n("div",{class:"items-info-details"},[n("h2",null,"Metal Fragments:"),n("h2",null,"Metal Fragments:")]),n("div",{class:"items-info-details"},[n("h2",null,"Low grade fuel:"),n("h2",null,"Low grade fuel:")])],-1);q.render=function(a,m,d,p,h,y){const g=i("Header");return t(),e(o,null,[s(g),n("div",f,[n("div",v,[n("div",A,[n("img",{src:y.getImg(h.c4.img),alt:h.c4.name,class:"item-card-img"},null,8,w),n("h2",x,l(h.c4.name),1),n("div",k,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[0]||(m[0]=e=>h.c4.quantity>0?h.c4.quantity-=1:h.c4.quantity=h.c4.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[1]||(m[1]=e=>h.c4.quantity=e),class:"item-card-input"},null,512),[[c,h.c4.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[2]||(m[2]=e=>h.c4.quantity+=1)}," + ")])]),n("div",C,[n("img",{src:y.getImg(h.rocket.img),alt:h.rocket.name,class:"item-card-img"},null,8,Q),n("h2",T,l(h.rocket.name),1),n("div",_,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[3]||(m[3]=e=>h.rocket.quantity>0?h.rocket.quantity-=1:h.rocket.quantity=h.rocket.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[4]||(m[4]=e=>h.rocket.quantity=e),class:"item-card-input"},null,512),[[c,h.rocket.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[5]||(m[5]=e=>h.rocket.quantity+=1)}," + ")])]),n("div",L,[n("img",{src:y.getImg(h.beancan_grenade.img),alt:h.beancan_grenade.name,class:"item-card-img"},null,8,F),n("h2",G,l(h.beancan_grenade.name),1),n("div",I,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[6]||(m[6]=e=>h.beancan_grenade.quantity>0?h.beancan_grenade.quantity-=1:h.beancan_grenade.quantity=h.beancan_grenade.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[7]||(m[7]=e=>h.beancan_grenade.quantity=e),class:"item-card-input"},null,512),[[c,h.beancan_grenade.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[8]||(m[8]=e=>h.beancan_grenade.quantity+=1)}," + ")])]),n("div",P,[n("img",{src:y.getImg(h.explo_ammo.img),alt:h.explo_ammo.name,class:"item-card-img"},null,8,S),n("h2",M,l(h.explo_ammo.name),1),n("div",V,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[9]||(m[9]=e=>h.explo_ammo.quantity>0?h.explo_ammo.quantity-=1:h.explo_ammo.quantity=h.explo_ammo.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[10]||(m[10]=e=>h.explo_ammo.quantity=e),class:"item-card-input"},null,512),[[c,h.explo_ammo.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[11]||(m[11]=e=>h.explo_ammo.quantity+=1)}," + ")])]),n("div",j,[n("img",{src:y.getImg(h.explosives.img),alt:h.explosives.name,class:"item-card-img"},null,8,B),n("h2",H,l(h.explosives.name),1),n("div",R,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[12]||(m[12]=e=>h.explosives.quantity>0?h.explosives.quantity-=1:h.explosives.quantity=h.explosives.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[13]||(m[13]=e=>h.explosives.quantity=e),class:"item-card-input"},null,512),[[c,h.explosives.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[14]||(m[14]=e=>h.explosives.quantity+=1)}," + ")])]),n("div",D,[n("img",{src:y.getImg(h.satchel_charge.img),alt:h.satchel_charge.name,class:"item-card-img"},null,8,U),n("h2",O,l(h.satchel_charge.name),1),n("div",W,[n("button",{class:"item-card-input-button border-radius-left",onClick:m[15]||(m[15]=e=>h.satchel_charge.quantity>0?h.satchel_charge.quantity-=1:h.satchel_charge.quantity=h.satchel_charge.quantity)}," - "),r(n("input",{type:"number",min:"0","onUpdate:modelValue":m[16]||(m[16]=e=>h.satchel_charge.quantity=e),class:"item-card-input"},null,512),[[c,h.satchel_charge.quantity]]),n("button",{class:"item-card-input-button border-radius-right",onClick:m[17]||(m[17]=e=>h.satchel_charge.quantity+=1)}," + ")])])]),Z]),n("div",z,[Y,n("label",J,[r(n("input",{type:"checkbox",id:"theme_toggle","onUpdate:modelValue":m[18]||(m[18]=e=>h.hasMixingTable=e)},null,512),[[u,h.hasMixingTable]]),E])]),K],64)};const N=new m.Store({state:{items:[{name:"C4",quantity:0},{name:"Rocket",quantity:0},{name:"B. Grenade",quantity:0},{name:"Exp. Ammo",quantity:0},{name:"Explosives",quantity:0},{name:"Satchel Charge",quantity:0}]},mutations:{setQuantity(e,t,a){e.items[t].quantity=a}},actions:{incrementAction({commit:e},t,a){e("setQuantity",t,a)}}});d(q).use(N).mount("#app");
