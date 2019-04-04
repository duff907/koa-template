const Koa = require('koa');
const webpack = require('webpack');
const config = require('./webpack.js');
const koaStatic = require('koa-static');

const app = new Koa();
const compiler = webpack(config);

const isDev = (process.env.NODE_ENV === 'development');

if (isDev) {
  app.use(require("koa-webpack-dev-middleware")(compiler, {
    logLevel: 'warn', publicPath: config.output.publicPath
  }));
  
  app.use(require("koa-webpack-hot-middleware")(compiler, {
    log: console.log, heartbeat: 10 * 1000
  }));
}


app.use(koaStatic(isDev ? './public' : './build'));

app.listen(3030, function () {
  console.log('Example app listening on port 3030!\n');
});