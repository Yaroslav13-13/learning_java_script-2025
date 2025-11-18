//!   ДЗ Модуль 4
//!   Task 1
console.log("| TASC - 1 |");

//!========================= for in ==================================

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   for (const key in products) {
//     total += products[key];
//   }
//   if (total <= containerSize) {
//     return true;
//   }
//   return false;
// }

//!========================= Object.keys ==================================

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   const keys = Object.keys(products);

//   for (const key of keys) {
//     total += products[key];
//   }
//   return total <= containerSize;
// }

//! ======================= Object.values =================================

function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const values = Object.values(products);
  for (const item of values) {
    total += item;
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

//!   Task 2
console.log("| TASC - 2 |");

function calcAverageCalories(days) {
  let total = 0;
  if (days.length === 0) {
    return 0;
  }
  for (const arr of days) {
    total += arr.calories;
  }
  return total / days.length;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

//!   Task 3
console.log("| TASC - 3 |");
const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

console.log(
  "============================================================================="
);

console.log(" = ПРАКТИКА = ");

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps({ a: 1, b: 2, c: 3 }));
console.log(countProps({}));
// ====================================================================

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Tom", age: 20 },
];

// function searchUser(arr, username) {
//   for (const item of arr) {
//     if (item.name === username) {
//       return item.name;
//     }
//   }
// }
// console.log(searchUser(users, "Alice"));

function searchUser(arr) {
  const age = [];
  for (const item of arr) {
    if (item.age >= 18) {
      age.push(item.name);
    }
  }
  return age;
}

console.log(searchUser(users));

//* 🧩 Задача 1
function foo1(arr) {
  const nameFrends = [];
  for (const item of arr) {
    nameFrends.push(item.name);
  }
  return nameFrends;
}
console.log(foo1(users));
// ============= map ===============

//* 🧩 Задача 2
function foo2(arr) {
  const oldUser = [];
  for (const item of arr) {
    if (item.age >= 25) {
      oldUser.push(item.name);
    }
  }
  return oldUser;
}
console.log(foo2(users));
// ============= filter ===============

//* 🧩 Задача 3
function foo3(arr, userName) {
  for (const item of arr) {
    if (item.name === userName) {
      return `Hello user: ${item.name}`;
    }
  }
  return `not user: ${userName}`;
}
console.log(foo3(users, "Alan"));
console.log(foo3(users, "Alice"));
// ============= find ===============

//* 🧩 Задача 4
function foo4(arr) {
  let age = 0;
  for (const item of arr) {
    age += item.age;
  }
  return age / arr.length;
}
console.log(foo4(users));
// ============= reduce ===============

// * 🧩 Задача 5

const stones = [
  { name: "Emerald", price: 1300, quantity: 4 },
  { name: "Diamond", price: 2700, quantity: 3 },
  { name: "Sapphire", price: 900, quantity: 7 },
  { name: "Quartz", price: 240, quantity: 15 },
];

function calcTotalPrice(stones, stoneName) {
  let sum = 0;
  for (const item of stones) {
    if (item.name === stoneName) {
      sum = item.price * item.quantity;
    }
  }
  return `${stoneName}: ${sum}`;
}

console.log(calcTotalPrice(stones, "Quartz"));

// !========================== this ==============================

const playlist = {
  name: "My Playlist",
  rating: 4.5,
  tracks: ["track-1", "track-2", "track-3"],
  chengeName(newName) {
    this.name = newName;
  },
};

const playlist2 = {
  name: "Sport playlist",
  rating: 4,
  tracks: ["track-4", "track-5"],
};

playlist2.chengeName = playlist.chengeName;

playlist2.chengeName("XXX");
console.log("playlist: ", playlist.name);
console.log("playlist2: ", playlist2);

// -------------------------------------------------------------------
const user = {
  name: "Yaroslav",
  age: 38,
  city: "Lviv",
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  },
};

const counter = {
  value: 0,
  increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  },
  reset() {
    this.value = 0;
  },
  getValue() {
    return this.value;
  },
};

const bankAccount = {
  owner: "Yaroslav",
  balance: 0,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance < amount) {
      return alert(`Not enough money! Balance:${this.balance}`);
    }
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
};

bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.getBalance());

//! ----------------  rest / spred --------------------------------------
const temps = [18, 14, 12, 21, 17, 29, 24];
console.log(Math.min(...temps));
console.log(Math.max(...temps));
//! ---------------------------------------------------------------------
// const a = [1, 2, 3];
const a = [{ x: 1 }, { y: 2 }];
const b = [...a];
a[0].x = 100;
console.log("a", a);
console.log("b", b);
//! ---------------------------------------------------------------------

const lastWeekTemps = [12, 14, 15, 11, 13];
const currentTemps = [16, 18, 17, 19, 20];
const nextWeekTemps = [21, 22, 23, 24, 25];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);
//! ---------------------------------------------------------------------

const objA = { x: 1, y: 2 };
const objB = { x: 3, q: 4 };

const objC = { ...objA, x: 10, ...objB, y: 20 };
console.log(objC);
