function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var n=r[t];delete r[t];var e={id:t,exports:{}};return o[t]=e,n.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,n){r[t]=n},e.parcelRequired7c6=a),a.register("kyEFX",(function(n,e){var o,r;t(n.exports,"register",(function(){return o}),(function(t){return o=t})),t(n.exports,"resolve",(function(){return r}),(function(t){return r=t}));var a={};o=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)a[n[e]]=t[n[e]]},r=function(t){var n=a[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),a("kyEFX").register(JSON.parse('{"aoZhb":"shop-list.0566d28d.js","lp5u4":"sprite.898ff988.svg","35kVv":"empty-desktop-tablet@1x.017eaa98.png","6fa5k":"empty-desktop-tablet@2x.55899084.png","49jvD":"empty-mobile@1x.0a4ea4b8.png","6THUv":"empty-mobile@2x.d86ac43c.png","4AGaC":"amazon-icon1x.a7ec3af8.png","9Ah0R":"amazon-icon2x.20dbc182.png","8uc1C":"applebook-icon1x.a9f158e0.png","3fItF":"applebook-icon2x.cdd3fb2c.png","hTaYv":"bookshop-icon1x.eb5fbc1e.png","cdwLe":"bookshop-icon2x.7a15867f.png","6LQ1T":"index.9fc21abc.css","9m5pa":"index.e87f75a3.js"}'));var i={};i=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("35kVv"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("6fa5k"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("49jvD"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("6THUv"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("4AGaC"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("9Ah0R"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("8uc1C"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("3fItF"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("hTaYv"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("cdwLe"),import.meta.url).toString(),a("dUJfD");const v=document.querySelector(".js-shopping-cart"),h=document.querySelector(".js-cart-list"),b="storage-data";function k(){const t=JSON.parse(localStorage.getItem(b));t&&0!==t.length?function(t,e){const o=e.map((({id:t,book_image:e,title:o,author:r,marketAmazon:a,marketAppleBooks:s,marketBookshop:l,list_name:c})=>`\n\t\t\t<li class="cart__item card js-card" data-book-id="${t}">\n        <picture>\n          <img\n            loading="lazy"\n            src="${e||"./images/placeholders/very-small-placeholder.png"}"\n            alt="${o}"\n            class="card__img"\n            width="110"\n            height="142"\n          />\n        </picture>\n        <div class="card__content">\n          <h3 class="card__title">${o.trim()}</h3>\n          <p class="card__category">${c.trim()}</p>\n          <p class="card__description">\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n            Temporibus, architecto voluptate sint debitis ab fugit\n            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,\n            quo, molestiae sed error possimus expedita veniam maiores\n            nam maxime provident quod blanditiis cum voluptate. A\n            provident corrupti dignissimos ullam. Porro architecto\n            maiores est ullam sed. Cum.\n          </p>\n          <div class="card__footer">\n            <p class="card__author">${r.trim()}</p>\n            <ul class="card__shops list">\n              <li class="shop">\n                <a\n                  href="${a}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--amazon"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n\t\t\t\t\t\t\t\t\t\tsrcset="\n\t\t\t\t\t\t\t\t\t\t\t${n(p)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${n(m)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n                    src="${n(p)}"\n                    alt="amazon.com"\n                /></a>\n              </li>\n              <li class="shop">\n                <a\n                  href="${s}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--apple"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${n(u)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${n(g)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${n(u)}"\n                    alt="books.apple.com"\n                /></a>\n              </li class="shop">\n              <li>\n                <a\n                  href="${l}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--bookshop"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n                    srcset="\n\t\t\t\t\t\t\t\t\t\t\t${n(_)} 1x,\n\t\t\t\t\t\t\t\t\t\t\t${n(f)} 2x\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\tsrc="${n(_)}"\n                    alt="bookshop.org"\n                /></a>\n              </li>\n            </ul>\n          </div>\n          <button\n            class="card__delete button js-card__delete"\n            type="button"\n          >\n            <svg class="icon-delete" width="22" height="22">\n              <use x="1%" href="${n(i)}#icon-bin"></use>\n            </svg>\n          </button>\n        </div>\n      </li>`)).join("");t.innerHTML=o}(h,t):function(){const t=`\n\t\t<div class="cart-empty">\n      <p class="cart-empty__text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <picture>\n        <source\n          srcset="\n            ${n(s)} 1x,\n            ${n(l)} 2x\n          "\n\t\t\t\t\tmedia="(min-width: 768px)"\n        />\n        <img\n          srcset="\n            ${n(c)} 1x,\n            ${n(d)} 2x\n            "\n          src="${n(c)}"\n          alt="Empty cart"\n          loading="lazy"\n          class="cart-empty__img"\n        />\n      </picture>\n\t\t</div>`;v.innerHTML=t}()}h.addEventListener("click",(function(t){if(t.target.classList.contains("js-card__delete")){const n=t.target.closest(".js-card"),e=n.dataset.bookId,o=JSON.parse(localStorage.getItem(b)),r=o.findIndex((t=>t.id===e));o.splice(r,1),localStorage.setItem(b,JSON.stringify(o)),n.remove(),k()}})),k();
//# sourceMappingURL=shop-list.0566d28d.js.map