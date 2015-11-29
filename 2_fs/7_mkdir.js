/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var dirPath = 'subdir';

// mkdir()可以创建目录。
fs.mkdir(dirPath, function (err) {
    if (err) {
        throw err;
    }
    console.log('mkdir Complete.');
});