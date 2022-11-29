//当需要发送多个请求给不同端口时,新建一个setupProxy文件来进行代理
const proxy = require("http-proxy-middleware");
//暴露函数(旧版暴露一个对象)
module.exports = function (app) {
  app.use(
    proxy("/api1", {//遇到api1前缀的请求，就会触发该代理配置
      target: "http://localhost:5000",//请求转发给谁
      changeOrigin: true,//控制服务器收到的请求头中Host的值
      pathRewrite: { "^/api1": "" },//重写请求路径(将路径带给服务器时必须将api替换，因为服务器依据的是原始的路径返回数据，加了api将无法返回数据)
    }),
    proxy("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    }),
  );
};
