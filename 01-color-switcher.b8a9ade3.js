const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let d=null;e.disabled=!0;t.addEventListener("click",(e=>{d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(e=>{clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.b8a9ade3.js.map
