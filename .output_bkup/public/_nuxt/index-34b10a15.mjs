var f=Object.defineProperty,_=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))p.call(e,t)&&i(s,t,e[t]);if(l)for(var t of l(e))C.call(e,t)&&i(s,t,e[t]);return s},w=(s,e)=>_(s,m(e));import{_ as x,d as v,o as b,c as N,a as g,f as n,w as h,F as j,G as y,H as A,s as S,A as V,I as B}from"./entry-1f578a9a.mjs";import H from"./LeftTitle-359e51b5.mjs";import L from"./NewsCard-a948756b.mjs";import T from"./ContactUsCard-59bb0100.mjs";import U from"./Carousel-1b5fc9a4.mjs";const k={layout:"default",transition:"fade"};async function z(s,{expose:e}){let t,a;const{state:o,load:r}=y(),{data:u}=([t,a]=A(()=>V("data",()=>$fetch("https://thegrind-strapi-5x42fcw6uq-df.a.run.app/api/thegrinds?populate=*"))),t=await t,a(),t);S(()=>{});const c={accountState:o,loadAccount:r,notes:u,LeftTitle:H,NewsCard:L,ContactUsCard:T,VueHorizontal:B,Carousel:U};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}const F=v(w(d({},k),{setup:z})),I={class:"w-screen md:w-screen lg:flex items-center justify-center lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"};function q(s,e,t,a,o,r){return b(),N(j,null,[g("div",I,[n(a.LeftTitle,{class:"sm:w-[97vw] lg:w-[60vw] mr-[11px]"}),n(a.Carousel,{class:"w-full",slider:a.notes.data[0].attributes.Slider.data},null,8,["slider"])]),n(a.VueHorizontal,{class:"w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"},{default:h(()=>[n(a.NewsCard,{content:a.notes.data[0].attributes.notices.data[0].attributes.Notice1},null,8,["content"]),n(a.NewsCard,{content:a.notes.data[0].attributes.notices.data[0].attributes.Notice2},null,8,["content"]),n(a.NewsCard,{content:a.notes.data[0].attributes.notices.data[0].attributes.Notice3},null,8,["content"])]),_:1}),n(a.ContactUsCard,{class:"w-[88vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"})],64)}var J=x(F,[["render",q]]);export{J as default};
