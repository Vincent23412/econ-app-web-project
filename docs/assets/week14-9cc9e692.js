import{j as e,S as o,T as l,B as d,r as c,d as g,c as h,R as f}from"./Stack-89d6eeb1.js";import{A as p,d as b,a as y,b as _,P as u}from"./GitHub-bb9015e5.js";import{F as w,R as v,d as O,a as F}from"./Close-45f991ee.js";import{L as S,a as C}from"./axios-d8c0b2ac.js";import{G as x}from"./Grid2-667da7f6.js";function G({number:t,title:n,subtitle:r}){return e.jsx(e.Fragment,{children:e.jsxs(o,{direction:"row",spacing:2,sx:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(R,{groupNumber:t}),e.jsx(A,{title:n,subtitle:r}),e.jsx(E,{})]})})}function R({groupNumber:t=1}){return e.jsx(e.Fragment,{children:e.jsx(p,{sx:{bgcolor:b[500]},children:t})})}function A({title:t="Title",subtitle:n="Subtitle"}){return e.jsx(e.Fragment,{children:e.jsxs(o,{direction:"column",spacing:2,className:"card-title",children:[e.jsx(l,{variant:"h6",children:t}),e.jsx(l,{variant:"subtitle1",children:n})]})})}function E(){return e.jsx(e.Fragment,{children:e.jsx(y,{})})}function I({link:t}){return e.jsx(e.Fragment,{children:e.jsx(o,{direction:"column",spacing:2,sx:{alignItems:"center"},children:e.jsx(k,{link:t})})})}function k({link:t}){let n;return t.includes("you")?n=`https://www.youtube.com/embed/${D(t)}`:t.includes("vimeo")&&(n=`https://player.vimeo.com/video/${T(t)}?h=7c051b9510`),e.jsx(e.Fragment,{children:e.jsx("iframe",{src:n,width:"100%",height:200,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0})})}function D(t){return t.match(new RegExp("(?<=https:\\/\\/youtu\\.be\\/)[^/]+"))[0]}function T(t){return t.match(new RegExp("(?<=https:\\/\\/vimeo\\.com\\/)[^/]+"))[0]}function N({description:t}){return e.jsx(e.Fragment,{children:e.jsx(d,{sx:{overflow:"hidden",height:"300px",overflowY:"scroll"},children:e.jsx(l,{variant:"body1",children:t})})})}function $({github_link:t,group:n}){const[r,i]=c.useState(!1),a=()=>{i(s=>!s)};return e.jsx(e.Fragment,{children:e.jsxs(o,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[e.jsx(S,{href:t,target:"_blank",rel:"noopener noreferrer",children:e.jsx(_,{})}),e.jsx(B,{ratingOpen:r,group:n}),e.jsx(V,{ratingOpen:r,onClick:a})]})})}function B({ratingOpen:t=!1,group:n}){const[r,i]=c.useState(null);return window.ratings[n]=r,e.jsx(e.Fragment,{children:e.jsx(d,{children:e.jsx(w,{in:t,timeout:300,children:e.jsx(v,{name:"project-rating",value:r,max:5,onChange:(a,s)=>{i(s)}})})})})}function V({ratingOpen:t=!1,onClick:n}){const r=t?e.jsx(O,{onClick:n}):e.jsx(F,{onClick:n});return e.jsx(e.Fragment,{children:r})}function J({project:t,number:n,group:r}){return e.jsx(e.Fragment,{children:e.jsx(u,{elevation:3,sx:{p:3},children:e.jsxs(o,{direction:"column",spacing:2,children:[e.jsx(G,{number:n,title:t.Title,subtitle:t.Subtitle}),e.jsx(I,{link:t["Video link"]}),e.jsx(N,{description:t.Description}),e.jsx($,{github_link:t["Github link"],group:r})]})})})}function K({project:t,number:n,group:r}){return e.jsx(e.Fragment,{children:e.jsx(x,{xs:12,sm:6,md:4,xl:3,children:e.jsx(J,{project:t,number:n,group:r})})})}const P="https://script.google.com/macros/s/AKfycbyIZNwTCjqHQr5oOjlOrBWIpfZJ1suttwiSa3Z7_DyEq_unO3X-3KhhVItf3z-ruEVDKw/exec";function Z(t){const n=t.shift();function r(a){const s=Object();return a.forEach((j,m)=>{s[n[m]]=j}),s}return t.map(a=>r(a))}async function q(){try{const t=await C.get(P);return Z(t.data)}catch(t){console.log(t)}}function L(){window.ratings=Object();const t=localStorage.getItem("dataObjects"),[n,r]=c.useState(t&&t!=="undefined"?JSON.parse(t):null),i=n?e.jsx(x,{container:!0,spacing:2,children:n.map((a,s)=>e.jsx(K,{project:a,number:s+1,group:s+1},s))}):e.jsx("div",{children:" loading...."});return c.useEffect(()=>{q().then(a=>{r(a),localStorage.setItem("dataObjects",JSON.stringify(a))})},[]),e.jsx(e.Fragment,{children:i})}g(u)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function M(){return e.jsx(e.Fragment,{children:e.jsx(L,{})})}h.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(M,{})}));
