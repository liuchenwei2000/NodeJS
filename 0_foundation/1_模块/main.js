/**
 * NodeJS 遵循 CMD(Common Module Definition) 模块定义规范。
 * 该规范明确了模块的基本书写格式和基本交互规则。
 *
 * 在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。
 * 在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。
 */

/**
 * require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。
 * 模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。
 * 另外，模块名中的.js扩展名可以省略。
 */

// 加载内置模块 fs，如果传递给require函数的是NodeJS内置模块名称，则不做路径解析，直接返回内置模块的导出对象。
var fs = require('fs');

// 加载自定义模块 greeting
var greeting = require('./greeting');
console.log(greeting.sayHello());

/**
 * 模块初始化
 *
 * 一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。
 * 之后，缓存起来的导出对象被重复利用。
 *
 * 通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。
 * 本模块（main.js）就是一个主模块。
 */
var add = require('./add');
console.log(add(1,2));

// 可以使用以下方式加载和使用一个JSON文件。
var book = require('./book.json');
console.log(book.id);
console.log(book.title);
console.log(book.edition);