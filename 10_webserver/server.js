/**
 * WebServer 模块
 *
 * Created by liuchenwei on 2015/12/5.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        /**
         * 异步回调来实现非阻塞地处理POST请求的数据。
         *
         * 为了使整个过程非阻塞，Node.js会将POST数据拆分成很多小的数据块，
         * 然后通过触发特定的事件，将这些小数据块传递给回调函数。
         * 这里的特定的事件有data事件（表示新的小数据块到达了）以及end事件（表示所有的数据都已经接收完毕）。
         *
         * 通过在request对象上注册监听器（listener）来实现当这些事件触发的时候，回调哪些函数。
         */
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
        /**
         * 获取所有来自请求的数据，然后将这些数据给应用层处理，应该是HTTP服务器要做的事情。
         * 因此，建议直接在服务器中处理POST数据，然后将最终的数据传递给请求路由和请求处理器做进一步的处理。
         */
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;