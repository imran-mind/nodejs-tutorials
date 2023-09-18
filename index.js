
//exports.propertyName
//module.exports= {};
const Log = require('./log');
const {title,add,sub} = require('./math');
Log.info('This is info');
Log.warning('This is warning');
Log.error('This is error');

console.log(title);
console.log(add(4,3));
console.log(sub(4,3));
// console.log(module);

