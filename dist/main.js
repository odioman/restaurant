(()=>{"use strict";function e(e){const t=document.createElement("p");return t.innerHTML=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home"),t.appendChild(e("Choose from a varied selection of daily meats!")),t.appendChild(e("Hours")),t.appendChild(e("Creating dishes since 1888"))}())};function n(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(a("Steak","Broiled to Order")),e.appendChild(a("Chicken Pepe","Chicken Seared with Pepper")),e.appendChild(a("Beef Stroganoff","Boneless Rib Eye, Egg Noodles, Sour Cream, Worcestershire Sauce")),e.appendChild(a("Veal Cutlet","Veal Cutlets, Lemon, Panko, Eggs, Sea Salt")),e.appendChild(a("Duck Noodle","Roasted Duck Breasts, Bok Choy, Udon Noodles, Soy Sauce")),e.appendChild(a("Partridge Stew","Partridge, Brown Sugar, Carrots, Mushroom, Basil")),e}function a(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.innerHTML=e;const c=document.createElement("p");return c.innerHTML=t,n.appendChild(a),n.appendChild(c),n}const c=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(n)},d=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="123 456 7890";const n=document.createElement("p");n.textContent="5th Avenue, NYC, NY";const a=document.createElement("img");return a.src="images/location.png",a.alt="Le Carnivore location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())};function o(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Le Carnivore",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(n),t())}));const a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Menu",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(a),c())}));const i=document.createElement("button");return i.classList.add("button-nav"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(i),d())})),e.appendChild(n),e.appendChild(a),e.appendChild(i),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),o(document.querySelector(".button-nav")),t()})(),t(),c(),d()})();