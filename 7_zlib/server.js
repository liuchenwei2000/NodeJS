/**
 * Created by liuchenwei on 2015/12/5.
 */
// zlib模块提供了数据压缩和解压的功能。当处理HTTP请求和响应时，可能需要用到这个模块。
var http = require('http');
var zlib = require('zlib');

// 使用zlib模块压缩HTTP响应体数据
http.createServer(function (request, response) {
    var data = 'Hello World.Hello World.Hello World.Hello World.Hello World.';

    // 判断了客户端是否支持gzip，并在支持的情况下使用zlib模块返回gzip之后的响应体数据。
    if ((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1) {
        zlib.gzip(data, function (err, data) {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });
            response.end(data);
        });
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end(data);
    }
}).listen(80);