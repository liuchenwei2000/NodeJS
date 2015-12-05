/**
 * Created by liuchenwei on 2015/12/5.
 */

var http = require('http');

// 客户端模式下，为了发起一个客户端HTTP请求，需要指定目标服务器的位置并发送请求头和请求体。
// 由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。
http.get('http://www.baidu.com/', function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});