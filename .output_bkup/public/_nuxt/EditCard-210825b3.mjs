import{_ as m,d as _,u as v,t as p,b as f,o as g,c as b,a as e,W as c,X as u,f as h}from"./entry-1f578a9a.mjs";import x from"./DropdownButton-855d59ef.mjs";const w=_({props:{video:null},emits:["edit","deleteVideo"],setup(a,{expose:d,emit:l}){d();const t=a,n=v(),{video:o}=p(t),r=f(null),i={router:n,emit:l,props:t,video:o,file:r,edit:()=>{debugger;var s={file:r.value.files[0],filename:o.value.name,name:o.value.name,type:1,classId:1,url:o.value.url,userId:1};l("edit",s)},deleteVideo:()=>{debugger;var s={file:r.value.files[0],filename:o.value.name,name:o.value.name,type:1,classId:1,url:o.value.url,userId:1};l("deleteVideo",s)},DropdownButton:x};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),y={class:"container bg-white rounded-[10px] h-60 m-7 p-8"},V={class:"grid mb-4"},O={class:"flex"},B={class:"grid w-9/20 ml-4"},C=e("label",{class:"text-grayOther-400"}," Video Title ",-1),k={class:"grid w-9/20 ml-4"},D=e("label",{class:"text-grayOther-400"},"Class ",-1),j={class:"ml-4 grid w-4/5"},I=e("label",{class:"text-grayOther-400"},"Video Link ",-1),S={class:"ml-4"},E=e("label",{class:"text-grayOther-400"},"Choose File ",-1),N={type:"file",ref:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"};function R(a,d,l,t,n,o){return g(),b("div",y,[e("div",V,[e("div",O,[e("div",B,[C,c(e("input",{class:"rounded-[2rem] border border-grayOther-400 pl-2.5","onUpdate:modelValue":d[0]||(d[0]=r=>t.video.name=r)},null,512),[[u,t.video.name]])]),e("div",k,[D,h(t.DropdownButton)])]),e("div",j,[I,c(e("input",{class:"rounded-[2rem] border border-grayOther-400 pl-2.5","onUpdate:modelValue":d[1]||(d[1]=r=>t.video.url=r)},null,512),[[u,t.video.url]])]),e("div",S,[E,e("input",N,null,512)])]),e("button",{class:"border-2 border-green-light rounded-full bg-green-light ml-4 w-[7rem] text-white",onClick:t.edit}," Save "),e("button",{class:"border-2 border-red-600 rounded-full ml-4 w-[7rem] text-red-600",onClick:t.deleteVideo}," Delete ")])}var M=m(w,[["render",R]]);export{M as default};
