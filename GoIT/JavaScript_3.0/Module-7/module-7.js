//!   ДЗ Модуль 7
//!   Task 1
console.log("| TASC - 1 |");
// const item = document.querySelectorAll(".item");

// const list = document.querySelector("#categories");
// console.log(list);

//* ============================== ПРАКТИКА ============================================
//!=====================================================================================
//!=============================== 7. Mодуль DOM. Події ================================
//!=====================================================================================
//* const btnColor = document.querySelector(".btn-color");
//* const body = document.querySelector("body");
//* btnColor.addEventListener("click", () => {
//*   body.style.backgroundColor = "red";
//* });

//!___________________________________________________________________________________
//!============================ Властивість classList ==================================

// const xxx = document.querySelector(".days-select");
// console.log(xxx.classList);

//todo ================= Метод classList.contains(className) ==============

// console.log(xxx.classList.contains("new-class"));

//todo ================= Метод classList.add(className) ===================

// xxx.classList.add("new-clas", "class-new", "old-class");

// console.log(xxx.classList.contains("new-class")); //  true
// console.log(xxx.classList.contains("class-new")); //true
// console.log(xxx.classList.contains("New-new")); //true

//todo ================= Метод classList.remove(className) ==============

// xxx.classList.remove("New-new");

// console.log(xxx.classList.contains("new-class"));
// console.log(xxx.classList.contains("class-new"));
// console.log(xxx.classList.contains("New-new")); // false

//todo ================= Метод classList.toggle(className) ==============

// xxx.classList.toggle("new-clas");
// console.log(xxx.classList.contains("new-class")); // false

//todo ===== Метод classList.replace(oldClassName, newClassName) ========
// console.log(xxx.classList.contains("old-class")); // true
// console.log(xxx.classList.contains("new-class")); // true

// xxx.classList.replace("old-class", "new-class");

// console.log(xxx.classList.contains("old-class")); // false
// console.log(xxx.classList.contains("new-class")); // true

//!___________________________________________________________________________________
//!============================ Властивість style ==================================

// const javaScr = document.querySelector(".js");

// javaScr.style.textAlign = "center";
// javaScr.style.color = "purple";
// javaScr.style.fontSize = "36px";

//!___________________________________________________________________________________
//!============================ Доступ до атрибутів ==================================

//todo ================= Метод element.hasAttribute(nameAttribute) ==================
// Перевіряє наявність атрибута true / false

// const image = document.querySelector(".image");

// console.log(image.hasAttribute("src")); //true
// console.log(image.hasAttribute("href")); //false
// console.log(image.hasAttribute("width")); //true
// console.log(image.hasAttribute("alt")); //true

//todo ================= Метод element.getAttribute(nameAttribute) ==================
// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута,
// і повертає значення цього атрибута для вказаного HTML - елемента element.
// Якщо атрибут не знайдено, метод повертає null.

// console.log(image.getAttribute("alt")); //Rocks and waterfall
// console.log(image.getAttribute("width")); //300
// console.log(image.getAttribute("href")); // null

//todo ============== Метод element.setAttribute(nameAttribute, value) ==============
// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута,
// який потрібно встановити або змінити, та value зі значенням,
// яке цьому атрибуту треба присвоїти. Метод встановлює або
// змінює значення зазначеного атрибута для вказаного HTML - елемента element.

// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt"));

//todo ============== Метод element.removeAttribute(nameAttribute) ==============
// Метод приймає один аргумент — рядок nameAttribute з іменем атрибута,
//   який потрібно видалити зі вказаного HTML - елемента element — та видаляє його.
//   Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); //false

//!___________________________________________________________________________________
//!=============================== Власні атрибути ===================================

//todo ===================== Отримання значень, dataset =======================

// const savBtn = document.querySelector('button[data-action="save"]');
// console.log(savBtn.dataset.action); // save
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action);

//todo ========================= Зміна значень, dataset ==========================

// savBtn.dataset.action = "я змінив";
// closeBtn.dataset.action = "lalalala";
// savBtn.dataset.role = "admin";

// console.log(savBtn.dataset.action);
// console.log(closeBtn.dataset.action);
// console.log(savBtn.dataset.role);

//!___________________________________________________________________________________
//!======================= Створення та видалення елементів ==========================

//todo ====================== document.createElement(tagName) =======================

// const heading = document.createElement("h2");
// const h1 = document.createElement("p");
// const p2 = document.createElement("p");

// heading.classList.add("subtitle");
// console.log(heading.classList.contains("subtitle"));
// heading.textContent = "This is a heading";
// console.log(heading);

// const newImg = document.createElement("img");
// newImg.src = "https://picsum.photos/id/11/320/240";
// newImg.alt = "Nature";

// console.log(newImg);

