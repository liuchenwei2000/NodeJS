'use strict';

var m1 = require('./lib/module1.js');
var m2 = require('./lib/module2.js');

console.log(m1.add(1,2));
console.log(m2());
console.log(m2.name);