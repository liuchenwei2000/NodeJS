/**
 * Created by liuchenwei on 2015/11/29.
 */
// node.js是基于单线程模型架构，这样的设计可以带来高效的CPU利用率，但是无法却利用多个核心的CPU，
// 为了解决这个问题，node.js提供了child_process模块，可以创建和控制子进程，通过多进程来实现对多核CPU的利用。
// child_process模块提供了四个创建子进程的函数，分别是spawn，exec，execFile和fork。
// 该模块提供的API中最核心的是.spawn，其余API都是针对特定使用场景对它的进一步封装，算是一种语法糖。

var child_process = require('child_process');

var command = 'notepad';

// spawn函数用给定的命令发布一个子进程，只能运行指定的程序。
// 通过执行命令得到返回结果，就可以拿到标准输出流数据。
var child = child_process.spawn(command);
child.stdout.on('data', function (data) {
    console.log(data);
});

// exec函数也是一个创建子进程的函数，与spawn函数不同它可以直接接受一个回调函数作为参数。
// 回调函数有三个参数，分别是err, stdout , stderr。
child_process.exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});

// execFile函数与exec函数类似，但execFile函数更显得精简，因为它可以直接执行所指定的文件。
child_process.execFile(file, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});

// fork函数可直接运行Node.js模块，所以我们可以直接通过指定模块路径而直接进行操作。
// 该方法是spawn()的特殊情景，用于派生Node进程。
// 除了普通ChildProcess实例所具有的所有方法，所返回的对象还具有内建的通讯通道。
var modulePath = 'amodule';
child_process.fork(modulePath);