!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var d=r("6JpON");var l=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),i=document.querySelector("body"),u=null;a.disabled=!0;l.addEventListener("click",(function(e){u=setInterval((function(){i.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),l.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(t){clearInterval(u),l.disabled=!1,e(d).Notify.success("Your color is ".concat(window.getComputedStyle(i).backgroundColor),{timeout:1e4})}))}();
//# sourceMappingURL=01-color-switcher.e1b199e6.js.map
