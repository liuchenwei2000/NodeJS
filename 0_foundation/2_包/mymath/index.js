/**
 * JS模块的基本单位是单个JS文件，但复杂些的模块往往由多个子模块组成。
 * 为了便于管理和使用，我们可以把由多个子模块组成的大模块称做包，并把所有子模块放在同一个目录里。
 *
 * 在组成一个包的所有子模块中，需要有一个入口模块（本模块即是入口模块），入口模块的导出对象被作为包的导出对象。
 * 如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个package.json文件，并在其中指定入口模块的路径。
 * NodeJS会根据包目录下的package.json找到入口模块所在位置，默认是 index.js。
 */
var add = require('./add');
var sub = require('./sub');

module.exports = {
	add:add,
	sub:sub,
	mul:require('./mul'),
	div:require('./div')
};