// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 3000)
// })
//
// console.log(pr)

// ----------------------------------------------------------------------------

// const axios = {
//   get() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("resolved"), 3000)
//       // setTimeout(() => reject("rejected"), 3000)
//     })
//   }
// }
//
// axios
//   .get()
//   .then(data => console.log(data))
//   .then(() => console.log(1))
//   .then(() => console.log(2))
//   .catch(data => console.error(data))

// ----------------------------------------------------------------------------

// const a = {
//   sum(a, b) {
//     console.log(a + b)
//     return this
//   }
// }
//
// a.sum(2, 3)
//   .sum(3, 6)
//   .sum(7, 3)

// ----------------------------------------------------------------------------

// const a = {
//   result: 0,
//   sum(a) {
//     this.result += a;
//     return this;
//   },
//   minus(a) {
//     this.result -= a;
//     return this;
//   },
//   mult(a) {
//     this.result *= a;
//     return this;
//   }
// }
//
// a.sum(2)
//   .sum(3)
//   .minus(1)
//   .mult(2)
//
// console.log(a.result);

// ----------------------------------------------------------------------------

// const axios = {
//   get() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve({
//         a: 23,
//         b: 4,
//         message: "resolved"
//       }), 1000)
//       // setTimeout(() => reject("rejected"), 3000)
//     })
//   }
// }
//
// const promise = axios.get()
//
// promise
//   .then((message) => {
//     console.log(message)
//     return message.message
//   })
//   .then((message) => {
//     console.log(message)
//   })

// ----------------------------------------------------------------------------

let fetch = (url) => {
  return new Promise((resolve, reject) => {
    switch (url) {
      case 'google': {
        setTimeout(() => {
          resolve({data: 'from google'});
        }, 2000)
        break;
      }
      case 'microsoft': {
        setTimeout(() => {
          resolve({data: 'from microsoft'})
        }, 3000)
        break;
      }
      case 'it-kamasutra': {
        setTimeout(() => {
          resolve({data: 'from it-kamasutra'})
        }, 500)
        break;
      }
      default:
        reject(new Error(`Failed to fetch ${url}`));
    }
  })
}

// fetch('microsoft').then(data => console.log(data));
// fetch('google').then(data => console.log(data));
// fetch('it-kamasutra').then(data => console.log(data));

// fetch('microsoft').then(data => {
//   console.log(data)
//   fetch('google').then(data => {
//     console.log(data)
//     fetch('it-kamasutra').then(data => console.log(data));
//   });
// })

// fetch('microsoft')
//   .then(data => {
//     console.log(data)
//     return fetch('google')
//   })
//   .then(data => {
//     console.log(data)
//     return fetch('it-kamasutra')
//   })
//   .then(data => {
//     console.log(data)
//   })

// async function request() {
//   let data = await fetch('microsoft')
//   console.log(data)
//   data = await fetch('google')
//   console.log(data)
//   data = await fetch('it-kamasutra')
//   console.log(data)
// }
// request()

// const request2 = () => {
//   let p1 = fetch('microsoft')
//   let p2 = fetch('google')
//   let p3 = fetch('it-kamasutra')
//   Promise.all([p1, p2, p3]).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
//   })
// }
// request2()

const request2 = async () => {
  const promises = [
    fetch('microsoft'),
    fetch('google'),
    fetch('it-kamasutra')
  ];
  const data = await Promise.all(promises);
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}
request2()

// ----------------------------------------------------------------------------