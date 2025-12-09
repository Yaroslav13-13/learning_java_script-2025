// const promise = new Promise((resolve, reject) => {
//   const shouldResolve = Math.random();

//   setTimeout(() => {
//     if (shouldResolve > 0.5) {
//       resolve("OK");
//     } else {
//       reject("Oooops");
//     }
//   }, 1000);
// });

// promise
//   .then((res) => {
//     console.log("Resolved:", res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// =============================================================================

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });
// promise
//   .then((res) => {
//     return res * 2;
//   })
//   .then((data) => {
//     return data * 5;
//   })
//   .then((value) => {
//     return value - 37;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });
// =============================================================================
// function makeOrder(str) {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Order for ${str} is accepted`);
//       } else {
//         reject(`Order for ${str} is rejected`);
//       }
//     }, 1000);
//   });
// }

// makeOrder("Pizza")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// =============================================================================

function makeOrder(str) {
  const random = Math.random();

  if (random > 0.5) {
    resolve(`Order for ${str} is accepted`);
  } else {
    reject(`Order for ${str} is rejected`);
  }
}
