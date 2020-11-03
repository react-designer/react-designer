import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config, { output } from './webpack.config'

const port = 3600

new WebpackDevServer(webpack(config as any), {
  publicPath: output.publicPath,
  hot: true,
}).listen(port, '127.0.0.1', function (err) {
  if (err) {
    console.log(err)
  }
  console.log(`Listening at localhost:${port}`)
})
