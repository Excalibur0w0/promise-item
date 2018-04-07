
/**
 * 运行promise迭代器
 * @param {传递进来的迭代器} gen 
 * @param {promise的resolve的处理方式} resolve 
 * @param {reject情况的处理方式} reject 
 */
const runPromise = (gen, resolve, reject) => {
  let g = gen();

  // next
  let next = () => {
    let result = g.next();  // 此时result是promise

    if (!result.done) {
      result.value.then(resolve).catch(reject); 

      next(); 
    }
  };

  next();
};

module.exports = runPromise;