parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return i(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var l=function(){function e(t){o(this,e),this.lists=t,this.index=0}return a(e,[{key:"prevSlide",value:function(){this.index--,this.setScroll()}},{key:"nextSlide",value:function(){this.index!==this.lists.children.length-1?this.index++:this.index=0,this.setScroll()}},{key:"setScroll",value:function(){this.lists.style.setProperty("--scroll","-".concat(this.scroll,"px"))}},{key:"scroll",get:function(){return this.index*this.lists.children[0].getBoundingClientRect().width}}]),e}(),d=document.getElementById("featuresLists"),u=document.getElementById("featuresPrev"),f=document.getElementById("featuresNext"),h=document.querySelector(".features__sliderActivePage"),y=new l(d);u.addEventListener("click",function(e){y.prevSlide(),h.innerHTML="0".concat(y.index+1),!0===f.disabled&&(f.disabled=!1),0===y.index&&(e.currentTarget.disabled=!0)}),f.addEventListener("click",function(e){y.nextSlide(),h.innerHTML="0".concat(y.index+1),!0===u.disabled&&(u.disabled=!1),y.index===y.lists.children.length-1&&(e.currentTarget.disabled=!0)});for(var b=document.querySelector(".benefits__cards"),v=document.querySelector(".benefits__dots"),m=new l(b),g=0;g<b.children.length;g++){var S=document.createElement("button");S.className="benefits__dot",g===m.index&&S.classList.add("benefits__dot--active"),v.append(S)}var p=function(){document.querySelector(".benefits__dot--active").classList.remove("benefits__dot--active"),v.children[m.index].classList.add("benefits__dot--active"),m.setScroll()};v.addEventListener("click",function(t){t.target.classList.contains("benefits__dot--active")||t.target.contains(t.currentTarget)||(m.index=e(t.currentTarget.children).indexOf(t.target),p())}),setInterval(function(){m.nextSlide(),p()},5e3),window.addEventListener("resize",function(){y.setScroll(),m.setScroll()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a06cce49.js.map