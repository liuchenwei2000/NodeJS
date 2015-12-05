/**
 * Created by liuchenwei on 2015/12/5.
 */

var http = require('http');

http.createServer(function (request, response) {
    var body = [];

    // HTTP请求本质上是一个数据流（Stream），由请求头（headers）和请求体（body）组成。
    console.log(request.method);
    console.log(request.headers);

    // 以流（Stream）的方式处理请求
    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(80);