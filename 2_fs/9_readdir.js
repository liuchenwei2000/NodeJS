/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var dirPath = '.';

// readdir()可以读取到指定目录下所有的文件。
// 回调函数参数 files 是一个存储目录中所包含文件名称的数组，数组中不包括 '.' 和 '..'
fs.readdir(dirPath, function (err, files) {
    if (err) {
        throw err;
    }
    console.log('readdir Complete. total files : ' + files.length);
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});