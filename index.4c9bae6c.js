const themeSwitcher=document.getElementById("theme-switch");function clickHandler(){this.checked?(document.body.classList.remove("light"),document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.add("light"),document.body.classList.remove("dark"),localStorage.setItem("theme","light")),console.log(localStorage.getItem("theme"))}function checkTheme(){const e=localStorage.getItem("theme");if(console.log(localStorage.getItem("theme")),null!==e&&"dark"===e){document.body.className=e;document.getElementById("theme-switch").checked=!0}}themeSwitcher.checked=!1,themeSwitcher.addEventListener("click",clickHandler),window.onload=checkTheme();
//# sourceMappingURL=index.4c9bae6c.js.map
