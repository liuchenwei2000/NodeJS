/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var filePath = 'readme.txt';

// appendFile()可以将新的内容追加到已有的文件中，如果文件不存在，则会创建一个新的文件。
fs.appendFile(filePath, 'append data', function (err) {
    if (err) {
        throw err;
    }
    console.log('appendFile() Complete.');
});
