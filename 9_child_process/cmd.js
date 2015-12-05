/**
 * Created by liuchenwei on 2015/11/29.
 */
// 使用NodeJS调用终端命令来简化文件拷贝
var child_process = require('child_process');
var util = require('util');

function copy(source, target, callback) {
    child_process.exec(util.format('copy %s %s', source, target), callback);
}

copy('basic.js', 'basic_copy.js', function (err) {
    if (err) {
        throw err;
    }
    console.log('copy complete');
});