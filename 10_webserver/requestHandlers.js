/**
 * 请求处理模块
 *
 * Created by liuchenwei on 2015/12/5.
 */
var querystring = require("querystring");

function index(response) {
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/greeting" method="post">'+
        '输入:<input type="text" name="content" />'+
        '<input type="submit" value="Submit" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

// 响应 POST 请求
function greeting(response, postData) {
    // 把POST数据中感兴趣的部分取出来
    var content = querystring.parse(postData).content;
    console.log("Request handler 'greeting' was called.");
    response.writeHead(200, {"Content-Type": "text/plain;charset:utf-8"});
    response.write("Hello, you said: " + content);
    response.end();
}

// 返回 JSON 格式数据
function data(response) {
    console.log("Request handler 'data' was called.");
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(require("./data.json")));
    response.end();
}

function about(response) {
    console.log("Request handler 'about' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("NodeJS V4.2.2");
    response.end();
}

exports.index = index;
exports.greeting = greeting;
exports.data = data;
exports.about = about;