//todo ====================== elem.append(el1, el2, ...), elem.prepend(el1, el2, ...) =======================
//? elem.append(el1, el2, ...) //* — додає один або декілька елементів після всіх дітей елемента elem.
//? elem.prepend(el1, el2, ...) //* — додає один або декілька елементів перед усіма дітьми елемента elem.

const myList = document.querySelector("#myList");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li.textContent = "🥭 Mango";
li2.textContent = "🍍 Pineapple";
li3.textContent = "🍉 Watermelon";
li.classList.add("list");
li2.classList.add("list");
li3.classList.add("list");

// myList.append(li, li2, li3);
// myList.prepend(li, li2, li3);

//todo ========================================= element.remove() ===========================================
li3.remove();

//todo ========================================= Властивість innerHTML ===========================================

const img = document.querySelector(".image");
console.log(img.src);
console.log(img.alt);
// -------------------------------------------------
// const div1 = document.querySelector(".box-content");
// div1.classList.add("title");
// div1.classList.remove("title");
// console.log(div1.classList.contains("title"));
// const a1 = document.querySelector(".item");
// a1.classList.toggle("new");
// a1.classList.remove("new");
// a1.classList.contains("new");
// console.log(a1);
// a1.styles.fontSize =

// 🔥 ЗАВДАННЯ 1
const productEl = document.querySelectorAll(".product");
console.log(productEl);

// 🔥 ЗАВДАННЯ 2
const productList = document.querySelector(".product-list");
console.log(productList.firstElementChild);
console.log(productList.lastElementChild);

const nextEl = productList.firstElementChild;
console.log(nextEl.nextElementSibling);

const nextEll = productList.lastElementChild;
console.log(nextEll.previousElementSibling);
console.log(productList.children);

// 🔥 ЗАВДАННЯ 3
const task3 = document.querySelector(".product-price");
const task3Parent = document.querySelector(".product-title").parentElement;
console.log(task3.closest("ul"));
console.log(task3Parent);
// console.log(productEl.closest("section"));

// 🔥 ЗАВДАННЯ 4
const task4 = document.querySelector("#title");
task4.textContent = "Products List Updated!";

// 🔥 ЗАВДАННЯ 5
const task5 = document.querySelector(".product-list").firstElementChild;
task5.classList.add("highlight");
task5.classList.contains("highlight");
task5.classList.remove("highlight");
task5.classList.contains("highlight");
task5.classList.replace("section-title", "heading");
// task5.classList.toggle("darc");

// 🔥 ЗАВДАННЯ 6
const task6 = document.querySelector(".product-price");
const task6Color = document.querySelector("#controls");
task6.style.color = "red";
task6Color.style.backgroundColor = "green";
task6Color.style.fontSize = "roboto";

// 🔥 ЗАВДАННЯ 7
const task7Title = document.querySelector("#title");
console.log(task7Title.hasAttribute("data-info"));
console.log(task7Title.getAttribute("data-info"));
task7Title.setAttribute("data-info", "updated-title");
task7Title.removeAttribute("data-info");

// 🔥 ЗАВДАННЯ 8
const task8 = document.querySelectorAll(".product[data-id]");
const arr = Array.from(task8).map((item) => item.dataset.id);
const numberData = arr.map((item) => Number(item));
const result = numberData.map((item) => item + 100);
console.log(arr);
console.log(numberData);
console.log(result);

// 🔥 ЗАВДАННЯ 9
const task9 = document.querySelector(".product-list");
const newli = document.createElement("li");
newli.classList.add("product");
newli.dataset.id = "999";
const span1 = document.createElement("span");
span1.classList.add("product-title");
span1.textContent = "Kiwi";
const span2 = document.createElement("span");
span2.classList.add("product-price");
span2.textContent = " $5";
newli.append(span1, span2);
task9.append(newli);
console.log(task9);

// 🔥 ЗАВДАННЯ 10
task9.prepend(newli);

// 🔥 ЗАВДАННЯ 11

const task11 = document.querySelector(".product-list");
task11.lastElementChild.remove();

// 🔥 ЗАВДАННЯ 12
const task12 = document.querySelector("#modal");
task12.innerHTML = `<div id='modal' class='shown'><p>New modal text</p></div>`;

// 🔥 ЗАВДАННЯ 13
const task13 = document.querySelector(".product-list");
const temporary = `<li class="product temp">Temporary item</li>`;
task13.firstElementChild.insertAdjacentHTML("beforeend", temporary);

// 🔥 ЗАВДАННЯ 14
const task14 = document.querySelector(".back-btn");
task14.disabled = true;
setTimeout(() => {
  task14.disabled = false;
}, 2000);

// 🔥 ЗАВДАННЯ 15

// 🔥 ЗАВДАННЯ 16

// 🔥 ЗАВДАННЯ 17

// 🔥 ЗАВДАННЯ 18

// 🔥 ЗАВДАННЯ 19

// 🔥 ЗАВДАННЯ 20
