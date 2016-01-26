
// node.js中回调函数格式是约定俗成的，它有两个参数，第一个参数为err，第二个参数为data
// err是错误信息，data则是返回的数据
setTimeout(function(error,data){
    console.log('Hello World');
}, 1000);
