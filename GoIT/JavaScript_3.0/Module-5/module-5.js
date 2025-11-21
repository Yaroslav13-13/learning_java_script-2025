//!   ДЗ Модуль 5
//!   Task 1
console.log("| TASC - 1 |");
const getUserNames = (users) => {
  //   const userName = [];
  //* Варіант- 1

  //   for (const user of users) {
  //     userName.push(user.name);
  //   }
  //   return userName;

  //* Варіант- 2

  //   for (let i = 0; i < users.length; i++) {
  //     userName.push(users[i].name);
  //   }
  //   return userName;

  //* Варіант- 3
  //   users.forEach((item) => {
  //     userName.push(item.name);
  //   });
  //     return userName;

  //* Варіант- 4
  return users.map((user) => user.name);
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//!   Task 2
console.log("| TASC - 2 |");

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
//!   Task 3
console.log("| TASC - 3 |");

const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male",
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female",
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female",
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

//!   Task 4
console.log("| TASC - 4 |");
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

console.log(
  "============================================================================="
);
// 1
console.log(" = ПРАКТИКА = ");
function processNumber(num, callback) {
  return callback(num);
}

console.log(processNumber(5, (x) => x * 2));
console.log(processNumber(10, (x) => x + 3));
// 2
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(5, 3, (a, b) => a + b));
console.log(calculate(5, 3, (a, b) => a - b));
console.log(calculate(5, 3, (a, b) => a * b));
// 3
function showResult(result) {
  console.log(result);
}
function doWork(a, b, callback) {
  const sum = a + b;
  callback(sum);
}
doWork(4, 6, showResult);
// 4

function each(arr, callback) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(callback(num));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(10, 10));
//00000000000000000000000000000000000000000000000000000000000000

// // 1
// function startsWithHttps(string) {
//   return string.startsWith("https");
// }
// console.log(startsWithHttps("https://google.com"));
// // 2
// function truncate(text, end) {
//   return text.length > end ? text.slice(0, end) + "..." : text;
//   //   if (text.length > end) {
//   //     return text.slice(0, end) + "...";
//   //   }
//   //   return text;
// }
// console.log(truncate("Hello world", 5));
// // 3
// function replaceSpaces(text) {
//   return text.replaceAll(" ", "-");
// }
// console.log(replaceSpaces("Hello world JS"));
// // 4
// function countVowels(text) {
//   const vowels = "aeiou";
//   let sum = 0;
//   for (const char of text.toLowerCase()) {
//     if (vowels.includes(char)) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(countVowels("javascript"));
// // 5
// function getDomain(url) {}

console.log(
  "---------------------------------------------------------------------------"
);
console.log(" = ПРАКТИКА = ");
const userFriends = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    gender: "male",
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
    gender: "female",
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
    gender: "female",
  },
];
//!========================= forEach() ======================================
console.log("Task - 1: Виведи в консоль імена всіх користувачів");
const task1 = (users) => users.forEach((user) => console.log(user.name));
task1(userFriends);

console.log("Task - 2: Для кожного юзера виведи імя та кількість друзів");
const task2 = (users) =>
  users.forEach((user) => console.log(`${user.name}: ${user.friends.length}`));
task2(userFriends);

console.log("Task - 3: Виведи тільки тих користувачів, у кого друзі більше 1.");
const task3 = (users) =>
  users.forEach((user) => {
    if (user.friends.length > 1) {
      console.log(user.name);
    }
  });
task3(userFriends);

//!========================= map() ======================================
console.log("Task - 4: Створи масив лише з імен користувачів");
const task4 = (users) => users.map((user) => user.name);
console.log(task4(userFriends));

console.log("Task - 5: Створи новий масив об’єктів формату");
const task5 = (users) =>
  users.map((user) => {
    return {
      name: user.name,
      friendsCount: user.friends.length,
    };
  });
console.log(task5(userFriends));

console.log(
  "Task - 6: Створи масив масивів друзів (тобто map повертає тільки user.friends)"
);
const task6 = (users) => users.map((user) => user.friends);
console.log(task6(userFriends));

//!========================= filter() ======================================
console.log("Task - 7: Отримай всіх користувачів зі статтю <male>");
const task7 = (users) => users.filter((item) => item.gender === "male");
console.log(task7(userFriends));

