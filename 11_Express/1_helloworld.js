
var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

/**
 * app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，
 * 在这里调用其中的 get 方法，为 `/` 路径指定一个 handler 函数。
 * 这个 handler 函数会接收两个对象，分别是请求的 request 和 response。
 * request 中包含了浏览器传来的各种信息，比如 query、body、headers 之类。
 * response 对象用来向浏览器输出信息，这里调用了它的 send 方法，向浏览器输出一个字符串。
 */

app.get('/', function (request, response) {
    response.send('Hello World');
});

app.get("*", function(request, response) {
    response.send("404 error!");
})

// 监听本地的 8888 端口。第二个函数是个回调函数，会在 listen 动作成功后执行。
// 访问方式：http://localhost:8888
app.listen(8888, function () {
  console.log('app is listening at port 8888');
});