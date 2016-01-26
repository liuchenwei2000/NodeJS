## package.json 文件说明 ##

**package.json** 文件定义了项目的各种元信息，包括项目的名称、作者等等。最重要的是定义了项目的依赖，这样项目在部署时，就不必将 **node\_modules** 目录上传到服务器。而服务器在项目部署完成后，只需要执行 `npm install` 命令，则 **npm** 会自动读取 **package.json** 中的依赖并安装在项目的 **node\_modules** 目录下，然后程序就可以在服务器上运行。

`npm init` 命令可以互动式地生成一份简单的 **package.json** 文件。

`npm install express --save` 命令可以安装指定的包，`--save` 参数表明在安装依赖的同时，自动把这些依赖写入 **package.json**。

各字段的详细说明：


    {
		// name 包名，需要在 NPM 上是唯一的，不能带有空格。
    	"name": "test",
		// version 版本号。通常为 x.y.z。该版本号十分重要，常常用于一些版本控制的场合。
    	"version": "0.1.0",
		// description 包简介。通常会显示在一些列表中。 
    	"description": "A testing package",
		// author 作者及邮箱。
    	"author": {
    		"name": "someone",
    		"email": "someone@mail.com"
  		},
		// licenses 包所使用的许可证。
		"license": "MIT",
		// keywords 关键字数组。用于 NPM 中的分类搜索。 
		"keywords": ["test", "test2"],
		// repositories 托管源代码的地址数组。 
		"repository": {
    		"type": "git",
    		"url": "git+https://github.com/someone/test.git"
 		},
		// 运行时依赖模块。这个属性十分重要， **NPM** 会通过这个属性自动加载依赖的包。
    	"dependencies": {
        	"express": "1.x.x",
			"debug": "~2.2.0"
    	},
		// devDependencies 开发环境依赖模块。
    	"devDependencies": {
        	// grunt 插件
    		"grunt": "^0.4.5",
			// ~ 前缀表示，安装大于指定的这个版本，并且匹配到 x.y.z 中 z 最新的版本。
    		// ^ 前缀在 ^0.y.z 时的表现和 ~0.y.z 是一样的，然而 ^1.y.z 的时候，就会匹配到 y 和 z 都是最新的版本。
    		"grunt-bower-task": "^0.4.0",
    	},
		// main 包的入口文件，当其他应用通过 `require` 引用本模块时，main 属性指定的 JS 文件会被调用。
    	"main": "index",
    	// scripts NPM 在对包进行安装或者卸载的时候需要进行一些编译或者清除的工作，scripts字段的对象指明了在进行操作时运行哪个文件，或者执行哪个命令。
    	"scripts": {
    		"install": "install.js",
    		"uninstall": "uninstall.js",
    		"build": "build.js",
    		"doc": "make-doc.js",
    		"test": "test.js"
    	}
    }