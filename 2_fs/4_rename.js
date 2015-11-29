/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var filePath = 'readme.txt';

// rename()重命名或移动文件
fs.rename(filePath, 'readme_new.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log('rename() Complete.');
});