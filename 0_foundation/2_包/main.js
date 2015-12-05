
// 当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径。
// 加载 mymath 包，感觉上整个目录被当作单个模块使用，更有整体感。
var mymath = require('./mymath');

console.log(mymath.add(1,2));
console.log(mymath.sub(1,2));
console.log(mymath.mul(1,2));
console.log(mymath.div(1,2));
