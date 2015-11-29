/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var dirPath = 'subdir';

// rmdir()可以删除空目录。
fs.rmdir(dirPath, function (err) {
    if (err) {
        throw err;
    }
    console.log('rmdir Complete.');
});