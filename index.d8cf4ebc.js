!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}function n(e){return fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(e){return e.json()})).then((function(e){return e}))}var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,s=l||f||Function("return this")(),p=Object.prototype.toString,d=Math.max,y=Math.min,b=function(){return s.Date.now()};function m(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var l=u.test(e);return l||a.test(e)?i(e.slice(2),l?2:8):r.test(e)?NaN:+e}var v=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");v.addEventListener("input",(function(e){function t(){var e=data.results.map((function(e){return'<li class="item">\n              <img src= '.concat(e.flags,' alt="">\n              <p class="name">').concat(e.name,'</p>\n              <p class="capital">').concat(e.capital,'</p>\n              <p class="population">').concat(e.population,'</p>\n              <p class="languages">').concat(e.languages,"</p>\n          </li>")})).join("");document.querySelector(".country-list").insertAdjacentHTML("beforeend",e)}n(e.currentTarget.value).then((function(e){return t}))}))}();
//# sourceMappingURL=index.d8cf4ebc.js.map