console.log("Task - 8: Отримай всіх користувачів, у яких більше 2 друзів");
const task8 = (users) => users.filter((item) => item.friends.length > 2);
console.log(task8(userFriends));

console.log("Task - 9: Отримай всіх користувачів, у яких є друг Sharron Pace");
const task9 = (users) =>
  users.filter((item) => item.friends.includes("Sharron Pace"));
console.log(task9(userFriends));

//!========================= find, some, every ======================================
console.log("Task - 10: Знайди користувача з ім’ям Sheree Anthony");
const task10 = (users) => users.find((user) => user.name === "Sheree Anthony");
console.log(task10(userFriends));

console.log("Task - 11: Знайди користувача, у якого 3 друга");
const task11 = (users) => users.find((user) => user.friends.length === 3);
console.log(task11(userFriends));

console.log("Task - 12: Перевір, чи є хоча б один користувач жіночої статі.");
const task12 = (users) => users.some((user) => user.gender === "female");
console.log(task12(userFriends));

console.log(
  "Task - 13: Перевір, чи є користувач, у якого є друг Naomi Buckner"
);
const task13 = (users) =>
  users.some((user) => user.friends.includes("Naomi Buckner"));
console.log(task13(userFriends));

console.log("Task - 14: Перевір, чи всі користувачі мають хоча б одного друга");
const task14 = (users) => users.every((user) => user.friends.length >= 1);
console.log(task14(userFriends));

console.log(
  "Task - 15: Перевір, чи всі користувачі мають стать male або female (тобто не порожню)"
);
const task15 = (users) =>
  users.every((user) => user.gender === "male" || user.gender === "female");
console.log(task15(userFriends));

//!============================== reduce ======================================
console.log(
  "Task - 16: Порахуй загальну кількість усіх друзів у масиві userFriends"
);
const task16 = (users) =>
  users.reduce((acc, user) => (acc += user.friends.length), 0);
console.log(task16(userFriends));

console.log(
  "Task - 17: Створи масив ВСІХ друзів (одним reduce), без вкладеності."
);
const task17 = (users) =>
  users.reduce((arr, user) => arr.concat(user.friends), []);
console.log(task17(userFriends));

console.log("Task - 18: Створи об’єкт статистики статей");

const task18 = (users) =>
  users.reduce((acc, user) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
  }, {});

console.log(task18(userFriends));

console.log(
  "Task - 19: Створи масив імен користувачів (як у map), але через reduce"
);
const task19 = (users) =>
  users.reduce((acc, user) => acc.concat(user.name), []);
console.log(task19(userFriends));

console.log(
  "Task - 20: Створи масив користувачів, у яких більше 1 друга — але через reduce (без filter)"
);
const task20 = (users) =>
  users.reduce((acc, user) => {
    if (user.friends.length > 1) {
      return acc.concat(user.name);
    }
    return acc;
  }, []);
console.log(task20(userFriends));

//!============================== sort() / toSorted() ======================================

console.log(
  "Task - 21: Відсортуй користувачів за ім’ям у алфавітному порядку."
);
const task21 = (users) =>
  users.toSorted((a, b) => a.name.localeCompare(b.name));
console.log(task21(userFriends));

console.log(
  "Task - 22: Відсортуй користувачів за кількістю друзів (зростання)."
);
const task22 = (users) =>
  users.toSorted((a, b) => a.friends.length - b.friends.length);
console.log(task22(userFriends));

console.log(
  "Task - 23: Відсортуй користувачів за кількістю друзів (спадання)."
);
const task23 = (users) =>
  users.toSorted((a, b) => b.friends.length - a.friends.length);
console.log(task23(userFriends));

console.log(
  "Task - 24: Відсортуй імена друзів кожного юзера в алфавітному порядку лише map + toSorted"
);
const task24 = (users) =>
  users.map((user) => user.friends.toSorted((a, b) => a.localeCompare(b)));

console.log(task24(userFriends));

console.log(
  "Task - 25: Створи масив унікальних імен усіх друзів, відсортований по алфавіту."
);
const task25 = (users) => {
  return [...new Set(users.flatMap((user) => user.friends))].toSorted((a, b) =>
    a.localeCompare(b)
  );
};
console.log(task25(userFriends));
