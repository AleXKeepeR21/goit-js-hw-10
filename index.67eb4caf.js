var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then((e=>e))}var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=i||l||Function("return this")(),s=Object.prototype.toString,f=Math.max,p=Math.min,y=function(){return u.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function d(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=a.test(e);return i||r.test(e)?c(e.slice(2),i?2:8):o.test(e)?NaN:+e}const g=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");g.addEventListener("input",(function(e){function n(){const e=data.results.map((e=>`<li class="item">\n              <img src= ${e.flags} alt="">\n              <p class="name">${e.name}</p>\n              <p class="capital">${e.capital}</p>\n              <p class="population">${e.population}</p>\n              <p class="languages">${e.languages}</p>\n          </li>`)).join("");document.querySelector(".country-list").insertAdjacentHTML("beforeend",e)}t(e.currentTarget.value).then((e=>n))}));
//# sourceMappingURL=index.67eb4caf.js.map
