var S=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(o,t,a)=>t in o?S(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,P=(o,t)=>{for(var a in t||(t={}))C.call(t,a)&&M(o,a,t[a]);if(k)for(var a of k(t))U.call(t,a)&&M(o,a,t[a]);return o},y=(o,t)=>I(o,N(t));import{o as c,c as g,a as n,_ as z,d as F,e as q,f as m,w as p,F as D,r as E,b as r,Y as H,V as O,q as f,z as R,s as Y,m as w,i as A}from"./entry-1f578a9a.mjs";import G from"./Pagination-f1e4b848.mjs";import J from"./PageTitle-6790e92f.mjs";import K from"./VideoListView-74dc8b86.mjs";import"./icon-go-24d5d775.mjs";const Q={width:"126",height:"40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=n("rect",{x:"1",y:"1",width:"124",height:"38",rx:"19",stroke:"#092231","stroke-width":"2"},null,-1),X=n("path",{d:"M61.277 14.8h-2.528v6.512c0 1.616-.992 2.592-2.496 2.592s-2.56-.976-2.56-2.592V14.8h-2.528v6.512c0 2.96 1.984 4.8 5.088 4.8 3.088 0 5.024-1.84 5.024-4.8V14.8Zm7.468 2.512c-1.168 0-2.112.48-2.72 1.344v-1.264H63.56v11.712h2.464v-4.352c.624.864 1.568 1.344 2.768 1.344 2.416 0 4-1.744 4-4.352 0-2.656-1.632-4.432-4.048-4.432Zm-.576 6.736c-1.264 0-2.144-.96-2.144-2.384 0-1.392.88-2.368 2.144-2.368 1.264 0 2.128.992 2.128 2.368 0 1.408-.864 2.384-2.128 2.384ZM76.962 26V14.128h-2.464V26h2.464Zm6.36-8.688c-2.768 0-4.624 1.744-4.624 4.384 0 2.624 1.856 4.4 4.624 4.4 2.752 0 4.608-1.776 4.608-4.4 0-2.64-1.856-4.384-4.608-4.384Zm0 2.048c1.264 0 2.144.96 2.144 2.368s-.88 2.368-2.144 2.368c-1.28 0-2.144-.96-2.144-2.368s.864-2.368 2.144-2.368ZM94.551 26h2.416l-.016-5.616c-.016-1.936-1.344-3.088-3.648-3.088-1.504 0-2.608.352-3.888.992l.768 1.696c.896-.496 1.792-.752 2.56-.752 1.184 0 1.792.528 1.792 1.44v.16h-2.368c-2.112.016-3.28.976-3.28 2.592 0 1.568 1.12 2.688 2.96 2.688 1.2 0 2.128-.4 2.704-1.12V26Zm-2.016-1.648c-.832 0-1.344-.432-1.344-1.088 0-.688.464-.976 1.408-.976h1.936v.768c-.144.736-.96 1.296-2 1.296Zm15.051-10.224h-2.448v4.528c-.624-.88-1.568-1.36-2.784-1.36-2.4 0-4 1.744-4 4.368 0 2.656 1.616 4.432 4.064 4.432 1.184 0 2.112-.48 2.72-1.36V26h2.448V14.128Zm-4.592 9.984c-1.296 0-2.16-.976-2.176-2.384.016-1.392.896-2.384 2.176-2.384 1.264 0 2.144.976 2.144 2.384s-.88 2.384-2.144 2.384Z",fill:"#092231"},null,-1),$=n("path",{d:"M23.39 16.984h-.934a3.685 3.685 0 0 0-3.684 3.685v4.875a3.685 3.685 0 0 0 3.684 3.684h11.13a3.685 3.685 0 0 0 3.686-3.684v-4.885a3.675 3.675 0 0 0-3.675-3.675h-.943M28.021 10.19v12.042M25.106 13.119l2.915-2.928 2.916 2.928",stroke:"#092231","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ee=[W,X,$];function te(o,t){return c(),g("svg",Q,ee)}var ae={render:te};const oe={width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},se=n("path",{d:"M7.39 8.984h-.933a3.685 3.685 0 0 0-3.685 3.685v4.875a3.685 3.685 0 0 0 3.685 3.684h11.13a3.685 3.685 0 0 0 3.684-3.684v-4.885a3.675 3.675 0 0 0-3.674-3.675h-.943M12.021 2.19v12.042M9.106 5.119l2.915-2.928 2.916 2.928",stroke:"#092231","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ne=[se];function re(o,t){return c(),g("svg",oe,ne)}var ie={render:re};const le={layout:"teams"};function ce(o,{expose:t}){let a=r(1),e=r(3),u=r(4),h=r(40),d=r(4),i=r(1),_=r(!0),v=r({});const{state:l,load:x}=H(),{isMobile:b}=O(),B=f(()=>{var s;return l.value.status==="success"?u.value=Math.ceil(((s=l.value.data)==null?void 0:s.length)/4):u.value}),j=f(()=>{var s;return l.value.status==="success"?h.value=(s=l.value.data)==null?void 0:s.length:h.value}),Z=f(()=>{var s;return l.value.status==="success"?(s=l.value.data)==null?void 0:s.slice((i.value-1)*d.value,i.value*d.value):[]}),T=R(),L=s=>{debugger;a.value=s,i.value=s};Y(()=>{debugger;x({id:1,skip:1,pageSize:4,filter:{}})});const V={page:a,maxVisibleButtons:e,totalPages:u,total:h,perPage:d,currentPage:i,hasMorePages:_,currentCourse:v,videoState:l,loadMyVideos:x,isMobile:b,getTotalPages:B,getTotal:j,getTmpVideosByPagination:Z,route:T,showMore:L,Pagination:G,PageTitle:J,VideoListView:K,ButtonUpload:ae,IconUpload:ie};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}const de=F(y(P({},le),{setup:ce})),ue={class:"col-start-2 flex"},he={class:"grid grid-cols-1 w-[90vw] lg:w-[73vw] m-auto"},_e={class:"flex justify-between"},ve=A("Video"),ge={class:"relative grid grid-cols-1 bg-white h-[79vh] p-3 mt-[10px] rounded-[2.5rem] shadow-md 2xl:h-[80vh]"},me={class:"overflow-y-auto"};function pe(o,t,a,e,u,h){const d=q("NuxtLink");return c(),g("div",ue,[n("div",he,[n("div",_e,[m(e.PageTitle,null,{default:p(()=>[ve]),_:1}),m(d,{to:"/video/upload"},{default:p(()=>[e.isMobile?(c(),w(e.IconUpload,{key:1})):(c(),w(e.ButtonUpload,{key:0}))]),_:1})]),n("div",ge,[n("div",me,[(c(!0),g(D,null,E(e.getTmpVideosByPagination,i=>{var _,v;return c(),w(d,{to:`/my-teams/exercise-${(_=e.videoState)==null?void 0:_.data.classId}/${(v=e.videoState)==null?void 0:v.data.id}`,key:i.id},{default:p(()=>[m(e.VideoListView,{video:i},null,8,["video"])]),_:2},1032,["to"])}),128))]),m(e.Pagination,{"total-pages":e.getTotalPages,total:e.getTotal,"per-page":e.perPage,"current-page":e.currentPage,maxVisibleButtons:e.maxVisibleButtons,"has-more-pages":e.hasMorePages,onPagechanged:e.showMore},null,8,["total-pages","total","per-page","current-page","maxVisibleButtons","has-more-pages"])])])])}var Pe=z(de,[["render",pe]]);export{Pe as default};
