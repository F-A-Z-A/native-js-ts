// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   })
// }
//
// async function run() {
//   let a = 0;
//   await wait(1000);
//   console.log(a += 1);
//   await wait(1000);
//   console.log(a += 1);
//   await wait(1000);
//   console.log(a += 1);
// }
//
// run()

//------------------------------------------------------------------------

// const repo = {
//   save(data) {
//     try {
//       localStorage.setItem('some-key', JSON.stringify(data));
//     } catch (error) {
//       return false;
//     }
//     return true;
//   },
//   saveAsync(data) {
//     const promise = new Promise((resolve, rejected) => {
//       try {
//         localStorage.setItem('some-key', JSON.stringify(data));
//         resolve();
//       } catch (error) {
//         rejected(error);
//       }
//     })
//     return promise;
//   }
// };
//
// const result = repo.save({name: 'IT-KAMASUTRA'});
// console.log('SAVED');
//
// const run = async () => {
//   await repo.saveAsync({name: 'IT-KAMASUTRA'});
//   console.log('SAVED');
// };

//------------------------------------------------------------------------

// const repo = {
//   save(data) {
//     try {
//       LocalStorage.setItem('some-key', JSON.stringify(data))
//     } catch (error) {
//       return false;
//     }
//     return true;
//   }
// }
//
// const result = repo.save({name: 'IT-KAMASUTRA'})
// if (result) {
//   console.log('SAVED')
// } else {
//   console.warn('NOT SAVED')
// }

//------------------------------------------------------------------------

// const getNumber = () => {
//   const promise = new Promise((resolve, reject) => {
//     reject('Some error');
//     setTimeout(() => {
//       resolve(Math.random());
//     }, 2000);
//   })
//   return promise;
// }
//
// getNumber().then(n => console.log(n));
// getNumber().then(n => console.log(n));
//
// const a = {} // new Object
// const b = [] // new Array
// function f() {} // new Function
// const promise = new Promise()

//------------------------------------------------------------------------

// const getNumber = () => Math.floor(Math.random() * 100);
//
// const n1 = getNumber();
// const n2 = getNumber();
//
// console.log(n1);
// console.log(n2);

//------------------------------------------------------------------------

// async function run() {
//   let user = await findUserInDB(1)
//   console.log(user.name)
//   let friend1 = await findUserInDB(user.friend)
//   console.log(friend1.name)
//   let friend2 = await findUserInDB(friend1.friend)
//   console.log(friend2.name)
// }
// run()

//------------------------------------------------------------------------

// .then(user => {
//   console.log(user)
//   return user
// })
// .then(user => findUserInDB(user.friend))
// .then(friend1 => {
//   console.log(friend1)
//   return friend1
// })
// .then(friend1 => findUserInDB(friend1.friend))
// .then(friend2 => console.log(friend2.name))

//------------------------------------------------------------------------

// const lastPromise = findUserInDB(1)
//   .then(user => {
//     console.log(user)
//     return user
//   })
//   .then(user => findUserInDB(user.friend))
//   .then(friend1 => {
//     console.log(friend1)
//     return friend1
//   })
//   .then(friend1 => findUserInDB(friend1.friend))
//   .then(friend2 => console.log(friend2.name))

//------------------------------------------------------------------------

// const lastPromise = findUserInDB(1)
//   .then(user => {
//     console.log(user)
//     findUserInDB(user.friend)
//       .than(user => {
//         console.log(user)
//         findUserInDB(user.friend)
//           .than(user => {
//             console.log(user)
//           })
//       })
//   })

//------------------------------------------------------------------------

// const lastPromise = findUserInDB(1)
//   .then(user => user.name)
//   .then(name => {
//     console.log(name)
//     return 100
//   })
//   .then(number => {
//     console.log(number)
//     return number + 1
//   })
//   .then(number => {
//     console.log(number)
//     return number + 1
//   })
//   .then(number => {
//
//     console.log(number)
//     return number + 1
//   })

//------------------------------------------------------------------------

// const getVacanciesCountFromGoogle = () => {
//   return axios.get('https://google.com')
//     .then(res => res.data)
//     .then(data => data.vacancies)
// }
// getVacanciesCountFromGoogle()
//   .then(count => console.log(count))

//------------------------------------------------------------------------

// axios.get("http://google.com")
//   .then(res => res.data)
//   .then(data => console.log(data))
//
// const makeGoogleRequest = () => {
//   const pr = axios.get('https://google.com')
//   const pr2 = pr.then(res => res.data)
//   return pr2;
// }
//
// const makeGoogleRequest = () => {
//   return axios.get('https://google.com')
//     .then(res.data)
// }

//------------------------------------------------------------------------

// const promise2 = findUserDB(100)
//
// const promise2_2 = promise2.then((user) => {
// })
//
// findUserDB(100)
//   .then(user => user.name)
//   .then(name => console.log(name))

//------------------------------------------------------------------------

// const resolvedPromise = Promise.resolve(100)
// resolvedPromise
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//
// const rejectedPromise = Promise.reject({message: 'Some error'})
// rejectedPromise
//   .then(data => console.log(data))
//   .catch(error => console.log(error))