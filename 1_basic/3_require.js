
// node平台上提供了大量的模块，封装了各自不同的功能，可以使用require函数获取模块
var os = require('os');

console.log(os.platform());// 查看操作系统平台
console.log(os.release());// 查看操作系统版本
console.log(os.type());// 查看操作系统名称
console.log(os.arch());// 查看操作系统CPU架构
