import{a as r}from"./axios.6e1fcf85.js";const i=(e,a={},n={})=>{let{params:l}=a;const t={params:l,data:l,method:a.method};return t.method!=="get"?delete t.params:delete t.data,console.log("_config : ",t),r(e,t)},o=[{name:"contentSeq",required:!0,label:"\uBC88\uD638",align:"center",field:e=>e.contentSeq,sortable:!0,format:e=>`${e}`},{name:"title",required:!0,label:"\uC81C\uBAA9",align:"center",field:e=>e.title},{name:"courseCd",required:!0,label:"\uAC1C\uAC15\uBA85",align:"center",field:e=>e.courseCd},{name:"frstRegDate",required:!0,label:"\uB4F1\uB85D\uC77C",align:"center",field:e=>e.frstRegDate},{name:"frstRegId",required:!0,label:"\uB4F1\uB85D\uC790",align:"center",field:e=>e.frstRegId}],u=[{name:"checked",required:!0,label:"\uC120\uD0DD",align:"center"},{name:"title",required:!0,label:"\uC81C\uBAA9",align:"center",field:e=>e.courseNm}],d="\uBAA9\uB85D \uC218",c=[{label:"10\uAC1C\uC529 \uBCF4\uAE30",value:10},{label:"20\uAC1C\uC529 \uBCF4\uAE30",value:20},{label:"30\uAC1C\uC529 \uBCF4\uAE30",value:30}];export{o as a,c,u as e,d as r,i as u};
