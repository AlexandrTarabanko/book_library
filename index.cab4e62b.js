function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.cab4e62b.js","8x43m":"big-placeholder.eaf37d8e.png","lnhdt":"medium-placeholder.af4bbc1d.png","802Z9":"small-placeholder.a57fe244.png","6iVVu":"amazon-icon.b8fa90cb.png"}'));document.querySelector(".register-modal"),document.querySelector(".login-modal");const r=document.querySelector(".about-book-modal"),a=document.querySelector("#modal-close"),s=(document.querySelector(".fire-base-backdrop"),document.querySelector(".js-backdrop-modal"));function l(){r.classList.add("is-hidden"),s.classList.add("is-hidden")}a.addEventListener("click",l),document.addEventListener("keydown",(function(e){"Escape"===e.key&&l()})),s.addEventListener("click",(function(e){e.target===s&&l()}));var c={};c=new URL(i("kyEFX").resolve("6iVVu"),import.meta.url).toString();const d=document.querySelector("#allModal"),u=document.querySelector(".category__books"),m=document.querySelector(".add-storage-button"),g=document.querySelector(".remove-modal-btn"),p=document.querySelector(".storage-description"),h="storage-data";let y=[],b={};function k(){const e=JSON.parse(localStorage.getItem(h)),t=b.id;if(!e||0===e.length)return m.style.display="block",void(g.style.display="none");e.find((e=>e.id===t))?(m.style.display="none",g.style.display="block"):(m.style.display="block",g.style.display="none")}m.addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem(h)),t=b;e&&0!==e.length?(e.push(t),localStorage.setItem(h,JSON.stringify(e))):(y.push(t),localStorage.setItem(h,JSON.stringify(y)));p.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",k()})),g.addEventListener("click",(function(){p.textContent="";const e=b.id,t=JSON.parse(localStorage.getItem(h)),o=t.findIndex((t=>t.id===e));t.splice(o,1),localStorage.setItem(h,JSON.stringify(t)),k()})),u.addEventListener("click",(function(t){const o=t.target.closest("li").id;r.classList.remove("is-hidden"),s.classList.remove("is-hidden"),async function(t){try{const o=await async function(e){try{b={};const t=await fetch(`https://books-backend.p.goit.global/books/${e}`),o=await t.json();return b={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id},o}catch(e){throw console.error("Error",e),e}}(t);return k(),function(t){d.innerHTML="";const o=t.book_image,n=t.title,i=t.author,r=t.buy_links[0].url,a=t.buy_links[1].url,s=t.buy_links[4].url,l=`\n  \n  <img src="${o}" alt="Book Image" class="image-about-book-modal">\n  <div class="info-modal">\n  <h2 class="title-about-book-modal">${n}</h2>\n  <p class="author-about-book-modal"> ${i}</p>\n  <p class="text-about-book-modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>\n  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${r}" target="_blank"\n    > <img\n     width="62"\n    height="12"\n        src="${e(c)}"\n    alt="Amazon"\n  /></a></li>\n  <li class="shop-modal-item"><a href="${a}" target="_blank"\n    > <img\n    width="33"\n    height="32"\n       src="src/images/png-icons/shops/first-book-shop-icon.png"\n    alt="AppleBooks"\n  /></a></li>\n  <li class="shop-modal-item"><a href="${s}" target="_blank"\n    > <img\n    width="38"\n    height="38"\n    src="./src/images/png-icons/shops/second-book-shop-icon.png"\n    alt="Book-Shop"\n  /></a></li>\n</ul>\n</div>\n  `;d.innerHTML=l}(o),o}catch(e){throw console.error("Error",e),e}}(o)}));var f={};f=new URL(i("kyEFX").resolve("8x43m"),import.meta.url).toString();var S={};S=new URL(i("kyEFX").resolve("lnhdt"),import.meta.url).toString();var _={};_=new URL(i("kyEFX").resolve("802Z9"),import.meta.url).toString();const v=document.querySelector(".category__list"),w=document.querySelector(".category__books"),E="https://books-backend.p.goit.global/books/category";v.addEventListener("click",(async function(t){if("BUTTON"!==t.target.nodeName)return;const o=t.target.name;try{const t=await async function(e){try{const t=`${E}?category=${e}`,o=await fetch(t);if(!o.ok)throw new Error(`Server responded with status: ${o.status}`);return await o.json()}catch(e){return console.error(`Failed to fetch category: ${e.message}`),[]}}(o),n=await async function(t,o){if(0===t.length){let t=e(f);return window.innerWidth<768?t=e(_):window.innerWidth<1280&&(t=e(S)),`<li class="book">\n             <img src="${t}" alt="No books found" />\n              <h3>No books found</h3>\n            </li>`}let n=o.split(" ");n[n.length-1]=`<span class='highlight'>${n[n.length-1]}</span>`,o=n.join(" ");document.querySelector(".category-title").innerHTML=`<h2 class="category-title">${o}</h2>`;let i="";return i+=t.map((({title:e,author:t,book_image:o,_id:n})=>`<li id="${n}" class="book">\n        <img src="${o}" alt="${e}" />\n        <h3>${e}</h3>\n        <p>${t}</p>\n         <div class="book-popup"> quick view </div>\n      </li>`)).join(""),i}(t,o);w.innerHTML=n}catch(e){console.error(e.message)}}));
//# sourceMappingURL=index.cab4e62b.js.map
