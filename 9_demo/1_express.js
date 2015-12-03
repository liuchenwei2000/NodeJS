// 引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

/**
 * app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里调用其中的 get 方法，为 `/` 路径指定一个 handler 函数。
 * 这个 handler 函数会接收 req 和 res 两个对象，分别是请求的 request 和 response。
 * request 中包含了浏览器传来的各种信息，比如 query、body、headers 之类的，都可以通过 req 对象访问到。
 * response 对象用来向浏览器输出信息，这里调用了它的 send 方法，向浏览器输出一个字符串。
 */

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 监听本地的 3000 端口。第二个函数是个回调函数，会在 listen 动作成功后执行。
// 访问方式：http://localhost:3000
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});