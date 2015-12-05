/**
 * Created by liuchenwei on 2015/11/29.
 */
var fs = require('fs');

// JS语言自身只有字符串数据类型，没有二进制数据类型，
// 因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。
// Buffer将JS的数据处理能力从字符串扩展到了任意二进制数据。

// Buffer与字符串能够互相转化
var bin = new Buffer('hello', 'utf-8'); 
var str = bin.toString('utf-8');

// Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节。
console.log(bin.length);
console.log(bin[0]);

// 如果想要拷贝一份Buffer，得首先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去。
// 这个类似于申请一块新的内存，并把已有内存中的数据复制过去。
var dup = new Buffer(bin.length);
bin.copy(dup);

console.log(bin);
console.log(dup);
