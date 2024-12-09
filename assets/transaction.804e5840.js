import{c as g,i as _,f as u,e as s,a7 as h,j as t,V as q,A as d,a8 as y,a9 as S,aa as b,z as T,k as $,a}from"./index.757f950f.js";var Q=g({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:n}){const i=_(y,u);if(i===u)return console.error("QTimelineEntry needs to be child of QTimeline"),u;const l=s(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),r=s(()=>`q-timeline__dot text-${e.color||i.color}`),m=s(()=>i.layout==="comfortable"&&i.side==="left");return()=>{const c=h(n.default,[]);if(e.body!==void 0&&c.unshift(e.body),e.heading===!0){const f=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},c)];return t("div",{class:"q-timeline__heading"},m.value===!0?f.reverse():f)}let o;e.icon!==void 0?o=[t(q,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(o=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const v=[t("div",{class:"q-timeline__subtitle"},[t("span",{},d(n.subtitle,[e.subtitle]))]),t("div",{class:r.value},o),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},d(n.title,[e.title]))].concat(c))];return t("li",{class:l.value},m.value===!0?v.reverse():v)}}}),x=g({name:"QTimeline",props:{...S,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:n}){const i=$(),l=b(e,i.proxy.$q);T(y,e);const r=s(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(l.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:r.value},d(n.default))}});function B(e){return a.get(`/stocks/transactions/latest?userId=${e}`)}function j(e){return a.get(`/stocks/${e}/transactions`)}function C(e){return a.get(`/users/${e}/transactions`)}function D(e){return a.post("/stocks/transactions",e)}function E(e){return a.delete(`/stocks/transactions/${e}`)}export{x as Q,Q as a,C as b,j as c,E as d,B as f,D as s};