const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let o=null;t.addEventListener("click",(e=>{o=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(e=>{clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8715022e.js.map
