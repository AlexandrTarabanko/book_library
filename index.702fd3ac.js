!function(){const e=document.getElementById("openModalBtn"),t=document.querySelector(".modal"),o=t.querySelector("#modal-close"),n=document.querySelector(".js-backdrop-modal");function c(){t.classList.add("is-hidden")}e.addEventListener("click",(function(){t.classList.remove("is-hidden")})),o.addEventListener("click",c),document.addEventListener("keydown",(function(e){"Escape"===e.key&&c()})),n.addEventListener("click",(function(e){e.target===n&&c()}));const r=document.querySelector(".category__list"),a=document.querySelector(".category__books"),s="https://books-backend.p.goit.global/books/category";r.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.name;try{const e=await async function(e){try{const t=`${s}?category=${e}`,o=await fetch(t);if(!o.ok)throw new Error(`Server responded with status: ${o.status}`);return await o.json()}catch(e){return console.error(`Failed to fetch category: ${e.message}`),[]}}(t),o=await async function(e,t){if(0===e.length)return'<li class="book">\n             <img src=\'.images/placeholders/big-placeholder\' alt="No books found" />\n              <h3>No books found</h3>\n            </li>';let o=t.split(" ");o[o.length-1]=`<span class='highlight'>${o[o.length-1]}</span>`,t=o.join(" ");document.querySelector(".category-title").innerHTML=`<h2 class="category-title">${t}</h2>`;let n="";return n+=e.map((({title:e,author:t,book_image:o})=>`<li class="book">\n          <img src="${o}" alt="${e}" />\n          <h3>${e}</h3>\n          <p>${t}</p>\n        </li>`)).join(""),n}(e,t);a.innerHTML=o}catch(e){console.error(e.message)}}))}();
//# sourceMappingURL=index.702fd3ac.js.map
