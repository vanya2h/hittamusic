export default action => new Promise((resolve, reject) => {
  try {
    if (typeof action !== 'object') {
      return reject("В функцию promiseAction необходимо передавать функцию Dispatch");
    } else {
      return resolve();
    }
  } catch(err) {
    return reject(err);
  }
});