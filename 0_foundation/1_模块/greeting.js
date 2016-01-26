/**
 * exports 对象是当前模块的导出对象，用于导出模块公有方法和属性。
 * 别的模块通过 require 函数使用当前模块时得到的就是当前模块的 exports 对象。
 */

exports.sayHello = function(){

    return "Hello";
};