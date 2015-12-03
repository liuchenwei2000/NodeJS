## package.json 文件说明 ##

**package.json** 文件定义了项目的各种元信息，包括项目的名称、git repo 的地址、作者等等。最重要的是定义了项目的依赖，这样项目在部署时，就不必将 **node\_modules**    目录上传到服务器。而服务器在项目部署完成后，只需要执行 `npm install`，则 **npm** 会自动读取 **package.json** 中的依赖并安装在项目的 **node\_modules** 目录下，然后程序就可以在服务器上运行。

`npm init` 命令可以互动式地生成一份简单的 **package.json** 文件。

`npm install express --save` 命令可以安装指定的包，`--save` 参数表明在安装依赖的同时，自动把这些依赖写入 **package.json**。