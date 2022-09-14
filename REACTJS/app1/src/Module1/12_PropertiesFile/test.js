// npm install properties-reader

var propertiesReader = require('properties-reader');
var properties = propertiesReader('./test.properties');

var strProp = properties.get('test.string.property');
var intProp = properties.get('test.int.property'); // reads as integer
// var intProp_raw = properties.getRaw('test.int.property'); // reads as string

console.log(strProp);
console.log(intProp);
// console.log(intProp+5)//10
// console.log(intProp_raw+5) //55
// console.log(parseInt(intProp_raw)+5)//10