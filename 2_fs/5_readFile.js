/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var filePath = 'readme_new.txt';

// readFile()可以读取文件,回调函数里面的data,就是读取的文件内容。
fs.readFile(filePath, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});