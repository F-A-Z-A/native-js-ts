const doAfter = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.ceil(Math.random() * 10)
      if (num > 3) {
        resolve(num)
      } else {
        reject(num)
      }
    }, (num * 1000));
  });
};