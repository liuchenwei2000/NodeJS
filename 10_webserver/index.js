/**
 * 主模块
 *
 * Created by liuchenwei on 2015/12/5.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// 配置路由映射信息
var handle = {};
handle["/"] = requestHandlers.index;
handle["/greeting"] = requestHandlers.greeting;
handle["/data"] = requestHandlers.data;
handle["/about"] = requestHandlers.about;

server.start(router.route, handle);