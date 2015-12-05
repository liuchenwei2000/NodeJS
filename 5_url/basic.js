/**
 * Created by liuchenwei on 2015/11/29.
 */
// 处理HTTP请求时url模块使用率超高，因为该模块允许解析URL、生成URL，以及拼接URL。
var url = require('url');

// parse 函数的作用是解析url，返回一个json格式的数组。
console.log(url.parse('http://www.baidu.com'));
// parse函数的第二个参数是布尔类型，当参数为true时，会将查询条件也解析成json格式的对象。
console.log(url.parse('http://www.baidu.com?page=1',true));

// format函数的作用与parse相反，它的参数是一个JSON对象，返回一个组装好的url地址
var json = url.parse('http://www.baidu.com?page=1', true);
console.log(url.format(json));

// resolve函数的参数是两个路径，第一个路径是开始的路径或者说当前路径，第二个则是想要去往的路径，返回值是一个组装好的url。
console.log(url.resolve('http://example.com/', '/one'));
console.log(url.resolve('http://example.com/one', '/two'));
console.log(url.resolve('http://example.com/a/b/c/d', '/e'));