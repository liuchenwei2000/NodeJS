/**
 * exports对象是当前模块的导出对象，用于导出模块公有方法和属性。
 * 别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。
 */

exports.sayHello = function(){

    return "Hello";
};