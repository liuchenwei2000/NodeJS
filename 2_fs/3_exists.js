/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

var filePath = 'readme.txt';

// exists()检查指定文件是否存在，其回调函数只有一个参数，类型为布尔型，通过它来表示文件是否存在。
fs.exists(filePath, function (exists) {
    console.log(exists ? filePath + "存在" : filePath + "不存在!");
});
