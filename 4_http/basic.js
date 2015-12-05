/**
 * Created by liuchenwei on 2015/12/5.
 */

// NodeJS本来的用途是编写高性能Web服务器。
// 'http'模块提供两种使用方式：
// 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。
// 作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。
var http = require('http');

// 首先需要使用.createServer方法创建一个服务器，然后调用.listen方法监听端口。
// 之后，每当来了一个客户端请求，创建服务器时传入的回调函数就被调用一次。
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);