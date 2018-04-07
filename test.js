const fs = require('fs');
const promisify = require('./index').promisify;
const runPromise = require('./index').runPromise;

let readDirPm = promisify(fs.readdir);
let readFilePm = promisify(fs.readFile);

readDirPm(__dirname).then((data) => {
  runPromise(function* () {
    for(let i = 0; i < data.length; i++) {
      yield readFilePm(__dirname + '/' + data[i]);
    }
  }, (data) => {
    console.log(data);
  }, (err) => {
    console.log(err);
  })
}).catch((err) => {
  console.log(err);
})