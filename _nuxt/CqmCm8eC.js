import{bp as d,bq as u,d as l,an as b,r as m,c as _,ag as y,C as f,am as C}from"./D2l-8FjW.js";function v(t={}){const{copy:c,isSupported:i}=d(),o=u();function r(e,n={},a={}){i&&c(e).then(()=>{!n.title&&!n.description||o.add({...n,...t})},function(p){o.add({...a,description:a.description||p.message,...t})})}return{copy:r}}const h=l({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(t){const c=t,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=b("content.prose.code.button",void 0,i,void 0,!0),r=v({timeout:2e3}),e=m(o.value.icon.copy);function n(){r.copy(c.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(a,p)=>{const s=C;return _(),y(s,{icon:f(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{h as _};
