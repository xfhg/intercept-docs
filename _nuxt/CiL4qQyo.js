import{ak as l,al as u,k as g,d as p,an as c,ao as b,B as f,aK as y,ar as k,c as s,ag as m,w as v,e as r,n as d,ah as o,h as n,ai as h,ba as $}from"./D2l-8FjW.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=l(u.ui.strategy,u.ui.card,C),B=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:i}=c("card",b(a,"ui"),w),t=f(()=>y(k(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:i,cardClass:t}}});function S(a,e,i,t,j,A){return s(),m($(a.$attrs.onSubmit?"form":a.as),h({class:a.cardClass},a.attrs),{default:v(()=>[a.$slots.header?(s(),r("div",{key:0,class:d([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[o(a.$slots,"header")],2)):n("",!0),a.$slots.default?(s(),r("div",{key:1,class:d([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[o(a.$slots,"default")],2)):n("",!0),a.$slots.footer?(s(),r("div",{key:2,class:d([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[o(a.$slots,"footer")],2)):n("",!0)]),_:3},16,["class"])}const z=g(B,[["render",S]]);export{z as _};
