var x=Object.defineProperty,C=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var v=(t,s,r)=>s in t?x(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,u=(t,s)=>{for(var r in s||(s={}))L.call(s,r)&&v(t,r,s[r]);if(P)for(var r of P(s))O.call(s,r)&&v(t,r,s[r]);return t},h=(t,s)=>C(t,j(s));import{j as E,L as T,r as f,u as N,a as w,b as A,H as I,S as R,R as b,c as V,d as F}from"./vendor.d4a271e0.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};q();const e=E.exports.jsx,p=E.exports.jsxs,$=()=>e("div",{className:"navBar",children:p("ul",{children:[e(T,{to:"/",children:e("li",{className:"left-float",children:"Task Tracker"})}),e(T,{to:"/all-tasks",children:e("li",{className:"right-float",children:"All Tasks"})}),p(T,{to:"/add-task",style:{textDecoration:"none"},children:[e("li",{className:"right-float",children:"Add Task"})," "]})]})}),H=()=>e("div",{children:"404 Error"}),J=t=>p("div",{className:"taskCard",children:[e("p",{className:"taskName",children:t.name}),e("img",{src:t.img}),e("p",{className:"taskTitle",children:t.title}),e("p",{className:"taskDescription",children:t.description}),e("p",{className:"taskDue",children:t.due}),e("button",{className:"btn-edit",onClick:()=>t.showEdit(),children:"EDIT"}),e("button",{className:"btn-delete",onClick:()=>t.onDelete(t.id),children:"DELETE"})]}),M=()=>{const[t,s]=f.exports.useState([]),r=N();f.exports.useEffect(()=>{(async()=>{const d=await c();s(d)})()},[]);const c=async()=>{const i=await fetch("https://task-tracker-minu.herokuapp.com/tasks"),d=[],l=await i.json();for(const m in l){const k=u({id:m},l[m]);d.push(k)}return d},a=async i=>{await fetch(`https://task-tracker-minu.herokuapp.com/tasks/${i}`,{method:"DELETE"}),s(t.filter(d=>d.id!==i))},n=i=>{r.push(`/edit-task/${i}`)};return e("div",{className:"allTasksContainer",children:e("div",{className:"allTasksPage",children:t.map(i=>e(J,{name:i.profile.name,img:i.profile.imageLink,title:i.title,description:i.description,due:i.due,id:i.id,onDelete:a,showEdit:()=>n(i.id)},i.id))})})},B=()=>e("div",{className:"full-body center",children:e("img",{src:"../../Spinner-1s-200px.svg"})}),S=t=>{var l,m,k,g;const{register:s,handleSubmit:r}=w(),[c,a]=f.exports.useState([]),n=N(),i=o=>{const y=JSON.stringify({description:o.description==""?t.initialTask.description:o.description,due:o.due==""?t.initialTask.due:o.due,title:o.title==""?t.initialTask.title:o.title,profile:parseInt(o.name)});fetch(`https://task-tracker-minu.herokuapp.com/tasks/${t.id}`,{method:"PUT",body:y,headers:{"Content-Type":"application/json"}}),alert("Successfully edited task!"),n.push("/all-tasks")},d=o=>{const y=JSON.stringify({description:o.description,due:o.due,title:o.title,profile:Number(o.name)});fetch("https://task-tracker-minu.herokuapp.com/tasks",{method:"POST",body:y,headers:{"Content-Type":"application/json"}}),alert("Successfully added task!"),n.push("/all-tasks")};return f.exports.useEffect(()=>{(async()=>{const D=await(await fetch("https://task-tracker-minu.herokuapp.com/profiles")).json();a(D)})()},[]),c.length==0?e(B,{}):e("div",{className:"container-body",children:e("div",{className:"container",children:p("form",{autoComplete:"off",children:[e("select",h(u({},s("name")),{className:"selectField",defaultValue:(l=t.initialTask)==null?void 0:l.profileId,children:c.map(o=>e("option",{value:o.id,children:o.name},o.id))})),e("br",{}),e("input",h(u({},s("title")),{id:"title",placeholder:"Task Title",required:!0,defaultValue:(m=t.initialTask)==null?void 0:m.title})),e("br",{}),e("textarea",h(u({},s("description")),{id:"description",placeholder:"Task Description",required:!0,defaultValue:(k=t.initialTask)==null?void 0:k.description})),e("br",{}),e("input",h(u({},s("due")),{id:"due",placeholder:"Due",required:!0,defaultValue:(g=t.initialTask)==null?void 0:g.due})),e("br",{}),t.id?e("button",{className:"btn-edit-confirm",onClick:r(i),children:"CONFIRM CHANGES"}):e("button",{className:"btn",onClick:r(d),children:"ADD TASK"}),e("br",{}),e("button",{className:"profile-ovw-btn",onClick:()=>n.push("/profile-overview"),children:"PROFILE OVERVIEW"})]})})})},U=()=>e(S,{initialTask:null,id:null}),K=()=>e("div",{}),G=()=>{const t=N(),{register:s,handleSubmit:r}=w(),[c,a]=f.exports.useState([]),n=l=>{fetch("https://task-tracker-minu.herokuapp.com/profiles",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}),alert("Successfully added profile!"),t.push("/add-task")};f.exports.useEffect(()=>{(async()=>{const k=await(await fetch("https://task-tracker-minu.herokuapp.com/profiles")).json();a(k)})()},[]);const i=l=>{fetch(`https://task-tracker-minu.herokuapp.com/profiles/${l.currentProfile}`,{method:"DELETE"}),alert("Successfully deleted profile!"),t.push("/add-task")},d=l=>{fetch(`https://task-tracker-minu.herokuapp.com/profiles/${l.currentProfile}`,{method:"PUT",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}),alert("Successfully edited profile!"),t.push("/add-task")};return e("div",{className:"profile-interface",children:p("form",{autoComplete:"off",className:"profile-container",children:[e("select",h(u({},s("currentProfile")),{children:c.map(l=>e("option",{value:l.id,children:l.name},l.id))})),e("br",{}),e("input",h(u({},s("name")),{id:"profile-name",placeholder:"Full Name",required:!0})),e("br",{}),e("input",h(u({},s("imageLink")),{id:"profile-pic",placeholder:"Profile Picture URL",required:!0})),e("br",{}),e("button",{onClick:r(n),className:"add-p-btn",children:"Add profile"}),e("br",{}),e("button",{onClick:r(i),className:"delete-p-btn",children:"Delete selected profile"}),e("br",{}),e("button",{onClick:r(d),className:"edit-p-btn",children:"Edit selected profile"})]})})},W=()=>{const{id:t}=A(),[s,r]=f.exports.useState(null);return f.exports.useEffect(()=>{(async()=>{console.log("what is id",t);const n=await(await fetch(`https://task-tracker-minu.herokuapp.com/tasks/${t}`)).json();r(n)})()},[]),s==null?e("div",{className:"full-body center",children:e("img",{src:"../../Spinner-1s-200px.svg"})}):e("div",{children:e(S,{initialTask:s,id:t})})};function z(){return e("div",{className:"full-body",children:p(I,{children:[e($,{}),p(R,{children:[e(b,{path:"/",exact:!0,children:e(K,{})}),e(b,{path:"/add-task",children:e(U,{})}),e(b,{path:"/all-tasks",children:e(M,{})}),e(b,{path:"/edit-task/:id",children:e(W,{})}),e(b,{path:"/profile-overview",children:e(G,{})}),e(b,{path:"*",children:e(H,{})})]})]})})}V.render(e(F.StrictMode,{children:e(z,{})}),document.getElementById("root"));
