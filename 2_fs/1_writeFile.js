/**
 * Created by liuchenwei on 2015/11/29.
 */
// node.js中提供一个名为fs的模块来支持I/O操作
// fs模块不但提供异步的文件操作，还提供相应的同步操作方法，
// 需要指出的是，nodejs采用异步I/O正是为了避免I/O时的等待时间，提高CPU的利用率，
// 所以在选择使用异步或同步方法的时候需要权衡取舍。
var fs = require('fs');

var data = 'hello world\n';
var filePath = 'readme.txt';

// writeFile()可以异步的将数据写入一个文件, 如果文件已经存在则会被替换。
fs.writeFile(filePath, data, function (err) {
    if (err) {
        throw err;
    }
    console.log('writeFile() Complete.');
});