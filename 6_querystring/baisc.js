/**
 * Created by liuchenwei on 2015/11/29.
 */
// Query String模块用于实现URL参数字符串与参数对象之间的互相转换，
// 提供了"stringify"、"parse"等一些实用函数来针对字符串进行处理，
// 通过序列化和反序列化，来更好的应对实际开发中的条件需求。
var querystring = require('querystring');

// stringify函数的作用就是序列化对象，也就是说将对象类型转换成一个字符串类型（默认的分割符（"&"）和分配符（"="））。
console.log(querystring.stringify({foo: 'bar', cool: ['xux', 'yys']}));
// querystring.stringify("对象"，"分隔符"，"分配符")，指定分隔符和分配符
console.log(querystring.stringify({foo: 'bar', cool: ['xux', 'yys']}, '*', '$'));

// parse函数的作用就是反序列化字符串（默认是由"="、"&"拼接而成），转换得到一个对象类型。
console.log(querystring.parse('foo=bar&cool=xux&cool=yys'));
// querystring.parse("字符串"，"分隔符"，"分配符")，指定分隔符和分配符
console.log(querystring.parse('foo@bar$cool@xux$cool@yys', '$', '@'));