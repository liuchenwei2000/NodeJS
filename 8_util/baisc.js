/**
 * Created by liuchenwei on 2015/11/29.
 */
// util模块是Node.js的核心模块，提供常用函数的集合，用于弥补核心JavaScript的一些功能过于精简的不足。
// 并且还提供了一系列常用工具，用来对数据的输出和验证。
var util = require('util');

// inspect函数将任意对象转换为字符串。
console.log(util.inspect({foo: 'bar', cool: ['xux', 'yys']}));

// format函数根据第一个参数，返回一个格式化字符串，第一个参数是一个可包含零个或多个占位符的字符串。
// 每一个占位符被替换为与其对应的转换后的值，支持的占位符有：
// "%s(字符串)"、"%d(数字<整型和浮点型>)"、"%j(JSON)"、"%(单独一个百分号则不作为一个参数)"。
console.log(util.format('%s:%s', 'foo'));
console.log(util.format('%s:%s', 'foo', 'bar'));
console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));

// isArray函数可以判断对象是否为数组类型。
console.log(util.isArray([]));
console.log(util.isArray(''));

// isDate函数可以判断对象是否为日期类型
console.log(util.isDate(new Date()));
console.log(util.isDate(''));