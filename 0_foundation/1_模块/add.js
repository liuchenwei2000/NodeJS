/**
 * module 对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。
 * 例如模块导出对象（即 exports ）默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。
 *
 * exports 对象用于导出当前模块的方法或者变量，并且它是唯一导出的出口。
 * 在模块中，还存在着一个 module 对象，它代表模块自身，而exports 是 module 的属性。
 */

module.exports = function(a,b){

    return a+b;
};