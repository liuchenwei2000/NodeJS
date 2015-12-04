var express = require('express');
var app = express();

// app.get(path,function(request, response));
// path为请求的路径，第二个参数为处理请求的回调函数，
// 其两个参数分别是request和response，代表请求信息和响应信息。
app.get('/', function (request, response) {  
   response.send('Hello World!');
});
 
app.get('/about', function(request, response) {
   response.send('Welcome to the about page!');
});

app.get("*", function(request, response) {
    response.send("404 error!");
});
 
app.listen(80);

console.log('app server started...');