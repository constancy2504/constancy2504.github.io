import{c as u,a as c,h as a,g as v}from"./index.b3094090.js";import{h as s}from"./render.7ec66d40.js";var m=u({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(t,{slots:o}){const e=v(),n=c(()=>"q-td"+(t.autoWidth===!0?" q-table--col-auto-width":"")+(t.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(t.props===void 0)return a("td",{class:n.value},s(o.default));const d=e.vnode.key,r=(t.props.colsMap!==void 0?t.props.colsMap[d]:null)||t.props.col;if(r===void 0)return;const{row:l}=t.props;return a("td",{class:n.value+r.__tdClass(l),style:r.__tdStyle(l)},s(o.default))}}}),h=u({name:"QTr",props:{props:Object,noHover:Boolean},setup(t,{slots:o}){const e=c(()=>"q-tr"+(t.props===void 0||t.props.header===!0?"":" "+t.props.__trClass)+(t.noHover===!0?" q-tr--no-hover":""));return()=>a("tr",{class:e.value},s(o.default))}});export{h as Q,m as a};
