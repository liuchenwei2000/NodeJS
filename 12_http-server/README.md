## http-server ##

http-server 是一个简单的零配置命令行 HTTP 服务器，基于 nodeJS。


* 安装

	`npm install http-server -g`

* 使用 

	在站点目录下开启命令行输入 `http-server`

* 参数

	* -p 端口号（默认 8080）
	* -d 显示目录列表（默认 'True'）
	* -e or --ext 如果没有提供默认的文件扩展名（默认 'html'）
	* -s or --silent 禁止日志信息输出
	* -o 在开始服务后打开浏览
	
	如：`http-server -p 8888 -o`