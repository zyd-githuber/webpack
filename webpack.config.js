//common.js规范
let path = require("path");
let HtmlP = require("")
module.exports = {
    //入口
    entry:'./src/index.js',
    //出口
    output:{
        filename:'build.js',
        //这个路径是绝对路径
        path:path.resolve('./build')
    },
    //开发服务器
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,//服务器压缩
        open:true,//自动打开浏览器
        // hot:true
    },
    //模块配置
    module:{

    },
    //插件的配置
    plugins:[],
    //可以更改模式
    mode:'development',
    //配置解析
    resolve:{

    }
}
