const Promise = require('promise');

/**
 * promise化异步回调函数
 * @param {需要promise化的异步函数: 回调必须满足(err, ...args)的形式} fn 
 */
const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {

      // console.log(this);
      fn.call(this, ...args, (err, ...cbArgs) => {
        if(err) {
          reject(err);
        }

        resolve(...cbArgs);
      })
    })
  }
};

module.exports = promisify;