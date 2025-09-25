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
const product = document.querySelectorAll("#products li");
product[0].dataset.price = "111";
console.log(product[0].dataset.price);
