function task(x) {
  return new Promise((resolve, reject) => {
    if (x >= 18) {
      reject('no');
    } else if (x == 0) {
      resolve('alexstrive');
    } else if (x < 18) {
      resolve('yes');
    }
  });
}
