/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var filePath = 'readme_new.txt';

// unlink()可以删除文件。
fs.unlink(filePath, function (err, data) {
    if (err) {
        throw err;
    }
    console.log('delete ' + filePath +' Complete.');
});