
/**
 * process是一个全局内置对象，可以在代码中的任何位置访问此对象，这个对象代表node.js代码宿主的操作系统进程对象。
 * 使用process对象可以截获进程的异常、退出等事件，也可以获取进程的当前目录、环境变量、内存占用等信息，
 * 还可以执行进程退出、工作目录切换等操作。
 */

// cwd()查看应用程序当前目录
var cwd = process.cwd();
console.log(cwd);

// stdout是标准输出流
process.stdout.write("Hello World.\n");

// stderr是标准错误流
process.stderr.write("错误!");

// stdin是进程的输入流,可以通过注册事件的方式来获取输入的内容
process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('Echo: ' + chunk);
    }
});

setTimeout(function(){
    // 杀死进程，退出程序
    process.exit();
}, 5000);
