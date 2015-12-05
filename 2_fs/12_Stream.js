/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');
var pathname = 'readme.txt';
var dst = 'readme_copy.txt';

// 当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，就需要用到数据流。
// NodeJS中通过各种Stream来提供对数据流的操作。

// 创建一个只读数据流
var rs = fs.createReadStream(pathname);
// 创建一个只写数据流
var ws = fs.createWriteStream(dst);

// Stream 基于事件机制工作，data事件会源源不断地被触发。
rs.on('data', function (chunk) {
    ws.write(chunk);
});

rs.on('end', function () {
     ws.end();
});
