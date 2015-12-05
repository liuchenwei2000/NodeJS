/**
 * Created by liuchenwei on 2015/12/5.
 */
// 模拟客户端使用zlib模块解压HTTP响应体数据
var http = require('http');
var zlib = require('zlib');

var options = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
        'Accept-Encoding': 'gzip, deflate'
    }
};

http.request(options, function (response) {
    var body = [];

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        // 判断服务端响应是否使用gzip压缩，并在压缩的情况下使用zlib模块解压响应体数据。
        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });
}).end();