function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var d=n("7Y9D8");const l=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),i=document.querySelector("body");let u=null;a.disabled=!0;l.addEventListener("click",(e=>{u=setInterval((()=>{i.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),l.disabled=!0,a.disabled=!1})),a.addEventListener("click",(t=>{clearInterval(u),l.disabled=!1,e(d).Notify.success(`Your color is ${window.getComputedStyle(i).backgroundColor}`,{timeout:1e4})}));
//# sourceMappingURL=01-color-switcher.e3a23a69.js.map
