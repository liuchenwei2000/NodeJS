/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

// 小文件拷贝
// 使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。
function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

// 大文件拷贝
// 一次性把所有文件内容都读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，内存会爆仓。
// 对于大文件，只能读一点写一点，直到完成拷贝。
function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
