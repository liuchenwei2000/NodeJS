/**
 * Created by liuchenwei on 2015/11/29.
 */
// path模块包含一套用于处理和转换文件路径的工具集，用于处理目录的对象，提高用户开发效率。
var path = require('path');

// normalize函数将不符合规范的路径经过格式化转换为标准路径,解析路径中的.与..外，还能去掉多余的斜杠。
console.log(path.normalize('/path///normalize/hi/..'));

// join函数将传入的多个路径拼接为标准路径并将其格式化，返回规范后的路径，避免手工拼接路径字符串的繁琐。
console.log(path.join('///you', '/are', '//beautiful'));

// dirname函数用来返回路径中的目录名。
console.log(path.dirname('/foo/strong/cool/nice'));

// basename函数可返回路径中的最后一部分，并且可以根据条件对其进行处理。
console.log(path.basename('/foo/strong/basename/index.html'));
// path.basename('路径字符串', '[ext]') 删除[ext]后缀字符串
console.log(path.basename('/foo/strong/basename/index.html','.html'));

// extname函数返回路径中文件的扩展名(以最后一个'.'开始,返回'.'以及'.'以后的所有字符串,如没有'.',则返回空字符串)。
console.log(path.extname('index.html'));